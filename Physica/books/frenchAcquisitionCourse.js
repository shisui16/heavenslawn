/**
 * Book: French Acquisition System — Structural Foundations & DELF A1 Accelerator
 *
 * Designed for: Adult learner with English (native), Hindi & Marathi (fluent),
 *               strong analytical/physics background, pattern-recognition learner.
 * Goal: DELF A1 readiness via compression, transfer learning, and linguistic pattern abstraction.
 *
 * Course 1 — "French Structural Foundations"   (Chapters 1–6):  Pre-A1 → Early A1
 * Course 2 — "DELF A1 Accelerator"             (Chapters 7–12): Full DELF A1 readiness
 *
 * Format: standard Physica book — { title, chapters: [ { title, content: [...] } ] }
 * Content types used: text | mcq | msq
 */

// ═══════════════════════════════════════════════════════════════════════════
// COURSE 1 — FRENCH STRUCTURAL FOUNDATIONS
// ═══════════════════════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────────────────────
// Chapter 1: Course Philosophy, Cognitive Architecture & Roadmap
// ───────────────────────────────────────────────────────────────────────────

const ch1 = {
  title: "Course Philosophy & Linguistic Architecture",
  content: [

    {
      type: "text",
      data: `
        <h2>Why This Course Is Different</h2>
        <p>
          Most language courses treat acquisition as <strong>memorisation of content</strong>.
          This course treats it as <strong>installation of a cognitive operating system</strong>.
          You will learn <em>why French works the way it does</em>, not just what to say.
        </p>
        <p>
          French is not a foreign language to you — it is a <strong>cousin of English</strong>.
          Approximately <strong>60% of English vocabulary is of French or Latin origin</strong>
          (Norman conquest, 1066 CE). Your passive French lexicon is already enormous.
          The goal of Course 1 is to make this latent knowledge <em>active and decodable</em>.
        </p>
        <h2>The Three-Layer Acquisition Model</h2>
        <p>
          This course is built on three compressing layers:
        </p>
        <ol>
          <li>
            <strong>Layer 1 — Phonological Decoder:</strong> Map French sound-to-spelling rules
            once, decode any written French word aloud. (~6 hours to install.)
          </li>
          <li>
            <strong>Layer 2 — Structural Grammar Engine:</strong> Learn 8 core sentence templates.
            All French sentences are instances of these templates. (~10 hours to internalise.)
          </li>
          <li>
            <strong>Layer 3 — Lexical Bootstrapper:</strong> Use cognate rules and Latin-root
            transformations to generate and recognise vocabulary in bulk. (~Ongoing.)
          </li>
        </ol>
        <h2>Transfer Learning: Your Existing Languages</h2>
        <p>
          Your multilingual profile is a <strong>structural asset</strong>:
        </p>
        <ul>
          <li><strong>From English:</strong> Cognates, SVO word order, auxiliary verbs, articles.</li>
          <li><strong>From Hindi/Marathi:</strong> Grammatical gender (French has 2, like Hindi),
              verb conjugation paradigms, formal/informal register distinction (vous/tu ≈ aap/tum).</li>
          <li><strong>From Physics thinking:</strong> Treat grammar rules as field equations —
              learn the rule once, apply it across all instances.</li>
        </ul>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Cognitive Principles Used in This Course</h2>
        <ul>
          <li>
            <strong>Spaced Repetition (SRS):</strong> Items revisited at exponentially growing
            intervals. Every lesson flags SRS items explicitly. Use Anki or similar.
          </li>
          <li>
            <strong>Comprehensible Input (CI):</strong> Krashen's i+1 principle — expose yourself
            to French that is 90–95% understandable. Recommended sources are embedded in each lesson.
          </li>
          <li>
            <strong>Sentence Mining:</strong> Learn vocabulary inside full sentences, not as
            isolated word lists. Context encodes meaning and grammar simultaneously.
          </li>
          <li>
            <strong>Active Recall:</strong> Every concept must be retrieved, not just re-read.
            All MCQ/MSQ questions are retrieval practice events.
          </li>
          <li>
            <strong>Inductive Grammar:</strong> You see patterns first, rules are stated second.
            This matches how native acquisition works.
          </li>
          <li>
            <strong>Interleaving:</strong> Grammar, vocabulary, pronunciation, and listening
            tasks are mixed within each lesson — not siloed.
          </li>
        </ul>
        <h2>Full Course Roadmap</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Chapter</th><th>Course</th><th>Focus</th><th>Est. Hours</th></tr>
          <tr><td>1</td><td>Foundations</td><td>Philosophy, Roadmap, Cognitive Architecture</td><td>1</td></tr>
          <tr><td>2</td><td>Foundations</td><td>Phonological Decoding System</td><td>4</td></tr>
          <tr><td>3</td><td>Foundations</td><td>Cognate Engine & Latin-Root Transformations</td><td>3</td></tr>
          <tr><td>4</td><td>Foundations</td><td>Core Grammar Engine — Sentence Templates</td><td>5</td></tr>
          <tr><td>5</td><td>Foundations</td><td>High-Frequency Verbs & Present Tense System</td><td>4</td></tr>
          <tr><td>6</td><td>Foundations</td><td>Survival Communication & Early A1</td><td>3</td></tr>
          <tr><td>7</td><td>DELF A1</td><td>Listening Comprehension (DELF Part A)</td><td>4</td></tr>
          <tr><td>8</td><td>DELF A1</td><td>Reading Comprehension (DELF Part B)</td><td>4</td></tr>
          <tr><td>9</td><td>DELF A1</td><td>Writing Production (DELF Part C)</td><td>4</td></tr>
          <tr><td>10</td><td>DELF A1</td><td>Speaking Production (DELF Part D)</td><td>4</td></tr>
          <tr><td>11</td><td>DELF A1</td><td>Vocabulary Expansion & Functional Grammar</td><td>5</td></tr>
          <tr><td>12</td><td>DELF A1</td><td>Full Mock DELF + Expansion to Spanish/Italian</td><td>4</td></tr>
        </table>
        <p><strong>Total estimated study hours: 45 hours</strong> (fast-track: 30 hours with 3–4 hr/day intensity).</p>
      `,
    },

    {
      type: "mcq",
      question: "Why is the English–French cognate overlap strategically important for this course?",
      options: [
        "Because French spelling is identical to English spelling",
        "Because ~60% of English vocabulary derives from French/Latin, giving the learner a massive passive lexicon to activate",
        "Because English and French share the same pronunciation system",
        "Because English grammar is identical to French grammar",
      ],
      correct: [1],
      explanation:
        "The Norman Conquest (1066) introduced enormous French vocabulary into English. Words like 'nation', 'liberty', 'communication', 'professor', 'university' are direct cognates. The learner's task is activation and phonological decoding, not memorisation from zero.",
    },

    {
      type: "msq",
      question: "Which of your existing language skills directly transfer to French acquisition? (Select all that apply)",
      options: [
        "Hindi grammatical gender system (masculine/feminine noun classes)",
        "Marathi verb conjugation paradigms (verbs change form by person/number)",
        "English SVO (Subject–Verb–Object) sentence order",
        "Hindi formal/informal register distinction (aap vs. tum)",
      ],
      correct: [0, 1, 2, 3],
      explanation:
        "All four transfer directly. French has M/F gender like Hindi. French verbs conjugate by person/number like Marathi. French default order is SVO like English. French vous/tu maps precisely to Hindi aap/tum in register function.",
    },

    {
      type: "mcq",
      question: "In Krashen's Comprehensible Input theory (i+1), what does the '+1' represent?",
      options: [
        "One extra grammar rule added per lesson",
        "Input that is slightly above the learner's current level — understandable from context but containing new elements",
        "One new vocabulary word per sentence",
        "The first lesson being always one hour long",
      ],
      correct: [1],
      explanation:
        "i+1 means your input should be 90–95% comprehensible, with the remaining 5–10% acquirable from context. This optimises acquisition without cognitive overload. Fully incomprehensible input (i+10) produces no acquisition.",
    },

  ],
};


// ───────────────────────────────────────────────────────────────────────────
// Chapter 2: The French Phonological Decoding System
// ───────────────────────────────────────────────────────────────────────────

