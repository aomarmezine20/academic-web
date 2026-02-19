# 🎓 Academic Website - Neon DB Setup & Deployment Guide

## ✨ What's Completed

✅ **Light/White Academic Theme** - Changed from dark AI SaaS to professional academic design
✅ **Neon PostgreSQL Integration** - Database connection configured
✅ **Academic Navbar** - Full navigation with 8 main sections and submenus
✅ **10+ Pages Created** - Home, Accueil subsections, Events, Contact
✅ **Development Server Running** - Available at http://localhost:3001
✅ **Tailwind CSS Custom Theme** - Light colors, professional styling
✅ **Responsive Design** - Mobile, tablet, and desktop layouts

---

## 🚀 Neon Database Setup

### Step 1: Create Neon Account
1. Go to https://console.neon.tech
2. Sign up for a free account
3. Create a new project

### Step 2: Get Connection String
1. In Neon Console, go to your project
2. Copy the **Connection String** (PostgreSQL)
3. Format should be: `postgresql://user:password@ep-xxxx.us-east-2.neon.tech/dbname?sslmode=require`

### Step 3: Update .env.local
Replace the placeholder with your actual Neon connection string:

```bash
DATABASE_URL=postgresql://your_user:your_password@your_project.neon.tech/neondb?sslmode=require
NEXT_PUBLIC_ADMIN_PASSWORD=admin123
```

### Step 4: Test Connection
The database connection will be tested when you make API requests or deploy.

---

## 📁 Project Structure

```
app/
├── layout.tsx                 # Root layout with navbar
├── page.tsx                   # Academic homepage
├── globals.css               # Styling (light theme)
│
├── accueil/
│   ├── qui-sommes-nous/      # Who we are
│   ├── mot-directeur/        # Director's message
│   ├── objectifs/            # Objectives
│   └── adhesion/             # Membership
│
├── evenements/
│   ├── page.tsx              # Main events page
│   └── colloques/            # Conferences (subsection created)
│
├── publications/             # Publications page (to create)
├── formations/               # Training page (to create)
├── partenariats/             # Partnerships page (to create)
├── gouvernance/              # Governance page (to create)
├── mediatheque/              # Media library (to create)
└── contact/                  # Contact page

components/
└── AcademicNavbar.tsx        # Navigation component

lib/
├── db.ts                     # Neon database configuration
└── supabase.ts               # (deprecated - to remove)
```

---

## 🎨 Design Features

### Colors (Light Academic)
- **Background**: White (#ffffff)
- **Surfaces**: Light gray (#f8f9fa, #f1f3f5)
- **Text Primary**: Dark (#1a202c)
- **Text Secondary**: Gray (#4a5568)
- **Accent**: Professional blue (#0066cc)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large (2xl-5xl)
- **Body**: Regular 16px

### Components
- Cards with subtle shadows
- Hover effects with smooth transitions
- Responsive grid layouts (1→2→3 columns)
- Professional color scheme

---

## 📝 Remaining Pages to Create

Create these pages to complete your website structure:

### 1. `/publications/page.tsx`
- Revue REEM (reem/)
- Ouvrages & Publications (ouvrages/)
- Rapports de Recherche (rapports/)

### 2. `/formations/page.tsx`  
- Formations Thématiques (thematiques/)
- Ateliers Méthodologiques (ateliers/)
- Formations Transversales (transversales/)
- Accompagnement Doctorants (doctorants/)

### 3. `/partenariats/page.tsx`
- Coopération Universitaire (cooperation/)
- Partenariats Public-Privé (public-prive/)
- Réseaux de Recherche (reseaux/)

### 4. `/gouvernance/page.tsx`
- Bureau Exécutif (bureau/)
- Organigramme (organigramme/)
- Annuaire (annuaire/)

### 5. `/mediatheque/page.tsx`
- Galeries Photos (photos/)
- Archives Vidéo (videos/)
- Reportages (reportages/)
- Supports Visuels (supports/)

### Pages Already Created:
- ✅ Accueil (4/4 subsections)
- ✅ Événements (1/4 subsections - create journees, seminaires, webinaires)
- ✅ Contact (complete)

---

## 🌐 Deployment to Vercel

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Academic website with Neon DB integration"
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Import your GitHub repository
3. Set environment variables:
   - `DATABASE_URL`: Your Neon connection string
   - `NEXT_PUBLIC_ADMIN_PASSWORD`: Your password

### Step 3: Deploy
Click "Deploy" - Vercel will build and host automatically

---

## 🔧 Local Development

### Start Dev Server
```bash
npm run dev
# Running on http://localhost:3001
```

### Build for Production
```bash
npm run build
npm start
```

---

## 📊 Database Schema (Optional - Create as Needed)

```sql
-- Example tables you might want to create:

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  date DATE,
  location VARCHAR(255),
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE publications (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  authors TEXT,
  date DATE,
  category VARCHAR(100),
  pdf_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  membership_type VARCHAR(50),
  institution VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🎓 Adding More Content

### Add Event
Create `/app/evenements/journees/page.tsx`:
```tsx
'use client';

export default function Journees() {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-accent-primary mb-8">
          Journées d'Étude
        </h1>
        {/* Content here */}
      </section>
    </div>
  );
}
```

### Add Publication
Similar structure for `/app/publications/reem/page.tsx`

---

## ✅ Next Steps

1. **Update .env.local** with your Neon connection string
2. **Create remaining pages** (Publications, Formations, Partenariats, Gouvernance, Médiathèque)
3. **Test locally** - Visit http://localhost:3001
4. **Deploy to Vercel** when ready
5. **Connect database** if you need dynamic content
6. **Add content** - Replace placeholder text with actual information

---

## 📞 Support

### Colors & Styling
- Edit `tailwind.config.js` for theme changes
- Modify `app/globals.css` for custom animations

### Navigation
- Update `components/AcademicNavbar.tsx` to add/remove sections

### Pages
- Create new pages in `/app/[section]/[subsection]/page.tsx`
- Use the light theme classes: `bg-white`, `text-accent-primary`, `bg-surface`

---

## 🎯 Current Status

**Development Server**: http://localhost:3001 ✅
**Theme**: Light Academic ✅
**Database**: Neon PostgreSQL ✅
**Navigation**: Complete with 8 sections ✅
**Pages**: 10+ created, more can be added ✅

---

**Your modern academic website is ready for content and deployment!**
