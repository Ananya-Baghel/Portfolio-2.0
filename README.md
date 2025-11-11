# Ananya Baghel — Portfolio

A professional portfolio focused on **Data Science & Generative AI** with dynamic GitHub‑powered projects and interactive skill filters.

## 🔧 Stack
- React + Vite
- Tailwind CSS
- Framer Motion
- lucide‑react icons
- GitHub REST API (repos)

## ▶️ Local Setup
```bash
# 1) Create folder and copy files from /app into it
npm i
npm run dev
# Visit the printed localhost URL
```

## 🧩 Configure
- **Resume button:** edit `CONTACT.resume` in `src/Portfolio.jsx` → paste your public PDF link.
- **Google Cloud Arcade badge:** in `achievements[0].imgSrc` put the image URL.
- **Default skill toggles:** update `activeFilters` initial array.
- **Photo:** replace the hero placeholder box with your image.

## 🚀 Deploy
### Vercel
1. Push repo to GitHub
2. Import in Vercel → Framework: **Vite** (Auto)
3. Build: `npm run build` | Output: `dist/`

### Netlify
1. New site from Git
2. Build: `npm run build`
3. Publish dir: `dist`

---
**Tip:** Use a short custom domain and add Open Graph tags for richer sharing later.