const ch2 = {
  title: "Phonological Decoding — The Sound System",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Install the complete French phonological decoding system in one session.
          After this chapter, you will be able to <strong>read any French word aloud
          with approximately correct pronunciation</strong>, even before knowing its meaning.
          Estimated study time: <strong>4 hours</strong>.
        </p>
        <h2>The Core Insight: French Spelling is NOT Random</h2>
        <p>
          French looks opaque because many letters are silent and many letter combinations
          represent single sounds. But the rules are <strong>systematic and finite</strong>.
          Unlike English, French has <em>fewer</em> irregular sound-spelling correspondences.
          Learn the 15 core rules below and you decode ~90% of French text.
        </p>
        <h2>Rule 1: Final Consonants Are Usually Silent</h2>
        <p>
          This is the most important rule. The last consonant of a French word is
          <strong>almost always silent</strong> unless it is C, R, F, or L
          (mnemonic: <strong>CaReFuL</strong>).
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Word</th><th>Spelling</th><th>Pronunciation Guide</th><th>Meaning</th></tr>
          <tr><td>grand</td><td>-d silent</td><td>grɑ̃ (nasal a)</td><td>big/tall</td></tr>
          <tr><td>Paris</td><td>-s silent</td><td>pa-REE</td><td>Paris</td></tr>
          <tr><td>vous</td><td>-s silent</td><td>voo</td><td>you (formal)</td></tr>
          <tr><td>est</td><td>-st silent</td><td>ay</td><td>is</td></tr>
          <tr><td>avec</td><td>-c pronounced</td><td>a-VEK</td><td>with (CaReFuL: C)</td></tr>
          <tr><td>mer</td><td>-r pronounced</td><td>MAIR</td><td>sea (CaReFuL: R)</td></tr>
        </table>
        <p><strong>Pronunciation note for Indian speakers:</strong> The French R is a uvular fricative
        (back of throat, like a light gargle). Do NOT use the Hindi/Marathi retroflex ड़.
        Approximate it first with a soft 'h' sound at the back of the throat.</p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Rule 2: Nasal Vowels — The Most Distinctive French Feature</h2>
        <p>
          When a vowel is followed by <strong>m or n</strong> (and the m/n is itself not
          followed by another vowel), the vowel becomes nasal — air flows through the nose.
          There is no equivalent in English. Hindi has nasal vowels (e.g., हाँ hãː), which
          is your intuitive reference.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Combination</th><th>Sound (approx.)</th><th>Example</th><th>Meaning</th></tr>
          <tr><td>an / am / en / em</td><td>ɑ̃ — like 'on' in 'bond' but nasal, no final n</td><td>enfant (child), chambre (room)</td><td></td></tr>
          <tr><td>in / im / ain / ein / yn</td><td>ɛ̃ — like 'an' in English 'tan' but nasal</td><td>vin (wine), fin (end)</td><td></td></tr>
          <tr><td>on / om</td><td>ɔ̃ — like 'own' but nasal</td><td>bon (good), nom (name)</td><td></td></tr>
          <tr><td>un / um</td><td>œ̃ — rare, merging with ɛ̃ in modern French</td><td>un (a/one)</td><td></td></tr>
        </table>
        <p>
          <strong>Key test:</strong> Is the n/m followed by another vowel? If yes, no nasalisation.
          Compare: <em>bon</em> (bɔ̃, nasal) vs. <em>bonne</em> (bɔn, not nasal — double n + e).
        </p>
        <h2>Rule 3: Liaison — When Final Consonants Wake Up</h2>
        <p>
          A normally-silent final consonant is pronounced when the <em>next word begins with a vowel
          or silent h</em>. This is called <strong>liaison</strong>.
        </p>
        <ul>
          <li><em>les amis</em> → "lay-za-MEE" (the -s of les links to amis)</li>
          <li><em>vous avez</em> → "voo-za-VAY" (the -s of vous links)</li>
          <li><em>un enfant</em> → "uh-nɑ̃-FÃ" (the -n of un links)</li>
        </ul>
        <p>Liaison is <strong>mandatory</strong> after articles and pronouns, <strong>forbidden</strong>
        after singular nouns (un étudiant — no liaison after étudiant).</p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Rule 4: The French Vowel Grid</h2>
        <p>
          French has approximately 15 distinct vowel sounds vs. English's 12–14.
          Key differences for Indian-English speakers:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Spelling</th><th>Sound</th><th>Example</th><th>English approximate</th><th>Hindi cue</th></tr>
          <tr><td>é / er / ez</td><td>e (closed)</td><td>été, parler, chez</td><td>'ay' in 'day' (no glide)</td><td>ए (but shorter)</td></tr>
          <tr><td>è / ê / ai / ei</td><td>ɛ (open)</td><td>mère, fête, mais</td><td>'e' in 'bed'</td><td>ऐ</td></tr>
          <tr><td>a</td><td>a (front)</td><td>chat, table</td><td>'a' in 'cat'</td><td>अ (front)</td></tr>
          <tr><td>o (open syllable)</td><td>o (closed)</td><td>mot, nos</td><td>'o' in 'go' (no glide)</td><td>ओ (pure, no glide)</td></tr>
          <tr><td>ou</td><td>u</td><td>vous, tout</td><td>'oo' in 'too'</td><td>ऊ</td></tr>
          <tr><td>u</td><td>y (unique!)</td><td>tu, sur</td><td>No English equivalent</td><td>Say ऊ but shape lips for ई</td></tr>
          <tr><td>eu / oeu</td><td>ø or œ</td><td>feu, coeur</td><td>No English equivalent</td><td>Say ए but with rounded lips</td></tr>
          <tr><td>e (final / unstressed)</td><td>ə (schwa)</td><td>le, de, que</td><td>'uh'</td><td>अ (reduced)</td></tr>
        </table>
        <p>
          <strong>The French U:</strong> This is the one sound that requires physical practice.
          Procedure: say "ooh" → keep lips in that rounded position → try to say "ee".
          The resulting sound is French U (IPA: y). Practice with: <em>tu, sur, du, vu, lu</em>.
        </p>
        <h2>Rule 5: Key Consonant Correspondences</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Spelling</th><th>Sound</th><th>Example</th><th>Note</th></tr>
          <tr><td>c + a/o/u</td><td>k</td><td>café, comme</td><td>Hard c</td></tr>
          <tr><td>c + e/i</td><td>s</td><td>ceci, city</td><td>Soft c</td></tr>
          <tr><td>ç</td><td>s</td><td>français</td><td>Cedilla forces soft c</td></tr>
          <tr><td>g + a/o/u</td><td>g</td><td>garçon, goût</td><td>Hard g</td></tr>
          <tr><td>g + e/i</td><td>ʒ</td><td>général, gilet</td><td>Like 'zh' in 'measure'</td></tr>
          <tr><td>gn</td><td>ɲ</td><td>cognac, montagne</td><td>Like Hindi ञ / 'ny' in 'canyon'</td></tr>
          <tr><td>ch</td><td>ʃ</td><td>chat, chef</td><td>'sh' sound, NEVER 'ch' as in 'chair'</td></tr>
          <tr><td>j</td><td>ʒ</td><td>je, jour</td><td>'zh' — same as g+e/i</td></tr>
          <tr><td>qu</td><td>k</td><td>qui, que</td><td>The U is always silent</td></tr>
          <tr><td>h</td><td>silent</td><td>homme, heure</td><td>Always silent in native French words</td></tr>
          <tr><td>th</td><td>t</td><td>thé, théorie</td><td>Never the English 'th' sound</td></tr>
        </table>
      `,
    },

    {
      type: "mcq",
      question: "The word <em>français</em> ends in '-ais'. How is it pronounced?",
      options: [
        "fran-KAYS (rhymes with 'gaze')",
        "fran-SAY (the -s is the ç sound, -ai = ɛ, final -s silent)",
        "fran-CHAY (treating 'ç' like English 'ch')",
        "fran-KWISE (like 'franchise')",
      ],
      correct: [1],
      explanation:
        "Breakdown: fr-ɑ̃ (nasal, 'an' before 'ç') + s (ç = always s) + ɛ (ai = open e sound) + silent final s. Stress on last syllable: frɑ̃-SÉ. The cedilla (ç) is always the 's' sound, and final consonants are silent (the s in -ais).",
    },

    {
      type: "mcq",
      question: "In <em>bon</em> (good) vs. <em>bonne</em> (good, feminine), which is nasal?",
      options: [
        "Both are nasal",
        "Neither is nasal",
        "<em>bon</em> is nasal (ɔ̃); <em>bonne</em> is not nasal (ɔn) — double-n + e breaks nasalisation",
        "<em>bonne</em> is nasal; <em>bon</em> is not",
      ],
      correct: [2],
      explanation:
        "Nasalisation rule: vowel + n/m is nasal UNLESS the n/m is followed by another vowel or a second n/m. In 'bonne', the double-n followed by -e means the o is an ordinary ɔ, and the n is fully pronounced. In 'bon', the n ends the word → vowel nasalises, n is silent.",
    },

    {
      type: "msq",
      question: "Which of the following words have a SILENT final consonant? (Apply the CaReFuL rule)",
      options: [
        "avec (with) — ends in C",
        "grand (big) — ends in D",
        "mer (sea) — ends in R",
        "Paris — ends in S",
      ],
      correct: [1, 3],
      explanation:
        "CaReFuL: C, R, F, L are usually pronounced. D and S are not in CaReFuL, so they are silent. 'avec' → C is pronounced (a-VEK). 'mer' → R is pronounced (MAIR). 'grand' → D is silent (grɑ̃). 'Paris' → S is silent (pa-REE).",
    },

    {
      type: "mcq",
      question: "How do you produce the French vowel U (as in <em>tu</em>, 'you')?",
      options: [
        "Say 'oo' as in 'moon' — it's the same",
        "Say 'ew' as in 'few' — it's the same",
        "Round your lips as if to say 'oo', then try to say 'ee' — the tension produces the French U (IPA: y)",
        "Say 'uh' as in 'but'",
      ],
      correct: [2],
      explanation:
        "French U (y) is a front rounded vowel — it does not exist in English, Hindi, or Marathi. The physical procedure: lips rounded (as for ू/oo), tongue position for ई/ee. The result is a sound between 'oo' and 'ee' that neither resolves to. It requires muscular practice, not conceptual understanding.",
    },

    {
      type: "text",
      data: `
        <h2>Listening Exercise Protocol</h2>
        <p>For this chapter, complete the following listening tasks in order:</p>
        <ol>
          <li>
            <strong>Phoneme discrimination:</strong> Search "French nasal vowels minimal pairs"
            on Forvo.com. Listen to: <em>bon/bonne, fin/fine, an/âne, vin/vine</em>.
            Repeat each 5 times, recording yourself.
          </li>
          <li>
            <strong>Liaison in context:</strong> Listen to the phrase <em>"les amis sont ici"</em>
            (the friends are here) on Forvo. Identify the liaison. (Answer: les_amis → "lay-za-MEE".)
          </li>
          <li>
            <strong>CI Recommendation:</strong> Watch "Français avec Pierre — Episode 1 (Alphabet)"
            on YouTube. His articulation is clear and slow — ideal i+1 input for phonology.
          </li>
        </ol>
        <h2>Speaking Exercise Protocol</h2>
        <p>Read the following aloud, applying all rules learned. Record yourself.</p>
        <ul>
          <li>Je m'appelle Marie. (I am called Marie.)</li>
          <li>Il est grand et intelligent. (He is tall and intelligent.)</li>
          <li>Les enfants jouent avec les amis. (The children play with the friends.)</li>
          <li>Vous parlez français? (Do you speak French?)</li>
          <li>Un bon vin français. (A good French wine.)</li>
        </ul>
        <h2>SRS Items for This Chapter</h2>
        <p>Add the following as Anki cards (Front → Back):</p>
        <ul>
          <li>CaReFuL rule → Which final consonants are usually pronounced in French?</li>
          <li>French U production → Round lips for oo, tongue for ee → IPA y</li>
          <li>Nasalisation test → Is n/m followed by another vowel? If yes, no nasal.</li>
          <li>"ch" in French → Always ʃ (sh), never tʃ (English ch)</li>
          <li>Liaison → Silent final consonant + word starting with vowel = consonant pronounced</li>
        </ul>
      `,
    },

  ],
};


// ───────────────────────────────────────────────────────────────────────────
// Chapter 3: The Cognate Engine & Latin-Root Transformations
// ───────────────────────────────────────────────────────────────────────────

const ch3 = {
  title: "Cognate Engine & Latin-Root Transformations",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Install systematic rules to <strong>generate and recognise thousands of French words</strong>
          from English knowledge alone. Estimated study time: <strong>3 hours</strong>.
          DELF relevance: Reading comprehension (Part B) — vocabulary inference is directly tested.
        </p>
        <h2>The Cognate Landscape</h2>
        <p>
          There are three classes of English-French cognates:
        </p>
        <ol>
          <li>
            <strong>Transparent cognates (Type A):</strong> Nearly identical. Recognise instantly.
            Examples: <em>communication, nation, information, profession, profession,
            animal, centre, justice, culture, natural</em>. These require only phonological
            decoding (Chapter 2) to produce correctly.
          </li>
          <li>
            <strong>Systematic cognates (Type B):</strong> Differ by a predictable morphological rule.
            Learn the rule, unlock hundreds of words.
          </li>
          <li>
            <strong>False friends (Faux amis):</strong> Look similar but differ in meaning.
            Must be learned explicitly. (Small set — see below.)
          </li>
        </ol>
        <h2>Type B: The 8 Systematic Transformation Rules</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>#</th><th>English Pattern</th><th>French Pattern</th><th>Examples</th></tr>
          <tr><td>1</td><td>-tion</td><td>-tion (same! pronounced differently)</td><td>nation→nation, action→action</td></tr>
          <tr><td>2</td><td>-ty</td><td>-té</td><td>liberty→liberté, city→cité, quality→qualité</td></tr>
          <tr><td>3</td><td>-ous</td><td>-eux/-euse</td><td>curious→curieux, serious→sérieux</td></tr>
          <tr><td>4</td><td>-ary / -ory</td><td>-aire / -oire</td><td>necessary→nécessaire, history→histoire</td></tr>
          <tr><td>5</td><td>-ment (Eng. adverb)</td><td>-ment (same)</td><td>rapidly→rapidement, generally→généralement</td></tr>
          <tr><td>6</td><td>-ic / -ical</td><td>-ique</td><td>music→musique, logical→logique, topic→topique</td></tr>
          <tr><td>7</td><td>-ism / -ist</td><td>-isme / -iste</td><td>tourism→tourisme, artist→artiste</td></tr>
          <tr><td>8</td><td>-ent / -ant (adj.)</td><td>-ent / -ant (same, adj.)</td><td>different→différent, important→important</td></tr>
        </table>
        <p>
          <strong>Cognitive load note:</strong> Rules 1, 5, 7, 8 require zero transformation —
          only phonological decoding. Rules 2, 3, 4, 6 require a suffix swap. Practice each
          rule by generating 5 new examples not in the table above.
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Latin Root Transformations: The Deep Level</h2>
        <p>
          Both English and French inherit from Latin, but through different historical paths.
          English borrowed French/Latin vocabulary through writing; French evolved it through
          speech. This creates systematic sound shifts — learn these shifts to
          <strong>decode etymologically opaque words</strong>.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Latin Root</th><th>French</th><th>English cognate</th><th>Pattern</th></tr>
          <tr><td>aqua (water)</td><td>eau</td><td>aquatic, aquifer</td><td>Latin qu → French eau</td></tr>
          <tr><td>caballus (horse)</td><td>cheval</td><td>cavalry, cavalier</td><td>Latin ca- → French che-</td></tr>
          <tr><td>factum (done)</td><td>fait</td><td>fact, factor</td><td>Latin -ct- → French -it-</td></tr>
          <tr><td>noctis (night)</td><td>nuit</td><td>nocturnal</td><td>Latin -ct- → French -it-</td></tr>
          <tr><td>capitis (head)</td><td>chef/chief</td><td>captain, capital</td><td>Latin ca- → French che-</td></tr>
          <tr><td>cantare (to sing)</td><td>chanter</td><td>chant, cantata</td><td>Latin ca- → French cha-</td></tr>
        </table>
        <p>
          <strong>The -ct- → -it- rule</strong> is particularly productive: <em>lait</em> (milk)
          from Latin <em>lactis</em>; <em>nuit</em> (night) from <em>noctis</em>;
          <em>fait</em> (fact/done) from <em>factum</em>; <em>droit</em> (right/law) from
          <em>directum</em>. Recognising this rule lets you connect French vocabulary
          to English Latin-derived words you already know.
        </p>
        <h2>False Friends (Faux Amis) — Critical List</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French word</th><th>Looks like</th><th>Actual meaning</th><th>Real French equivalent</th></tr>
          <tr><td>actuellement</td><td>actually</td><td>currently, at present</td><td>en fait / vraiment</td></tr>
          <tr><td>sensible</td><td>sensible</td><td>sensitive (emotionally)</td><td>raisonnable (for 'sensible')</td></tr>
          <tr><td>rester</td><td>to rest</td><td>to stay, to remain</td><td>se reposer (to rest)</td></tr>
          <tr><td>attendre</td><td>to attend</td><td>to wait</td><td>assister à (to attend)</td></tr>
          <tr><td>librairie</td><td>library</td><td>bookshop</td><td>bibliothèque (library)</td></tr>
          <tr><td>large</td><td>large</td><td>wide</td><td>grand (large/big)</td></tr>
          <tr><td>lecture</td><td>lecture</td><td>reading</td><td>conférence (lecture)</td></tr>
        </table>
      `,
    },

    {
      type: "mcq",
      question: "Apply Rule 2 (-ty → -té): What is the French word for 'university'?",
      options: [
        "universitaire",
        "université",
        "universique",
        "universement",
      ],
      correct: [1],
      explanation:
        "Rule 2: English -ty → French -té. University → université. Pronounced: ü-ni-vair-si-TAY (stress on final syllable, final -é = closed e sound). This rule works reliably: liberty→liberté, city→cité, society→société, reality→réalité.",
    },

    {
      type: "mcq",
      question: "The French word <em>attendre</em> looks like 'attend'. What does it actually mean?",
      options: [
        "To attend (a class or event)",
        "To attempt",
        "To wait",
        "To pay attention",
      ],
      correct: [2],
      explanation:
        "Classic faux ami. 'Attendre' = to wait. To attend (an event) in French = 'assister à'. Example: J'attends le bus. (I am waiting for the bus.) This error is so common it appears in DELF A1 reading comprehension questions.",
    },

    {
      type: "msq",
      question: "Which of the following English–French pairs follow Rule 6 (-ic/-ical → -ique)?",
      options: [
        "music → musique",
        "logic → logique",
        "liberty → liberté",
        "republic → république",
      ],
      correct: [0, 1, 3],
      explanation:
        "Rule 6: -ic → -ique. Music→musique ✓. Logic→logique ✓. Republic→république ✓ (the -ic ending becomes -ique). Liberty→liberté follows Rule 2 (-ty → -té), not Rule 6.",
    },

    {
      type: "mcq",
      question: "Based on the -ct- → -it- Latin transformation rule, which English word is etymologically related to French <em>lait</em> (milk)?",
      options: [
        "Late",
        "Lactose / lactic",
        "Light",
        "Lay",
      ],
      correct: [1],
      explanation:
        "French 'lait' comes from Latin 'lac/lactis' (milk). The -ct- cluster shifted to -it- in French phonological evolution: lactis → lait. English kept the Latin form in scientific vocabulary: lactose, lactic acid, lactate. The pattern: Latin -ct- → French -it-, while English scientific borrowings preserve -ct-.",
    },

    {
      type: "text",
      data: `
        <h2>Cognate Inference Task (Active Recall)</h2>
        <p>Without a dictionary, infer the meaning of these French words using cognate rules.
        Write your answer before revealing the explanation.</p>
        <ol>
          <li><em>nécessité</em> → ________________ (Rule 2)</li>
          <li><em>romantique</em> → ________________ (Rule 6)</li>
          <li><em>nationalisme</em> → ________________ (Rule 7)</li>
          <li><em>différemment</em> → ________________ (Rule 5)</li>
          <li><em>bibliothèque</em> → ________________ (Note: Greek root <em>biblion</em> = book, <em>theke</em> = storage)</li>
        </ol>
        <p>
          <strong>Answers:</strong> (1) necessity, (2) romantic, (3) nationalism,
          (4) differently, (5) library.
        </p>
        <p>
          <strong>SRS items for this chapter:</strong>
          Add the 7 faux amis as two-sided Anki cards. Front: French word.
          Back: Actual meaning + common mistake. Add the 8 transformation rules as
          a single card with a table.
        </p>
        <h2>Pattern Recognition Drill</h2>
        <p>
          For each suffix below, generate 3 French words you can now infer from English.
          Do NOT look them up first. Check after.
        </p>
        <ul>
          <li>-té (from English -ty): _______, _______, _______</li>
          <li>-ique (from English -ic): _______, _______, _______</li>
          <li>-isme (from English -ism): _______, _______, _______</li>
        </ul>
        <p>Suggested answers: -té: liberté, qualité, réalité | -ique: musique, logique, physique |
        -isme: tourisme, réalisme, modernisme</p>
      `,
    },

  ],
};


