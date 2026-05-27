# /add-song — Add a German Song Lesson

Adds a new German-language song lesson to the ITIApp. Creates the vocabulary + lyrics data file, the lesson page component, and wires everything into the router, songs landing, and German landing page.

## Invocation

```
/add-song <Artist> "<Song Name>"
```

**Examples:**
```
/add-song Rammstein "Mein Herz brennt"
/add-song Rammstein Sonne
/add-song Rammstein "Du hast"
```

---

## Step 1 — Parse arguments and derive all identifiers

From the artist name and song name, compute:

| Name | Rule | Example (Mein Herz brennt) |
|---|---|---|
| `kebabName` | words lowercased, joined with `-`, umlauts stripped (`ä→a`, `ö→o`, `ü→u`, `ß→ss`) | `mein-herz-brennt` |
| `camelName` | first word lowercase, rest title-cased | `meinHerzBrennt` |
| `pascalName` | every word title-cased | `MeinHerzBrennt` |
| `CONST_BASE` | SCREAMING_SNAKE_CASE | `MEIN_HERZ_BRENNT` |
| `storageKey` | `itiapp-{kebabName}-known` | `itiapp-mein-herz-brennt-known` |
| Utility file | `src/utils/{camelName}Vocabulary.js` | `src/utils/meinHerzBrenntVocabulary.js` |
| Component file | `src/pages/{pascalName}Lesson.jsx` | `src/pages/MeinHerzBrenntLesson.jsx` |
| Route path | `/german/{kebabName}` | `/german/mein-herz-brennt` |

---

## Step 2 — Fetch lyrics from Genius.com

### 2a. Build the Genius URL

The Genius URL pattern is:
```
https://genius.com/{Artist-title-case}-{song-words-lowercase-hyphenated}-lyrics
```

Transformations:
- Artist: each word capitalized, joined with `-`
- Song: all words lowercased, joined with `-`
- Remove all punctuation except hyphens
- Strip umlauts: ä→a, ö→o, ü→u, ß→ss

Example: `https://genius.com/Rammstein-mein-herz-brennt-lyrics`

### 2b. Fetch with curl (browser User-Agent)

**Do NOT use `WebFetch` for Genius.com** — it sends Anthropic's crawler user-agent which Genius blocks with a 403/empty response. Use `Bash` with `curl` and a browser `User-Agent` instead:

```bash
curl -s -L \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
  -H "Accept-Language: en-US,en;q=0.9" \
  "https://genius.com/{artist}-{song}-lyrics" | \
python3 -c "
import sys, re, html as h
raw = sys.stdin.read()
containers = re.findall(r'data-lyrics-container=\"true\"[^>]*>(.*?)</div>\s*</div>', raw, re.DOTALL)
if not containers:
    containers = re.findall(r'data-lyrics-container=\"true\"[^>]*>(.*?)</div>', raw, re.DOTALL)
for c in containers:
    c = re.sub(r'<br\s*/?>', '\n', c, flags=re.IGNORECASE)
    c = re.sub(r'<[^>]+>', '', c)
    c = h.unescape(c)
    text = c.strip()
    if text:
        print(text)
        print()
"
```

Genius stores lyrics in `data-lyrics-container="true"` divs — targeting those directly avoids all the surrounding JS noise. Lines starting with `[` are section headers (e.g. `[Verse 1]`, `[Chorus]`, `[Strophe 1]`, `[Refrain]`). Extract:
- The song's full **German text** divided into labeled sections
- The **album name** and **year** (usually appears near the top of the page before the lyrics)

If the output looks incomplete (some Genius pages have unsubmitted sections), proceed to the fallback.

### 2c. Fallback chain if curl returns empty or wrong content

1. **Wrong URL** — try a `WebSearch` for `site:genius.com {artist} "{song name}" lyrics`, take the first Genius.com hit, and retry the curl command with that URL.
2. **Genius still fails** — try `WebFetch` on a non-Genius lyrics site from the search results (lyricstranslate.com, darklyrics.com, etc.).
3. **All fetches fail** — ask the user to paste the lyrics directly, the same way they do for songs in this project.

---

## Step 3 — Extract vocabulary (15–30 entries)

From the song text, identify notable German words that are:
- **Meaningful**: nouns with strong imagery, key verbs, expressive adjectives
- **Repeating**: words that appear multiple times (especially in the chorus) are high priority
- **Educational**: words a learner would want to know

For each word create one entry. Group by type in the final file (nouns first, then verbs, then adjectives/adverbs, then phrases).

### Vocabulary entry format
```js
{ id: N, word: "German", ipa: "[IPA]", en: "english meaning", es: "significado en español", type: "noun|verb|adjective|adverb|phrase" }
```

### IPA guidelines for German

Use square brackets `[...]`. Apply these rules:

