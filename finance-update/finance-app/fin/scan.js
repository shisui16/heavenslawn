/* scan.js — file → text, all inside the browser. Digital PDFs use their text layer (exact);
   photos and scanned PDFs go through Tesseract OCR. Libraries load lazily, only when you scan. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else (root.Fin = root.Fin || {}).Scan = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  const LIBS = {
    pdf: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
    pdfWorker: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
    tess: 'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js',
  };
  const loaded = {};
  function loadScript(src) {
    if (!loaded[src]) loaded[src] = new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = src; s.crossOrigin = 'anonymous'; s.onload = res;
      s.onerror = () => { delete loaded[src]; rej(new Error('Could not load the scanner library (offline or blocked?).')); };
      document.head.append(s);
    });
    return loaded[src];
  }

  const isPdf = (f) => f.type === 'application/pdf' || /\.pdf$/i.test(f.name);

  async function toCanvas(file, maxDim) {
    const bmp = await createImageBitmap(file); // honours EXIF rotation in current browsers
    const k = Math.min(1, maxDim / Math.max(bmp.width, bmp.height));
    const c = document.createElement('canvas');
    c.width = Math.round(bmp.width * k); c.height = Math.round(bmp.height * k);
    c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height);
    if (bmp.close) bmp.close();
    return c;
  }
  const canvasToBlob = (c, type = 'image/jpeg', q = 0.82) => new Promise((res) => c.toBlob(res, type, q));

  let worker = null, workerLangs = null, onProg = null;
  async function ocr(canvas, langs, onProgress) {
    await loadScript(LIBS.tess);
    if (!worker || workerLangs !== langs) {
      if (worker) await worker.terminate();
      worker = await Tesseract.createWorker(langs, 1, { logger: (m) => { if (onProg && m.status === 'recognizing text') onProg(m.progress); } });
      workerLangs = langs;
    }
    onProg = onProgress;
    const { data } = await worker.recognize(canvas);
    return data.text || '';
  }

  function itemsToLines(items) {
    const rows = [];
    for (const it of items) {
      if (!it.str || !it.str.trim()) continue;
      const y = it.transform[5], x = it.transform[4];
      let row = rows.find((r) => Math.abs(r.y - y) < 3);
      if (!row) rows.push((row = { y, parts: [] }));
      row.parts.push({ x, s: it.str });
    }
    return rows.sort((a, b) => b.y - a.y).map((r) => r.parts.sort((a, b) => a.x - b.x).map((p) => p.s).join(' ').replace(/\s{2,}/g, ' ')).join('\n');
  }

  async function pdfText(file, langs, onProgress) {
    await loadScript(LIBS.pdf);
    pdfjsLib.GlobalWorkerOptions.workerSrc = LIBS.pdfWorker;
    const doc = await pdfjsLib.getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise;
    const pages = Math.min(doc.numPages, 6);
    let text = '';
    for (let p = 1; p <= pages; p++) text += itemsToLines((await (await doc.getPage(p)).getTextContent()).items) + '\n';
    if (text.replace(/\s/g, '').length >= 40) return { text, method: 'pdf-text' };
    for (let p = 1; p <= Math.min(pages, 3); p++) { // scanned PDF → render + OCR
      const page = await doc.getPage(p), vp = page.getViewport({ scale: 2 });
      const c = document.createElement('canvas'); c.width = vp.width; c.height = vp.height;
      await page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise;
      text += (await ocr(c, langs, onProgress)) + '\n';
    }
    return { text, method: 'pdf-ocr' };
  }

  /** → { text, method } */
  async function extract(file, { langs = 'eng', onProgress = () => {} } = {}) {
    if (isPdf(file)) return pdfText(file, langs, onProgress);
    return { text: await ocr(await toCanvas(file, 2400), langs, onProgress), method: 'ocr' };
  }

  /** Shrink phone photos before they go into the repo. PDFs are stored as-is. */
  async function prepareForUpload(file) {
    if (isPdf(file)) return { bytes: new Uint8Array(await file.arrayBuffer()), ext: 'pdf', type: 'application/pdf' };
    const blob = await canvasToBlob(await toCanvas(file, 1800));
    return { bytes: new Uint8Array(await blob.arrayBuffer()), ext: 'jpg', type: 'image/jpeg' };
  }

  return { extract, prepareForUpload, isPdf };
});