// ───────────────────────────────────────────────────────────────────────────
// Chapter 4: Core Grammar Engine — The 8 Sentence Templates
// ───────────────────────────────────────────────────────────────────────────

const ch4 = {
  title: "Core Grammar Engine — 8 Sentence Templates",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Install 8 sentence templates that generate the majority of French utterances at A1.
          Learn grammar inductively: patterns first, rules stated second.
          Estimated study time: <strong>5 hours</strong>.
        </p>
        <h2>Grammatical Gender: Installing the Intuition</h2>
        <p>
          French nouns are either <strong>masculine (M)</strong> or <strong>feminine (F)</strong>.
          Unlike Hindi, gender is not always predictable from semantics — but
          <strong>it is often predictable from the ending</strong>.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Ending</th><th>Gender (usually)</th><th>Examples</th><th>Exception rate</th></tr>
          <tr><td>-tion, -sion</td><td>F</td><td>nation, passion</td><td>Low</td></tr>
          <tr><td>-té, -tié</td><td>F</td><td>liberté, moitié</td><td>Very low</td></tr>
          <tr><td>-eur (abstract)</td><td>F</td><td>chaleur, valeur</td><td>Medium</td></tr>
          <tr><td>-age</td><td>M</td><td>village, fromage</td><td>Low (image, page = F)</td></tr>
          <tr><td>-ment</td><td>M</td><td>document, gouvernement</td><td>Low</td></tr>
          <tr><td>-eau</td><td>M</td><td>château, gâteau</td><td>Low (eau itself = F)</td></tr>
          <tr><td>-ique</td><td>F</td><td>musique, logique</td><td>Low</td></tr>
          <tr><td>-isme</td><td>M</td><td>tourisme, réalisme</td><td>Very low</td></tr>
        </table>
        <p>
          <strong>Strategic rule for SRS:</strong> Always learn nouns WITH their article.
          Never learn <em>table</em> — always learn <em>la table</em> (the table, F).
          The article is part of the word's phonological representation.
        </p>
        <h2>The Article System: 6 Forms</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Type</th><th>Masculine singular</th><th>Feminine singular</th><th>Plural (M+F)</th></tr>
          <tr><td>Definite ("the")</td><td>le</td><td>la</td><td>les</td></tr>
          <tr><td>Indefinite ("a/an")</td><td>un</td><td>une</td><td>des</td></tr>
          <tr><td>Partitive ("some")</td><td>du (de + le)</td><td>de la</td><td>des</td></tr>
        </table>
        <p>
          <strong>Elision:</strong> <em>le/la</em> contract to <em>l'</em> before vowel/silent h.
          L'hôtel (M), l'université (F). The contracted form does NOT indicate gender —
          you must know the gender separately.
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>The 8 Core Sentence Templates</h2>
        <p>
          Every French sentence at A1 level is an instance of one of these templates.
          Learn the template shape, then fill it.
        </p>
        <h3>Template 1: Basic Declaration (SVO)</h3>
        <p>
          <strong>[Subject pronoun] + [conjugated verb] + [object/complement]</strong><br>
          <em>Je parle français.</em> (I speak French.)<br>
          <em>Elle aime le café.</em> (She likes coffee.)<br>
          Identical to English SVO order. Zero transfer cost.
        </p>
        <h3>Template 2: Identification with ÊTRE (to be)</h3>
        <p>
          <strong>[Subject] + est/suis/es/êtes/sommes/sont + [noun/adjective]</strong><br>
          <em>Je suis étudiant.</em> (I am a student.)<br>
          <em>Paris est magnifique.</em> (Paris is magnificent.)<br>
          <strong>Note:</strong> No article after être + profession. Je suis professeur (NOT un professeur).
        </p>
        <h3>Template 3: Negation</h3>
        <p>
          <strong>[Subject] + ne + [verb] + pas + [rest]</strong><br>
          <em>Je ne parle pas anglais.</em> (I do not speak English.)<br>
          <em>Il n'est pas là.</em> (He is not there.) ← elision: ne becomes n' before vowel<br>
          In spoken French, <em>ne</em> is often dropped: "Je parle pas." — understand this, but
          use full form in DELF writing.
        </p>
        <h3>Template 4: Question — Intonation Method (spoken)</h3>
        <p>
          <strong>[Statement] + rising intonation (?) OR <em>Est-ce que</em> + [statement]?</strong><br>
          <em>Vous parlez français?</em> (You speak French?)<br>
          <em>Est-ce que vous parlez français?</em> (Do you speak French?) — est-ce que = "is it that"<br>
          For DELF writing, also use inversion: <em>Parlez-vous français?</em>
        </p>
        <h3>Template 5: Location</h3>
        <p>
          <strong>[Subject] + être + [preposition] + [place]</strong><br>
          <em>Je suis à Paris.</em> (I am in Paris.)<br>
          <em>Le livre est sur la table.</em> (The book is on the table.)<br>
          Key prepositions: à (at/in/to), dans (inside), sur (on), sous (under),
          devant (in front of), derrière (behind), entre (between).
        </p>
        <h3>Template 6: Desire / Ability / Obligation (Modal constructions)</h3>
        <p>
          <strong>[Subject] + [modal verb (conjugated)] + [infinitive]</strong><br>
          <em>Je veux partir.</em> (I want to leave.)<br>
          <em>Je peux venir.</em> (I can come.)<br>
          <em>Je dois travailler.</em> (I must work.)<br>
          Modals: vouloir (want), pouvoir (can/be able), devoir (must), savoir (know how to).
          Infinitive is ALWAYS unconjugated after a modal.
        </p>
        <h3>Template 7: Past — Passé Composé</h3>
        <p>
          <strong>[Subject] + avoir/être (conjugated) + [past participle]</strong><br>
          <em>J'ai mangé.</em> (I ate / I have eaten.) — avoir + past participle<br>
          <em>Je suis allé(e).</em> (I went.) — être + past participle (motion/state verbs)<br>
          Past participle of -er verbs: manger → mangé, parler → parlé.
          Learn the DR MRS VANDERTRAMP verbs (être group) as a set.
        </p>
        <h3>Template 8: Near Future</h3>
        <p>
          <strong>[Subject] + aller (conjugated) + [infinitive]</strong><br>
          <em>Je vais partir.</em> (I am going to leave.)<br>
          <em>Elle va manger.</em> (She is going to eat.)<br>
          This covers ~80% of future reference needs at A1. Learn aller conjugation (je vais,
          tu vas, il/elle va, nous allons, vous allez, ils/elles vont).
        </p>
      `,
    },

    {
      type: "mcq",
      question: "Which sentence correctly uses Template 3 (negation) for 'I do not understand'?",
      options: [
        "Je comprends ne pas.",
        "Je ne comprends pas.",
        "Je comprends pas ne.",
        "Ne je comprends pas.",
      ],
      correct: [1],
      explanation:
        "French negation structure: ne + [conjugated verb] + pas. The verb is always sandwiched: Je [ne] comprends [pas]. The ne comes before the verb, pas comes after. In spoken French ne is often dropped ('Je comprends pas') but DELF writing requires both ne and pas.",
    },

    {
      type: "mcq",
      question: "Identify the template: <em>Je vais étudier demain.</em> (I am going to study tomorrow.)",
      options: [
        "Template 6 (Modal + Infinitive)",
        "Template 8 (Near Future: aller + infinitive)",
        "Template 7 (Passé Composé)",
        "Template 1 (Basic SVO)",
      ],
      correct: [1],
      explanation:
        "'Je vais étudier' = Template 8. 'Aller' (conjugated as 'vais' for je) + infinitive 'étudier'. This is near future, meaning 'I am going to study'. Template 6 would use vouloir/pouvoir/devoir, not aller. Template 7 would require avoir/être + past participle.",
    },

    {
      type: "msq",
      question: "Which of the following correctly state the French article system? (Select all true statements)",
      options: [
        "The definite article 'le' is masculine singular, 'la' is feminine singular",
        "Before a vowel or silent h, 'le' and 'la' both contract to 'l'",
        "The indefinite plural article for both genders is 'des'",
        "'Du' is the definite article — it means 'the' for masculine singular",
      ],
      correct: [0, 1, 2],
      explanation:
        "A: correct — le (M.sg), la (F.sg). B: correct — l'hôtel, l'université. C: correct — des = indefinite plural for both genders. D: WRONG — du is the partitive article (de + le = 'some of'), meaning 'some'. Example: Je veux du café (I want some coffee). The definite masculine singular is 'le'.",
    },

    {
      type: "mcq",
      question: "Template 2 note: how do you say 'I am a doctor' in French?",
      options: [
        "Je suis un médecin.",
        "Je suis médecin.",
        "J'ai médecin.",
        "Je suis le médecin.",
      ],
      correct: [1],
      explanation:
        "After être + profession/nationality/religion, French omits the indefinite article. 'Je suis médecin' (NOT 'un médecin'). This is a systematic difference from English. Compare: Je suis professeur, Elle est étudiante, Il est français. Exception: with adjectives — 'C'est un bon médecin' (He is a good doctor) — c'est + adjective requires the article.",
    },

    {
      type: "text",
      data: `
        <h2>Writing Exercise</h2>
        <p>Construct one sentence using each template (8 sentences total). Use the vocabulary and
        verbs introduced so far. Example answers given after the dash.</p>
        <ol>
          <li>Template 1 (SVO): _________________ — <em>Il mange une pomme.</em></li>
          <li>Template 2 (être + noun): _________________ — <em>Je suis étudiant(e).</em></li>
          <li>Template 3 (negation): _________________ — <em>Je ne parle pas allemand.</em></li>
          <li>Template 4 (question): _________________ — <em>Est-ce que tu as un stylo?</em></li>
          <li>Template 5 (location): _________________ — <em>Le café est dans la rue.</em></li>
          <li>Template 6 (modal): _________________ — <em>Je veux apprendre le français.</em></li>
          <li>Template 7 (past): _________________ — <em>J'ai regardé un film.</em></li>
          <li>Template 8 (near future): _________________ — <em>Nous allons voyager en France.</em></li>
        </ol>
        <h2>Common Mistakes at This Stage</h2>
        <ul>
          <li><strong>Gender agreement:</strong> "Le université" (wrong — it's feminine: l'université).</li>
          <li><strong>Adjective position:</strong> Most French adjectives follow the noun.
              "Une voiture rouge" (a red car), NOT "une rouge voiture". BAGS adjectives come before:
              Beauty, Age, Goodness, Size — beau, vieux, bon, grand come BEFORE the noun.</li>
          <li><strong>Ne…pas split:</strong> Beginners forget 'pas' or place it before the verb.</li>
          <li><strong>Modal + infinitive:</strong> "Je veux mangER" not "Je veux mange".</li>
        </ul>
      `,
    },

  ],
};


// ───────────────────────────────────────────────────────────────────────────
// Chapter 5: High-Frequency Verbs & the Present Tense System
// ───────────────────────────────────────────────────────────────────────────

const ch5 = {
  title: "High-Frequency Verbs & the Present Tense System",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Achieve productive control of the present tense for the 30 highest-frequency French verbs.
          Understand the conjugation system structurally — not as 6 separate memorisations
          but as a <strong>stem + ending pattern</strong> with predictable irregularity clusters.
          Estimated study time: <strong>4 hours</strong>.
        </p>
        <h2>The Subject Pronoun System</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Person</th><th>French</th><th>English</th><th>Hindi parallel</th></tr>
          <tr><td>1st sg.</td><td>je / j'</td><td>I</td><td>मैं (main)</td></tr>
          <tr><td>2nd sg. informal</td><td>tu</td><td>you (intimate)</td><td>तुम (tum)</td></tr>
          <tr><td>3rd sg. M/F</td><td>il / elle</td><td>he / she</td><td>वो/वह (vo/vah)</td></tr>
          <tr><td>1st pl.</td><td>nous</td><td>we</td><td>हम (ham)</td></tr>
          <tr><td>2nd pl. / formal sg.</td><td>vous</td><td>you (formal/plural)</td><td>आप (aap)</td></tr>
          <tr><td>3rd pl.</td><td>ils / elles</td><td>they (M/mixed) / they (F)</td><td>वे (ve)</td></tr>
        </table>
        <p>
          <strong>On:</strong> French uses <em>on</em> (literally "one") to mean "we" in speech.
          "On mange" = "We eat" in conversational French. DELF speaking: use <em>on</em> naturally;
          DELF writing: use <em>nous</em>.
        </p>
        <h2>The -ER Verb Paradigm (Covers ~90% of French verbs)</h2>
        <p>
          Template: <strong>stem + ending</strong>. Remove -er from infinitive to get stem.
          <em>Parler</em> → stem: <em>parl-</em>
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Person</th><th>Ending</th><th>parler</th><th>manger</th><th>habiter</th></tr>
          <tr><td>je</td><td>-e</td><td>parle</td><td>mange</td><td>habite</td></tr>
          <tr><td>tu</td><td>-es</td><td>parles</td><td>manges</td><td>habites</td></tr>
          <tr><td>il/elle</td><td>-e</td><td>parle</td><td>mange</td><td>habite</td></tr>
          <tr><td>nous</td><td>-ons</td><td>parlons</td><td>mangeons*</td><td>habitons</td></tr>
          <tr><td>vous</td><td>-ez</td><td>parlez</td><td>mangez</td><td>habitez</td></tr>
          <tr><td>ils/elles</td><td>-ent</td><td>parlent</td><td>mangent</td><td>habitent</td></tr>
        </table>
        <p>
          *Manger → mangeons (add e before -ons to preserve the soft g sound). This is a
          <strong>spelling accommodation</strong>, not a phonological change.
        </p>
        <p>
          <strong>Pronunciation insight:</strong> je/tu/il/elle/ils/elles forms of -er verbs
          are all pronounced identically in speech — only the spelling differs.
          "Je parle, tu parles, il parle, ils parlent" → all sound like [parl].
          Only nous (-ons) and vous (-ez) sound different.
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>The Irregular Core: 8 Essential Verbs</h2>
        <p>
          These verbs are irregular because they are the <em>oldest and most used</em> —
          irregular forms are survivals of Latin patterns. Learn them as whole paradigms,
          not as sets of 6 separate forms.
        </p>
        <h3>ÊTRE (to be) — the master verb</h3>
        <p>je <strong>suis</strong>, tu <strong>es</strong>, il/elle <strong>est</strong>,
        nous <strong>sommes</strong>, vous <strong>êtes</strong>, ils/elles <strong>sont</strong></p>
        <h3>AVOIR (to have) — needed for passé composé</h3>
        <p>j'<strong>ai</strong>, tu <strong>as</strong>, il/elle <strong>a</strong>,
        nous <strong>avons</strong>, vous <strong>avez</strong>, ils/elles <strong>ont</strong></p>
        <h3>ALLER (to go) — near future auxiliary</h3>
        <p>je <strong>vais</strong>, tu <strong>vas</strong>, il/elle <strong>va</strong>,
        nous <strong>allons</strong>, vous <strong>allez</strong>, ils/elles <strong>vont</strong></p>
        <h3>FAIRE (to do/make)</h3>
        <p>je <strong>fais</strong>, tu <strong>fais</strong>, il/elle <strong>fait</strong>,
        nous <strong>faisons</strong>, vous <strong>faites</strong>, ils/elles <strong>font</strong></p>
        <h3>POUVOIR (can / be able to)</h3>
        <p>je <strong>peux</strong>, tu <strong>peux</strong>, il/elle <strong>peut</strong>,
        nous <strong>pouvons</strong>, vous <strong>pouvez</strong>, ils/elles <strong>peuvent</strong></p>
        <h3>VOULOIR (to want)</h3>
        <p>je <strong>veux</strong>, tu <strong>veux</strong>, il/elle <strong>veut</strong>,
        nous <strong>voulons</strong>, vous <strong>voulez</strong>, ils/elles <strong>veulent</strong></p>
        <h3>SAVOIR (to know — a fact / how to do)</h3>
        <p>je <strong>sais</strong>, tu <strong>sais</strong>, il/elle <strong>sait</strong>,
        nous <strong>savons</strong>, vous <strong>savez</strong>, ils/elles <strong>savent</strong></p>
        <h3>PRENDRE (to take — also comprendre, apprendre)</h3>
        <p>je <strong>prends</strong>, tu <strong>prends</strong>, il/elle <strong>prend</strong>,
        nous <strong>prenons</strong>, vous <strong>prenez</strong>, ils/elles <strong>prennent</strong></p>
        <p>
          <strong>Pattern recognition:</strong> Note that pouvoir and vouloir share the same
          vowel shift pattern (je/tu/il forms: eu → ou in nous/vous).
          ÊTRE, AVOIR, ALLER are the top 3 most frequent French words — mastery is non-negotiable.
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>The A1 Frequency-30 Verb List</h2>
        <p>
          These 30 verbs cover the overwhelming majority of A1 communicative needs.
          All -er verbs follow the regular paradigm. Learn irregular ones as full paradigms.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French</th><th>English</th><th>Type</th><th>High-use template</th></tr>
          <tr><td>être</td><td>to be</td><td>Irreg.</td><td>je suis / c'est</td></tr>
          <tr><td>avoir</td><td>to have</td><td>Irreg.</td><td>j'ai / il y a</td></tr>
          <tr><td>aller</td><td>to go</td><td>Irreg.</td><td>je vais + inf.</td></tr>
          <tr><td>faire</td><td>to do/make</td><td>Irreg.</td><td>je fais</td></tr>
          <tr><td>parler</td><td>to speak</td><td>-er</td><td>je parle</td></tr>
          <tr><td>manger</td><td>to eat</td><td>-er</td><td>je mange</td></tr>
          <tr><td>habiter</td><td>to live (reside)</td><td>-er</td><td>j'habite à…</td></tr>
          <tr><td>travailler</td><td>to work</td><td>-er</td><td>je travaille</td></tr>
          <tr><td>aimer</td><td>to like/love</td><td>-er</td><td>j'aime + noun/inf.</td></tr>
          <tr><td>vouloir</td><td>to want</td><td>Irreg.</td><td>je veux + inf.</td></tr>
          <tr><td>pouvoir</td><td>can</td><td>Irreg.</td><td>je peux + inf.</td></tr>
          <tr><td>devoir</td><td>must</td><td>Irreg.</td><td>je dois + inf.</td></tr>
          <tr><td>savoir</td><td>to know (fact)</td><td>Irreg.</td><td>je sais</td></tr>
          <tr><td>comprendre</td><td>to understand</td><td>Irreg. (prendre)</td><td>je comprends</td></tr>
          <tr><td>prendre</td><td>to take</td><td>Irreg.</td><td>je prends</td></tr>
          <tr><td>écouter</td><td>to listen</td><td>-er</td><td>j'écoute</td></tr>
          <tr><td>regarder</td><td>to watch/look</td><td>-er</td><td>je regarde</td></tr>
          <tr><td>lire</td><td>to read</td><td>Irreg.</td><td>je lis</td></tr>
          <tr><td>écrire</td><td>to write</td><td>Irreg.</td><td>j'écris</td></tr>
          <tr><td>répondre</td><td>to answer</td><td>-re (reg.)</td><td>je réponds</td></tr>
          <tr><td>venir</td><td>to come</td><td>Irreg.</td><td>je viens</td></tr>
          <tr><td>sortir</td><td>to go out</td><td>Irreg.</td><td>je sors</td></tr>
          <tr><td>dormir</td><td>to sleep</td><td>Irreg.</td><td>je dors</td></tr>
          <tr><td>s'appeler</td><td>to be called</td><td>-er (reflexive)</td><td>je m'appelle</td></tr>
          <tr><td>acheter</td><td>to buy</td><td>-er</td><td>j'achète</td></tr>
          <tr><td>chercher</td><td>to look for</td><td>-er</td><td>je cherche</td></tr>
          <tr><td>trouver</td><td>to find</td><td>-er</td><td>je trouve</td></tr>
          <tr><td>donner</td><td>to give</td><td>-er</td><td>je donne</td></tr>
          <tr><td>demander</td><td>to ask</td><td>-er</td><td>je demande</td></tr>
          <tr><td>arriver</td><td>to arrive</td><td>-er</td><td>j'arrive</td></tr>
        </table>
      `,
    },

    {
      type: "mcq",
      question: "What is the correct form of AVOIR for the subject <em>nous</em>?",
      options: ["nous avez", "nous ont", "nous avons", "nous ai"],
      correct: [2],
      explanation:
        "'Avoir' is irregular. The nous form is 'avons' (not following any regular pattern). Full paradigm: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. 'Avons' is used to form compound past tenses: nous avons mangé (we ate).",
    },

    {
      type: "msq",
      question: "Which sentences correctly apply the near future (Template 8: aller + infinitive)?",
      options: [
        "Je vais manger ce soir. (I am going to eat tonight.)",
        "Elle va travaille demain. (She is going to work tomorrow.)",
        "Nous allons partir à midi. (We are going to leave at noon.)",
        "Ils vont étudier le français. (They are going to study French.)",
      ],
      correct: [0, 2, 3],
      explanation:
        "B is wrong: 'va travaille' — the verb after aller must be an INFINITIVE. 'Travaille' is conjugated, not infinitive. It must be: 'Elle va travailler'. A: vais + manger (inf.) ✓. C: allons + partir (inf.) ✓. D: vont + étudier (inf.) ✓.",
    },

    {
      type: "mcq",
      question: "Why are the forms je/tu/il/elle/ils/elles of regular -er verbs pronounced identically?",
      options: [
        "Because French pronunciation rules are inconsistent",
        "Because -e, -es, and -ent endings are all silent — only the stem is pronounced",
        "Because French does not distinguish these persons in speech",
        "Because the endings are all stressed syllables",
      ],
      correct: [1],
      explanation:
        "The endings -e (je), -es (tu), and -ent (ils/elles) all contain only silent letters. So 'parle, parles, parlent' all sound like [parl]. This means French relies on the subject pronoun (je/tu/il/ils) to distinguish persons in speech — the pronoun cannot be dropped unlike in Italian or Spanish. Nous (-ons) and vous (-ez) have audible endings.",
    },

    {
      type: "text",
      data: `
        <h2>Speaking Exercise: Verb Drills</h2>
        <p>Say each sentence aloud, then modify it using the substitution slots shown.</p>
        <ul>
          <li>Je parle français. → [Tu / Il / Nous / Vous / Ils] _____ français.</li>
          <li>Elle aime le cinéma. → [remplace 'cinéma' with: la musique / les livres / le sport]</li>
          <li>Nous allons au marché. → [remplace 'nous' with: je / tu / il / vous / elles]</li>
        </ul>
        <h2>Comprehensible Input Recommendation</h2>
        <p>
          At this stage, begin watching <strong>Extra en Français</strong> (YouTube, Ep. 1).
          This is a comedy-drama designed for A1 learners, using repetitive high-frequency verbs
          in context. Aim: 15–20 min/day. Do NOT read subtitles on first viewing —
          use context and images. Use French subtitles on second viewing.
        </p>
        <h2>SRS Items</h2>
        <p>Add the following Anki cards:</p>
        <ul>
          <li>Full paradigm of ÊTRE (front: "être — all 6 persons")</li>
          <li>Full paradigm of AVOIR</li>
          <li>Full paradigm of ALLER</li>
          <li>Full paradigm of FAIRE</li>
          <li>All 30 A1 verbs: French infinitive → English meaning (batch-create from table)</li>
        </ul>
      `,
    },

  ],
};


