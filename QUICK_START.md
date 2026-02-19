# ⚡ Quick Start - Academic Website

## 🚀 Launch Your Website

```bash
npm run dev
# Visit http://localhost:3001
```

**That's it!** Your website is now running.

---

## 🎯 3 Things to Do NOW

### 1️⃣ Get Neon Connection String
1. Go to https://console.neon.tech
2. Create account → Create project → Copy connection string
3. Paste into `.env.local`:
   ```
   DATABASE_URL=postgresql://...@...neon.tech/...
   ```

### 2️⃣ Customize Your Content
Open files and replace placeholders:
- `app/page.tsx` - Homepage title, stats
- `app/accueil/qui-sommes-nous/page.tsx` - About your org
- `app/contact/page.tsx` - Your real contact info

### 3️⃣ Create Missing Pages
Copy one of these and rename/update:
```txt
/app/evenements/journees/page.tsx
/app/publications/reem/page.tsx
/app/formations/thematiques/page.tsx
/app/partenariats/cooperation/page.tsx
/app/gouvernance/bureau/page.tsx
/app/mediatheque/photos/page.tsx
```

---

## 📝 Page Template (Copy & Paste)

```tsx
'use client';

export default function PageName() {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-accent-primary mb-8">
          Page Title
        </h1>
        
        <div className="prose-lg text-text-secondary space-y-6">
          <p>Your content here...</p>
        </div>
      </section>
    </div>
  );
}
```

---

## 🎨 Tailwind Classes Cheat Sheet

### Colors
```
text-accent-primary      ← Blue titles
text-text-primary        ← Dark text
text-text-secondary      ← Gray text
bg-white                 ← White background
bg-surface               ← Light gray background
bg-accent-light          ← Light blue background
border-border-color      ← Light borders
```

### Spacing
```
px-4 py-12              ← Padding (horizontal/vertical)
mb-8                    ← Margin bottom
gap-6                   ← Grid gap
```

### Text
```
text-5xl font-bold      ← Large headings
text-2xl font-semibold  ← Section headings
text-sm                 ← Small text
```

### Cards
```
bg-surface border border-border-color rounded-lg p-6 shadow-card hover:shadow-hover
```

### Grids
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
```

---

## 🌐 Sections to Create

```
✅ Accueil (DONE)
   ✅ Qui sommes-nous
   ✅ Mot du Directeur
   ✅ Objectifs
   ✅ Adhésion

⬜ Événements
   ✅ Main page
   ✅ Colloques
   ⬜ Journées
   ⬜ Séminaires
   ⬜ Webinaires

⬜ Publications
   ⬜ REEM
   ⬜ Ouvrages
   ⬜ Rapports

⬜ Formations
   ⬜ Thématiques
   ⬜ Ateliers
   ⬜ Transversales
   ⬜ Doctorants

⬜ Partenariats
   ⬜ Coopération
   ⬜ Public-Privé
   ⬜ Réseaux

⬜ Gouvernance
   ⬜ Bureau
   ⬜ Organigramme
   ⬜ Annuaire

⬜ Médiathèque
   ⬜ Photos
   ⬜ Vidéos
   ⬜ Reportages
   ⬜ Supports

✅ Contact (DONE)
```

---

## 📁 File Paths Quick Reference

### Edit These
```
app/page.tsx                      ← Homepage
app/layout.tsx                    ← Root layout
components/AcademicNavbar.tsx     ← Navigation
tailwind.config.js                ← Colors/theme
.env.local                        ← Database URL
```

### Create New Pages (Same Pattern)
```
app/[section]/[subsection]/page.tsx
```

Example:
```
app/formations/thematiques/page.tsx
app/partenariats/cooperation/page.tsx
app/mediatheque/photos/page.tsx
```

---

## 🚀 Deploy to Vercel (When Ready)

```bash
git add .
git commit -m "Academic website"
git push
```

Then:
1. Go to https://vercel.com
2. Import GitHub repo
3. Add environment variable: `DATABASE_URL=...`
4. Deploy!

---

## 📊 Navigation Menu Items

The navbar automatically shows:

**Desktop**: Full menu with dropdowns
**Mobile**: Hamburger menu that expands

Menu is defined in:
```
components/AcademicNavbar.tsx
```

To change it: Edit the `sections` array in that file.

---

## ✨ Features You Have

✅ Light/white professional theme
✅ Responsive design (mobile-first)
✅ Neon PostgreSQL ready
✅ Sticky navigation bar
✅ Card layouts with shadows
✅ Smooth hover effects
✅ Mobile hamburger menu
✅ Typography hierarchy
✅ Form inputs in contact page
✅ Icon support (Lucide React)

---

## 🐛 Troubleshooting

### Website not loading
```
npm run dev
# Should start on port 3001
```

### Path error like "Cannot find module"
- Check spelling of file names
- Restart dev server

### Stylesheet not loading
```
# Rebuild Tailwind
npm run build
npm run dev
```

---

## 📞 Get Help With

1. **Adding new pages** → Use the template above
2. **Changing colors** → Edit tailwind.config.js
3. **Updating navbar** → Edit AcademicNavbar.tsx
4. **Database questions** → See NEON_SETUP_GUIDE.md
5. **Deployment** → See ACADEMIC_REBUILD_COMPLETE.md

---

## ✅ Checklist

- [ ] Started dev server (`npm run dev`)
- [ ] Viewed website at http://localhost:3001
- [ ] Updated contact information
- [ ] Got Neon connection string
- [ ] Updated `.env.local` with DATABASE_URL
- [ ] Customized homepage content
- [ ] Created 2-3 missing pages
- [ ] Tested all navigation links
- [ ] Ready to deploy

---

**You're all set! Your academic website is live and ready to customize.** 🎓
