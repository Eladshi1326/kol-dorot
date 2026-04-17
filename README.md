# קול־דורות · Kol Dorot

אפליקציה לשמירת סיפורים משפחתיים בקול המקורי של הסבים והסבתות. אתר נחיתה בעברית (RTL), עיצוב עריכתי חם.

*App for preserving family stories in grandparents' original voice. Hebrew RTL editorial landing page.*

---

## הרצה מקומית · Local Development

```bash
npm install
npm run dev
```

האתר ירוץ על http://localhost:5173

## בניה · Production Build

```bash
npm run build      # יוצר את תיקיית dist/
npm run preview    # מריץ את הבניה מקומית
```

## טכנולוגיה · Stack

- **Vite 5** — בנאי
- **React 18** + **React Router 6** — רכיבים + ניתוב
- **TypeScript 5** — טיפוסים
- **Tailwind CSS 3.4** — עיצוב
- **Google Fonts** — Suez One · Frank Ruhl Libre · Assistant · IBM Plex Mono

## מבנה · Structure

```
src/
├── App.tsx              # ניתוב + scroll reveal
├── main.tsx             # כניסה
├── index.css            # תוספות מערכת עיצוב
├── data/content.ts      # כל הטקסט באתר
├── hooks/useTheme.ts    # מצב כהה/בהיר
├── components/
│   ├── Header.tsx       # כותרת דביקה + ניווט
│   ├── Footer.tsx       # תחתית + ניוזלטר
│   ├── DarkModeToggle.tsx
│   ├── FeatureIcon.tsx  # אייקונים לפיצ׳רים
│   ├── Waveform.tsx     # צורת גל אודיו
│   ├── ProductMockup.tsx
│   └── StoryPlayer.tsx
└── pages/
    ├── Home.tsx         # עמוד הבית
    ├── HowItWorks.tsx   # איך זה עובד
    ├── Stories.tsx      # הסיפורים
    ├── About.tsx        # הסיפור שלנו
    └── NotFound.tsx     # 404
```

## דפלוי · Deploy

האתר מוכן ל־**Netlify**. הגדרת Build מוגדרת כבר ב־`netlify.toml`.

### שלבים ב־Netlify:
1. היכנסו ל־[app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
2. חברו את הריפו מ־GitHub
3. Netlify יקרא את `netlify.toml` אוטומטית:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node: 20
4. **Deploy site**.

קובץ `public/_redirects` מטפל בנתיבי SPA כדי שרענון ב־`/stories` או `/about` לא יחזיר 404.

## רישיון

כל התוכן הוא דוגמה לצרכי הדגמה.

— אתר נבנה עם קוורק + סוכני משנה מקביליים · 2026