// ───────────────────────────────────────────────────────────────────────────
// Chapter 6: Survival Communication & Early A1
// ───────────────────────────────────────────────────────────────────────────

const ch6 = {
  title: "Survival Communication & Early A1 Consolidation",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Achieve basic autonomous communication in French survival contexts.
          Consolidate Chapters 2–5 through integrated use in realistic scenarios.
          Estimated study time: <strong>3 hours</strong>.
        </p>
        <h2>The A1 Communication Domains (CEFR)</h2>
        <p>A1 requires functional communication in exactly these domains:</p>
        <ol>
          <li>Personal identification (name, age, nationality, profession, address)</li>
          <li>Family and relationships</li>
          <li>Daily routines and times</li>
          <li>Shopping and food</li>
          <li>Directions and locations</li>
          <li>Numbers, dates, and scheduling</li>
          <li>Weather and seasons</li>
          <li>Leisure and hobbies</li>
        </ol>
        <h2>Domain 1: Personal Identification — The A1 Self-Introduction Script</h2>
        <p>
          This is the highest-probability speaking task in DELF A1 Part D (oral production).
          Build and memorise your personal version of this script:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Function</th><th>French</th><th>Notes</th></tr>
          <tr><td>Name</td><td>Je m'appelle [name]. / Mon nom est [name].</td><td>m'appelle = reflexive 's'appeler'</td></tr>
          <tr><td>Age</td><td>J'ai [number] ans.</td><td>AVOIR for age — not être! Hindi: मेरी उम्र... — same structure!</td></tr>
          <tr><td>Nationality</td><td>Je suis indien(ne) / français(e).</td><td>No article after être + nationality</td></tr>
          <tr><td>Profession</td><td>Je suis étudiant(e) / professeur.</td><td>No article after être + profession</td></tr>
          <tr><td>Residence</td><td>J'habite à Mumbai / en Inde.</td><td>à + city; en + feminine country; au + masculine country</td></tr>
          <tr><td>Languages</td><td>Je parle anglais, hindi et un peu de français.</td><td>No article before languages after 'parler'</td></tr>
          <tr><td>Interests</td><td>J'aime la physique et la musique.</td><td>Definite article with aimer + general concept</td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Domain 4: Shopping — Key Structures</h2>
        <p>In a shop (<em>un magasin</em>) or market (<em>un marché</em>):</p>
        <ul>
          <li><em>Combien coûte [ce/cette + noun]?</em> — How much does [this thing] cost?</li>
          <li><em>Je voudrais [noun], s'il vous plaît.</em> — I would like [noun], please.
              (voudrais = conditional of vouloir — softer, more polite than "je veux")</li>
          <li><em>Avez-vous [noun]?</em> — Do you have [noun]?</li>
          <li><em>C'est combien?</em> — How much is it?</li>
          <li><em>C'est trop cher.</em> — It's too expensive.</li>
          <li><em>Je prends [noun].</em> — I'll take [noun].</li>
        </ul>
        <h2>Domain 5: Directions — Key Structures</h2>
        <ul>
          <li><em>Excusez-moi, où est [lieu]?</em> — Excuse me, where is [place]?</li>
          <li><em>C'est à gauche / à droite / tout droit.</em> — It's on the left / right / straight ahead.</li>
          <li><em>Prenez la première rue à gauche.</em> — Take the first street on the left.</li>
          <li><em>C'est loin? / C'est près d'ici?</em> — Is it far? / Is it nearby?</li>
          <li><em>Il y a un hôtel près d'ici?</em> — Is there a hotel near here?</li>
        </ul>
        <h2>Numbers, Time, and Dates</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Number</th><th>French</th><th>Note</th></tr>
          <tr><td>0–10</td><td>zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix</td><td>Core — memorise</td></tr>
          <tr><td>11–19</td><td>onze, douze, treize, quatorze, quinze, seize, dix-sept, dix-huit, dix-neuf</td><td>11–16 unique; 17–19 = ten+seven/eight/nine</td></tr>
          <tr><td>20–69</td><td>vingt, trente, quarante, cinquante, soixante [+ et un, deux…]</td><td>Regular tens</td></tr>
          <tr><td>70–79</td><td>soixante-dix, soixante-onze… soixante-dix-neuf</td><td>60+10…19 — Belgian/Swiss: septante</td></tr>
          <tr><td>80–89</td><td>quatre-vingts, quatre-vingt-un…</td><td>4×20 — Belgian/Swiss: huitante</td></tr>
          <tr><td>90–99</td><td>quatre-vingt-dix, quatre-vingt-onze…</td><td>4×20+10…19</td></tr>
          <tr><td>100+</td><td>cent, deux cents, mille, million</td><td></td></tr>
        </table>
        <p><strong>Time:</strong> Il est [number] heure(s) [et quart / et demie / moins le quart / moins [number]].</p>
        <p><em>Il est trois heures et demie.</em> = It is 3:30. / <em>Il est midi.</em> = It is noon.</p>
        <p><strong>Date:</strong> Aujourd'hui, c'est le [number] [month] [year].</p>
        <p><em>C'est le 15 août 2024.</em> = It is August 15, 2024. (Day before month — unlike American English.)</p>
      `,
    },

    {
      type: "mcq",
      question: "How do you say 'I am 28 years old' in French?",
      options: [
        "Je suis vingt-huit ans.",
        "J'ai vingt-huit ans.",
        "Je ai vingt-huit ans.",
        "J'habite vingt-huit ans.",
      ],
      correct: [1],
      explanation:
        "Age in French uses AVOIR (to have), not ÊTRE (to be). 'J'ai vingt-huit ans' (literally: I have 28 years). This is the same structure as Hindi: मेरी उम्र अट्ठाईस साल है (meri umar athhais saal hai — I have 28 years of age). 'Je suis' would be for identification, not age. 'Je ai' is incorrect — before vowel: je + ai = j'ai (elision).",
    },

    {
      type: "mcq",
      question: "You are in France and want to politely ask for a coffee. Which is most appropriate?",
      options: [
        "Je veux un café.",
        "Je voudrais un café, s'il vous plaît.",
        "Donne-moi un café.",
        "Un café maintenant.",
      ],
      correct: [1],
      explanation:
        "'Je voudrais' (I would like) is the conditional form of vouloir — it is the standard polite way to order in France. 'Je veux' (I want) is grammatically correct but considered blunt/rude in service contexts. 'Donne-moi' (Give me) is imperative and too abrupt. The bare noun phrase lacks a verb. Always add 's'il vous plaît' (please) with strangers/service staff.",
    },

    {
      type: "msq",
      question: "Which of the following use the correct preposition with country/city names?",
      options: [
        "J'habite à Paris. (I live in Paris.)",
        "Je vais en France. (I am going to France. — France is feminine)",
        "Il est au Japon. (He is in Japan. — Japon is masculine)",
        "Elle vient de à Mumbai. (She comes from Mumbai.)",
      ],
      correct: [0, 1, 2],
      explanation:
        "Preposition rules: à + city, en + feminine country (France, Italie, Inde), au + masculine country (Japon, Canada, Brésil), aux + plural countries (États-Unis). D is wrong: 'de à' is impossible — 'de' already handles 'from a city': Elle vient de Mumbai (no article with cities using 'de').",
    },

    {
      type: "text",
      data: `
        <h2>Mini Conversational Simulation — At the Tourist Office</h2>
        <p>
          Practice this script aloud. The bold text is your role. Cover the French and try to
          produce it before looking.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Agent</th><th>You (bold = your turn)</th></tr>
          <tr><td>Bonjour! Je peux vous aider?</td><td><strong>Bonjour! Oui, je cherche un hôtel, s'il vous plaît.</strong></td></tr>
          <tr><td>Vous préférez un hôtel en centre-ville?</td><td><strong>Oui, et pas trop cher, s'il vous plaît.</strong></td></tr>
          <tr><td>D'accord. Vous restez combien de nuits?</td><td><strong>Je reste trois nuits.</strong></td></tr>
          <tr><td>Très bien. L'hôtel du Parc est à cent euros par nuit.</td><td><strong>C'est un peu cher. Il y a quelque chose de moins cher?</strong></td></tr>
          <tr><td>Oui, l'Hôtel Central est à soixante euros par nuit.</td><td><strong>Parfait! C'est où?</strong></td></tr>
          <tr><td>C'est dans la rue Victor Hugo, à cinq minutes d'ici.</td><td><strong>Merci beaucoup! Au revoir!</strong></td></tr>
        </table>
        <h2>Chapter 6 — SRS items</h2>
        <ul>
          <li>J'ai X ans. → Age structure in French (avoir, not être)</li>
          <li>Je voudrais → polite 'I would like' (conditional; more polite than je veux)</li>
          <li>à + city / en + F-country / au + M-country / aux + plural-country</li>
          <li>Numbers 70–99 (irregular logic: 60+10s, 4×20s)</li>
          <li>Days of week: lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche</li>
          <li>Months: janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre</li>
        </ul>
      `,
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// COURSE 2 — DELF A1 ACCELERATOR
// ═══════════════════════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────────────────────
// Chapter 7: Listening Comprehension — DELF A1 Part A
// ───────────────────────────────────────────────────────────────────────────

const ch7 = {
  title: "Listening Comprehension — DELF A1 Part A",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Develop listening comprehension strategies for DELF A1 Part A.
          Estimated study time: <strong>4 hours</strong>.
          DELF A1 listening: 3 short recordings (20–40 seconds each), 6–9 questions total,
          each recording played twice.
        </p>
        <h2>What the DELF A1 Listening Tests</h2>
        <p>At A1, listening tasks involve:</p>
        <ul>
          <li>Simple personal information (name, address, phone number, nationality)</li>
          <li>Numbers, prices, times, dates</li>
          <li>Simple instructions or directions</li>
          <li>Short dialogues in familiar everyday contexts</li>
          <li>Simple messages left on voicemail</li>
        </ul>
        <p>
          <strong>Key insight:</strong> You do not need to understand every word.
          DELF A1 questions test specific information (who, what, when, where, how much).
          A top-down comprehension strategy — predict, then confirm — outperforms
          bottom-up word-by-word decoding.
        </p>
        <h2>The DELF A1 Listening Strategy: 4 Steps</h2>
        <ol>
          <li>
            <strong>Pre-listen (before recording starts):</strong> Read the question carefully.
            Identify what type of information is being asked (number? name? place? time?).
            Predict what vocabulary might appear.
          </li>
          <li>
            <strong>First listening:</strong> Focus on the question's target information only.
            Do not write complete sentences — note key words.
          </li>
          <li>
            <strong>Second listening:</strong> Confirm your answer. Fill in anything missed.
            Check that your answer is grammatically and logically consistent.
          </li>
          <li>
            <strong>Post-listen:</strong> If a number — verify it makes sense (you would not pay
            €500 for a coffee). If a name — verify spelling if needed.
          </li>
        </ol>
        <h2>Phonological Decoding for Listening</h2>
        <p>
          The listening challenge for Indian-English speakers is not grammar — it is
          <strong>connected speech phenomena</strong>. Review these:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Phenomenon</th><th>Example</th><th>How it sounds</th></tr>
          <tr><td>Liaison</td><td>les amis</td><td>"lay-za-MEE" (s crosses to next word)</td></tr>
          <tr><td>Elision</td><td>je + ai → j'ai</td><td>"zhay" (not "zhuh ay")</td></tr>
          <tr><td>Enchaînement</td><td>elle est ici</td><td>"el-ay-TEE-see" (final consonant links)</td></tr>
          <tr><td>Dropped ne</td><td>je parle pas</td><td>Spoken: "zhpaarl paa" (ne absent)</td></tr>
          <tr><td>Reduced "tu"</td><td>tu as → t'as</td><td>"taa" in fast speech</td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>High-Frequency Listening Vocabulary Clusters</h2>
        <p>
          These are the word clusters most commonly tested in DELF A1 listening.
          Organise by semantic field for faster in-context recognition.
        </p>
        <h3>Cluster A: Numbers in context</h3>
        <p>
          Practice hearing: phone numbers (given digit-by-digit or in pairs),
          prices (avec 'euros' and 'centimes'), ages, times (heure/s, quart, demie),
          floors in buildings (premier, deuxième, troisième…), apartment/room numbers.
        </p>
        <h3>Cluster B: Appointment and scheduling language</h3>
        <p>
          <em>rendez-vous</em> (appointment), <em>à quelle heure</em> (at what time),
          <em>lundi prochain</em> (next Monday), <em>ce soir</em> (this evening),
          <em>demain matin</em> (tomorrow morning), <em>la semaine prochaine</em> (next week).
        </p>
        <h3>Cluster C: Identification and personal data</h3>
        <p>
          <em>nom</em> (surname), <em>prénom</em> (first name), <em>adresse</em> (address),
          <em>numéro de téléphone</em> (phone number), <em>code postal</em> (postal code),
          <em>date de naissance</em> (date of birth), <em>nationalité</em> (nationality).
        </p>
        <h3>Cluster D: Common verbs in listening contexts</h3>
        <p>
          <em>chercher</em> (to look for), <em>réserver</em> (to book),
          <em>arriver/partir</em> (to arrive/leave), <em>appeler</em> (to call),
          <em>payer</em> (to pay), <em>acheter</em> (to buy), <em>trouver</em> (to find).
        </p>
        <h2>Listening Exercise Protocol</h2>
        <ol>
          <li>
            <strong>RFI (Radio France Internationale) — Journal en français facile:</strong>
            Available as a daily podcast. Duration: 20 minutes. Speed: slightly above natural.
            Begin with transcripts visible; within 2 weeks aim for no transcript on first listening.
          </li>
          <li>
            <strong>TV5Monde Apprendre le français:</strong> Free A1 video exercises with
            comprehension questions at tv5monde.com/apprendre/français. These simulate
            DELF A1 format precisely.
          </li>
          <li>
            <strong>Practice task:</strong> Listen to any A1 dialogue (e.g., Extra en Français Ep. 1).
            After one listen, write down: (a) all numbers you heard, (b) all names,
            (c) what happened in sequence. Compare to transcript.
          </li>
        </ol>
      `,
    },

    {
      type: "mcq",
      question: "In the phrase <em>les amis sont ici</em>, how is 'les amis' pronounced due to liaison?",
      options: [
        "lay a-MEE (s is silent, as usual)",
        "lay-za-MEE (s of 'les' is pronounced as z, linking to 'amis')",
        "lez a-MEE (s becomes z but stays with 'les')",
        "lay a-mee-SON (all final consonants pronounced)",
      ],
      correct: [1],
      explanation:
        "Liaison rule: when a word ending in a normally-silent consonant is followed by a word starting with a vowel, the consonant is pronounced AND connects to the next syllable. 'Les' ends in -s; 'amis' starts with a vowel. The s is pronounced as /z/ (liaison consonants are always voiced) and links to the next word: [le-za-mi]. This is mandatory liaison after definite/indefinite articles.",
    },

    {
      type: "msq",
      question: "Which of the following are effective DELF A1 listening strategies? (Select all that apply)",
      options: [
        "Read the question before the recording plays — identify the target information type",
        "Try to understand every single word on first listening",
        "Note key words on first listening; confirm on second",
        "If a number doesn't sound right, use common sense to verify (prices, ages, etc.)",
      ],
      correct: [0, 2, 3],
      explanation:
        "B is counterproductive — trying to decode every word triggers cognitive overload and causes important information to be missed. DELF A1 questions are specific (a name, a number, a place) — top-down focused listening for the specific target is far more efficient. Pre-listening (A), key-word noting (C), and plausibility checking (D) are all tested strategies from DELF examiner guidance.",
    },

    {
      type: "mcq",
      question: "In fast spoken French, <em>je ne sais pas</em> (I don't know) often sounds like:",
      options: [
        "zhuh nuh say paa (all words fully pronounced)",
        "zhnay paa or shnay paa (ne dropped, j'reduced, contracted)",
        "je ne said pa (anglicised pronunciation)",
        "no reduction — French always pronounces all words fully",
      ],
      correct: [1],
      explanation:
        "'Ne' is regularly dropped in spoken French. 'Je' before a consonant can reduce to 'zh'. So 'je ne sais pas' → 'zhuh say paa' → in fast speech → 'zh'say paa'. Understanding this reduction is essential for listening comprehension — formal written French and spoken French can sound very different at speed.",
    },

  ],
};


