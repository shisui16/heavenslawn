/**
 * Book: French for Physicists in France — Context-Accelerated Acquisition
 *
 * Designed for: M2 SAP student at University of Strasbourg (IPHC).
 * Native/near-native English. Fluent Hindi & Marathi. French A1 base.
 * Already living in France and absorbing physics French daily.
 *
 * Core thesis: Use physics/maths domain fluency as a comprehensible-input
 * scaffold to accelerate general French acquisition beyond the normal A1→B1
 * trajectory. Physics context = free semantic anchoring. Exploit it.
 *
 * Structure:
 *   Chapter 1  — The Physics Advantage: How to exploit domain knowledge
 *   Chapter 2  — Phonetics I: The French Sound System for Indian-English Ears
 *   Chapter 3  — Phonetics II: Connected Speech, Rhythm & Lab-Room Prosody
 *   Chapter 4  — Physics French: Lecture, Seminar & Whiteboard Language
 *   Chapter 5  — Maths French: Notation, Proof & Derivation Language
 *   Chapter 6  — University French: Admin, Email & Campus Life
 *   Chapter 7  — Strasbourg & Alsace: Local Language & Cultural Context
 *   Chapter 8  — Everyday French Accelerated via Physics Intuition
 *   Chapter 9  — Grammar Engine: A1→B1 Structural Upgrade
 *   Chapter 10 — Speaking Confidence: From Lab to Street
 *   Chapter 11 — Reading & Writing at B1: Papers, Reports, Messages
 *   Chapter 12 — Full Integration: Immersion Plan & Long-Term Roadmap
 *
 * Format: { title, chapters: [ { title, content: [...] } ] }
 * Content types: text | mcq | msq
 */

// ═══════════════════════════════════════════════════════════════════════════
// Chapter 1: The Physics Advantage — Cognitive Strategy
// ═══════════════════════════════════════════════════════════════════════════