| Sound | IPA | Notes |
|---|---|---|
| Long vowels | aː, iː, uː, eː, oː | e.g. Sonne → [ˈzɔnə] |
| Short vowels | a, ɪ, ʊ, ɛ, ɔ | |
| ä | ɛ or ɛː | |
| ö | œ or øː | |
| ü | ʏ or yː | |
| ei / ai | aɪ | Herz → [hɛʁts] |
| au | aʊ | |
| eu / äu | ɔɪ | |
| ie | iː | |
| ch (front vowels) | ç | ich, mich |
| ch (back vowels) | x | Bach, auch |
| sch | ʃ | |
| sp / st (word start) | ʃp / ʃt | |
| ß | s | |
| v (native words) | f | |
| w | v | |
| z | ts | |
| r (syllable coda) | ɐ | e.g. Wasser [ˈvasɐ] |
| r (onset) | ʁ | |
| Word stress | ˈ before stressed syllable | |

---

## Step 4 — Structure the lyrics

Divide the song into labeled sections. Each section must have an `en` and `es` label.

### Section label translations
| English | Spanish |
|---|---|
| Verse 1 / 2 / 3 | Estrofa 1 / 2 / 3 |
| Chorus | Coro |
| Pre-chorus | Pre-coro |
| Bridge | Puente |
| Intro | Intro |
| Outro | Outro |
| Refrain | Estribillo |

### Lines format
For each section, create one `{ de, en }` object per line. The `de` is the German line; the `en` is a faithful, natural English translation (not machine-literal).

---

## Step 5 — Create the vocabulary utility file

Write `src/utils/{camelName}Vocabulary.js`:

```js
// Vocabulary and lyrics for "{Song Title}" — {Artist}, {Album} ({Year})

export const {CONST_BASE}_VOCAB = [
  // Nouns
  { id: 1, word: "...", ipa: "[...]", en: "...", es: "...", type: "noun" },
  // ...

  // Verbs
  { id: N, word: "...", ipa: "[...]", en: "...", es: "...", type: "verb" },
  // ...

  // Adjectives / adverbs
  { id: N, word: "...", ipa: "[...]", en: "...", es: "...", type: "adjective" },
  // ...
];

export const {CONST_BASE}_LYRICS = [
  {
    label: { en: "Verse 1", es: "Estrofa 1" },
    lines: [
      { de: "...", en: "..." },
    ],
  },
  // ...
];
```

---

## Step 6 — Create the lesson component

Write `src/pages/{pascalName}Lesson.jsx`:

```jsx
import React from 'react';
import SongLesson from './SongLesson';
import { {CONST_BASE}_VOCAB, {CONST_BASE}_LYRICS } from '../utils/{camelName}Vocabulary';

const {pascalName}Lesson = ({ onHome }) => (
  <SongLesson
    title="{Song Title}"
    meta="{Artist} — {Album} ({Year})"
    vocab={{CONST_BASE}_VOCAB}
    lyrics={{CONST_BASE}_LYRICS}
    storageKey="{storageKey}"
    appleMusic="https://music.apple.com/search?term={Artist}+{Song+words+URL-encoded}"
    onHome={onHome}
  />
);

export default {pascalName}Lesson;
```

---

## Step 7 — Update GermanSection.jsx

Read `src/pages/GermanSection.jsx`. Make two edits:

**Import** — add with the other lesson imports (keep alphabetical order):
```jsx
import {pascalName}Lesson from './{pascalName}Lesson';
```

**Route** — add inside `<Routes>`, before the `songs` route:
```jsx
<Route path="{kebabName}" element={<{pascalName}Lesson onHome={goSection} />} />
```

---

## Step 8 — Update GermanSongsLanding.jsx

Read `src/pages/GermanSongsLanding.jsx`. Add a new object to the `SONGS` array at the end (before the closing `]`):

```js
{ icon: '{emoji}', title: '{Song Title}', meta: '{Album} ({Year})', path: '/german/{kebabName}' },
```

Choose an emoji that matches the song's theme or mood.

---

## Step 9 — Update GermanLanding.jsx

Read `src/pages/GermanLanding.jsx`. Add the song title string to the `SONG_PREVIEWS` array.

---

## Step 10 — Report

After all files are written and edits are made, report:

```
✓ Created:  src/utils/{camelName}Vocabulary.js
✓ Created:  src/pages/{pascalName}Lesson.jsx
✓ Modified: src/pages/GermanSection.jsx  (+1 import, +1 route)
✓ Modified: src/pages/GermanSongsLanding.jsx  (+1 song entry)
✓ Modified: src/pages/GermanLanding.jsx  (+1 preview title)

Route: /german/{kebabName}

⚠️  IPA values and translations are AI-generated — review before publishing.
```

Do **not** run a build or dev server unless the user asks.