// ───────────────────────────────────────────────────────────────────────────
// Chapter 8: Reading Comprehension — DELF A1 Part B
// ───────────────────────────────────────────────────────────────────────────

const ch8 = {
  title: "Reading Comprehension — DELF A1 Part B",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Develop systematic reading comprehension skills for DELF A1 Part B.
          Estimated study time: <strong>4 hours</strong>. DELF A1 reading: 4 short texts
          (advertisements, notes, signs, short messages, emails, timetables),
          with 10–12 questions total. No dictionary permitted.
        </p>
        <h2>Text Types in DELF A1 Reading</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Text type</th><th>Typical questions</th><th>Key skills needed</th></tr>
          <tr><td>Advertisement / notice</td><td>What is sold? Price? Contact?</td><td>Scan for numbers, names, key nouns</td></tr>
          <tr><td>Short email / message</td><td>What is the purpose? What is requested?</td><td>Identify sender, recipient, purpose, tone</td></tr>
          <tr><td>Schedule / timetable</td><td>What time does X open? Which day?</td><td>Cross-reference day + time + location</td></tr>
          <tr><td>Menu / product list</td><td>What does X cost? What is available?</td><td>Match category + price + description</td></tr>
          <tr><td>Short informational text</td><td>True/False, matching, fill-in</td><td>Skim for gist, scan for detail</td></tr>
        </table>
        <h2>Reading Strategy: SCAN before DECODE</h2>
        <p>
          Unlike in a physics paper, DELF reading is NOT about deep comprehension of the full text.
          It is about <strong>targeted information extraction</strong>.
        </p>
        <ol>
          <li><strong>Skim:</strong> Read the title, any subheadings, first and last sentences. Build a gist model.</li>
          <li><strong>Read the questions:</strong> Identify the target information type (number, name, day, price, purpose).</li>
          <li><strong>Scan:</strong> Go back to the text and find the relevant section. Read that section carefully.</li>
          <li><strong>Cognate exploitation:</strong> Apply Chapter 3 rules. Many A1 texts contain transparent cognates.</li>
          <li><strong>Morphology:</strong> Unknown verb? Identify the stem. 'Réservation' → related to 'réserver' → booking.</li>
        </ol>
        <h2>High-Frequency Reading Vocabulary by Domain</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Domain</th><th>Key vocabulary</th></tr>
          <tr><td>Food / Restaurant</td><td>menu, plat du jour, entrée, dessert, boisson, serveur, addition, commander, réserver</td></tr>
          <tr><td>Transport</td><td>gare, aéroport, billet, aller-retour, aller simple, départ, arrivée, quai, horaire</td></tr>
          <tr><td>Accommodation</td><td>hôtel, chambre, réservation, nuit, petit-déjeuner, clé, ascenseur, étage</td></tr>
          <tr><td>Shopping</td><td>magasin, prix, soldes, taille, pointure, caisse, payer, remise, livraison</td></tr>
          <tr><td>Health</td><td>médecin, hôpital, pharmacie, ordonnance, rendez-vous, malade, douleur</td></tr>
          <tr><td>Official forms</td><td>nom, prénom, adresse, code postal, date de naissance, signature, remplir</td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Sample Reading Text — Practice Comprehension</h2>
        <p style="border: 1px solid #ccc; padding: 12px; font-style: italic;">
          <strong>RESTAURANT LE PETIT PARIS</strong><br>
          Ouvert du mardi au dimanche, de 12h à 14h30 et de 19h à 22h30.<br>
          Fermé le lundi.<br>
          Menu du jour : entrée + plat = 14€ / entrée + plat + dessert = 18€<br>
          Réservation recommandée le week-end. Téléphone : 01 42 36 78 90<br>
          Nous proposons aussi des plats à emporter (takeaway).
        </p>
        <p><strong>Comprehension questions:</strong></p>
        <ol>
          <li>What day is the restaurant closed?</li>
          <li>At what time does the lunch service end?</li>
          <li>What is the price of a 3-course menu (entrée + plat + dessert)?</li>
          <li>What is recommended on weekends?</li>
          <li>Does the restaurant offer food to take away?</li>
        </ol>
        <p><strong>Answers:</strong></p>
        <ol>
          <li>Monday (lundi) — "Fermé le lundi"</li>
          <li>14h30 (2:30 PM) — "de 12h à 14h30"</li>
          <li>18 euros — "entrée + plat + dessert = 18€"</li>
          <li>Reservation — "Réservation recommandée le week-end"</li>
          <li>Yes — "plats à emporter" (takeaway dishes)</li>
        </ol>
        <p>
          <strong>Cognate analysis of this text:</strong> restaurant, proposons (propose → proposer), recommandée (recommend), réservation (reservation) — all immediately decodable. 'Ouvert' (open) and 'fermé' (closed) are the only non-cognate vocabulary items needing explicit learning.
        </p>
        <h2>Grammar Inference from Context</h2>
        <p>
          You don't need to know every grammar rule to understand A1 reading.
          Key patterns to recognise:
        </p>
        <ul>
          <li><strong>du/de la/des + noun</strong> = some [noun] (partitive) or of the [noun] (possessive)</li>
          <li><strong>Adjective agreement:</strong> 'fermé' (M) / 'fermée' (F) — look for -e endings on adjectives to infer they describe feminine nouns</li>
          <li><strong>Infinitives as noun equivalents:</strong> 'réserver' (to reserve) in a sign = Reservation</li>
          <li><strong>Imperative forms:</strong> 'Appelez' (Call!), 'Venez' (Come!), 'Réservez' (Book!) — vous-form imperative = verb without pronoun</li>
        </ul>
      `,
    },

    {
      type: "mcq",
      question: "In a DELF A1 reading text, you see the word <em>horaire</em>. You don't know it. Which strategy gives the fastest meaning?",
      options: [
        "Skip it — it's probably not in the question",
        "Apply the -aire suffix rule (Chapter 3, Rule 4: -ary/-ory → -aire/-oire) and infer it relates to English 'horary' (relating to hours) → timetable/schedule",
        "Assume it means 'horizontal' because it sounds like it",
        "Look it up in a dictionary (permitted in DELF)",
      ],
      correct: [1],
      explanation:
        "'Horaire' comes from Latin 'hora' (hour) + -aire suffix. It means 'schedule/timetable'. The cognate chain: Latin hora → French horaire / English 'hour' (from Old French 'hore'). No dictionary is permitted in DELF — morphological and etymological inference is exactly the skill the test rewards. Even if you couldn't derive the exact meaning, you'd know it relates to 'time', which in context of a transport text means timetable.",
    },

    {
      type: "msq",
      question: "In the restaurant text above, which statements are true? (Select all correct answers)",
      options: [
        "The restaurant is open on Mondays.",
        "The lunch service runs from 12:00 to 14:30.",
        "A 2-course menu (entrée + plat) costs 14 euros.",
        "Reservations are required every day.",
      ],
      correct: [1, 2],
      explanation:
        "A: False — 'Fermé le lundi' = closed on Mondays. B: True — 'de 12h à 14h30'. C: True — 'entrée + plat = 14€'. D: False — 'Réservation recommandée le week-end' (recommended on weekends only, not required every day; 'recommandée' ≠ obligatoire).",
    },

  ],
};


// ───────────────────────────────────────────────────────────────────────────
// Chapter 9: Writing Production — DELF A1 Part C
// ───────────────────────────────────────────────────────────────────────────

const ch9 = {
  title: "Writing Production — DELF A1 Part C",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Produce correct, communicative written French at A1 level.
          Estimated study time: <strong>4 hours</strong>.
          DELF A1 writing: 2 tasks — (1) fill in a form with personal information,
          (2) write a short text of 40–50 words (a message, postcard, or note).
        </p>
        <h2>Writing Task 1: Completing a Form</h2>
        <p>
          This task tests knowledge of standard personal data vocabulary.
          The form fields you must know:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French field label</th><th>English equivalent</th><th>What to write</th></tr>
          <tr><td>Nom / Nom de famille</td><td>Surname / Family name</td><td>Your last name (CAPITALS)</td></tr>
          <tr><td>Prénom</td><td>First name</td><td>Your given name</td></tr>
          <tr><td>Date de naissance</td><td>Date of birth</td><td>DD/MM/YYYY format</td></tr>
          <tr><td>Lieu de naissance</td><td>Place of birth</td><td>City, Country</td></tr>
          <tr><td>Nationalité</td><td>Nationality</td><td>Indien(ne) / Français(e) etc.</td></tr>
          <tr><td>Adresse</td><td>Address</td><td>Street number, street name</td></tr>
          <tr><td>Code postal</td><td>Postal/zip code</td><td>Numeric code</td></tr>
          <tr><td>Ville</td><td>City</td><td>City name</td></tr>
          <tr><td>Pays</td><td>Country</td><td>Country name</td></tr>
          <tr><td>Numéro de téléphone</td><td>Phone number</td><td>With country code if abroad</td></tr>
          <tr><td>Adresse email / courriel</td><td>Email address</td><td>your@email.com</td></tr>
          <tr><td>Profession / Métier</td><td>Job / Occupation</td><td>étudiant(e), professeur etc.</td></tr>
          <tr><td>Signature</td><td>Signature</td><td>Your signature</td></tr>
        </table>
        <h2>Writing Task 2: The 40–50 Word Text</h2>
        <p>
          Common prompts: Write a message to a friend about your weekend plans. Write a postcard
          from a city you are visiting. Reply to an invitation. Write a note to explain an absence.
        </p>
        <p>
          <strong>The DELF A1 writing rubric assesses:</strong>
          (1) Completion of communicative task, (2) Vocabulary range and accuracy,
          (3) Grammatical accuracy, (4) Coherence (does the text flow logically?).
        </p>
        <h2>The 5-Template Writing Toolkit</h2>
        <p>
          Memorise these 5 functional chunks — they cover the majority of A1 writing tasks:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Function</th><th>French phrase</th></tr>
          <tr><td>Opening a letter/message (informal)</td><td>Cher [prénom] / Chère [prénom],</td></tr>
          <tr><td>Opening a letter/message (formal)</td><td>Madame, Monsieur,</td></tr>
          <tr><td>Stating the reason for writing</td><td>Je vous écris pour… / Je t'écris pour…</td></tr>
          <tr><td>Making a request</td><td>Pourriez-vous… ? / Est-ce que tu peux… ?</td></tr>
          <tr><td>Closing (informal)</td><td>Bises / Amicalement, [signature]</td></tr>
          <tr><td>Closing (formal)</td><td>Cordialement / Merci d'avance, [signature]</td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Sample DELF A1 Writing Task 2 — Annotated</h2>
        <p><strong>Prompt:</strong> You are on holiday in Paris. Write a postcard to your French
        friend Marie (40–50 words). Tell her: where you are, what you did today, what the weather
        is like, and what you plan to do tomorrow.</p>
        <p style="border: 1px solid #ccc; padding: 12px; font-style: italic;">
          Chère Marie,<br><br>
          Je suis à Paris pour les vacances — c'est magnifique! Aujourd'hui, j'ai visité la Tour Eiffel
          et j'ai mangé dans un bon restaurant. Il fait beau et chaud. Demain, je vais aller au Louvre.
          À bientôt!<br><br>
          [Signature]
        </p>
        <p><strong>Word count:</strong> 48 words ✓ (within 40–50 range)</p>
        <p><strong>Template analysis:</strong></p>
        <ul>
          <li>Opening: "Chère Marie" ✓</li>
          <li>Location: Template 2 (être) — "Je suis à Paris" ✓</li>
          <li>Past activity: Template 7 (passé composé) — "j'ai visité", "j'ai mangé" ✓</li>
          <li>Weather: "il fait beau" (impersonal construction — weather always uses 'il fait') ✓</li>
          <li>Near future: Template 8 — "je vais aller au Louvre" ✓</li>
          <li>Closing: "À bientôt" (see you soon) ✓</li>
        </ul>
        <h2>Weather Vocabulary (Extremely High-Frequency in DELF)</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French</th><th>English</th><th>Structure</th></tr>
          <tr><td>Il fait beau.</td><td>The weather is nice.</td><td>il fait + adj.</td></tr>
          <tr><td>Il fait chaud / froid.</td><td>It's hot / cold.</td><td>il fait + adj.</td></tr>
          <tr><td>Il pleut.</td><td>It's raining.</td><td>pleuvoir (irreg.)</td></tr>
          <tr><td>Il neige.</td><td>It's snowing.</td><td>neiger (irreg.)</td></tr>
          <tr><td>Il y a du soleil.</td><td>It's sunny.</td><td>il y a + du + noun</td></tr>
          <tr><td>Il y a des nuages.</td><td>It's cloudy.</td><td>il y a + des + noun</td></tr>
          <tr><td>Il y a du vent.</td><td>It's windy.</td><td>il y a + du + noun</td></tr>
        </table>
        <h2>Common Writing Mistakes at A1</h2>
        <ul>
          <li><strong>Gender agreement of adjectives:</strong> "je suis content" (M) vs. "je suis contente" (F — add -e).</li>
          <li><strong>Accent omission:</strong> é, è, ê, à, ù, ô, î, ü — these change both pronunciation and meaning. Write accents in the DELF.</li>
          <li><strong>Apostrophe/elision:</strong> "je ai" is always wrong — "j'ai". "ce est" is always wrong — "c'est".</li>
          <li><strong>Verb agreement:</strong> "ils mange" (wrong) → "ils mangent".</li>
          <li><strong>Passé composé auxiliary:</strong> Motion/state verbs use être (not avoir): je suis allé(e), je suis arrivé(e).</li>
        </ul>
      `,
    },

    {
      type: "mcq",
      question: "Complete the passé composé: <em>Hier, elle ___ au cinéma.</em> (Yesterday, she went to the cinema.)",
      options: [
        "a allé",
        "est allée",
        "est allé",
        "a été allée",
      ],
      correct: [1],
      explanation:
        "'Aller' uses ÊTRE as its passé composé auxiliary (it is in the DR MRS VANDERTRAMP group of motion/state verbs). Past participle of aller = allé. Subject is 'elle' (feminine singular), so the past participle must agree: allée (add -e). Result: 'est allée'. 'A allé' is wrong (wrong auxiliary). 'Est allé' is wrong (masculine agreement for feminine subject). 'A été allée' is doubly wrong.",
    },

    {
      type: "mcq",
      question: "How do you say 'It's raining' in French?",
      options: [
        "Il est pleuvant.",
        "C'est pleuvoir.",
        "Il pleut.",
        "Il fait pleuvoir.",
      ],
      correct: [2],
      explanation:
        "'Pleuvoir' (to rain) is an impersonal verb — it only conjugates in the third person singular: il pleut. There is no other subject. 'Il fait' is used for temperature and general weather adjectives (il fait beau, il fait froid) but NOT with 'pleuvoir' or 'neiger'. Similarly: 'Il neige' (it's snowing), never 'il fait neiger'.",
    },

    {
      type: "msq",
      question: "Which of the following sentences would score full marks in DELF A1 writing? (Select all correct ones)",
      options: [
        "Je suis à Paris pour les vacances.",
        "Hier, j'ai visiter le musée.",
        "Demain, je vais aller au restaurant.",
        "Il fait beau aujourd'hui.",
      ],
      correct: [0, 2, 3],
      explanation:
        "B is wrong: 'j'ai visiter' — in passé composé, the past participle must be used, not the infinitive. Past participle of 'visiter' = visité. Correct: 'j'ai visité le musée'. A ✓ (Template 2: être + location), C ✓ (Template 8: aller + infinitive), D ✓ (impersonal weather with 'il fait').",
    },

  ],
};