const ch1 = {
  title: "The Physics Advantage — Your Cognitive Strategy",
  content: [

    {
      type: "text",
      data: `
        <h2>Why You Are Not a Normal Language Learner</h2>
        <p>
          Most people learning French in France arrive with no domain anchor.
          Every sentence is a decoding problem from scratch. You have something
          most learners never get: a <strong>high-bandwidth semantic channel</strong>
          that is already open and already French.
        </p>
        <p>
          When your supervisor says <em>"la fonction d'onde s'effondre lors de la mesure"</em>,
          you do not need to decode French. You know what must be being said —
          the wavefunction collapses upon measurement. Your brain works
          <strong>backwards from meaning to form</strong>. This is acquisition
          running in reverse-inference mode, and it is dramatically faster
          than forward decoding.
        </p>
        <p>
          This course is built around one core principle: <strong>use what you
          already know in French (physics vocabulary, seminar structures,
          paper abstracts) as the comprehensible input engine</strong>, and let
          general French grow out of that scaffold by controlled extension.
        </p>
        <h2>The Three Acquisition Channels You Have Right Now</h2>
        <ol>
          <li>
            <strong>Channel 1 — Physics lectures and seminars:</strong>
            Lexically dense, structurally simple. Speakers use the same
            ~50 sentence frames. The technical nouns are Latin cognates.
            This is already i+1 input for you. <em>Use it consciously.</em>
          </li>
          <li>
            <strong>Channel 2 — Written French (papers, slides, lab notices):</strong>
            You can likely read a French abstract right now at 70–80% comprehension.
            This is a free daily reading workout — take it.
          </li>
          <li>
            <strong>Channel 3 — Your labmates and professors:</strong>
            The richest possible source. They will speak to you in real French,
            calibrated to what they see you understand. This is personalised
            comprehensible input that no app can replicate.
          </li>
        </ol>
      `,
    },

    {
      type: "text",
      data: `
        <h2>The Asymmetry Problem — and How to Fix It</h2>
        <p>
          Physics French will build your <strong>passive comprehension</strong>
          much faster than your <strong>spoken production</strong>. You will
          soon understand 80% of a colloquium but struggle to buy bread.
          This is normal and expected — but you must manage it deliberately.
        </p>
        <p>
          The reason: physics French is lexically constrained and context-rich.
          The boulangerie is not. "Une baguette tradition, s'il vous plaît" has
          no semantic anchor from quantum mechanics.
        </p>
        <p>
          <strong>The fix:</strong> Treat everyday French as a <em>second,
          parallel domain</em> — just like you would treat a second subfield
          of physics. Acquire its vocabulary set, its sentence patterns,
          its register conventions. Do not expect physics fluency to transfer
          automatically. It will transfer structurally (grammar, rhythm,
          phonology) but not lexically.
        </p>
        <h2>Course Architecture: Two Parallel Tracks</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Track A — Domain French</th><th>Track B — General French</th></tr>
          <tr><td>Physics lecture language</td><td>Shopping, transport, food</td></tr>
          <tr><td>Maths proof language</td><td>Social conversation</td></tr>
          <tr><td>Paper reading / abstract writing</td><td>Administrative French (university, prefecture)</td></tr>
          <tr><td>Seminar questions</td><td>Medical, banking, housing</td></tr>
          <tr><td>Lab safety, protocols</td><td>Alsatian culture, Strasbourg context</td></tr>
        </table>
        <p>
          Track A is already largely operational. This course builds Track B
          by bootstrapping from Track A wherever possible, and filling gaps explicitly.
        </p>
        <h2>Your Strasbourg Advantage</h2>
        <p>
          Strasbourg is bilingual by history (French–German border city, Alsace).
          You will hear Alsatian French — slightly different intonation, some German
          loan words, occasional Alsatian dialect words. Do not be alarmed.
          Standard French is universally understood and spoken in the university
          and city. The Alsatian accent is mild and will not impede your acquisition.
          Chapter 7 covers local context explicitly.
        </p>
      `,
    },

    {
      type: "mcq",
      question: "You attend a French physics colloquium and understand ~75% without effort. A colleague invites you for coffee and you understand ~30%. What best explains this gap?",
      options: [
        "Physics French is grammatically simpler than conversational French",
        "Colloquial French is spoken faster than academic French",
        "Your physics domain knowledge provides semantic anchoring in the lecture — you know what must be said. In conversation, no such anchor exists and you must decode purely from the French signal.",
        "You need more grammar study before you can understand conversation.",
      ],
      correct: [2],
      explanation:
        "The gap is about semantic scaffolding, not linguistic difficulty. In a lecture on the Higgs mechanism, you already know the content — so partial French decoding is enough. At coffee, the topics are unpredictable, the vocabulary is colloquial, and there is no domain knowledge to fill the gaps. The solution is not more grammar — it is deliberate vocabulary acquisition in everyday domains, combined with exposure.",
    },

    {
      type: "msq",
      question: "Which of the following are active acquisition strategies available to you RIGHT NOW in Strasbourg? (Select all that apply)",
      options: [
        "Attend every departmental seminar and colloquium, including outside your specialty",
        "Read the IPHC website, lab safety notices, and internal communications in French without translating",
        "Ask labmates to explain their research to you in French (you know enough physics to follow)",
        "Wait until your French is stronger before attempting real conversations",
      ],
      correct: [0, 1, 2],
      explanation:
        "D is the worst possible strategy — delay closes the critical acquisition window. A, B, C are all immediately available high-ROI inputs. Seminars outside your specialty are especially valuable: you understand less physics content, so you are forced to decode more French — a controlled difficulty increase. Lab safety notices and internal emails are short, written, and physics-adjacent — ideal daily reading practice.",
    },

    {
      type: "mcq",
      question: "What is the fastest way to move from passive comprehension to active speaking at your current stage?",
      options: [
        "Study grammar rules systematically before attempting to speak",
        "Speak about physics topics first — you have the vocabulary and confidence — then extend to other domains gradually",
        "Only speak with native speakers, never with other international students",
        "Translate everything mentally from English before speaking",
      ],
      correct: [1],
      explanation:
        "Speaking about your own research domain first is the optimal bootstrap. You already have the vocabulary (it is shared Latin-origin terminology). You have things to say. You have genuine communicative intent. Success in physics conversation builds phonological confidence and teaches you the French sentence frames — which then transfer to other topics. Mental translation (D) is a crutch that slows acquisition; it should be phased out actively.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 2: Phonetics I — The French Sound System for Indian-English Ears
// ═══════════════════════════════════════════════════════════════════════════

const ch2 = {
  title: "Phonetics I — The French Sound System for Indian-English Ears",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Build a precise phonological model of French, calibrated to the specific
          interference patterns of Indian-English speakers. This is not a repeat of
          the A1 course — this chapter goes deeper into production accuracy,
          using your physics ear as a tool. Estimated study time: <strong>3 hours</strong>.
        </p>
        <h2>Why Phonetics Matters More at Your Stage</h2>
        <p>
          At A1 you needed approximate phonology — good enough to be understood.
          At A2–B1 in France, living among native speakers, you need
          <strong>production that does not impede fluency</strong>. Mispronunciation
          of a single vowel can make a word unrecognisable
          (<em>dessus</em> vs. <em>dessous</em>, above vs. below —
          one vowel changes the meaning entirely).
        </p>
        <p>
          More importantly: your professors will occasionally write a French word
          and say it. If your phonological model is accurate, you hear it,
          you map it, you own it. If it is inaccurate, you mishear and
          mis-store it — a compounding error.
        </p>
        <h2>The French Vowel Space — IPA with Indian-English Anchors</h2>
        <p>
          French has 12–15 distinct vowel phonemes. English has 12–14 but
          distributed differently. Here is the complete map with anchors
          from your language inventory:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr>
            <th>IPA</th><th>French spelling(s)</th><th>Example</th>
            <th>English anchor</th><th>Hindi anchor</th><th>Production note</th>
          </tr>
          <tr>
            <td>/i/</td><td>i, î</td><td><em>île, ici</em></td>
            <td>'ee' in 'see'</td><td>ई</td>
            <td>Pure, no glide. Shorter than English.</td>
          </tr>
          <tr>
            <td>/y/</td><td>u, û</td><td><em>tu, sur, lune</em></td>
            <td>NO equivalent</td><td>NO equivalent</td>
            <td>Round lips for /u/, tongue for /i/. The hardest French vowel.</td>
          </tr>
          <tr>
            <td>/u/</td><td>ou, oû</td><td><em>vous, tout, où</em></td>
            <td>'oo' in 'boot'</td><td>ऊ</td>
            <td>Very rounded, back. Pure — no glide to /w/.</td>
          </tr>
          <tr>
            <td>/e/</td><td>é, er, ez, et</td><td><em>été, parler, chez</em></td>
            <td>'ay' in 'day' — but NO glide</td><td>ए (short)</td>
            <td>Tense, closed. English 'ay' glides to /j/ — French does not.</td>
          </tr>
          <tr>
            <td>/ɛ/</td><td>è, ê, ai, ei, e+2 cons.</td><td><em>mère, fête, mais, belle</em></td>
            <td>'e' in 'bed'</td><td>ऐ</td>
            <td>Open e. More open than /e/.</td>
          </tr>
          <tr>
            <td>/ø/</td><td>eu, œu (open syllable)</td><td><em>feu, bleu, deux</em></td>
            <td>NO equivalent</td><td>NO equivalent</td>
            <td>Round lips for /o/, tongue for /e/. Say 'ay' with rounded lips.</td>
          </tr>
          <tr>
            <td>/œ/</td><td>eu, œ (closed syllable)</td><td><em>peur, cœur, heure</em></td>
            <td>NO equivalent (closest: 'ur' in 'fur' — British RP)</td><td>NO equivalent</td>
            <td>More open than /ø/. Say 'e' in 'bed' with rounded lips.</td>
          </tr>
          <tr>
            <td>/ə/</td><td>e (unstressed)</td><td><em>le, de, que, venir</em></td>
            <td>'uh' schwa</td><td>अ (reduced)</td>
            <td>Often dropped in fast speech: <em>je ne sais pas</em> → [zhnsɛpa].</td>
          </tr>
          <tr>
            <td>/a/</td><td>a, à</td><td><em>chat, table, là</em></td>
            <td>'a' in 'cat' (British)</td><td>अ (front)</td>
            <td>Front a. Do NOT use the Indian English backed 'a' as in 'car'.</td>
          </tr>
          <tr>
            <td>/ɑ/</td><td>â, some 'a'</td><td><em>pâte, bas</em></td>
            <td>'a' in 'father'</td><td>आ (back)</td>
            <td>Back a. Distinction /a/ vs /ɑ/ fading in modern French.</td>
          </tr>
          <tr>
            <td>/o/</td><td>o, ô, au, eau</td><td><em>mot, tôt, eau, beau</em></td>
            <td>'o' in 'go' — NO glide</td><td>ओ (pure)</td>
            <td>Pure round O. English 'go' glides to /w/ — French does not.</td>
          </tr>
          <tr>
            <td>/ɔ/</td><td>o (closed syllable)</td><td><em>or, bonne, sol</em></td>
            <td>'o' in 'off' (British)</td><td>ऑ</td>
            <td>Open O. Lower and more open than /o/.</td>
          </tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>The Four Nasal Vowels</h2>
        <p>
          Nasal vowels are produced with air flowing through both mouth and nose
          simultaneously. The consonant (n/m) is <strong>absorbed into the vowel</strong>
          — it is not separately pronounced.
          Hindi has nasal vowels (candrabindu: हाँ, माँ) — use this as your
          physical reference point.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>IPA</th><th>Spelling trigger</th><th>Example</th><th>Physics context</th><th>Hindi cue</th></tr>
          <tr>
            <td>/ɑ̃/</td><td>an, am, en, em + consonant or end</td>
            <td><em>champ, enfant, temps</em></td>
            <td><em>champ magnétique, temps de relaxation</em></td>
            <td>हाँ — but with mouth more open</td>
          </tr>
          <tr>
            <td>/ɛ̃/</td><td>in, im, ain, ein, yn, ym</td>
            <td><em>vin, fin, bain, plein</em></td>
            <td><em>spin, invariant, symétrie</em></td>
            <td>No direct equivalent — between ए and ऐ, nasalised</td>
          </tr>
          <tr>
            <td>/ɔ̃/</td><td>on, om</td>
            <td><em>bon, nombre, fonction</em></td>
            <td><em>fonction d'onde, section efficace</em></td>
            <td>ओं — rounded nasal</td>
          </tr>
          <tr>
            <td>/œ̃/</td><td>un, um</td>
            <td><em>un, lundi, parfum</em></td>
            <td><em>un photon, un neutron</em></td>
            <td>Merging with /ɛ̃/ in modern Parisian French</td>
          </tr>
        </table>
        <p>
          <strong>The nasalisation test — critical rule:</strong>
          Nasalisation occurs when vowel + n/m is followed by a consonant or ends the word.
          If n/m is followed by a vowel or is doubled (nn, mm), no nasalisation.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Word</th><th>Nasal?</th><th>Reason</th></tr>
          <tr><td><em>bon</em> /bɔ̃/</td><td>Yes</td><td>on at end of word</td></tr>
          <tr><td><em>bonne</em> /bɔn/</td><td>No</td><td>double-n + e breaks nasalisation</td></tr>
          <tr><td><em>fonction</em> /fɔ̃ksjɔ̃/</td><td>Yes (both)</td><td>on+c and on+end</td></tr>
          <tr><td><em>phonon</em> /fɔnɔ̃/</td><td>Partially</td><td>first on+n = no; second on+end = yes</td></tr>
          <tr><td><em>proton</em> /prɔtɔ̃/</td><td>Yes</td><td>on at end</td></tr>
          <tr><td><em>invariant</em> /ɛ̃varjɑ̃/</td><td>Yes (both)</td><td>in+v and an+t</td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>The French Consonants — Points of Difference</h2>
        <p>
          Most French consonants are similar to English. The key differences:
        </p>
        <h3>The French R — /ʁ/</h3>
        <p>
          The most distinctive feature of French pronunciation. It is a
          <strong>uvular fricative</strong> — produced at the very back of the mouth,
          where the soft palate meets the throat. Not the Hindi/Marathi retroflex ड़.
          Not the English approximant /r/.
        </p>
        <p>
          <strong>Production procedure:</strong>
        </p>
        <ol>
          <li>Open your mouth slightly. Relax the tongue — it lies flat.</li>
          <li>Try to say the German 'Bach' or 'ach' — the friction at the back of the throat. That back-of-throat friction is the target.</li>
          <li>Now voice it (add vibration from the vocal cords): /ʁ/.</li>
          <li>Approximate at A2 level: a soft guttural 'h' at the back of the throat is acceptable and will not impede comprehension.</li>
        </ol>
        <p>
          Practice words from your domain: <em>réaction, résonance, radiation, relativité,
          rupture, réseau, raffinement</em>. All begin with /ʁ/.
        </p>
        <h3>Unaspirated stops: /p/, /t/, /k/</h3>
        <p>
          English and Hindi both aspirate voiceless stops at the start of stressed syllables
          (English: pin [pʰɪn]; Hindi: पल [pʰal]). French does <strong>not</strong> aspirate.
          French /p/, /t/, /k/ are clean, unaspirated.
        </p>
        <p>
          <strong>Test:</strong> Hold a thin piece of paper in front of your mouth.
          Say 'pin' in English — the paper moves. Say 'pin' with no aspiration — the paper stays still.
          That is the French /p/. Practice: <em>particule, potentiel, température, cinétique, champ</em>.
        </p>
        <h3>The consonant /ɲ/ — gn</h3>
        <p>
          Spelled 'gn'. Like the Spanish 'ñ' or Italian 'gn'. Similar to Hindi ञ or the
          'ny' in 'canyon'. Examples: <em>magnétique, signal, cognition, alignement</em>.
          You encounter this in physics constantly: <em>champ magnétique, signal, ligne</em>.
        </p>
        <h3>The consonant /ʒ/ — j and g+e/i</h3>
        <p>
          The sound in English 'measure', 'vision', 'genre'. French 'j' is always this sound.
          Never the English /dʒ/ as in 'jump'. Physics examples: <em>jauge (gauge),
          jet (jet), trajectoire, éjection</em>.
        </p>
      `,
    },

    {
      type: "mcq",
      question: "The French word <em>proton</em> — how is the final syllable '-on' pronounced?",
      options: [
        "/prɒtɒn/ — both o's are oral, n is pronounced",
        "/prɔtɔ̃/ — final 'on' is nasal, the n is absorbed into the vowel",
        "/prəʊtɒn/ — like the English word 'proton'",
        "/prɔtɔn/ — final n is pronounced separately",
      ],
      correct: [1],
      explanation:
        "In French, 'on' at the end of a word is always nasal: /ɔ̃/. The n is not pronounced as a separate consonant — it nasalises the vowel and disappears. So 'proton' = /prɔtɔ̃/. This is different from English /prəʊtɒn/. The same applies to all particle names ending in -on: neutron /nøtrɔ̃/, photon /fɔtɔ̃/, phonon /fɔnɔ̃/, meson /mezɔ̃/. You hear this in every physics lecture — you now have the phonological rule.",
    },

    {
      type: "mcq",
      question: "Your professor writes <em>magnétique</em> on the board and says it aloud. Which phoneme should you hear for the 'gn' cluster?",
      options: [
        "/gn/ — two separate sounds: hard g + n",
        "/ŋ/ — like the 'ng' in 'sing'",
        "/ɲ/ — a single palatal nasal, like 'ny' in 'canyon'",
        "/g/ — the n is silent",
      ],
      correct: [2],
      explanation:
        "'Gn' in French is always /ɲ/ — a single palatal nasal consonant. It is produced with the tongue touching the hard palate, simultaneous with nasal resonance. Similar to Hindi ञ, Spanish ñ. 'Magnétique' = /maɲetik/. Other physics examples: signal /siɲal/, ligne /liɲ/, alignement /aliɲmɑ̃/. This sound appears very frequently in French physics vocabulary.",
    },

    {
      type: "msq",
      question: "Which of the following French vowels have NO equivalent in English, Hindi, or Marathi, and therefore require dedicated physical practice? (Select all that apply)",
      options: [
        "/y/ — the French U (as in <em>tu, lune, sur</em>)",
        "/ø/ — the closed EU (as in <em>feu, bleu, deux</em>)",
        "/i/ — the French I (as in <em>ici, île</em>)",
        "/œ/ — the open EU (as in <em>peur, heure, cœur</em>)",
      ],
      correct: [0, 1, 3],
      explanation:
        "/i/ (C) exists in English ('see'), Hindi (ई) and Marathi — no new muscle memory required. The three front rounded vowels /y/, /ø/, /œ/ do not exist in English, Hindi, or Marathi. They all require the same physical trick: tongue in front position (as for /i/ or /e/) while lips are rounded (as for /u/ or /o/). This tension between tongue and lip position produces the French rounded front vowels. Physics examples: /y/ in 'une particule', /ø/ in 'deux photons', /œ/ in 'l'heure du cours'.",
    },

    {
      type: "text",
      data: `
        <h2>Phonetic Minimal Pairs — Physics Edition</h2>
        <p>
          These pairs differ by a single phoneme. Confusing them in a physics
          context produces either nonsense or a different physics term.
          Practice distinguishing and producing them:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Pair</th><th>IPA</th><th>Meaning</th><th>Confusion risk</th></tr>
          <tr>
            <td><em>dessus / dessous</em></td>
            <td>/dəsy/ vs /dəsu/</td>
            <td>above / below</td>
            <td>High — identical except /y/ vs /u/. Your /y/ must be correct.</td>
          </tr>
          <tr>
            <td><em>masse / masse</em>... <em>base / vase</em></td>
            <td>/mas/ vs /baz/</td>
            <td>mass / vase (base)</td>
            <td>Medium — /s/ vs /z/ voicing distinction.</td>
          </tr>
          <tr>
            <td><em>poids / voix</em></td>
            <td>/pwa/ vs /vwa/</td>
            <td>weight / voice</td>
            <td>Medium — /p/ vs /v/.</td>
          </tr>
          <tr>
            <td><em>son / sans</em></td>
            <td>/sɔ̃/ vs /sɑ̃/</td>
            <td>its / without</td>
            <td>High — nasal vowel distinction /ɔ̃/ vs /ɑ̃/.</td>
          </tr>
          <tr>
            <td><em>rayon / raison</em></td>
            <td>/rɛjɔ̃/ vs /rɛzɔ̃/</td>
            <td>ray/radius / reason</td>
            <td>Medium — /j/ vs /z/ distinction.</td>
          </tr>
          <tr>
            <td><em>champ / temps</em></td>
            <td>/ʃɑ̃/ vs /tɑ̃/</td>
            <td>field / time</td>
            <td>High — same nasal vowel, only initial consonant differs. Both extremely common.</td>
          </tr>
        </table>
        <h2>Listening Exercise — Phoneme Discrimination</h2>
        <ol>
          <li>
            Go to Forvo.com. Search: <em>dessus</em> then <em>dessous</em>.
            Listen 5 times each. Note the /y/ vs /u/ difference in the final syllable.
          </li>
          <li>
            Search: <em>champ</em> then <em>temps</em>. Both are /ɑ̃/ — the difference
            is only the initial consonant. Isolate and identify /ʃ/ vs /t/.
          </li>
          <li>
            Search: <em>rayon</em>. This word appears in your coursework
            (rayon gamma, rayon X). Confirm you are producing /rɛjɔ̃/ not /rɛzɔ̃/.
          </li>
        </ol>
        <h2>SRS Items — Phonetics I</h2>
        <ul>
          <li>French /y/ production → round for /u/, tongue for /i/ → words: tu, lune, sur, une</li>
          <li>French /ø/ production → round for /o/, tongue for /e/ → words: feu, bleu, deux</li>
          <li>Nasalisation rule → vowel+n/m + {consonant or end} = nasal; vowel+nn/mm or +vowel = not nasal</li>
          <li>French R /ʁ/ → uvular fricative, voiced, back of throat</li>
          <li>French stops /p,t,k/ → unaspirated (no puff of air)</li>
          <li>gn → always /ɲ/ (magnétique, signal, ligne)</li>
          <li>j and g+e/i → always /ʒ/ (jauge, jet, éjection)</li>
        </ul>
      `,
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 3: Phonetics II — Connected Speech, Rhythm & Lab Prosody
// ═══════════════════════════════════════════════════════════════════════════

const ch3 = {
  title: "Phonetics II — Connected Speech, Rhythm & Prosody",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Understand how French words change shape when spoken in real sentences.
          This is where the gap between written French and heard French lives.
          Mastering connected speech will dramatically improve your listening comprehension
          in lectures and conversations. Estimated study time: <strong>2.5 hours</strong>.
        </p>
        <h2>French Rhythm: Syllable-Timing</h2>
        <p>
          English is <strong>stress-timed</strong>: stressed syllables occur at
          roughly regular intervals, and unstressed syllables compress to fill the gaps.
          This is why English sounds "bouncy" and why Indian English often sounds
          accented — Indian languages are syllable-timed, and learners carry that
          rhythm into English.
        </p>
        <p>
          French is <strong>syllable-timed</strong>: each syllable takes approximately
          equal duration. There is no compression of unstressed syllables.
          <strong>This means your Hindi/Marathi rhythm intuition is closer to French
          than your English rhythm intuition is.</strong> Use this.
        </p>
        <p>
          French stress is fixed: it falls on the <strong>last syllable of each
          rhythmic group</strong> (phrase), not on individual words.
          The sentence <em>"La fonction d'onde"</em> has stress on the final syllable:
          <em>la fonc-tion D'ON-de</em>... then falls. Not <em>LA fonc-TION d'on-de</em>.
        </p>
        <h2>Liaison — The Most Important Connected Speech Phenomenon</h2>
        <p>
          Normally silent final consonants are pronounced when the next word begins with
          a vowel or silent h. The consonant bridges to the next syllable.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Type</th><th>Context</th><th>Example</th><th>Pronunciation</th></tr>
          <tr>
            <td>Mandatory</td>
            <td>Article/pronoun + vowel-initial word</td>
            <td><em>les ondes</em></td>
            <td>/le-zɔ̃d/ — s→z bridges</td>
          </tr>
          <tr>
            <td>Mandatory</td>
            <td>Adjective (before noun) + noun</td>
            <td><em>un grand écran</em></td>
            <td>/œ̃-grɑ̃-tekrɑ̃/ — d→t (devoicing in liaison)</td>
          </tr>
          <tr>
            <td>Mandatory</td>
            <td>Subject pronoun + verb</td>
            <td><em>nous avons</em></td>
            <td>/nu-zavɔ̃/ — s→z bridges</td>
          </tr>
          <tr>
            <td>Mandatory</td>
            <td>Verb + pronoun (inversion)</td>
            <td><em>dit-il</em></td>
            <td>/di-til/ — t bridges</td>
          </tr>
          <tr>
            <td>Forbidden</td>
            <td>After singular noun</td>
            <td><em>un étudiant arrive</em></td>
            <td>No liaison after étudiant</td>
          </tr>
          <tr>
            <td>Forbidden</td>
            <td>After 'et' (and)</td>
            <td><em>toi et elle</em></td>
            <td>No liaison over 'et'</td>
          </tr>
        </table>
        <p>
          <strong>Liaison consonants always voice:</strong> final -s and -x become /z/;
          final -d becomes /t/; final -f becomes /v/ (e.g., <em>neuf heures</em> → /nœ-vœʁ/).
        </p>
        <h2>Elision — Vowel Deletion Before Vowels</h2>
        <p>
          When certain short words (le, la, je, me, te, se, de, ne, que) end in a vowel
          and the next word starts with a vowel or silent h, the vowel is deleted and
          replaced with an apostrophe:
        </p>
        <ul>
          <li><em>le + électron</em> → <em>l'électron</em> /lɛlɛktrɔ̃/</li>
          <li><em>je + ai</em> → <em>j'ai</em> /ʒɛ/</li>
          <li><em>de + énergie</em> → <em>d'énergie</em> /denerʒi/</li>
          <li><em>ne + est</em> → <em>n'est</em> /nɛ/</li>
          <li><em>que + il</em> → <em>qu'il</em> /kil/</li>
        </ul>
        <p>
          You already see this in written physics French: <em>l'énergie, l'onde,
          l'atome, l'opérateur, d'Hamilton, d'onde</em>. Elision is
          mandatory for these words — it is not optional.
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Enchaînement — Consonant Linking Without Liaison</h2>
        <p>
          Even without liaison (i.e., for consonants that are normally pronounced),
          a word-final consonant links to a vowel-initial next word, creating
          a resyllabification:
        </p>
        <ul>
          <li><em>elle est ici</em> → /ɛ-lɛ-ti-si/ — the /l/ of <em>elle</em> bridges</li>
          <li><em>avec elle</em> → /a-vɛ-kɛl/ — the /k/ of <em>avec</em> bridges</li>
          <li><em>quatre électrons</em> → /ka-trɛ-lɛk-trɔ̃/ — the /r/ bridges</li>
        </ul>
        <p>
          This is why fast French sounds like one long word. Syllable boundaries
          do not correspond to word boundaries in speech.
        </p>
        <h2>Vowel and Schwa Reduction in Fast Speech</h2>
        <p>
          The schwa /ə/ (written 'e' in unstressed positions: <em>le, de, que, je</em>)
          is frequently <strong>dropped entirely</strong> in natural speech.
          This is the single biggest source of listening comprehension difficulty
          for learners. The rules:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Written</th><th>Formal/slow</th><th>Conversational</th><th>Fast/informal</th></tr>
          <tr>
            <td><em>je ne sais pas</em></td>
            <td>/ʒə nə sɛ pa/</td>
            <td>/ʒə sɛ pa/ (ne dropped)</td>
            <td>/ʃɛpa/ or /ʒɛpa/</td>
          </tr>
          <tr>
            <td><em>je vais le faire</em></td>
            <td>/ʒə vɛ lə fɛʁ/</td>
            <td>/ʒvɛ lə fɛʁ/</td>
            <td>/ʒvɛlfɛʁ/</td>
          </tr>
          <tr>
            <td><em>qu'est-ce que c'est</em></td>
            <td>/kɛs kə sɛ/</td>
            <td>/kɛskəsɛ/</td>
            <td>/kɛssɛ/</td>
          </tr>
          <tr>
            <td><em>tu as compris</em></td>
            <td>/ty a kɔ̃pri/</td>
            <td>/ta kɔ̃pri/ (tu→t'a)</td>
            <td>/takɔ̃pri/</td>
          </tr>
        </table>
        <p>
          <strong>In a lecture</strong>, your professor will use formal register —
          schwa is more present, speech is clearer. <strong>With labmates</strong>,
          you will encounter heavy reduction. Both are normal; you need to recognise both.
        </p>
        <h2>Intonation Patterns in French</h2>
        <p>
          French intonation is simpler than English. The key patterns:
        </p>
        <ul>
          <li>
            <strong>Statement:</strong> Rises slightly within each rhythmic group,
            falls on the final syllable of the last group.
            <em>"La vitesse de la lumière / est constante."</em> ↗ ↘
          </li>
          <li>
            <strong>Yes/No question (intonation):</strong> Rises at the end of the sentence.
            <em>"Vous avez compris?"</em> ↗
          </li>
          <li>
            <strong>List:</strong> Each item rises except the last, which falls.
            <em>"masse, énergie, et impulsion"</em> ↗ ↗ ↘
          </li>
          <li>
            <strong>Wh-question:</strong> Falls at the end (opposite of English).
            <em>"Où est le laboratoire?"</em> ↘
          </li>
        </ul>
        <p>
          Practice by recording yourself reading a sentence from a French physics
          paper aloud, then comparing to a native reader (YouTube lecture, podcast).
          Your physics domain knowledge means you can follow and mimic
          a real lecture — something most learners cannot do.
        </p>
      `,
    },

    {
      type: "mcq",
      question: "In the phrase <em>les ondes électromagnétiques</em>, what happens at the boundary between <em>les</em> and <em>ondes</em>?",
      options: [
        "Nothing — the s of 'les' remains silent as usual",
        "Mandatory liaison: the silent -s of 'les' is pronounced as /z/ and bridges to 'ondes' → /le-zɔ̃d/",
        "Elision: 'les' becomes 'l'' before a vowel",
        "The s is pronounced as /s/ (not /z/)",
      ],
      correct: [1],
      explanation:
        "Mandatory liaison: after a definite article (les) before a vowel-initial noun, the silent -s is pronounced. Liaison consonants always voice: -s → /z/. So 'les ondes' = /le-zɔ̃d/, not /le-ɔ̃d/. Elision (C) applies to 'le' and 'la' but not 'les' — 'les' does not elide. The liaison s is always /z/, never /s/ (D is wrong).",
    },

    {
      type: "mcq",
      question: "You are in a labmate's office and they say something that sounds like /ʃɛpa/. What are they saying?",
      options: [
        "C'est pas (it's not)",
        "Je ne sais pas (I don't know) — heavily reduced in fast speech",
        "C'est ça (it's that)",
        "Ça va pas (it's not going well)",
      ],
      correct: [1],
      explanation:
        "/ʃɛpa/ is the maximally reduced form of 'je ne sais pas' (I don't know). Reduction chain: je ne sais pas → /ʒə nə sɛ pa/ → ne dropped → /ʒ sɛ pa/ → je reduces to /ʃ/ before consonant → /ʃɛpa/. This is one of the most common phrases in French conversation and one of the most phonetically reduced. Recognising it is essential for informal communication with labmates.",
    },

    {
      type: "msq",
      question: "Which of the following correctly apply elision rules for written French?",
      options: [
        "<em>l'électron</em> (le + électron — elision mandatory before vowel)",
        "<em>le onde</em> (no elision before 'onde')",
        "<em>d'énergie</em> (de + énergie — elision mandatory)",
        "<em>je ai</em> (no elision needed for je + ai)",
      ],
      correct: [0, 2],
      explanation:
        "Elision is mandatory for le/la/je/me/te/se/de/ne/que before vowels or silent h. A: l'électron ✓. C: d'énergie ✓. B: 'onde' starts with a vowel, so 'le onde' must be 'l'onde' — B is WRONG. D: 'je + ai' must become 'j'ai' — elision of je before vowel is mandatory, so D is WRONG.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 4: Physics French — Lecture, Seminar & Whiteboard Language
// ═══════════════════════════════════════════════════════════════════════════

const ch4 = {
  title: "Physics French — Lecture, Seminar & Whiteboard Language",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Make your already-partial physics French comprehension fully explicit and
          productive. Learn the <strong>50 sentence frames</strong> that structure
          all physics lectures. Move from passive understanding to active
          participation — asking questions, discussing results, presenting.
          Estimated study time: <strong>3 hours</strong>.
        </p>
        <h2>The 50-Frame Architecture of a Physics Lecture</h2>
        <p>
          Physics lectures in French — like all academic lectures — are built from
          a small set of recurring sentence frames. Your professor is not
          improvising grammar. These frames repeat across every lecture, every course.
          Acquire the frames once; the content fills them automatically.
        </p>
        <h3>Block 1: Introducing a concept or definition</h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French frame</th><th>English equivalent</th></tr>
          <tr><td><em>On définit [X] comme…</em></td><td>We define [X] as…</td></tr>
          <tr><td><em>[X] est défini(e) par…</em></td><td>[X] is defined by…</td></tr>
          <tr><td><em>Par définition, [X] est…</em></td><td>By definition, [X] is…</td></tr>
          <tr><td><em>On appelle [X] le/la [Y].</em></td><td>We call [X] the [Y].</td></tr>
          <tr><td><em>[X] désigne / représente…</em></td><td>[X] denotes / represents…</td></tr>
          <tr><td><em>Rappelons que…</em></td><td>Let us recall that…</td></tr>
          <tr><td><em>Considérons [X]…</em></td><td>Let us consider [X]…</td></tr>
        </table>
        <h3>Block 2: Stating a result or property</h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French frame</th><th>English equivalent</th></tr>
          <tr><td><em>On peut montrer que…</em></td><td>One can show that…</td></tr>
          <tr><td><em>Il s'ensuit que…</em></td><td>It follows that…</td></tr>
          <tr><td><em>On en déduit que…</em></td><td>We deduce from this that…</td></tr>
          <tr><td><em>D'où l'on tire…</em></td><td>From which we extract…</td></tr>
          <tr><td><em>Il vient donc que…</em></td><td>It then follows that…</td></tr>
          <tr><td><em>Ce résultat montre que…</em></td><td>This result shows that…</td></tr>
          <tr><td><em>Ceci implique que…</em></td><td>This implies that…</td></tr>
          <tr><td><em>On remarque que…</em></td><td>We note that… / Notice that…</td></tr>
        </table>
        <h3>Block 3: Conditions, limits, and approximations</h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French frame</th><th>English equivalent</th></tr>
          <tr><td><em>Dans le cas où…</em></td><td>In the case where…</td></tr>
          <tr><td><em>Dans la limite où…</em></td><td>In the limit where…</td></tr>
          <tr><td><em>Lorsque [X] → 0/∞…</em></td><td>When [X] → 0/∞…</td></tr>
          <tr><td><em>À l'ordre [n] en…</em></td><td>To order [n] in…</td></tr>
          <tr><td><em>En première approximation…</em></td><td>To first approximation…</td></tr>
          <tr><td><em>Sous certaines conditions…</em></td><td>Under certain conditions…</td></tr>
          <tr><td><em>Pour [X] suffisamment grand/petit…</em></td><td>For [X] sufficiently large/small…</td></tr>
          <tr><td><em>En régime [stationnaire/transitoire]…</em></td><td>In [steady/transient] state…</td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h3>Block 4: Calculations and derivations on the whiteboard</h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French frame</th><th>English equivalent</th></tr>
          <tr><td><em>En développant…</em></td><td>Expanding…</td></tr>
          <tr><td><em>En intégrant des deux côtés…</em></td><td>Integrating both sides…</td></tr>
          <tr><td><em>En appliquant [le théorème de X]…</em></td><td>Applying [theorem X]…</td></tr>
          <tr><td><em>On pose [X] = …</em></td><td>Let us set [X] = …</td></tr>
          <tr><td><em>On substitue [X] dans [Y]…</em></td><td>Substituting [X] into [Y]…</td></tr>
          <tr><td><em>En simplifiant…</em></td><td>Simplifying…</td></tr>
          <tr><td><em>D'après l'équation (n)…</em></td><td>From equation (n)…</td></tr>
          <tr><td><em>En utilisant le fait que…</em></td><td>Using the fact that…</td></tr>
          <tr><td><em>Ce qui donne…</em></td><td>Which gives…</td></tr>
          <tr><td><em>On obtient finalement…</em></td><td>We finally obtain…</td></tr>
          <tr><td><em>Le membre de gauche/droite…</em></td><td>The left-hand/right-hand side…</td></tr>
        </table>
        <h3>Block 5: Physical interpretation</h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French frame</th><th>English equivalent</th></tr>
          <tr><td><em>Physiquement, cela signifie que…</em></td><td>Physically, this means that…</td></tr>
          <tr><td><em>L'interprétation physique est la suivante…</em></td><td>The physical interpretation is as follows…</td></tr>
          <tr><td><em>On voit que [X] joue le rôle de…</em></td><td>We see that [X] plays the role of…</td></tr>
          <tr><td><em>Ce terme correspond à…</em></td><td>This term corresponds to…</td></tr>
          <tr><td><em>Intuitivement…</em></td><td>Intuitively…</td></tr>
          <tr><td><em>Ceci est analogue à…</em></td><td>This is analogous to…</td></tr>
        </table>
        <h3>Block 6: Questions during a seminar — Asking and responding</h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Function</th><th>French</th></tr>
          <tr><td>Asking a question</td><td><em>J'ai une question… / Je voudrais demander…</em></td></tr>
          <tr><td>Asking for clarification</td><td><em>Pourriez-vous préciser ce que vous entendez par [X]?</em></td></tr>
          <tr><td>Not understanding</td><td><em>Je ne suis pas sûr(e) de comprendre… / Pouvez-vous répéter?</em></td></tr>
          <tr><td>Challenging a result</td><td><em>Est-ce que cette approximation est valable quand…?</em></td></tr>
          <tr><td>Agreeing</td><td><em>En effet. / Tout à fait. / C'est bien ça.</em></td></tr>
          <tr><td>Disagreeing politely</td><td><em>Je ne suis pas tout à fait d'accord… / Il me semble que…</em></td></tr>
          <tr><td>Stalling to think</td><td><em>C'est une bonne question… / Laissez-moi réfléchir…</em></td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>SAP-Specific Vocabulary: Structure of the Atom and Nuclear Physics</h2>
        <p>
          These are the most frequent domain-specific terms in your M2 SAP coursework.
          They are almost all Latin/Greek cognates — you already know them.
          The value here is acquiring their <strong>correct French pronunciation</strong>.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French</th><th>IPA</th><th>English</th></tr>
          <tr><td>le noyau</td><td>/nwajo/</td><td>nucleus</td></tr>
          <tr><td>le nucléon</td><td>/nykleɔ̃/</td><td>nucleon</td></tr>
          <tr><td>le proton</td><td>/prɔtɔ̃/</td><td>proton</td></tr>
          <tr><td>le neutron</td><td>/nøtrɔ̃/</td><td>neutron</td></tr>
          <tr><td>l'électron (m)</td><td>/elɛktrɔ̃/</td><td>electron</td></tr>
          <tr><td>le quark</td><td>/kwaʁk/</td><td>quark</td></tr>
          <tr><td>le méson</td><td>/mezɔ̃/</td><td>meson</td></tr>
          <tr><td>le lepton</td><td>/lɛptɔ̃/</td><td>lepton</td></tr>
          <tr><td>le boson</td><td>/bozɔ̃/</td><td>boson</td></tr>
          <tr><td>la liaison forte/faible</td><td>/ljɛzɔ̃ fɔʁt/fɛbl/</td><td>strong/weak interaction</td></tr>
          <tr><td>la désintégration</td><td>/dezɛ̃tegrasjɔ̃/</td><td>decay/disintegration</td></tr>
          <tr><td>la radioactivité</td><td>/radjɔaktivite/</td><td>radioactivity</td></tr>
          <tr><td>le rayonnement</td><td>/rɛjɔnmɑ̃/</td><td>radiation</td></tr>
          <tr><td>la section efficace</td><td>/sɛksjɔ̃ efikɑs/</td><td>cross-section</td></tr>
          <tr><td>l'énergie de liaison (f)</td><td>/enerʒi də ljɛzɔ̃/</td><td>binding energy</td></tr>
          <tr><td>le nombre de masse</td><td>/nɔ̃brə də mas/</td><td>mass number</td></tr>
          <tr><td>le nombre atomique</td><td>/nɔ̃brə atɔmik/</td><td>atomic number</td></tr>
          <tr><td>la fission / la fusion</td><td>/fisjɔ̃/ /fyziɔ̃/</td><td>fission / fusion</td></tr>
          <tr><td>l'accélérateur (m)</td><td>/akseleratœʁ/</td><td>accelerator</td></tr>
          <tr><td>le détecteur</td><td>/detɛktœʁ/</td><td>detector</td></tr>
          <tr><td>le spectre</td><td>/spɛktʁ/</td><td>spectrum</td></tr>
          <tr><td>la symétrie</td><td>/simetri/</td><td>symmetry</td></tr>
          <tr><td>la conservation</td><td>/kɔ̃sɛʁvasjɔ̃/</td><td>conservation</td></tr>
          <tr><td>l'invariance (f)</td><td>/ɛ̃varjɑ̃s/</td><td>invariance</td></tr>
          <tr><td>l'opérateur (m)</td><td>/ɔperatœʁ/</td><td>operator</td></tr>
        </table>
      `,
    },

    {
      type: "mcq",
      question: "Your professor says: <em>On peut montrer que l'hamiltonien commute avec l'opérateur de parité dans ce cas.</em> Which lecture frame is being used?",
      options: [
        "Block 1 (introducing a definition)",
        "Block 2 (stating a result — 'on peut montrer que')",
        "Block 4 (whiteboard calculation)",
        "Block 5 (physical interpretation)",
      ],
      correct: [1],
      explanation:
        "'On peut montrer que…' is one of the core Block 2 frames — stating a mathematical result that can be demonstrated. The full sentence: 'One can show that the Hamiltonian commutes with the parity operator in this case.' This frame introduces a property or theorem without performing the full derivation at that moment. Recognising the frame tells you immediately: a result is being stated, not derived — adjust your listening accordingly.",
    },

    {
      type: "msq",
      question: "Which French frames would you use to ask a clarifying question during a seminar? (Select all appropriate options)",
      options: [
        "<em>Pourriez-vous préciser ce que vous entendez par 'invariance de jauge'?</em>",
        "<em>Je ne suis pas sûr de comprendre l'approximation utilisée ici.</em>",
        "<em>Ce résultat montre que l'énergie est conservée.</em>",
        "<em>Est-ce que cette condition est valable dans la limite non-relativiste?</em>",
      ],
      correct: [0, 1, 3],
      explanation:
        "A: Asking for clarification of a term ('gauge invariance') ✓. B: Expressing uncertainty about a step ✓. C: This is a Block 2 result-stating frame — the professor would say this, not a questioner. D: A precise, well-formed challenge to the domain of validity of an approximation ✓ — exactly the kind of question that impresses French professors and shows active engagement.",
    },

    {
      type: "mcq",
      question: "How do you say 'The left-hand side of the equation equals…' in French?",
      options: [
        "<em>Le côté gauche de l'équation égale…</em>",
        "<em>Le membre de gauche de l'équation est égal à…</em>",
        "<em>La partie gauche de l'équation vaut…</em>",
        "B or C are both correct; A uses the wrong term for 'side' in mathematical French.",
      ],
      correct: [3],
      explanation:
        "In mathematical French, 'side of an equation' uses 'membre' (member): 'le membre de gauche' and 'le membre de droite'. 'Vaut' (from 'valoir', to be worth/to equal) is also correct: 'le membre de gauche vaut X'. 'Côté' (side) is used in geometry ('le côté gauche du triangle') but less standardly in equations. 'Est égal à' is also correct but more verbose. B and C are both used by French physicists — A uses the less standard term for equation context.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 5: Maths French — Notation, Proof & Derivation Language
// ═══════════════════════════════════════════════════════════════════════════

const ch5 = {
  title: "Maths French — Notation, Proof & Derivation Language",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Acquire the precise French language of mathematical writing and reading.
          This enables you to read French textbooks (Cohen-Tannoudji, Messiah, Diu–Guthmann,
          De Gennes) without friction, and to write French problem sets and reports correctly.
          Estimated study time: <strong>2.5 hours</strong>.
        </p>
        <h2>Reading Mathematical Expressions Aloud in French</h2>
        <p>
          Mathematical notation has a specific French oral reading convention.
          When you present at the whiteboard, you need to read equations aloud.
          Here is the complete system:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Symbol / Expression</th><th>French reading</th><th>Note</th></tr>
          <tr><td>a + b</td><td><em>a plus b</em></td><td>Identical to English</td></tr>
          <tr><td>a − b</td><td><em>a moins b</em></td><td>moins = minus/less</td></tr>
          <tr><td>a × b</td><td><em>a fois b / a multiplié par b</em></td><td>fois = times</td></tr>
          <tr><td>a / b</td><td><em>a sur b / a divisé par b</em></td><td>sur = on/over (fraction)</td></tr>
          <tr><td>a = b</td><td><em>a égal b / a est égal à b</em></td><td></td></tr>
          <tr><td>a ≠ b</td><td><em>a différent de b / a n'est pas égal à b</em></td><td></td></tr>
          <tr><td>a ≈ b</td><td><em>a approximativement égal à b / a est de l'ordre de b</em></td><td></td></tr>
          <tr><td>a²</td><td><em>a au carré</em></td><td>carré = square</td></tr>
          <tr><td>a³</td><td><em>a au cube</em></td><td></td></tr>
          <tr><td>aⁿ</td><td><em>a exposant n / a à la puissance n</em></td><td></td></tr>
          <tr><td>√a</td><td><em>racine carrée de a</em></td><td>racine = root</td></tr>
          <tr><td>|a|</td><td><em>la valeur absolue de a / le module de a</em></td><td>module for complex numbers</td></tr>
          <tr><td>∫f dx</td><td><em>l'intégrale de f par rapport à x</em></td><td></td></tr>
          <tr><td>∂f/∂x</td><td><em>la dérivée partielle de f par rapport à x</em></td><td></td></tr>
          <tr><td>df/dx</td><td><em>la dérivée de f par rapport à x</em></td><td></td></tr>
          <tr><td>∇</td><td><em>nabla / l'opérateur gradient</em></td><td></td></tr>
          <tr><td>∇²</td><td><em>le laplacien / nabla carré</em></td><td></td></tr>
          <tr><td>⟨a|b⟩</td><td><em>le produit scalaire de a et b / le bracket de Dirac</em></td><td></td></tr>
          <tr><td>Σᵢ</td><td><em>la somme sur i</em></td><td></td></tr>
          <tr><td>∀</td><td><em>pour tout</em></td><td></td></tr>
          <tr><td>∃</td><td><em>il existe</em></td><td></td></tr>
          <tr><td>⇒</td><td><em>implique / donc</em></td><td></td></tr>
          <tr><td>⟺</td><td><em>équivaut à / si et seulement si</em></td><td></td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>The Language of Mathematical Proof in French</h2>
        <p>
          French mathematical writing uses a highly formalised register.
          These connectives and transition words structure every proof and derivation:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Function</th><th>French</th><th>English</th></tr>
          <tr><td>Hypothesis</td><td>Soit [X] un/une…; Supposons que…; Étant donné que…</td><td>Let [X] be…; Suppose that…; Given that…</td></tr>
          <tr><td>Goal</td><td>Montrons que…; Démontrons que…; Notre objectif est de…</td><td>Let us show that…; Let us prove that…</td></tr>
          <tr><td>Step transition</td><td>D'où…; Donc…; Ainsi…; Par conséquent…; Il s'ensuit que…</td><td>Hence…; Therefore…; Thus…; Consequently…; It follows…</td></tr>
          <tr><td>Equivalence</td><td>Ce qui est équivalent à…; Ce qui revient à dire que…</td><td>Which is equivalent to…; Which amounts to saying…</td></tr>
          <tr><td>By contradiction</td><td>Par l'absurde, supposons que…; Ce qui est absurde.</td><td>Suppose for contradiction…; Which is a contradiction.</td></tr>
          <tr><td>By induction</td><td>Par récurrence sur n…; Supposons la propriété vraie au rang n…</td><td>By induction on n…; Assume the property holds at rank n…</td></tr>
          <tr><td>Conclusion</td><td>On a donc montré que…; CQFD (ce qu'il fallait démontrer).</td><td>We have therefore shown…; QED.</td></tr>
          <tr><td>Reference</td><td>D'après le théorème de [X]…; En vertu de…; Selon…</td><td>By [X]'s theorem…; By virtue of…; According to…</td></tr>
          <tr><td>Notation</td><td>On notera [X] par…; On désignera par [X]…</td><td>We denote [X] by…; We shall write [X] for…</td></tr>
          <tr><td>Approximation</td><td>À l'ordre n en [X]…; Au premier ordre…; Négligeons les termes en…</td><td>To order n in [X]…; To first order…; Neglecting terms in…</td></tr>
        </table>
        <h2>French Mathematical Vocabulary — Key Terms</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French</th><th>English</th><th>Notes</th></tr>
          <tr><td>le théorème</td><td>theorem</td><td>Cognate — note accent</td></tr>
          <tr><td>le lemme</td><td>lemma</td><td>Cognate</td></tr>
          <tr><td>la démonstration / la preuve</td><td>proof</td><td>Both used; démonstration more formal</td></tr>
          <tr><td>le corollaire</td><td>corollary</td><td>Cognate</td></tr>
          <tr><td>la conjecture</td><td>conjecture</td><td>Cognate</td></tr>
          <tr><td>l'hypothèse (f)</td><td>hypothesis / assumption</td><td>Cognate</td></tr>
          <tr><td>la condition nécessaire et suffisante</td><td>necessary and sufficient condition</td><td></td></tr>
          <tr><td>l'espace vectoriel (m)</td><td>vector space</td><td></td></tr>
          <tr><td>la base orthonormée</td><td>orthonormal basis</td><td></td></tr>
          <tr><td>le produit scalaire</td><td>scalar/dot product</td><td></td></tr>
          <tr><td>le produit vectoriel</td><td>cross product</td><td></td></tr>
          <tr><td>la valeur propre</td><td>eigenvalue</td><td>propre = own/proper</td></tr>
          <tr><td>le vecteur propre</td><td>eigenvector</td><td></td></tr>
          <tr><td>l'espace de Hilbert (m)</td><td>Hilbert space</td><td></td></tr>
          <tr><td>l'opérateur hermitien (m)</td><td>Hermitian operator</td><td></td></tr>
          <tr><td>la transformée de Fourier</td><td>Fourier transform</td><td></td></tr>
        </table>
      `,
    },

    {
      type: "mcq",
      question: "How do you read the expression <em>∂²ψ/∂t²</em> aloud in French?",
      options: [
        "<em>la dérivée partielle deux de psi sur t deux</em>",
        "<em>la dérivée partielle seconde de psi par rapport à t</em>",
        "<em>psi dérivé deux fois par t</em>",
        "<em>d deux psi sur d t carré</em>",
      ],
      correct: [1],
      explanation:
        "Standard French reading: 'la dérivée partielle seconde de psi par rapport à t' (the second partial derivative of psi with respect to t). 'Seconde' (second) is used for the second derivative; 'troisième' for third, etc. 'Par rapport à' (with respect to) is the standard phrase for the differentiation variable. Alternative: 'd deux psi sur d t carré' is also heard in informal lecture contexts — closer to how one writes it.",
    },

    {
      type: "mcq",
      question: "Translate into mathematical French: 'Let E be a Hilbert space and A a Hermitian operator. We wish to show that the eigenvalues of A are real.'",
      options: [
        "<em>E est un espace de Hilbert et A est un opérateur hermitien. Les valeurs propres sont réelles.</em>",
        "<em>Soit E un espace de Hilbert et A un opérateur hermitien. Montrons que les valeurs propres de A sont réelles.</em>",
        "<em>Supposons que E est un espace de Hilbert. A a des valeurs propres réelles.</em>",
        "<em>On a E un espace de Hilbert. On veut que A est hermitien.</em>",
      ],
      correct: [1],
      explanation:
        "'Soit [X] un/une [Y]' is the standard mathematical French for 'Let [X] be a [Y]' — establishing notation and hypotheses. 'Montrons que' = 'Let us show that' — stating the goal of the proof. This is the correct formal structure: hypothesis with 'soit', then goal with 'montrons que'. Option A states a result without framing. C uses 'supposons que' (suppose that) which is for proof by contradiction. D is grammatically awkward.",
    },

    {
      type: "msq",
      question: "Which French phrases correctly introduce a conclusion in a mathematical derivation?",
      options: [
        "<em>On a donc montré que l'énergie est quantifiée.</em>",
        "<em>Ce qu'il fallait démontrer. (CQFD)</em>",
        "<em>Par conséquent, l'hamiltonien est borné.</em>",
        "<em>Rappelons que la fonction d'onde est normalisée.</em>",
      ],
      correct: [0, 1, 2],
      explanation:
        "A: 'On a donc montré que' = 'We have therefore shown that' — a conclusion phrase ✓. B: CQFD (ce qu'il fallait démontrer) = QED ✓. C: 'Par conséquent' = 'consequently/therefore' — introduces a conclusion ✓. D: 'Rappelons que' = 'Let us recall that' — this is a reminder/recall frame, not a conclusion. It introduces background information, not a derived result.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 6: University French — Admin, Email & Campus Life
// ═══════════════════════════════════════════════════════════════════════════

const ch6 = {
  title: "University French — Admin, Email & Campus Life",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Navigate the University of Strasbourg administrative system, write
          correct formal and semi-formal emails in French, and handle all
          campus-life communication. Estimated study time: <strong>2.5 hours</strong>.
        </p>
        <h2>French Academic Email — The Format</h2>
        <p>
          French formal email has a very specific structure. Deviating from it
          reads as rude or uneducated, even if unintentionally. Learn this once
          and use it every time.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Part</th><th>French (formal — to professor/admin)</th><th>Notes</th></tr>
          <tr>
            <td>Salutation</td>
            <td><em>Madame, / Monsieur, / Madame la Professeure, / Monsieur le Directeur,</em></td>
            <td>Never "Bonjour" in a formal email. Comma after salutation, new line.</td>
          </tr>
          <tr>
            <td>Opening</td>
            <td><em>Je me permets de vous contacter au sujet de… / Je vous écris concernant…</em></td>
            <td>'Je me permets de' = I take the liberty of — very polite opening</td>
          </tr>
          <tr>
            <td>Body</td>
            <td>Clear, short paragraphs. Use <em>je souhaiterais</em> (I would like) rather than <em>je veux</em> (I want).</td>
            <td>Conditional tense for requests = more polite</td>
          </tr>
          <tr>
            <td>Request</td>
            <td><em>Je vous serais reconnaissant(e) de bien vouloir… / Pourriez-vous…?</em></td>
            <td>'Je vous serais reconnaissant(e) de' = I would be grateful if you would</td>
          </tr>
          <tr>
            <td>Closing formula</td>
            <td><em>Je vous prie d'agréer, Madame/Monsieur, l'expression de mes salutations distinguées.</em></td>
            <td>This exact formula is standard. Do not shorten it in formal emails.</td>
          </tr>
          <tr>
            <td>Closing (semi-formal)</td>
            <td><em>Cordialement, / Bien cordialement, / Avec mes meilleures salutations,</em></td>
            <td>For professors you interact with regularly</td>
          </tr>
          <tr>
            <td>Closing (informal — labmates)</td>
            <td><em>Bonne journée, / À bientôt, / Bien à vous,</em></td>
            <td>Once established, these are fine with peers</td>
          </tr>
        </table>
        <h2>Sample Email 1 — Requesting a Meeting with Your Supervisor</h2>
        <p style="border:1px solid #ccc; padding:12px; font-style:italic;">
          Monsieur le Professeur,<br><br>
          Je me permets de vous contacter afin de solliciter un rendez-vous pour
          discuter de l'avancement de mon stage de M2. En effet, j'aurais quelques
          questions concernant les résultats de mes simulations et je souhaiterais
          connaître votre avis sur la direction à suivre.<br><br>
          Seriez-vous disponible cette semaine, de préférence en début d'après-midi?
          Je reste bien entendu disponible selon vos disponibilités.<br><br>
          Je vous remercie par avance de l'attention que vous porterez à ma demande.<br><br>
          Je vous prie d'agréer, Monsieur le Professeur, l'expression de mes
          salutations distinguées.<br><br>
          [Your name]<br>
          Étudiant(e) M2 SAP, IPHC
        </p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>University Administration Vocabulary</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French</th><th>English</th><th>Context</th></tr>
          <tr><td>le secrétariat</td><td>administrative office / secretariat</td><td>Where you submit documents</td></tr>
          <tr><td>la scolarité</td><td>student records office</td><td>Grades, enrollment, certificates</td></tr>
          <tr><td>s'inscrire / l'inscription</td><td>to enroll / enrollment</td><td></td></tr>
          <tr><td>la carte étudiante</td><td>student card</td><td>Needed for everything</td></tr>
          <tr><td>le relevé de notes</td><td>transcript</td><td>Relevé = statement/summary</td></tr>
          <tr><td>l'attestation de scolarité</td><td>enrollment certificate</td><td>Required for CAF, bank, etc.</td></tr>
          <tr><td>la bourse</td><td>scholarship / grant</td><td></td></tr>
          <tr><td>la soutenance</td><td>thesis defense</td><td>Soutenir = to defend/support</td></tr>
          <tr><td>le jury</td><td>examination board</td><td>Cognate but specific meaning</td></tr>
          <tr><td>le rapport de stage</td><td>internship/placement report</td><td>Your M2 written report</td></tr>
          <tr><td>le directeur de thèse</td><td>PhD supervisor</td><td></td></tr>
          <tr><td>l'encadrant(e)</td><td>supervisor (M2/internship)</td><td>More informal than directeur</td></tr>
          <tr><td>l'UFR (Unité de Formation et de Recherche)</td><td>Faculty / Department</td><td>Equivalent to 'school of' in English</td></tr>
          <tr><td>la salle de TD</td><td>tutorial room</td><td>TD = travaux dirigés (guided work)</td></tr>
          <tr><td>la salle de TP</td><td>lab room</td><td>TP = travaux pratiques (practical work)</td></tr>
          <tr><td>le cours magistral (CM)</td><td>lecture</td><td>The large-format professor-led class</td></tr>
          <tr><td>le devoir sur table</td><td>written exam (in-class)</td><td></td></tr>
          <tr><td>l'UE (Unité d'Enseignement)</td><td>course unit / module</td><td>Like a 'module' in UK system</td></tr>
          <tr><td>les ECTS</td><td>ECTS credits</td><td>European Credit Transfer System</td></tr>
          <tr><td>valider un cours</td><td>to pass a course</td><td>Valider = to validate/pass</td></tr>
        </table>
        <h2>Practical Situations: Scripts</h2>
        <h3>At the secretariat:</h3>
        <p>
          <em>Bonjour. Je suis étudiant(e) en M2 SAP. Je voudrais obtenir une
          attestation de scolarité, s'il vous plaît. J'en ai besoin pour
          mon dossier de CAF.</em><br>
          (Hello. I am an M2 SAP student. I would like to get an enrollment
          certificate, please. I need it for my CAF file.)
        </p>
        <h3>Asking a professor about grades:</h3>
        <p>
          <em>Excusez-moi, Monsieur/Madame. Les notes du devoir du 15 novembre
          sont-elles disponibles? Je n'ai pas encore reçu mon résultat.</em><br>
          (Excuse me. Are the grades for the November 15th exam available?
          I have not yet received my result.)
        </p>
      `,
    },

    {
      type: "mcq",
      question: "You want to email a professor you have never met to ask about their research group. Which opening is most appropriate?",
      options: [
        "<em>Bonjour, je suis étudiant et je veux rejoindre votre groupe.</em>",
        "<em>Salut Professeur! Je vous contacte pour votre recherche.</em>",
        "<em>Madame la Professeure, / Je me permets de vous contacter afin de me renseigner sur les possibilités de stage au sein de votre équipe de recherche.</em>",
        "<em>Cher Professeur, j'aimerais vous parler de votre labo.</em>",
      ],
      correct: [2],
      explanation:
        "C is correct formal French email structure: proper salutation (Madame la Professeure) with comma, formal opening ('Je me permets de vous contacter' — I take the liberty of contacting you), specific subject stated ('me renseigner sur les possibilités de stage' — to inquire about internship possibilities). A uses 'Bonjour' (informal) and 'je veux' (blunt). B uses 'Salut' (very informal, never to a professor). D uses 'Cher' (appropriate for someone you know, not a stranger).",
    },

    {
      type: "mcq",
      question: "What does <em>le rapport de stage</em> refer to in the M2 SAP context?",
      options: [
        "The internship pay slip",
        "The written report documenting your M2 research work — the main written deliverable of your placement",
        "The stage door security report",
        "A report submitted by the lab to the university about your progress",
      ],
      correct: [1],
      explanation:
        "'Stage' in French = internship/placement (not a theatrical stage). 'Rapport de stage' = the written report you produce at the end of your M2 research placement. It is one of the main assessed deliverables of the M2 SAP program, alongside the oral defence (soutenance). This document is written in formal French — this chapter's email and vocabulary skills apply directly to it.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 7: Strasbourg & Alsace — Local Language & Cultural Context
// ═══════════════════════════════════════════════════════════════════════════

const ch7 = {
  title: "Strasbourg & Alsace — Local Language & Cultural Context",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Understand the linguistic and cultural specificities of Strasbourg and Alsace.
          Navigate the bilingual (French–Alsatian/German) environment without confusion.
          Build social connections with local French and Alsatian speakers.
          Estimated study time: <strong>2 hours</strong>.
        </p>
        <h2>Alsace: A Linguistic Border Region</h2>
        <p>
          Strasbourg is the capital of the Grand Est region and the historic capital
          of Alsace — a region that has changed national sovereignty between France
          and Germany multiple times (1871, 1918, 1940, 1945). This history has
          left a distinct linguistic and cultural imprint:
        </p>
        <ul>
          <li>
            <strong>Alsatian dialect (Elsässisch):</strong> A Germanic dialect
            related to Alemannic German. Spoken mainly by older generations.
            You will occasionally hear it — it sounds like a mix of German and
            French. Do not be alarmed; standard French is always the official
            language and universally spoken.
          </li>
          <li>
            <strong>Alsatian French accent:</strong> Slightly different from
            Parisian French. Vowels are slightly more backed; some German
            intonation patterns persist; certain words have German loan-word
            influence. It is mild and will not impede your comprehension.
          </li>
          <li>
            <strong>German proficiency:</strong> Many Strasbourg residents
            (especially older ones) speak German. The university has strong
            German-French exchange programs. You may encounter German signage
            and notices, especially in the historic centre (Petite France district).
          </li>
        </ul>
        <h2>Alsatian French — Key Vocabulary Differences</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Alsatian/local usage</th><th>Standard French equivalent</th><th>English</th></tr>
          <tr><td><em>le Winstub</em></td><td>le bistrot alsacien traditionnel</td><td>traditional Alsatian wine tavern</td></tr>
          <tr><td><em>la choucroute</em></td><td>la choucroute (standard, from Alsatian Sauerkraut)</td><td>sauerkraut / Alsatian pork dish</td></tr>
          <tr><td><em>le bretzel</em></td><td>le bretzel (standard)</td><td>pretzel</td></tr>
          <tr><td><em>la flammekueche</em></td><td>la tarte flambée</td><td>Alsatian flatbread pizza</td></tr>
          <tr><td><em>Hopla!</em></td><td>Allez! / Voilà!</td><td>Here we go! / There! (Alsatian exclamation)</td></tr>
          <tr><td><em>le Bredele</em></td><td>les petits gâteaux de Noël</td><td>Alsatian Christmas biscuits</td></tr>
          <tr><td>Numbers (70,80,90): standard French</td><td>soixante-dix, quatre-vingts, quatre-vingt-dix</td><td>In Alsace: septante/huitante/nonante NOT used (those are Swiss)</td></tr>
        </table>
        <h2>Essential Strasbourg Geography for Daily Life</h2>
        <p>
          Knowing these place names and their French pronunciations will help you
          navigate the city and follow directions:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Place</th><th>French pronunciation</th><th>What it is</th></tr>
          <tr><td>Strasbourg</td><td>/stʁazbuʁ/ — the final -g is silent</td><td>City name — 'bourg' = castle/town (Germanic)</td></tr>
          <tr><td>La Petite France</td><td>/la pətit fʁɑ̃s/</td><td>Historic tanner's quarter — most photographed area</td></tr>
          <tr><td>La Cathédrale</td><td>/la katedral/</td><td>Strasbourg Cathedral — central landmark</td></tr>
          <tr><td>Le Tram</td><td>/lə tʁam/</td><td>The tram network — primary transport</td></tr>
          <tr><td>L'Esplanade</td><td>/lɛsplanad/</td><td>University campus area</td></tr>
          <tr><td>Cronenbourg</td><td>/kʁɔnɑ̃buʁ/</td><td>Northwestern neighbourhood — also a beer</td></tr>
          <tr><td>L'Orangerie</td><td>/lɔʁɑ̃ʒʁi/</td><td>Park near European Parliament</td></tr>
          <tr><td>Le marché de Noël</td><td>/lə maʁʃe də nɔɛl/</td><td>Christmas market — world-famous, Nov–Dec</td></tr>
          <tr><td>L'IPHC</td><td>/i-pe-aʃ-se/</td><td>Institut Pluridisciplinaire Hubert Curien — your lab</td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Daily Life Vocabulary for Strasbourg</h2>
        <h3>Transport — The Strasbourg Tram</h3>
        <p>
          Strasbourg has an excellent tram (tramway) network. Key vocabulary:
        </p>
        <ul>
          <li><em>le tramway / le tram</em> — tram</li>
          <li><em>la ligne A/B/C/D/E/F</em> — tram line A/B/C etc.</li>
          <li><em>la station / l'arrêt</em> — tram stop</li>
          <li><em>valider son titre de transport</em> — to validate your ticket (MANDATORY — inspectors check)</li>
          <li><em>l'abonnement</em> — subscription pass</li>
          <li><em>le pass étudiant</em> — student travel pass (available from CTS — Compagnie des Transports Strasbourgeois)</li>
          <li><em>le vélo'v / Velhop</em> — bike-share scheme (Strasbourg is very cycle-friendly)</li>
          <li><em>la piste cyclable</em> — cycle lane</li>
        </ul>
        <h3>Shopping and Markets</h3>
        <ul>
          <li><em>le marché</em> — market. Strasbourg has excellent weekly markets: Marché de la Place Broglie, Marché Neudorf</li>
          <li><em>la boulangerie</em> — bakery. Essential daily stop. Order: <em>Une baguette tradition, s'il vous plaît.</em></li>
          <li><em>la pharmacie</em> — pharmacy (green cross sign). For minor health issues before seeing a doctor</li>
          <li><em>le supermarché</em> — supermarket. Main chains: Carrefour, Leclerc, Lidl, Aldi</li>
          <li><em>les soldes</em> — sales (January and July — legally fixed dates in France)</li>
        </ul>
        <h3>Housing — Critical for New Arrivals</h3>
        <ul>
          <li><em>la CAF</em> (Caisse d'Allocations Familiales) — housing benefit office. You are likely eligible for APL (aide personnalisée au logement — personalised housing assistance). Apply immediately.</li>
          <li><em>la quittance de loyer</em> — rent receipt (needed for CAF)</li>
          <li><em>le propriétaire / le bailleur</em> — landlord</li>
          <li><em>le locataire</em> — tenant (you)</li>
          <li><em>les charges comprises / hors charges</em> — utilities included / utilities excluded</li>
          <li><em>l'état des lieux</em> — inventory inspection (entry and exit — photograph everything)</li>
          <li><em>la caution</em> — deposit (usually 1 month's rent)</li>
        </ul>
        <h2>Social Phrases for Strasbourg Life</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Situation</th><th>French</th></tr>
          <tr><td>Entering a shop / bakery</td><td><em>Bonjour!</em> (always greet first — rudeness not to)</td></tr>
          <tr><td>Leaving a shop</td><td><em>Merci, bonne journée! / Au revoir!</em></td></tr>
          <tr><td>Excuse me (to pass)</td><td><em>Pardon! / Excusez-moi!</em></td></tr>
          <tr><td>Sorry (bumped into someone)</td><td><em>Pardon! / Je suis désolé(e)!</em></td></tr>
          <tr><td>Cheers (drinking)</td><td><em>Santé! / Tchin-tchin!</em></td></tr>
          <tr><td>Enjoy your meal</td><td><em>Bon appétit!</em></td></tr>
          <tr><td>Have a good weekend</td><td><em>Bon week-end!</em></td></tr>
          <tr><td>At a bar: one beer please</td><td><em>Une bière pression, s'il vous plaît.</em> (draft beer = pression)</td></tr>
        </table>
      `,
    },

    {
      type: "mcq",
      question: "You enter a boulangerie in Strasbourg and the staff do not acknowledge you. What should you do first, before saying anything else?",
      options: [
        "Wait silently until they look at you, then order",
        "Say 'Bonjour!' loudly — in France, greeting upon entry is a social obligation, and failing to do so is considered rude",
        "Say 'Excusez-moi' and then order immediately",
        "Nothing — it is normal for French shop staff to be cold",
      ],
      correct: [1],
      explanation:
        "In France, greeting ('Bonjour') upon entering any shop, bakery, medical cabinet, or small business is a firm social norm. Omitting it is experienced as rudeness by French people, even if unintentional. The correct sequence: enter → 'Bonjour!' → wait to be acknowledged → order. Many integration difficulties of foreigners in France stem from this simple omission. 'Bonjour' is also your opening bid in any transaction — it signals you are engaging respectfully.",
    },

    {
      type: "mcq",
      question: "What is the CAF and why does it matter for you as an M2 student in Strasbourg?",
      options: [
        "Caisse d'Allocations Familiales — the French housing benefit system. You are likely eligible for APL (housing assistance) which can reduce your rent by €100–200/month. Apply as soon as you have a rental contract.",
        "Centre Alsacien de Formation — a French language school in Strasbourg",
        "Comité des Activités Facultatives — the university student activities committee",
        "Carte d'Accès Facultaire — the university access card",
      ],
      correct: [0],
      explanation:
        "The CAF (Caisse d'Allocations Familiales) is the French social security body that administers family and housing benefits. APL (Aide Personnalisée au Logement) is a monthly housing subsidy available to students renting privately. Most international M2 students are eligible. The amount depends on your rent and income. Apply online at caf.fr immediately after signing your lease — the benefit is not retroactive beyond a short period. This is one of the most financially impactful administrative actions for a student in France.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 8: Everyday French Accelerated via Physics Intuition
// ═══════════════════════════════════════════════════════════════════════════

const ch8 = {
  title: "Everyday French Accelerated via Physics Intuition",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Use physics-style pattern abstraction to acquire everyday French faster.
          A physicist does not memorise every particle separately — they learn
          the underlying symmetry group and derive the particle spectrum.
          Apply the same logic to everyday French vocabulary.
          Estimated study time: <strong>3 hours</strong>.
        </p>
        <h2>The Morphological Field Theory of French Vocabulary</h2>
        <p>
          French vocabulary has a <strong>morphological structure</strong> that
          parallels a physicist's approach to classification. Once you know the
          roots and affixes, you can generate and decode words systematically.
        </p>
        <h3>High-Yield Prefix System</h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Prefix</th><th>Meaning</th><th>Physics example</th><th>Everyday example</th></tr>
          <tr><td>dé- / dis-</td><td>reversal, undoing</td><td>désintégration, désexcitation</td><td>défaire (undo), déménager (move out), désaccord (disagreement)</td></tr>
          <tr><td>re- / ré-</td><td>again, back</td><td>réaction, résonance, réémettre</td><td>refaire (redo), revenir (come back), recharger (recharge)</td></tr>
          <tr><td>in- / im- / ir-</td><td>not, un-</td><td>invariant, impulsion, irréversible</td><td>impossible, incapable, irréel</td></tr>
          <tr><td>pré-</td><td>before</td><td>présélection, prédire</td><td>prévenir (warn), prévoir (foresee), préparer</td></tr>
          <tr><td>inter-</td><td>between</td><td>interaction, interférence</td><td>interdit (forbidden), international, intéressant</td></tr>
          <tr><td>sous-</td><td>under, sub-</td><td>sous-espace, sous-système</td><td>sous-sol (basement), sous-marin (submarine)</td></tr>
          <tr><td>sur-</td><td>over, super</td><td>surcritique, surtension</td><td>surtout (above all), surpasser (surpass), surcharger (overload)</td></tr>
          <tr><td>anti-</td><td>against, anti-</td><td>antimatière, antiparticule</td><td>antibiotique, anticiper, anticonformiste</td></tr>
          <tr><td>trans-</td><td>across, through</td><td>transmission, transformation</td><td>transport, traverser (cross), transfert</td></tr>
        </table>
        <h3>High-Yield Suffix System</h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Suffix</th><th>Meaning / word class</th><th>Physics example</th><th>Everyday example</th></tr>
          <tr><td>-tion / -sion</td><td>F noun — action/process</td><td>désintégration, diffusion</td><td>destination, situation, question</td></tr>
          <tr><td>-eur / -teur</td><td>M noun — person/device doing X</td><td>détecteur, accélérateur, opérateur</td><td>directeur, professeur, serveur</td></tr>
          <tr><td>-eur / -eure</td><td>F noun — abstract quality</td><td>valeur, chaleur, longueur</td><td>hauteur (height), largeur (width), profondeur (depth)</td></tr>
          <tr><td>-ment</td><td>M noun or adverb</td><td>rayonnement, mouvement, alignement</td><td>gouvernement, rapidement, seulement</td></tr>
          <tr><td>-able / -ible</td><td>adjective — can be done</td><td>mesurable, observable, réversible</td><td>possible, disponible (available), capable</td></tr>
          <tr><td>-ique</td><td>adjective — relating to</td><td>magnétique, cinétique, atomique</td><td>pratique (practical), logique, unique</td></tr>
          <tr><td>-ité</td><td>F noun — abstract property</td><td>relativité, radioactivité, densité</td><td>qualité, liberté, possibilité</td></tr>
          <tr><td>-iser</td><td>verb — to make/become</td><td>ioniser, polariser, normaliser</td><td>réaliser (realise), organiser, utiliser</td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>The Conservation Laws of Grammar</h2>
        <p>
          In physics, conservation laws constrain which processes can occur.
          In French grammar, certain agreement rules function identically —
          they are conserved quantities that must balance across a sentence.
        </p>
        <h3>Conservation Law 1: Gender Agreement</h3>
        <p>
          A noun's gender propagates to all its modifiers. Like charge conservation:
          if the noun is feminine, all attached adjectives and articles must be feminine.
        </p>
        <p>
          <em>la <strong>belle</strong> fonction d'onde <strong>normalisée</strong></em>
          — 'fonction' is feminine → belle (not beau), normalisée (not normalisé).
        </p>
        <h3>Conservation Law 2: Number Agreement</h3>
        <p>
          Plurality propagates similarly. <em>les belles fonctions normalisées</em> —
          plural noun → plural article, plural adjective.
        </p>
        <h3>Conservation Law 3: Subject-Verb Agreement</h3>
        <p>
          The verb must agree with its subject in person and number.
          <em>Les électrons <strong>interagissent</strong></em> (3rd person plural).
          <em>L'énergie <strong>est</strong> conservée</em> (3rd person singular).
        </p>
        <h2>Frequency-First Everyday Vocabulary — 100 Core Words</h2>
        <p>
          These 100 words cover approximately 50% of all spoken French by token frequency.
          Learn them with absolute priority.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Rank</th><th>French</th><th>English</th><th>Rank</th><th>French</th><th>English</th></tr>
          <tr><td>1</td><td>le/la/les</td><td>the</td><td>26</td><td>avec</td><td>with</td></tr>
          <tr><td>2</td><td>de/du/des</td><td>of/from/some</td><td>27</td><td>tout/tous</td><td>all/every</td></tr>
          <tr><td>3</td><td>et</td><td>and</td><td>28</td><td>faire</td><td>to do/make</td></tr>
          <tr><td>4</td><td>être</td><td>to be</td><td>29</td><td>son/sa/ses</td><td>his/her/its</td></tr>
          <tr><td>5</td><td>en</td><td>in/of it</td><td>30</td><td>mettre</td><td>to put/place</td></tr>
          <tr><td>6</td><td>un/une</td><td>a/an</td><td>31</td><td>même</td><td>even/same</td></tr>
          <tr><td>7</td><td>avoir</td><td>to have</td><td>32</td><td>aussi</td><td>also/too</td></tr>
          <tr><td>8</td><td>que/qu'</td><td>that/than/which</td><td>33</td><td>prendre</td><td>to take</td></tr>
          <tr><td>9</td><td>je/j'</td><td>I</td><td>34</td><td>bien</td><td>well/good</td></tr>
          <tr><td>10</td><td>il/elle</td><td>he/she/it</td><td>35</td><td>vouloir</td><td>to want</td></tr>
          <tr><td>11</td><td>se/s'</td><td>oneself</td><td>36</td><td>si</td><td>if/so/yes(contradict)</td></tr>
          <tr><td>12</td><td>ne/n'</td><td>not (negation)</td><td>37</td><td>non</td><td>no/not</td></tr>
          <tr><td>13</td><td>pas</td><td>not (negation 2)</td><td>38</td><td>grand</td><td>big/tall/great</td></tr>
          <tr><td>14</td><td>plus</td><td>more/no more</td><td>39</td><td>voir</td><td>to see</td></tr>
          <tr><td>15</td><td>par</td><td>by/per/through</td><td>40</td><td>lui</td><td>him/her (indirect)</td></tr>
          <tr><td>16</td><td>sur</td><td>on/about</td><td>41</td><td>venir</td><td>to come</td></tr>
          <tr><td>17</td><td>au/aux</td><td>at the / to the</td><td>42</td><td>savoir</td><td>to know (fact)</td></tr>
          <tr><td>18</td><td>mais</td><td>but</td><td>43</td><td>peu</td><td>little/few</td></tr>
          <tr><td>19</td><td>ou</td><td>or</td><td>44</td><td>encore</td><td>still/again/more</td></tr>
          <tr><td>20</td><td>nous</td><td>we/us</td><td>45</td><td>comme</td><td>as/like/how</td></tr>
          <tr><td>21</td><td>vous</td><td>you (pl/formal)</td><td>46</td><td>devenir</td><td>to become</td></tr>
          <tr><td>22</td><td>ils/elles</td><td>they</td><td>47</td><td>autre</td><td>other</td></tr>
          <tr><td>23</td><td>ce/c'</td><td>this/it</td><td>48</td><td>après</td><td>after</td></tr>
          <tr><td>24</td><td>qui</td><td>who/which</td><td>49</td><td>déjà</td><td>already</td></tr>
          <tr><td>25</td><td>dans</td><td>in/inside</td><td>50</td><td>très</td><td>very</td></tr>
        </table>
      `,
    },

    {
      type: "mcq",
      question: "Using the suffix system, what does <em>mesurable</em> mean, and what is its physics context?",
      options: [
        "Something that is measured (past participle) — e.g., une quantité mesurée",
        "Something that can be measured (adjective, -able suffix) — e.g., une observable mesurable in quantum mechanics",
        "The act of measuring (noun) — e.g., la mesure",
        "A measurement device — e.g., le mesureur",
      ],
      correct: [1],
      explanation:
        "The suffix -able/-ible means 'able to be [verb-ed]'. Mesurer (to measure) + -able = mesurable (measurable). Physics context: 'une quantité physiquement mesurable' — a physically measurable quantity. This is directly relevant to your QM courses where the distinction between observables (measurable operators) and non-observables is fundamental. The suffix system is generative: observable (from observer), prévisible (from prévoir — predictable), reproductible (from reproduire — reproducible).",
    },

    {
      type: "msq",
      question: "Apply the prefix system: which of the following are correctly analysed?",
      options: [
        "<em>irréversible</em> = ir- (not) + réversible (reversible) → irreversible",
        "<em>surcharger</em> = sur- (over) + charger (to load/charge) → to overload",
        "<em>désaccord</em> = dés- (reversal) + accord (agreement) → disagreement",
        "<em>interaction</em> = in- (not) + traction (traction) → without traction",
      ],
      correct: [0, 1, 2],
      explanation:
        "A: ir- (not) + réversible ✓ — 'irréversible' is the second law of thermodynamics applied to everyday life. B: sur- (over) + charger ✓ — 'surcharger un circuit' (overload a circuit) uses the same root as the physics term. C: dés- (undoing) + accord (agreement) ✓ — disagreement. D: WRONG analysis — 'interaction' = inter- (between) + action (action) → action between things. The 'in-' is part of 'inter-', not a negation prefix.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 9: Grammar Engine — A1 to B1 Structural Upgrade
// ═══════════════════════════════════════════════════════════════════════════

const ch9 = {
  title: "Grammar Engine — A1 → B1 Structural Upgrade",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Upgrade your grammar from A1 survival templates to B1 productive
          structures. Focus on the specific grammar points that are:
          (a) most frequent in both academic and everyday French,
          (b) most different from English (highest interference risk),
          (c) essential for correct written production.
          Estimated study time: <strong>4 hours</strong>.
        </p>
        <h2>Upgrade 1: The Relative Clause System</h2>
        <p>
          Relative clauses are essential for describing complex entities —
          both in physics and in everyday communication.
          They connect two ideas without starting a new sentence.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Pronoun</th><th>Function</th><th>Physics example</th><th>Everyday example</th></tr>
          <tr>
            <td><em>qui</em></td><td>Subject of relative clause</td>
            <td><em>L'opérateur qui commute avec H est une observable.</em></td>
            <td><em>Le professeur qui enseigne ce cours est excellent.</em></td>
          </tr>
          <tr>
            <td><em>que/qu'</em></td><td>Object of relative clause</td>
            <td><em>La valeur que nous cherchons est l'énergie propre.</em></td>
            <td><em>Le livre que j'ai lu est intéressant.</em></td>
          </tr>
          <tr>
            <td><em>dont</em></td><td>Of which / whose / from which</td>
            <td><em>Le système dont le hamiltonien est connu…</em></td>
            <td><em>L'ami dont je parle s'appelle Marc.</em></td>
          </tr>
          <tr>
            <td><em>où</em></td><td>Where / when (time/place)</td>
            <td><em>La région où l'approximation est valable…</em></td>
            <td><em>Le café où nous nous retrouvons est près du tram.</em></td>
          </tr>
          <tr>
            <td><em>lequel/laquelle/lesquels/lesquelles</em></td><td>Which (after preposition)</td>
            <td><em>L'axe selon lequel on intègre…</em></td>
            <td><em>La raison pour laquelle je reste…</em></td>
          </tr>
        </table>
        <h2>Upgrade 2: The Subjunctive — When and Why</h2>
        <p>
          The subjunctive (subjonctif) expresses uncertainty, doubt, emotion,
          necessity, and obligation. It is used after specific trigger phrases.
          You will encounter it in written French and formal speech.
        </p>
        <p>
          <strong>Key trigger phrases requiring the subjunctive:</strong>
        </p>
        <ul>
          <li><em>il faut que</em> + subjonctif → <em>Il faut que vous compreniez.</em> (You must understand.)</li>
          <li><em>il est nécessaire que</em> + subjonctif → <em>Il est nécessaire que le résultat soit exact.</em></li>
          <li><em>bien que</em> + subjonctif → <em>Bien que l'approximation soit valable…</em> (Although the approximation is valid…)</li>
          <li><em>pour que</em> + subjonctif → <em>Pour que la démonstration soit complète…</em></li>
          <li><em>avant que</em> + subjonctif → <em>Avant que nous passions à…</em> (Before we move on to…)</li>
          <li><em>vouloir que</em> + subjonctif → <em>Je voudrais que vous fassiez…</em></li>
        </ul>
        <p><strong>Subjonctif formation</strong> (regular verbs): take the 3rd person plural present stem + -e, -es, -e, -ions, -iez, -ent.</p>
        <p><em>parler → ils parlent → stem: parl- → je parle, tu parles, il parle, nous parlions, vous parliez, ils parlent</em></p>
        <p>Key irregulars: être → <em>je sois, tu sois, il soit, nous soyons, vous soyez, ils soient</em> | avoir → <em>j'aie, tu aies, il ait, nous ayons, vous ayez, ils aient</em></p>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Upgrade 3: The Conditional — Politeness and Hypothesis</h2>
        <p>
          The conditional (conditionnel) has two main uses: polite requests,
          and hypothetical statements (if… then…).
        </p>
        <p>
          <strong>Formation:</strong> infinitive + imperfect endings
          (-ais, -ais, -ait, -ions, -iez, -aient).
        </p>
        <p>
          <em>parler → je parlerais, tu parlerais, il parlerait, nous parlerions, vous parleriez, ils parleraient</em>
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Use</th><th>Example</th><th>English</th></tr>
          <tr><td>Polite request</td><td><em>Je voudrais un café.</em></td><td>I would like a coffee.</td></tr>
          <tr><td>Polite request</td><td><em>Pourriez-vous m'aider?</em></td><td>Could you help me?</td></tr>
          <tr><td>Hypothesis (result clause)</td><td><em>Si j'avais le temps, j'étudierais plus.</em></td><td>If I had time, I would study more.</td></tr>
          <tr><td>Reported speech / uncertainty</td><td><em>Il semblerait que le résultat soit correct.</em></td><td>It would seem that the result is correct.</td></tr>
          <tr><td>Academic hedging</td><td><em>Cette interprétation pourrait être erronée.</em></td><td>This interpretation could be wrong.</td></tr>
        </table>
        <p>
          <strong>The si-clause pattern:</strong>
          si + imparfait → conditionnel présent (for unreal present/future).
          si + plus-que-parfait → conditionnel passé (for unreal past).
        </p>
        <h2>Upgrade 4: The Imperfect — Description and Habit</h2>
        <p>
          The imperfect (imparfait) describes ongoing past states, background
          descriptions, and habitual past actions. It contrasts with the passé
          composé (completed events).
        </p>
        <p>
          <strong>Formation:</strong> nous-form present stem + -ais, -ais, -ait, -ions, -iez, -aient.
        </p>
        <p>
          <em>parler → nous parlons → stem: parl- → je parlais, tu parlais, il parlait…</em>
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Use</th><th>Imparfait</th><th>Passé Composé</th></tr>
          <tr><td>Completed event</td><td>—</td><td><em>J'ai fait une erreur de calcul.</em> (I made a calculation error.)</td></tr>
          <tr><td>Background/state</td><td><em>L'énergie était nulle.</em> (The energy was zero.)</td><td>—</td></tr>
          <tr><td>Habit in past</td><td><em>Je lisais des articles chaque soir.</em> (I used to read papers every evening.)</td><td>—</td></tr>
          <tr><td>Interrupted action</td><td><em>Je travaillais quand…</em> (I was working when…)</td><td><em>…le détecteur a déclenché.</em> (…the detector triggered.)</td></tr>
        </table>
        <h2>Upgrade 5: Object Pronouns — The Most Common Grammar Error</h2>
        <p>
          French object pronouns come <strong>before</strong> the verb (unlike English,
          which places them after). The order is fixed:
        </p>
        <p style="text-align:center; font-size:14px;">
          <strong>subject → [ne] → me/te/se/nous/vous → le/la/les → lui/leur → y → en → verb → [pas]</strong>
        </p>
        <ul>
          <li><em>Je le comprends.</em> (I understand it. — direct object pronoun 'le')</li>
          <li><em>Il lui parle.</em> (He speaks to him/her. — indirect object pronoun 'lui')</li>
          <li><em>Il y en a deux.</em> (There are two of them. — y + en)</li>
          <li><em>Je ne le vois pas.</em> (I don't see it. — ne + le + verb + pas)</li>
          <li><em>Je vais le faire.</em> (I am going to do it. — le before infinitive in modal structure)</li>
        </ul>
      `,
    },

    {
      type: "mcq",
      question: "Choose the correct relative pronoun: 'The equation ___ we are solving is nonlinear.' (<em>L'équation ___ nous résolvons est non linéaire.</em>)",
      options: [
        "<em>qui</em> — because it refers to a thing",
        "<em>que</em> — because the pronoun is the object of 'résoudre' (we resolve it)",
        "<em>dont</em> — because we solve of the equation",
        "<em>où</em> — because it indicates location",
      ],
      correct: [1],
      explanation:
        "'Que' is the object relative pronoun — used when the relative pronoun functions as the direct object of the subordinate verb. 'Nous résolvons quoi?' → 'l'équation' — it is the object of 'résoudre'. Therefore: 'L'équation que nous résolvons'. 'Qui' would be correct if the equation were the subject of the subordinate verb: 'L'équation qui décrit le système' (the equation that describes the system — equation = subject of 'décrit').",
    },

    {
      type: "mcq",
      question: "Your supervisor says: <em>Il faudrait que tu termines ton rapport avant vendredi.</em> What does this mean grammatically and pragmatically?",
      options: [
        "A direct order: your report must be done Friday. (Indicative — fact statement.)",
        "A polite but firm request using the conditional of 'falloir' + subjunctive 'termines': 'It would be necessary that you finish your report before Friday.' Pragmatically: please have it done by Friday.",
        "A possibility: your report might be done by Friday.",
        "A past statement: your report should have been done by Friday.",
      ],
      correct: [1],
      explanation:
        "'Il faudrait' = conditional of 'falloir' (to be necessary) — softer than 'il faut' (it is necessary). 'Que tu termines' = subjunctive of 'terminer' triggered by the faudrait-que construction. Pragmatically, a French supervisor using 'il faudrait que' is making a polite but clear expectation — the conditionnel softens the imperative force, as is typical in French professional register. You should treat this as a firm deadline.",
    },

    {
      type: "msq",
      question: "Which sentences correctly use the imparfait vs. passé composé distinction?",
      options: [
        "<em>Je lisais l'article quand mon ordinateur a planté.</em> (I was reading the article when my computer crashed.)",
        "<em>Hier soir, j'ai analysé les données.</em> (Yesterday evening, I analysed the data — completed action.)",
        "<em>Quand j'étais à l'école, j'ai aimé les maths.</em> (When I was at school, I liked maths — habitual state.)",
        "<em>L'expérience durait trois heures.</em> (The experiment lasted three hours — duration, background.)",
      ],
      correct: [0, 1, 3],
      explanation:
        "A: Correct — imparfait for the ongoing background action (was reading), passé composé for the punctual interrupting event (crashed) ✓. B: Correct — passé composé for a completed, delimited past action ✓. C: WRONG — 'j'ai aimé les maths' should be 'j'aimais les maths' — a habitual/continuous state in the past requires imparfait. Passé composé here implies you started and stopped liking maths at a specific moment — very different meaning. D: Correct — 'durait' (imparfait) for a background duration ✓.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 10: Speaking Confidence — From Lab to Street
// ═══════════════════════════════════════════════════════════════════════════

const ch10 = {
  title: "Speaking Confidence — From Lab to Street",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Build genuine spoken fluency across registers: technical discussion
          with researchers, social interaction with colleagues and friends,
          transactional communication in everyday Strasbourg life.
          Address the specific speaking anxiety points of highly analytical learners.
          Estimated study time: <strong>3 hours</strong>.
        </p>
        <h2>The Analytical Learner's Speaking Problem</h2>
        <p>
          Physicists and mathematicians face a specific fluency barrier:
          <strong>perfectionism before output</strong>. The internal grammar
          checker fires before the sentence exits, producing either silence
          or heavily reduced, halting speech.
        </p>
        <p>
          The solution is not to lower standards — it is to understand
          what native speakers actually optimise for. They do not optimise
          for grammatical perfection. They optimise for:
        </p>
        <ol>
          <li><strong>Communicative success</strong> — was the message received?</li>
          <li><strong>Fluency signals</strong> — does the speaker seem engaged and confident?</li>
          <li><strong>Appropriate register</strong> — are they using formal/informal correctly?</li>
        </ol>
        <p>
          Grammar errors at B1 level are expected and ignored by native speakers
          in normal interaction. A sentence with one gender agreement error that
          is delivered confidently and fluently outperforms a grammatically
          perfect sentence delivered with 5-second pauses.
        </p>
        <h2>The Physicist's Speaking Protocol</h2>
        <p>
          Treat speaking like a calculation with error bars. Your output does
          not need to be exact — it needs to be within the <em>comprehension tolerance</em>
          of the listener. That tolerance is much wider than you think.
        </p>
        <ol>
          <li>
            <strong>Commit to the sentence before checking it.</strong>
            Start speaking before the full sentence is formed internally.
            Fluency requires abandoning the write-then-speak model.
          </li>
          <li>
            <strong>Use chunked formulae.</strong>
            Memorised chunks (je voudrais, il me semble que, c'est-à-dire, en fait)
            produce fluency without grammar load. Expand the chunk inventory.
          </li>
          <li>
            <strong>Repair forward, not backward.</strong>
            If you make an error, continue and self-correct in the next clause:
            "Je suis allé — enfin, je suis allée — au laboratoire."
            Do not stop and restart.
          </li>
        </ol>
        <h2>Fluency Chunk Inventory — 30 Indispensable Oral Phrases</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Function</th><th>French chunk</th><th>Register</th></tr>
          <tr><td>Buying thinking time</td><td><em>Euh… Alors… Bon…</em></td><td>All</td></tr>
          <tr><td>Reformulating</td><td><em>C'est-à-dire… / Autrement dit…</em></td><td>All</td></tr>
          <tr><td>Checking understanding</td><td><em>Vous me suivez? / Tu vois ce que je veux dire?</em></td><td>Formal / informal</td></tr>
          <tr><td>Expressing uncertainty</td><td><em>Je ne suis pas sûr(e), mais… / Il me semble que…</em></td><td>All</td></tr>
          <tr><td>Agreeing strongly</td><td><em>Tout à fait. / Exactement. / En effet.</em></td><td>Formal</td></tr>
          <tr><td>Agreeing casually</td><td><em>Ouais. / C'est ça. / Carrément.</em></td><td>Informal</td></tr>
          <tr><td>Disagreeing politely</td><td><em>Je ne suis pas tout à fait d'accord… / Oui, mais…</em></td><td>All</td></tr>
          <tr><td>Adding information</td><td><em>De plus… / En outre… / Par ailleurs…</em></td><td>Formal</td></tr>
          <tr><td>Adding info casually</td><td><em>Et aussi… / En plus… / D'ailleurs…</em></td><td>Informal</td></tr>
          <tr><td>Giving an example</td><td><em>Par exemple… / Prenons le cas de…</em></td><td>All</td></tr>
          <tr><td>Contrasting</td><td><em>Par contre… / En revanche… / Cependant…</em></td><td>All</td></tr>
          <tr><td>Summarising</td><td><em>En résumé… / En bref… / Bref…</em></td><td>All</td></tr>
          <tr><td>Asking for repetition</td><td><em>Vous pouvez répéter? / Pardon?</em></td><td>Formal / all</td></tr>
          <tr><td>Asking for clarification</td><td><em>Qu'est-ce que vous voulez dire par…?</em></td><td>All</td></tr>
          <tr><td>Expressing enthusiasm</td><td><em>C'est super! / Génial! / Sympa!</em></td><td>Informal</td></tr>
          <tr><td>Expressing difficulty</td><td><em>C'est compliqué… / C'est pas évident…</em></td><td>All</td></tr>
          <tr><td>Transitioning in a presentation</td><td><em>Passons maintenant à… / Venons-en à…</em></td><td>Formal</td></tr>
          <tr><td>Inviting a question</td><td><em>Des questions? / Vous avez des remarques?</em></td><td>Formal</td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Register Switching: Lab → Cafeteria → Street</h2>
        <p>
          French requires more explicit register awareness than English.
          The same message uses different words and structures depending on
          who you are talking to. Here is the same idea across three registers:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Message</th><th>Formal (professor, email)</th><th>Semi-formal (labmate)</th><th>Informal (friend)</th></tr>
          <tr>
            <td>I don't understand</td>
            <td><em>Je ne comprends pas tout à fait.</em></td>
            <td><em>Je comprends pas vraiment.</em></td>
            <td><em>Je pige pas.</em></td>
          </tr>
          <tr>
            <td>It's difficult</td>
            <td><em>C'est assez complexe.</em></td>
            <td><em>C'est pas évident.</em></td>
            <td><em>C'est galère / chaud.</em></td>
          </tr>
          <tr>
            <td>See you later</td>
            <td><em>Je vous souhaite une bonne journée.</em></td>
            <td><em>À plus tard. / À tout à l'heure.</em></td>
            <td><em>À plus! / Ciao!</em></td>
          </tr>
          <tr>
            <td>I agree</td>
            <td><em>Je suis tout à fait d'accord.</em></td>
            <td><em>Oui, c'est juste.</em></td>
            <td><em>Ouais, carrément.</em></td>
          </tr>
          <tr>
            <td>That's great news</td>
            <td><em>C'est une excellente nouvelle.</em></td>
            <td><em>C'est super!</em></td>
            <td><em>Trop bien! / Génial!</em></td>
          </tr>
        </table>
        <h2>Presentation Language: Your M2 Oral Defence (Soutenance)</h2>
        <p>
          Your M2 SAP soutenance will likely be in French. Here is the complete
          oral presentation structure with the standard French phrases:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Stage</th><th>French</th></tr>
          <tr><td>Opening</td><td><em>Bonjour à tous. Je m'appelle [name] et je vais vous présenter mes travaux de stage de M2 intitulés [title].</em></td></tr>
          <tr><td>Outline</td><td><em>Mon exposé se divisera en [n] parties. Je commencerai par…, puis j'aborderai…, et je conclurai par…</em></td></tr>
          <tr><td>Slide transition</td><td><em>Passons maintenant à… / Comme vous pouvez le voir sur cette diapositive… / Je voudrais attirer votre attention sur…</em></td></tr>
          <tr><td>Showing a result</td><td><em>On observe ici que… / Ce graphique montre que… / Les résultats indiquent que…</em></td></tr>
          <tr><td>Acknowledging a limitation</td><td><em>Il convient de noter que… / Cette approximation n'est valable que si… / Des études complémentaires seraient nécessaires pour…</em></td></tr>
          <tr><td>Conclusion</td><td><em>Pour conclure, nous avons montré que… / En résumé, les principaux résultats sont… / Ces travaux ouvrent des perspectives vers…</em></td></tr>
          <tr><td>Answering a jury question</td><td><em>C'est une question très pertinente. En effet… / Si je comprends bien votre question, vous demandez… / Je n'ai pas de réponse définitive, mais il me semble que…</em></td></tr>
        </table>
      `,
    },

    {
      type: "mcq",
      question: "During your M2 soutenance, a jury member asks a question you partially understand. What is the best response strategy?",
      options: [
        "Say nothing and wait for them to repeat",
        "Answer in English since it is a technical question",
        "Say: <em>Si je comprends bien votre question, vous demandez [your interpretation]… Est-ce bien ça?</em> — then answer based on their confirmation",
        "Say: <em>Je ne comprends pas</em> and stop",
      ],
      correct: [2],
      explanation:
        "The reformulation technique ('Si je comprends bien votre question…') is a standard oral examination strategy in France. It serves three functions: (1) confirms you understood the question, (2) buys thinking time while you formulate the answer, (3) demonstrates active listening. French jury members appreciate this approach — it shows academic communication skill. If your interpretation is wrong, they will correct it, and you have lost nothing. This strategy is explicitly recommended in French grandes écoles oral examination preparation.",
    },

    {
      type: "msq",
      question: "Which of the following are valid informal French expressions that you might hear from labmates in Strasbourg?",
      options: [
        "<em>Je pige pas</em> — I don't understand (very informal, from 'piger')",
        "<em>C'est galère</em> — it's a hassle/difficult (verlan/informal)",
        "<em>Je vous souhaite une bonne continuation</em> — I wish you well (formal parting phrase)",
        "<em>Ouais, carrément</em> — Yeah, absolutely (casual agreement)",
      ],
      correct: [0, 1, 3],
      explanation:
        "A: 'Je pige pas' — 'piger' is argot for 'comprendre'. Very casual — use with friends, not professors ✓. B: 'C'est galère' — 'galère' (literally: galley ship, hence hard labour) → difficult/pain in the neck. Common in student speech ✓. C: 'Je vous souhaite une bonne continuation' — this is formal, polite, and entirely appropriate with professors and admin — NOT informal ✗. D: 'Ouais' (informal 'oui') + 'carrément' (totally/absolutely) = casual strong agreement ✓.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 11: Reading & Writing at B1 — Papers, Reports & Messages
// ═══════════════════════════════════════════════════════════════════════════

const ch11 = {
  title: "Reading & Writing at B1 — Papers, Reports & Messages",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Develop B1-level French reading and writing, calibrated to the specific
          genres you encounter daily: physics papers, lab reports, formal emails,
          and administrative documents. Estimated study time: <strong>3 hours</strong>.
        </p>
        <h2>Reading French Physics Papers — A Systematic Approach</h2>
        <p>
          Most papers in your field are written in English, but French papers
          exist (especially from French institutions, CNRS preprints, and
          pedagogical texts). More immediately: French textbooks are a rich
          acquisition resource. Cohen-Tannoudji's <em>Mécanique Quantique</em>
          is one of the finest QM textbooks ever written — in French.
        </p>
        <p>
          <strong>Reading strategy for academic French:</strong>
        </p>
        <ol>
          <li>
            <strong>Read the abstract first.</strong> You know the field —
            your domain knowledge fills 40% of comprehension automatically.
            Identify the main claim.
          </li>
          <li>
            <strong>Scan headings and equations.</strong> Equations are language-neutral.
            Use them as semantic anchors for the surrounding text.
          </li>
          <li>
            <strong>Read captions and figure labels.</strong> These use simple
            nominal French (noun phrases without complex verbs) — accessible at A2.
          </li>
          <li>
            <strong>Read one paragraph carefully.</strong> Identify unfamiliar words.
            Apply morphological analysis before looking them up.
          </li>
        </ol>
        <h2>The Structure of a French Scientific Abstract</h2>
        <p>
          French abstracts (résumés) follow a predictable 4-part structure.
          Recognising the structure speeds comprehension:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Part</th><th>Typical French signal phrases</th></tr>
          <tr><td>Context / problem</td><td><em>Dans le cadre de… / Nous nous intéressons à… / Le problème de…</em></td></tr>
          <tr><td>Method / approach</td><td><em>Nous proposons… / Nous utilisons… / Notre approche consiste à…</em></td></tr>
          <tr><td>Results</td><td><em>Nous montrons que… / Nos résultats indiquent que… / Il apparaît que…</em></td></tr>
          <tr><td>Conclusion / perspective</td><td><em>Ces résultats ouvrent la voie à… / Cette méthode pourrait permettre de… / En conclusion…</em></td></tr>
        </table>
        <h2>Writing Your M2 Rapport de Stage in French</h2>
        <p>
          The rapport de stage is the major written deliverable of your M2.
          It is likely 30–60 pages, written in formal academic French.
          Here is the section-by-section language guide:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Section</th><th>Key French phrases for that section</th></tr>
          <tr>
            <td>Introduction</td>
            <td><em>Ce rapport présente les travaux effectués dans le cadre de mon stage de M2 au sein de [lab]. L'objectif principal de ce stage était de… Dans un premier temps, nous présenterons…</em></td>
          </tr>
          <tr>
            <td>Theoretical background</td>
            <td><em>Rappelons les notions fondamentales nécessaires à la compréhension de… On définit [X] comme… Il est connu que… D'après le théorème de…</em></td>
          </tr>
          <tr>
            <td>Methodology</td>
            <td><em>La méthode utilisée consiste à… Nous avons procédé de la manière suivante… Le protocole expérimental est le suivant…</em></td>
          </tr>
          <tr>
            <td>Results and discussion</td>
            <td><em>La figure [n] représente… On observe que… Ces résultats sont en accord avec… Une discordance est observée entre… Ceci s'explique par…</em></td>
          </tr>
          <tr>
            <td>Conclusion</td>
            <td><em>En conclusion, nous avons montré que… Les perspectives de ce travail sont… Il serait intéressant de poursuivre…</em></td>
          </tr>
          <tr>
            <td>Acknowledgements</td>
            <td><em>Je remercie [supervisor] pour son encadrement et ses conseils tout au long de ce stage. Je tiens également à remercier…</em></td>
          </tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Common Writing Errors at B1 Level — Specific to Physicists</h2>
        <p>
          These errors are systematically made by analytical learners
          translating from English physics writing into French:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>English habit</th><th>Wrong French</th><th>Correct French</th><th>Explanation</th></tr>
          <tr>
            <td>"The energy is given by…"</td>
            <td><em>L'énergie est donnée par… ✓</em></td>
            <td><em>L'énergie est donnée par… ✓</em></td>
            <td>This one transfers correctly.</td>
          </tr>
          <tr>
            <td>"We show that…"</td>
            <td><em>Nous montrons que… ✓</em></td>
            <td><em>Nous montrons que… ✓</em></td>
            <td>Direct transfer works here.</td>
          </tr>
          <tr>
            <td>"Using equation (3)…"</td>
            <td><em>Utilisant l'équation (3)…</em></td>
            <td><em>En utilisant l'équation (3)… / À l'aide de l'équation (3)…</em></td>
            <td>Gerund in French needs 'en': 'en utilisant'.</td>
          </tr>
          <tr>
            <td>"As shown in Figure 2…"</td>
            <td><em>Comme montré dans la Figure 2…</em></td>
            <td><em>Comme le montre la Figure 2… / Ainsi qu'illustré en Figure 2…</em></td>
            <td>French prefers active 'le montre' over passive gerund.</td>
          </tr>
          <tr>
            <td>"The results show that A is larger than B."</td>
            <td><em>Les résultats montrent que A est plus large que B.</em></td>
            <td><em>Les résultats montrent que A est plus grand que B.</em></td>
            <td>'Large' in French = wide, not big. 'Grand' = large/big. Classic faux ami.</td></tr>
          <tr>
            <td>"The experiment was performed by…"</td>
            <td><em>L'expérience a été réalisée par… ✓</em></td>
            <td><em>L'expérience a été réalisée par… ✓ / Nous avons réalisé l'expérience…</em></td>
            <td>French often prefers active voice in scientific writing over passive.</td>
          </tr>
          <tr>
            <td>"This result is consistent with…"</td>
            <td><em>Ce résultat est consistent avec…</em></td>
            <td><em>Ce résultat est en accord avec… / Ce résultat concorde avec…</em></td>
            <td>'Consistent' is a faux ami — it exists but is rarer. 'En accord avec' is standard.</td>
          </tr>
        </table>
        <h2>Punctuation Rules — French Differs from English</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Mark</th><th>French rule</th><th>Example</th></tr>
          <tr><td>Space before : ; ! ?</td><td>In French, a space BEFORE colon, semicolon, exclamation, question mark</td><td><em>Quelle surprise !</em> (NOT: Quelle surprise!)</td></tr>
          <tr><td>Guillemets « »</td><td>French quotation marks are « » (not " ")</td><td><em>Il a dit : « C'est faux. »</em></td></tr>
          <tr><td>Decimal separator</td><td>French uses a comma, not a point: 3,14 not 3.14</td><td><em>La constante de Planck vaut 6,626 × 10⁻³⁴ J·s</em></td></tr>
          <tr><td>Thousands separator</td><td>French uses a space or point, not a comma: 1 000 not 1,000</td><td><em>1 000 électrons / 10 000 événements</em></td></tr>
        </table>
      `,
    },

    {
      type: "mcq",
      question: "You write in your report: <em>En utilisant la méthode des moindres carrés, nous avons ajusté les données expérimentales.</em> Is this correct?",
      options: [
        "No — should be 'Utilisant la méthode…' (gerund without 'en')",
        "Yes — 'en utilisant' is the correct French gerund (gérondif) for expressing manner or simultaneity",
        "No — should be 'Nous avons utilisé la méthode… et ajusté…' (two separate clauses)",
        "No — 'moindres carrés' should be 'least squares' (French uses the English term)",
      ],
      correct: [1],
      explanation:
        "The French gérondif (gerund) is formed with 'en + present participle' (en utilisant, en appliquant, en développant). It expresses manner, simultaneity, or condition. Without 'en', a present participle functions as an adjective or in a different grammatical role. 'Utilisant' alone would be ungrammatical as a manner adverbial. 'Méthode des moindres carrés' is the correct French term for 'least squares method' — French does not use the English term here.",
    },

    {
      type: "mcq",
      question: "In formal French scientific writing, how do you write 'the value is 6.626 × 10⁻³⁴'?",
      options: [
        "<em>la valeur est 6.626 × 10⁻³⁴</em> (English decimal point)",
        "<em>la valeur est 6,626 × 10⁻³⁴</em> (French decimal comma)",
        "<em>la valeur est 6'626 × 10⁻³⁴</em> (Swiss convention)",
        "Either . or , is acceptable in scientific French",
      ],
      correct: [1],
      explanation:
        "France uses the comma as the decimal separator: 6,626 (not 6.626). This is the ISO standard for French. In scientific writing, using an English decimal point is a clear signal of non-native French. Note: in typeset physics documents, the convention is sometimes normalised to the decimal point for international readability, but in your rapport de stage and any document submitted to a French institution, use the comma. This also applies to spreadsheets and calculators configured for French locale.",
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// Chapter 12: Full Integration — Immersion Plan & Long-Term Roadmap
// ═══════════════════════════════════════════════════════════════════════════

const ch12 = {
  title: "Full Integration — Immersion Plan & Long-Term Roadmap",
  content: [

    {
      type: "text",
      data: `
        <h2>Lesson Objective</h2>
        <p>
          Consolidate all course threads into a single, executable daily immersion
          plan. Map progress milestones. Project the acquisition trajectory through
          your M2 year and beyond. Estimated study time: <strong>2 hours</strong>.
        </p>
        <h2>The Strasbourg Immersion Stack — Daily</h2>
        <p>
          These are the non-negotiable daily acquisition activities. They are ordered
          by return on time invested. Total time: <strong>45–60 minutes per day</strong>
          — this is sufficient for B2 acquisition within 12 months given your immersive environment.
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Activity</th><th>Time</th><th>What it builds</th><th>Tool/method</th></tr>
          <tr><td>SRS review (Anki)</td><td>15 min</td><td>Vocabulary retention</td><td>Anki app — daily, non-negotiable</td></tr>
          <tr><td>Intentional listening in lab</td><td>During lab hours</td><td>Listening comprehension, physics French</td><td>Active listening — track new phrases, note them</td></tr>
          <tr><td>Read one page of French</td><td>10 min</td><td>Reading fluency, vocabulary in context</td><td>Cohen-Tannoudji, French paper abstract, Le Monde</td></tr>
          <tr><td>Speak French with one person</td><td>5–10 min</td><td>Speaking production, fluency</td><td>Labmate, café interaction, phone with friend</td></tr>
          <tr><td>Audio immersion</td><td>20 min (commute)</td><td>Listening, pronunciation models</td><td>RFI Français Facile, France Inter podcast, France Culture</td></tr>
        </table>
        <h2>Weekly Acquisition Activities</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Activity</th><th>Frequency</th><th>What it builds</th></tr>
          <tr><td>Watch one French film / series episode</td><td>2× per week</td><td>Colloquial French, culture, listening at natural speed</td></tr>
          <tr><td>Attend one French-language event (seminar, cinema, reading)</td><td>1× per week</td><td>Extended listening, social vocabulary</td></tr>
          <tr><td>Write one paragraph in French (journal, email, notes)</td><td>3× per week</td><td>Writing production, grammar consolidation</td></tr>
          <tr><td>Language exchange or tandem session</td><td>1× per week</td><td>Speaking production, real conversation</td></tr>
          <tr><td>New SRS card batch (10–15 new cards)</td><td>3× per week</td><td>Vocabulary expansion</td></tr>
        </table>
        <h2>Recommended French Media for Your Context</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Resource</th><th>Type</th><th>Level</th><th>Why it fits you</th></tr>
          <tr><td>France Culture — La Méthode Scientifique</td><td>Radio/podcast</td><td>B1–B2</td><td>Science in French — your domain. Available on podcast apps.</td></tr>
          <tr><td>France Culture — Science en questions</td><td>Radio/podcast</td><td>B1–B2</td><td>Physics, chemistry, biology interviews</td></tr>
          <tr><td>RFI Français Facile</td><td>News podcast</td><td>A2–B1</td><td>Slow, clear, daily news — ideal daily listening</td></tr>
          <tr><td>Cohen-Tannoudji, Mécanique Quantique (2 vols.)</td><td>Textbook</td><td>B1–C1</td><td>Best QM textbook in French — you know the content</td></tr>
          <tr><td>Le Monde / Libération</td><td>Newspaper</td><td>B1–B2</td><td>Quality journalism — broad vocabulary acquisition</td></tr>
          <tr><td>Brut (YouTube/Instagram)</td><td>Short video news</td><td>A2–B1</td><td>Short, modern, subtitled — casual French</td></tr>
          <tr><td>Arte (arte.tv)</td><td>TV/streaming</td><td>B1–B2</td><td>Franco-German cultural channel — documentaries with subtitles</td></tr>
          <tr><td>Lumni Science (lumni.fr)</td><td>Educational video</td><td>A2–B1</td><td>French educational videos — science topics in simple French</td></tr>
        </table>
      `,
    },

    {
      type: "text",
      data: `
        <h2>Milestone System — The Acquisition Trajectory</h2>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>Milestone</th><th>Criteria</th><th>Estimated timeline</th></tr>
          <tr>
            <td>M1 — Physics Decoder Active</td>
            <td>Can follow 80% of a lecture in your specialty. Can read a French abstract without a dictionary.</td>
            <td>Already achieved or within 2 weeks</td>
          </tr>
          <tr>
            <td>M2 — Daily Life Operational</td>
            <td>Can handle all everyday transactions (shop, transport, housing, medical) in French without English.</td>
            <td>4–6 weeks with daily practice</td>
          </tr>
          <tr>
            <td>M3 — Social French Online</td>
            <td>Can hold a 10-minute casual conversation with a French person on any everyday topic. Errors present but communication smooth.</td>
            <td>2–3 months</td>
          </tr>
          <tr>
            <td>M4 — Academic Production</td>
            <td>Can write the rapport de stage in French with minor errors. Can present at lab meeting in French.</td>
            <td>3–5 months (end of M2)</td>
          </tr>
          <tr>
            <td>M5 — B1 Consolidation</td>
            <td>Can understand French TV/radio without subtitles on known topics. Can write formal emails and short reports correctly.</td>
            <td>4–6 months</td>
          </tr>
          <tr>
            <td>M6 — B2 Threshold</td>
            <td>Can follow an unfamiliar seminar in French. Can read Le Monde without a dictionary. Can have a nuanced opinion-based conversation.</td>
            <td>8–12 months (end of M2 year)</td>
          </tr>
        </table>
        <h2>The Long-Term Physics Advantage — B2 and Beyond</h2>
        <p>
          At B2, your physics domain knowledge becomes a <strong>research tool</strong>,
          not just an acquisition aid. You will be able to:
        </p>
        <ul>
          <li>Read French theoretical physics papers at full speed</li>
          <li>Participate in French-language conferences (many major nuclear physics conferences are French-hosted: LPSC Grenoble, GANIL Caen, IPN Orsay)</li>
          <li>Apply for French PhD positions with competitive applications (CNRS, CEA, universities)</li>
          <li>Access the intellectual tradition of French theoretical physics: de Broglie, Dirac (worked in Paris), Perrin, the Paris school of quantum field theory</li>
        </ul>
        <h2>Extension: French → Spanish/Italian Physics Vocabulary</h2>
        <p>
          As a bonus, your Latin-cognate physics vocabulary now also decodes
          physics vocabulary in Spanish and Italian — the other major Romance
          languages of European physics centres:
        </p>
        <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; font-size:13px;">
          <tr><th>French</th><th>Spanish</th><th>Italian</th><th>English</th></tr>
          <tr><td>fonction d'onde</td><td>función de onda</td><td>funzione d'onda</td><td>wave function</td></tr>
          <tr><td>énergie de liaison</td><td>energía de enlace</td><td>energia di legame</td><td>binding energy</td></tr>
          <tr><td>section efficace</td><td>sección eficaz</td><td>sezione d'urto</td><td>cross-section</td></tr>
          <tr><td>désintégration</td><td>desintegración</td><td>disintegrazione</td><td>decay</td></tr>
          <tr><td>accélérateur</td><td>acelerador</td><td>acceleratore</td><td>accelerator</td></tr>
        </table>
        <p>
          The structural patterns are consistent. If you later work at CERN (Geneva —
          French dominant), INFN (Italy), or CIEMAT (Spain), your French foundation
          dramatically accelerates acquisition of the local language.
        </p>
      `,
    },

    {
      type: "mcq",
      question: "After 6 months in Strasbourg with consistent daily practice (45 min/day), what is a realistic and evidence-based expectation for your French level?",
      options: [
        "A2 — you will be able to handle simple everyday interactions",
        "B1–B2 — you can hold extended conversations, follow most media, write academic reports, participate in seminars. The combination of immersive environment + domain scaffold + daily practice compresses the timeline significantly.",
        "C1 — native-like fluency is achievable in 6 months",
        "A1–A2 — language acquisition always takes years regardless of immersion",
      ],
      correct: [1],
      explanation:
        "Research on adult immersion acquisition (e.g., FSI language learning data, Krashen's input hypothesis research) suggests that a motivated learner with A1 baseline, living in-country, with daily structured practice, can reach B1 in 3–4 months and B2 in 8–12 months. Your specific advantages — domain scaffold, analytical pattern recognition, multilingual base (Hindi/Marathi/English), and intensive immersive context — compress this further. B1–B2 at 6 months is realistic and achievable. C1 in 6 months is too optimistic for most learners; A2 underestimates immersive acquisition.",
    },

    {
      type: "msq",
      question: "Which activities provide the highest acquisition return for your specific context as a physics student in Strasbourg? (Select all high-ROI activities)",
      options: [
        "Daily Anki SRS review (15 minutes) for vocabulary retention",
        "Listening to France Culture's La Méthode Scientifique podcast (science in French)",
        "Reading French physics textbook pages (Cohen-Tannoudji) for 10 minutes daily",
        "Watching French-dubbed Hollywood films",
      ],
      correct: [0, 1, 2],
      explanation:
        "A: SRS is the highest ROI per minute for vocabulary retention — no debate ✓. B: Science podcast in French is exactly your domain scaffold — comprehensible i+1 input with known content ✓. C: Cohen-Tannoudji gives you domain-scaffolded reading with full sentence grammar exposure ✓. D: Dubbed films are poor acquisition material — the acting cadence is artificial, lip-sync forces unnatural prosody, and content is not domain-relevant. French original films and French-produced content (French Netflix, Arte) are far more effective. La méthode scientifique alone gives you better acquisition per minute than dubbed films.",
    },

    {
      type: "text",
      data: `
        <h2>SRS Master Card List — This Course</h2>
        <p>
          Add these items to Anki immediately. They represent the highest-priority
          retention targets across all 12 chapters.
        </p>
        <h3>Phonetics (Chapters 2–3)</h3>
        <ul>
          <li>French /y/ production → rounded lips (for /u/) + front tongue (for /i/)</li>
          <li>French /ø/ (deux, feu) → rounded lips + /e/ tongue position</li>
          <li>Nasalisation rule → V + n/m + {C or end} = nasal; V + nn/mm or + vowel = oral</li>
          <li>French stops /p,t,k/ → unaspirated (no puff)</li>
          <li>-on words in physics → always nasal /ɔ̃/: proton, neutron, photon, boson</li>
          <li>Liaison: article/pronoun + vowel-initial = mandatory liaison; -s → /z/</li>
          <li>Schwa /ə/ drops in fast speech: je ne sais pas → /ʃɛpa/</li>
        </ul>
        <h3>Lecture Language (Chapter 4)</h3>
        <ul>
          <li>On peut montrer que → One can show that (Block 2 frame)</li>
          <li>Il s'ensuit que → It follows that</li>
          <li>Dans la limite où → In the limit where</li>
          <li>Ce qui donne → Which gives (whiteboard step)</li>
          <li>On obtient finalement → We finally obtain</li>
          <li>Physiquement, cela signifie que → Physically, this means that</li>
        </ul>
        <h3>Maths Language (Chapter 5)</h3>
        <ul>
          <li>Soit [X] un/une [Y] → Let [X] be a [Y]</li>
          <li>Montrons que → Let us show that</li>
          <li>CQFD → QED (ce qu'il fallait démontrer)</li>
          <li>a sur b → a/b (fraction reading)</li>
          <li>la valeur propre / le vecteur propre → eigenvalue / eigenvector</li>
          <li>la dérivée partielle de f par rapport à x → ∂f/∂x</li>
        </ul>
        <h3>Grammar (Chapter 9)</h3>
        <ul>
          <li>qui vs que → subject vs object relative pronoun</li>
          <li>dont → of which / whose (relative)</li>
          <li>il faut que + subjonctif → it is necessary that</li>
          <li>si + imparfait → conditionnel présent (hypothetical)</li>
          <li>en + participe présent → French gerund (manner)</li>
          <li>Imparfait → background/state/habit in past; PC → completed event</li>
        </ul>
        <h3>Writing (Chapter 11)</h3>
        <ul>
          <li>Decimal separator in French → comma: 3,14 (not 3.14)</li>
          <li>'large' in French → wide (NOT big); 'grand' → big/large</li>
          <li>'consistent' in French → rare; use 'en accord avec' for 'consistent with'</li>
          <li>Space before :;!? in French typography</li>
          <li>Guillemets → « » (not " ")</li>
        </ul>
      `,
    },

  ],
};


// ═══════════════════════════════════════════════════════════════════════════
// BOOK EXPORT — standard { title, chapters } shape
// ═══════════════════════════════════════════════════════════════════════════

export const frenchForPhysicists = {
  title: "French for Physicists in France",
  chapters: [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch10, ch11, ch12],
};