// ───────────────────────────────────────────────────────────────────────────
// Chapter 10: Speaking Production — DELF A1 Part D
// ───────────────────────────────────────────────────────────────────────────

const ch10 = {
  title: "Speaking Production — DELF A1 Part D",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Develop the speaking confidence and production skills needed for DELF A1 Part D
          (oral production). Estimated study time: <strong>4 hours</strong>.
        </p>
        <h2>DELF A1 Oral Production — Exam Structure</h2>
        <p>
          Total speaking time: approximately 5–7 minutes. Three tasks:
        </p>
        <ol>
          <li>
            <strong>Guided conversation (2 min):</strong> Examiner asks simple personal questions.
            You respond. No preparation time. Topics: identity, family, daily routine, hobbies,
            preferences, residence.
          </li>
          <li>
            <strong>Picture/image description or simple situation (2 min):</strong>
            Describe a simple image (a room, a street, a person) using basic vocabulary.
            OR react to a simple everyday situation.
          </li>
          <li>
            <strong>Role play / transactional dialogue (3 min):</strong>
            Simulate a real-world interaction: shopping, asking for directions, making a
            reservation, asking for information. You draw a card with the scenario.
          </li>
        </ol>
        <h2>Speaking Assessment Rubric (what examiners grade)</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Criterion</th><th>Weight</th><th>What it means at A1</th></tr>
          <tr><td>Communicative adequacy</td><td>High</td><td>Did you accomplish the task? Were you understood?</td></tr>
          <tr><td>Lexical range</td><td>Medium</td><td>Did you use appropriate vocabulary? Could you express yourself?</td></tr>
          <tr><td>Grammatical accuracy</td><td>Medium</td><td>Simple, correct sentences. Minor errors acceptable.</td></tr>
          <tr><td>Phonological control</td><td>Medium</td><td>Was pronunciation comprehensible? Accent acceptable.</td></tr>
          <tr><td>Fluency</td><td>Low at A1</td><td>Some hesitations are expected and acceptable.</td></tr>
        </table>
        <p>
          <strong>Key insight:</strong> At A1, the examiner expects errors. Communicative success
          (being understood, completing the task) is weighted more than grammatical perfection.
          A sentence that communicates clearly with a grammatical error outscores a perfect but
          irrelevant sentence.
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>The A1 Speaking Toolkit: 20 Indispensable Phrases</h2>
        <p>
          These phrases are the scaffolding of A1 oral production. Memorise them until they
          are completely automatic — zero cognitive load on retrieval.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Function</th><th>French</th><th>English</th></tr>
          <tr><td>Buying time</td><td>Euh… / Alors… / Hmm…</td><td>(thinking sounds — use French ones!)</td></tr>
          <tr><td>Asking for repetition</td><td>Vous pouvez répéter, s'il vous plaît?</td><td>Can you repeat, please?</td></tr>
          <tr><td>Asking for clarification</td><td>Je ne comprends pas. / Qu'est-ce que ça veut dire?</td><td>I don't understand. / What does that mean?</td></tr>
          <tr><td>Expressing preference</td><td>Je préfère… / J'aime mieux…</td><td>I prefer…</td></tr>
          <tr><td>Agreeing</td><td>Oui, bien sûr. / D'accord. / Absolument.</td><td>Yes, of course. / OK. / Absolutely.</td></tr>
          <tr><td>Disagreeing politely</td><td>Non, je ne pense pas. / Ce n'est pas mon avis.</td><td>No, I don't think so. / That's not my opinion.</td></tr>
          <tr><td>Expressing an opinion</td><td>Je pense que… / À mon avis… / Je trouve que…</td><td>I think that… / In my opinion…</td></tr>
          <tr><td>Making a request (polite)</td><td>Je voudrais… / Pourriez-vous… ?</td><td>I would like… / Could you…?</td></tr>
          <tr><td>Thanking</td><td>Merci (beaucoup). / C'est très gentil.</td><td>Thank you (very much). / That's very kind.</td></tr>
          <tr><td>Apologising</td><td>Excusez-moi. / Je suis désolé(e).</td><td>Excuse me. / I am sorry.</td></tr>
        </table>
        <h2>Task 1 Preparation: The Personal Question Bank</h2>
        <p>
          Prepare a confident answer (2–3 sentences) for each of the following questions.
          Practice until fluent. These cover ~85% of Task 1 in DELF A1 oral.
        </p>
        <ul>
          <li>Comment vous appelez-vous? / Comment tu t'appelles?</li>
          <li>Quel âge avez-vous? / Tu as quel âge?</li>
          <li>Vous êtes de quelle nationalité? / D'où tu viens?</li>
          <li>Quelle est votre profession? / Qu'est-ce que tu fais dans la vie?</li>
          <li>Où est-ce que vous habitez?</li>
          <li>Vous parlez quelles langues?</li>
          <li>Qu'est-ce que vous aimez faire pendant le temps libre?</li>
          <li>Vous avez des frères et sœurs? (Do you have siblings?)</li>
          <li>Qu'est-ce que vous faites le week-end?</li>
          <li>Qu'est-ce que vous avez fait hier? (passé composé)</li>
        </ul>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Task 3 Simulation: Role Play Scenarios</h2>
        <p>Practice these 5 role plays with a partner or by recording yourself on both sides.</p>
        <h3>Scenario A: Buying a train ticket</h3>
        <p>
          You: <em>Bonjour! Je voudrais un billet pour Lyon, s'il vous plaît.</em><br>
          Agent: Pour quelle date?<br>
          You: <em>Pour demain, le [date]. Un aller simple.</em><br>
          Agent: En première ou deuxième classe?<br>
          You: <em>Deuxième classe, s'il vous plaît. C'est combien?</em><br>
          Agent: 45 euros.<br>
          You: <em>D'accord. Voilà ma carte bancaire.</em>
        </p>
        <h3>Scenario B: At the hotel reception</h3>
        <p>
          You: <em>Bonjour! J'ai une réservation au nom de [your name].</em><br>
          Receptionist: Bonjour! Pour combien de nuits?<br>
          You: <em>Pour deux nuits, s'il vous plaît. Est-ce que le petit-déjeuner est inclus?</em>
        </p>
        <h3>Scenario C: Asking for directions</h3>
        <p>
          You: <em>Excusez-moi, Madame / Monsieur. Où est la gare, s'il vous plaît?</em><br>
          Passer-by: C'est à gauche, puis tout droit.<br>
          You: <em>C'est loin? Je peux y aller à pied?</em>
        </p>
        <h2>Pronunciation Confidence: Indian-Speaker Notes</h2>
        <ul>
          <li><strong>Do not aspirate consonants:</strong> French p/t/k are unaspirated. Hindi has aspirated consonants (pha, tha, kha); French does not. Soften the initial burst.</li>
          <li><strong>Intonation:</strong> French sentences have a rising intonation pattern that peaks at the end of each rhythmic group, then falls at the end of the sentence. This is opposite to English's falling pattern on each word.</li>
          <li><strong>Rhythm:</strong> French is syllable-timed (each syllable roughly equal duration), unlike English which is stress-timed. Hindi/Marathi are also closer to syllable-timed — use this as a reference.</li>
          <li><strong>R:</strong> Practise daily. The uvular R is the most immediately noticeable feature of French. Even a weak attempt (a gentle 'h' at the back of the throat) is acceptable at A1.</li>
        </ul>
      `,
    },

    {
      type: "mcq",
      question: "In DELF A1 oral Task 3 (role play), which approach best demonstrates A1 competence?",
      options: [
        "Speak very slowly and use only single words to avoid errors",
        "Use memorised chunks and sentence templates confidently, even if some errors occur — communicate the task successfully",
        "Ask the examiner to repeat every question",
        "Only respond in English if you cannot remember the French",
      ],
      correct: [1],
      explanation:
        "A1 oral assessment primarily rewards communicative success. Using memorised chunks (je voudrais, s'il vous plaît, c'est combien?, etc.) is explicitly encouraged — this is how native speakers communicate in transactional contexts too. Minor grammatical errors do not fail a candidate if communication succeeds. Speaking very slowly or using only single words shows lack of fluency. Asking for repetition occasionally is fine, but excessively is penalised. English is never acceptable.",
    },

    {
      type: "msq",
      question: "Which of the following are true about French prosody (rhythm and intonation), compared to English?",
      options: [
        "French is syllable-timed — each syllable has roughly equal duration",
        "French is stress-timed — stressed syllables occur at regular intervals like English",
        "French sentence stress falls on the last syllable of each rhythmic group",
        "Hindi and Marathi are closer to syllable-timing than English is, giving Indian speakers an advantage",
      ],
      correct: [0, 2, 3],
      explanation:
        "B is false — English is stress-timed (stressed syllables occur regularly, unstressed syllables compress). French is syllable-timed (A) — each syllable takes roughly equal time. In French, stress falls on the last syllable of each rhythmic group (C), with a final drop at sentence end. Hindi/Marathi are also syllable-timed (D), giving Indian speakers a head start over English speakers in acquiring French rhythm.",
    },

  ],
};


// ───────────────────────────────────────────────────────────────────────────
// Chapter 11: Vocabulary Expansion & Functional Grammar
// ───────────────────────────────────────────────────────────────────────────

const ch11 = {
  title: "Vocabulary Expansion & Functional Grammar Refinement",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Expand vocabulary to the full A1 frequency threshold (~500 words active,
          ~1500 passive). Refine grammar structures needed to pass DELF Part C and D
          at a comfortable margin. Estimated study time: <strong>5 hours</strong>.
        </p>
        <h2>The A1 Vocabulary Target: Semantic Field Architecture</h2>
        <p>
          Rather than learning words as a flat list, organise them by semantic field.
          This enables faster retrieval and avoids interference errors.
        </p>
        <h3>Field 1: Body and Health</h3>
        <p>
          <em>la tête</em> (head), <em>les yeux</em> (eyes), <em>le nez</em> (nose),
          <em>la bouche</em> (mouth), <em>les oreilles</em> (ears), <em>le bras</em> (arm),
          <em>la main</em> (hand), <em>le dos</em> (back), <em>la jambe</em> (leg),
          <em>le pied</em> (foot). | Health: <em>avoir mal à [body part]</em> (to have pain in...),
          <em>la fièvre</em> (fever), <em>fatigué(e)</em> (tired), <em>malade</em> (ill).
        </p>
        <h3>Field 2: Home and Surroundings</h3>
        <p>
          <em>la maison</em> (house), <em>l'appartement</em> (apartment),
          <em>la cuisine</em> (kitchen), <em>le salon</em> (living room),
          <em>la chambre</em> (bedroom), <em>la salle de bains</em> (bathroom),
          <em>le quartier</em> (neighbourhood), <em>le rez-de-chaussée</em> (ground floor),
          <em>le premier étage</em> (first floor).
        </p>
        <h3>Field 3: Clothing</h3>
        <p>
          <em>un manteau</em> (coat), <em>une veste</em> (jacket), <em>un pantalon</em> (trousers),
          <em>une jupe</em> (skirt), <em>une robe</em> (dress), <em>un pull</em> (jumper),
          <em>des chaussures</em> (shoes), <em>une taille</em> (size — clothing),
          <em>une pointure</em> (size — shoes), <em>essayer</em> (to try on).
        </p>
        <h3>Field 4: Food and Eating</h3>
        <p>
          <em>le pain</em> (bread), <em>le fromage</em> (cheese), <em>la viande</em> (meat),
          <em>le poisson</em> (fish), <em>les légumes</em> (vegetables), <em>les fruits</em> (fruits),
          <em>l'eau</em> (water, F), <em>le jus d'orange</em> (orange juice),
          <em>le café</em> (coffee), <em>le thé</em> (tea).
          Verbs: <em>commander</em> (to order), <em>goûter</em> (to taste), <em>boire</em> (to drink).
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Functional Grammar: The 5 Refinements</h2>
        <p>
          These five grammar points appear in all four DELF skills and require explicit attention.
        </p>
        <h3>Refinement 1: Adjective Agreement — The Full System</h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Base (M.sg)</th><th>F.sg</th><th>M.pl</th><th>F.pl</th><th>Rule</th></tr>
          <tr><td>grand</td><td>grande</td><td>grands</td><td>grandes</td><td>Add -e (F), -s (pl)</td></tr>
          <tr><td>intelligent</td><td>intelligente</td><td>intelligents</td><td>intelligentes</td><td>Standard</td></tr>
          <tr><td>beau</td><td>belle</td><td>beaux</td><td>belles</td><td>Irregular (beau/belle)</td></tr>
          <tr><td>vieux</td><td>vieille</td><td>vieux</td><td>vieilles</td><td>Irregular</td></tr>
          <tr><td>bon</td><td>bonne</td><td>bons</td><td>bonnes</td><td>Double consonant + -e</td></tr>
          <tr><td>nouveau</td><td>nouvelle</td><td>nouveaux</td><td>nouvelles</td><td>Irregular</td></tr>
        </table>
        <h3>Refinement 2: Reflexive Verbs</h3>
        <p>
          Reflexive verbs have a pronoun that refers back to the subject.
          Pattern: <strong>subject + reflexive pronoun + verb</strong>
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Person</th><th>Reflexive pronoun</th><th>Example (se lever — to get up)</th></tr>
          <tr><td>je</td><td>me / m'</td><td>je me lève</td></tr>
          <tr><td>tu</td><td>te / t'</td><td>tu te lèves</td></tr>
          <tr><td>il/elle</td><td>se / s'</td><td>il se lève / elle se lève</td></tr>
          <tr><td>nous</td><td>nous</td><td>nous nous levons</td></tr>
          <tr><td>vous</td><td>vous</td><td>vous vous levez</td></tr>
          <tr><td>ils/elles</td><td>se / s'</td><td>ils se lèvent</td></tr>
        </table>
        <p>Key reflexive verbs at A1: <em>se lever</em> (get up), <em>se coucher</em> (go to bed),
        <em>s'appeler</em> (be called), <em>se laver</em> (wash oneself), <em>s'habiller</em> (get dressed),
        <em>se réveiller</em> (wake up).</p>
        <h3>Refinement 3: Il y a — The Existence Construction</h3>
        <p>
          <em>Il y a</em> = there is / there are (invariable — same for singular and plural).
          Negation: <em>Il n'y a pas de [noun].</em>
        </p>
        <ul>
          <li><em>Il y a un cinéma près d'ici.</em> (There is a cinema nearby.)</li>
          <li><em>Il n'y a pas de parking.</em> (There is no parking.)</li>
          <li><em>Il y a combien d'étudiants?</em> (How many students are there?)</li>
        </ul>
        <h3>Refinement 4: Depuis (since/for) — expressing ongoing duration</h3>
        <p>
          <em>Depuis</em> + present tense = have been doing something for a period.
          This is the key structural difference from English (French uses present, not present perfect).
        </p>
        <ul>
          <li><em>J'habite à Paris depuis deux ans.</em> (I have been living in Paris for two years.)</li>
          <li><em>Il travaille dans cette entreprise depuis 2019.</em></li>
        </ul>
        <h3>Refinement 5: Quantity Expressions with DE</h3>
        <p>
          After negation and after quantity expressions, the article reduces to <em>de/d'</em>:
        </p>
        <ul>
          <li><em>Je n'ai pas de voiture.</em> (I don't have a car. — NOT "pas une voiture")</li>
          <li><em>beaucoup de travail</em> (a lot of work — NOT "beaucoup du travail")</li>
          <li><em>assez d'eau</em> (enough water), <em>trop de bruit</em> (too much noise)</li>
        </ul>
      `,
    },

    {
      type: "mcq",
      question: "Which sentence correctly uses <em>depuis</em>?",
      options: [
        "J'ai étudié le français depuis trois mois.",
        "J'étudie le français depuis trois mois.",
        "J'étudiais le français depuis trois mois.",
        "J'ai été étudier le français depuis trois mois.",
      ],
      correct: [1],
      explanation:
        "'Depuis' + present tense = action that started in the past and continues NOW. This is structurally counter-intuitive for English speakers (who would use 'have been studying') but matches Hindi usage: मैं तीन महीने से फ्रेंच पढ़ रहा हूँ (present continuous + se). 'J'ai étudié' (passé composé) would mean a completed action — wrong with 'depuis' in this sense. Always: depuis + PRESENT TENSE for ongoing actions.",
    },

    {
      type: "mcq",
      question: "Choose the correct sentence: 'She doesn't have any money.'",
      options: [
        "Elle n'a pas de l'argent.",
        "Elle n'a pas d'argent.",
        "Elle n'a pas un argent.",
        "Elle a pas argent.",
      ],
      correct: [1],
      explanation:
        "After negation (pas), the article always reduces to 'de' (or 'd'' before a vowel). 'Argent' starts with a vowel → d'argent. 'Elle n'a pas de l'argent' is wrong (de + l' doesn't contract; should be just de/d'). 'Un argent' is wrong (article type and gender — argent is uncountable here). 'Elle a pas argent' is missing the article entirely — ungrammatical in writing.",
    },

    {
      type: "msq",
      question: "Which sentences correctly demonstrate adjective agreement?",
      options: [
        "C'est une belle maison. (It's a beautiful house. — maison is F.sg)",
        "Les enfants sont intelligents. (The children are intelligent. — enfants is M.pl)",
        "Elle a les yeux beau. (She has beautiful eyes. — yeux is M.pl)",
        "C'est un bon repas. (It's a good meal. — repas is M.sg)",
      ],
      correct: [0, 1, 3],
      explanation:
        "A: belle = F.sg of beau ✓. B: intelligents = M.pl ✓. C: WRONG — yeux is M.pl, so 'beau' must be 'beaux': 'Elle a les yeux beaux' (or more naturally: 'Elle a de beaux yeux' — BAGS adjective before noun). D: bon = M.sg ✓.",
    },

  ],
};


// ───────────────────────────────────────────────────────────────────────────
// Chapter 12: Full DELF A1 Mock & Expansion to Other Romance Languages
// ───────────────────────────────────────────────────────────────────────────

const ch12 = {
  title: "Full DELF A1 Mock & Romance Language Expansion Path",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Consolidate DELF A1 readiness through a full mock test framework.
          Map the acquired French structural knowledge onto Spanish, Italian, and Portuguese.
          Estimated study time: <strong>4 hours</strong>.
        </p>
        <h2>DELF A1 — Full Exam Structure Reference</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Part</th><th>Skill</th><th>Tasks</th><th>Time</th><th>Marks</th><th>Pass threshold</th></tr>
          <tr><td>A</td><td>Listening</td><td>3–4 short recordings, 6–9 questions</td><td>~20 min</td><td>25</td><td>≥5/25</td></tr>
          <tr><td>B</td><td>Reading</td><td>4 short texts, 10–12 questions</td><td>30 min</td><td>25</td><td>≥5/25</td></tr>
          <tr><td>C</td><td>Writing</td><td>Form + 40–50 word text</td><td>30 min</td><td>25</td><td>≥5/25</td></tr>
          <tr><td>D</td><td>Speaking</td><td>Guided conv. + description + role play</td><td>5–7 min</td><td>25</td><td>≥5/25</td></tr>
        </table>
        <p>
          <strong>Total:</strong> 100 marks. Pass = ≥50/100 overall AND ≥5/25 in each part
          (no single skill can be zero). DELF is awarded by the French Ministry of Education
          and has no expiry date.
        </p>
        <h2>DELF A1 Competency Checklist</h2>
        <p>Use this as a self-assessment before the exam. Can you do each of the following?</p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Competency</th><th>Chapter covered</th><th>Self-rating (1–5)</th></tr>
          <tr><td>Decode any French word phonologically</td><td>Ch. 2</td><td>___</td></tr>
          <tr><td>Recognise French cognates from English</td><td>Ch. 3</td><td>___</td></tr>
          <tr><td>Produce 8 sentence templates correctly</td><td>Ch. 4</td><td>___</td></tr>
          <tr><td>Conjugate top-30 verbs in present tense</td><td>Ch. 5</td><td>___</td></tr>
          <tr><td>Introduce myself fully in French (1 min)</td><td>Ch. 6</td><td>___</td></tr>
          <tr><td>Understand numbers, times, prices in spoken French</td><td>Ch. 7</td><td>___</td></tr>
          <tr><td>Extract information from A1 reading texts</td><td>Ch. 8</td><td>___</td></tr>
          <tr><td>Write a 40–50 word message correctly</td><td>Ch. 9</td><td>___</td></tr>
          <tr><td>Perform 3 role-play scenarios (shopping, directions, hotel)</td><td>Ch. 10</td><td>___</td></tr>
          <tr><td>Use adjective agreement, depuis, il y a, reflexives, de + negation</td><td>Ch. 11</td><td>___</td></tr>
        </table>
        <p>Any rating of 1–2: revisit that chapter. Any rating of 3: more practice needed.
        Rating 4–5: exam-ready for that skill.</p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Expansion Path: French → Spanish → Italian → Portuguese</h2>
        <p>
          Your French acquisition is not an isolated achievement — it is a
          <strong>Romance language kernel</strong>. Here is the structural transfer map.
        </p>
        <h3>What transfers from French directly</h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French feature</th><th>Spanish equivalent</th><th>Italian equivalent</th><th>Transfer cost</th></tr>
          <tr><td>Grammatical gender (M/F)</td><td>Same — M/F</td><td>Same — M/F</td><td>Zero</td></tr>
          <tr><td>SVO sentence order</td><td>Same</td><td>Same (+ flexible)</td><td>Zero</td></tr>
          <tr><td>Definite articles (le/la/les)</td><td>el/la/los/las</td><td>il/la/i/le/gli</td><td>Low</td></tr>
          <tr><td>-tion words (nation, action)</td><td>-ción (nación)</td><td>-zione (nazione)</td><td>Low</td></tr>
          <tr><td>-té words (liberté)</td><td>-dad (libertad)</td><td>-tà (libertà)</td><td>Low — different suffix</td></tr>
          <tr><td>-ique words (musique)</td><td>-ico (música)</td><td>-ica (musica)</td><td>Low</td></tr>
          <tr><td>Verb groups (-er, -ir)</td><td>-ar, -er, -ir</td><td>-are, -ere, -ire</td><td>Low</td></tr>
          <tr><td>Negation (ne…pas)</td><td>no + verb (single word)</td><td>non + verb</td><td>Simplification!</td></tr>
          <tr><td>Passé composé (avoir/être + pp)</td><td>Pretérito perfecto (haber + pp)</td><td>Passato prossimo (avere/essere + pp)</td><td>Near-zero</td></tr>
          <tr><td>Near future (aller + inf.)</td><td>ir + a + inf. (voy a comer)</td><td>stare + per + inf. (sto per mangiare)</td><td>Spanish: identical!</td></tr>
        </table>
        <h3>Estimated hours to reach A1 in Spanish / Italian after French A1</h3>
        <ul>
          <li><strong>Spanish from French A1:</strong> ~25–35 hours (pronunciation easier, no nasal vowels, simpler articles, Spanish regularises much of what French irregularises)</li>
          <li><strong>Italian from French A1:</strong> ~30–40 hours (closer to Latin than French; phonologically transparent — what you see is what you say)</li>
          <li><strong>Portuguese from French A1:</strong> ~40–50 hours (European Portuguese has nasals like French; Brazilian Portuguese pronunciation is more accessible)</li>
        </ul>
        <h3>The Divergence Points: What to unlearn</h3>
        <ul>
          <li><strong>Silent letters:</strong> French has many; Spanish and Italian virtually none. Stop suppressing consonants.</li>
          <li><strong>Subject pronouns:</strong> Spanish and Italian are pro-drop — the subject pronoun is often omitted (unlike French where it is mandatory). "Parlo italiano" = I speak Italian (no subject pronoun needed in Italian).</li>
          <li><strong>Verb+infinitive order:</strong> Spanish/Italian modal + infinitive same as French ✓. But Spanish reflexive pronouns can attach to infinitives: "quiero hablarme" vs. French "je veux me parler" — slight rearrangement.</li>
        </ul>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Recommended Study Schedule</h2>
        <h3>Fast-Track (30 hours — 3–4 hours/day, ~10 days)</h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Day</th><th>Chapters</th><th>Focus</th></tr>
          <tr><td>1</td><td>1–2</td><td>Course philosophy + Full phonological system</td></tr>
          <tr><td>2</td><td>3</td><td>Cognate engine — activate passive lexicon</td></tr>
          <tr><td>3</td><td>4</td><td>8 Sentence templates — deep practice</td></tr>
          <tr><td>4</td><td>5</td><td>Verb paradigms — drills to automaticity</td></tr>
          <tr><td>5</td><td>6</td><td>Survival communication — scenario practice</td></tr>
          <tr><td>6</td><td>7</td><td>DELF listening strategies + practice audio</td></tr>
          <tr><td>7</td><td>8</td><td>DELF reading — 3 full practice texts</td></tr>
          <tr><td>8</td><td>9</td><td>DELF writing — 3 full practice writing tasks</td></tr>
          <tr><td>9</td><td>10</td><td>DELF speaking — record 5 role plays</td></tr>
          <tr><td>10</td><td>11–12</td><td>Grammar refinement + full mock DELF</td></tr>
        </table>
        <h3>Normal-Track (45 hours — 1–2 hours/day, ~30 days)</h3>
        <p>
          Follow the same chapter sequence but spread over 30 days. Days 1–15: Course 1 (Foundations),
          one chapter every 2–3 days with daily 15-min CI listening. Days 16–30: Course 2 (DELF A1),
          one chapter every 2 days with daily speaking practice and SRS review.
        </p>
        <h2>Immersion Methods — Ranked by Effectiveness at A1</h2>
        <ol>
          <li><strong>Daily SRS (Anki):</strong> 15–20 min/day. Non-negotiable. Highest ROI per minute.</li>
          <li><strong>CI Listening:</strong> Extra en Français (YouTube), Français avec Pierre (YouTube), RFI en français facile (podcast).</li>
          <li><strong>Reading graded texts:</strong> Le Petit Prince is A2+ — too early. Use TV5Monde A1 reading exercises or Dino Lernt Französisch adapted texts (note: this series is in French).</li>
          <li><strong>Speaking practice:</strong> Tandem language exchange app (find a French speaker learning English/Hindi), HelloTalk, or italki for occasional tutor sessions.</li>
          <li><strong>Passive immersion:</strong> Change phone/computer language to French. Follow French social media accounts in domains you know (physics, mathematics — you can use domain knowledge to understand more).</li>
        </ol>
        <h2>External Resources</h2>
        <ul>
          <li><strong>Forvo.com</strong> — Native pronunciation of any French word on demand</li>
          <li><strong>TV5Monde Apprendre</strong> — tv5monde.com/apprendre — official DELF-aligned exercises</li>
          <li><strong>France Education International (FEI)</strong> — DELF official practice tests: delfdalf.fr</li>
          <li><strong>Anki</strong> — Spaced repetition system for all SRS items from this course</li>
          <li><strong>Linguee.com</strong> — French-English dictionary with contextual sentence examples</li>
          <li><strong>Le Robert Dictionnaire</strong> — Authoritative French-French dictionary for A2+ level</li>
          <li><strong>Bescherelle</strong> — Complete French verb conjugation reference</li>
        </ul>
      `,
    },

    {
      type: "mcq",
      question: "After reaching French A1, which Romance language would be easiest to acquire next, and why?",
      options: [
        "Portuguese — because it also has nasal vowels similar to French",
        "Spanish — because it shares near-identical sentence structure, has no silent letters (removing a major cognitive load), uses the same near-future construction (ir + a + inf.), and has even more regular verb paradigms",
        "Italian — because it is closest to Latin, from which French also derives",
        "Romanian — because it is the most conservative Romance language",
      ],
      correct: [1],
      explanation:
        "Spanish from French A1 is the fastest acquisition path. Key reasons: (1) Near-future: 'voy a comer' ← identical logic to 'je vais manger'. (2) Passé composé ≈ pretérito perfecto (haber + pp). (3) All consonants pronounced → simpler phonology than French. (4) SVO order, M/F gender, article system — all transfer. (5) ~80% vocabulary overlap. Estimated 25–35 hours to Spanish A1 from French A1, vs. 45+ from zero.",
    },

    {
      type: "msq",
      question: "Which of the following correctly identify features of the DELF A1 exam?",
      options: [
        "There are four skills tested: listening, reading, writing, speaking",
        "The total mark is 100, with 25 marks per skill",
        "A candidate must score ≥5/25 in each individual skill to pass",
        "The DELF A1 certificate expires after 2 years",
      ],
      correct: [0, 1, 2],
      explanation:
        "A: ✓ — four skills (Parts A–D). B: ✓ — 25 marks each = 100 total. C: ✓ — minimum per-skill threshold prevents passing on only 3 skills. D: WRONG — DELF certificates are valid for life (no expiry), issued by the French Ministry of Education. This is one of their key advantages over DELF's competitors.",
    },

    {
      type: "mcq",
      question: "The French structure 'J'étudie le français depuis six mois' maps onto which Hindi structure?",
      options: [
        "मैंने छह महीने पहले फ्रेंच पढ़ी। (Past completed action)",
        "मैं छह महीने से फ्रेंच पढ़ रहा हूँ। (Present continuous with से, ongoing from past)",
        "मैं छह महीने बाद फ्रेंच पढ़ूँगा। (Future action)",
        "मैं फ्रेंच पढ़ता हूँ। (General present habit, no duration)",
      ],
      correct: [1],
      explanation:
        "French 'depuis' + present tense = action that started in the past and continues now. Hindi uses present continuous + 'से' (se, meaning 'since/from') for exactly this: 'मैं छह महीने से फ्रेंच पढ़ रहा हूँ' = I have been studying French for six months (and still am). This is the key cross-linguistic transfer: French present tense + depuis ↔ Hindi present continuous + से. Both differ from English which uses present perfect continuous ('have been studying').",
    },

    {
      type: "text",
      data: `
        <h2>Final: The Linguistic Interoperability Summary</h2>
        <p>
          You now have not just French — you have a <strong>Romance language cognitive framework</strong>.
          The structural principles you have acquired:
        </p>
        <ol>
          <li><strong>Grammatical gender</strong> — a feature of all Romance languages, now intuitive.</li>
          <li><strong>Verb paradigm logic</strong> — stem + person/number endings, with predictable irregular clusters.</li>
          <li><strong>Auxiliary verb constructions</strong> — compound past, modal + infinitive, periphrastic future — all shared across the family.</li>
          <li><strong>Article system</strong> — definite/indefinite/partitive, with elision before vowels — all Romance languages have an article system (Romanian's is postfixed, uniquely).</li>
          <li><strong>Adjective agreement</strong> — M/F/Sg/Pl marking on adjectives — universal in Romance.</li>
          <li><strong>Latin-root transformation rules</strong> — the etymological map extends to all Romance languages. -tion → -ción (ES), -zione (IT), -ção (PT). The cognate engine is generative.</li>
          <li><strong>Phonological decoding</strong> — Spanish and Italian are phonologically transparent; having decoded opaque French phonology, the transparent systems feel trivially easy.</li>
        </ol>
        <p>
          <strong>You did not learn French vocabulary. You installed a Romance language operating system.</strong>
        </p>
        <h2>Milestone System</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Milestone</th><th>Criteria</th><th>Chapter target</th></tr>
          <tr><td>M1 — Phonological Decoder</td><td>Read any French word aloud correctly</td><td>Ch. 2 complete</td></tr>
          <tr><td>M2 — Lexical Bootstrapper</td><td>Infer meaning of 20 new French words using cognate rules</td><td>Ch. 3 complete</td></tr>
          <tr><td>M3 — Grammar Engine Online</td><td>Produce all 8 templates in 60 seconds each</td><td>Ch. 4–5 complete</td></tr>
          <tr><td>M4 — Survival Ready</td><td>Complete the tourist office simulation without notes</td><td>Ch. 6 complete</td></tr>
          <tr><td>M5 — DELF Skills Operational</td><td>Score ≥60% on a practice test in each of 4 skills</td><td>Ch. 7–10 complete</td></tr>
          <tr><td>M6 — DELF A1 Ready</td><td>Full mock test score ≥60/100 with all parts ≥8/25</td><td>Ch. 11–12 complete</td></tr>
        </table>
      `,
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// BOOK EXPORT — standard { title, chapters } shape
// ═══════════════════════════════════════════════════════════════════════════

export const frenchAcquisitionCourse = {
  title: "French Acquisition System",
  chapters: [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch10, ch11, ch12],
};
