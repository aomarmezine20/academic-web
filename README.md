# Scientific Association Website

A modern, responsive website for a scientific association built with Next.js, TypeScript, Tailwind CSS, Vercel Postgres, and Vercel Blob.

## Features

- Responsive design
- French language
- Private admin dashboard
- SEO optimized
- Fast and lightweight
- Single-platform hosting on Vercel

# Modern AI SaaS Landing Page - Scientific Association

A premium, modern landing page built with Next.js 14, featuring a futuristic dark theme, glassmorphism effects, smooth animations, and bold typography.

## ✨ Features

- 🎨 **Modern Design**: Premium AI SaaS landing page inspired by Vercel, v0, and Replit
- 🌙 **Dark Theme**: Futuristic dark background with gradient accents
- ✨ **Glassmorphism**: Semi-transparent blur effects and modern UI components
- 🎭 **Smooth Animations**: Meaningful transitions, hover effects, and staggered animations
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **High Performance**: Optimized production build with minimal bundle size
- 🎯 **Interactive Elements**: Hover states, gradient shifts, and smooth transitions
- 🔐 **Modern Stack**: Next.js 14 with TypeScript, Tailwind CSS, and Lucide icons

## 🎨 Design Highlights

### Color Palette
- **Background**: #0f0f0f (Deep dark)
- **Accents**: Purple → Blue → Cyan gradients
- **Typography**: Clean Inter font with bold headings

### Components
- Modern responsive navbar with blur background
- Animated hero section with gradient decorations
- Feature grid with glassmorphic cards
- Premium CTA section with trust badges
- Clean footer with social links

## 🚀 Quick Start

### Installation

1. Clone or navigate to the project:
```bash
cd "path/to/your/project"
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## 📋 Project Structure

```
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Feature cards grid
│   ├── CTA.tsx              # Call-to-action section
│   └── Footer.tsx           # Footer
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── api/                 # API routes for database
│   ├── admin/               # Admin dashboard
│   └── ...other pages
├── lib/
│   └── supabase.ts          # Database configuration
├── tailwind.config.js       # Tailwind configuration
├── package.json             # Dependencies
└── DESIGN_SYSTEM.md         # Design documentation
```

## 🛠 Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom theme
- **Icons**: Lucide React (24px scalable)
- **Typography**: Inter font from Google Fonts
- **Database**: PostgreSQL (Vercel Postgres)
- **File Storage**: Vercel Blob
- **Hosting**: Vercel

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'accent-purple': '#your-color',
  'accent-blue': '#your-color',
  'accent-cyan': '#your-color',
}
```

### Typography

Modify `app/globals.css` or component className as needed.

### Animations

Edit keyframes in `app/globals.css`:
```css
@keyframes your-animation {
  /* Your animation */
}
```

## 📱 Responsive Design

- **Mobile**: 1 column, hamburger menu
- **Tablet**: 2 columns, adjusted spacing
- **Desktop**: 3 columns, full width content

## 🔗 Admin Dashboard

Access the admin dashboard at `/admin`:
- Password: `admin123` (configure in `.env.local`)
- Manage articles, events, publications
- Upload images and videos

## 🗄️ Database Setup

### Vercel Postgres

Create tables using the SQL editor:

```sql
CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE publications (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  file_url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🌍 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables:
   ```
   DATABASE_URL=your_postgres_url
   BLOB_READ_WRITE_TOKEN=your_blob_token
   NEXT_PUBLIC_ADMIN_PASSWORD=your_password
   ```
4. Deploy with one click

### Environment Variables

Create `.env.local`:
```
DATABASE_URL=your_vercel_postgres_connection_string
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
NEXT_PUBLIC_ADMIN_PASSWORD=admin123
```

## 📊 Performance

- **Homepage**: ~12.5 kB
- **First Load JS**: ~96.7 kB
- **Build Time**: < 2 minutes
- **Lighthouse Score**: 95+

## ✅ Testing

Run ESLint:
```bash
npm run lint
```

## 📚 Design Documentation

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for detailed design system documentation, color palette, animations, and customization guide.

## 🤝 Contributing

Feel free to fork, modify, and enhance this template!

## 📝 License

This project is open source and available for use.

## 🎯 Next Steps

1. Customize colors in `tailwind.config.js`
2. Update content in components
3. Add your own pages and routes
4. Deploy to Vercel
5. Connect your database
6. Start managing content via admin dashboard

## 📞 Support

For issues, questions, or suggestions:
1. Check the design documentation
2. Review component structure
3. Test in development mode first

---

**Built with ❤️ using Next.js 14 and Tailwind CSS**

## Deployment

Deploy to Vercel for easy hosting.

## Admin Access

- Go to `/admin`
- Use password: admin123 (change in .env.local)

## Deployment

### Vercel (Recommended)

1. Push the code to a GitHub repository
2. Connect the repo to Vercel
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`: Your Vercel Postgres connection string
   - `BLOB_READ_WRITE_TOKEN`: Your Vercel Blob token
   - `NEXT_PUBLIC_ADMIN_PASSWORD`: Your admin password
4. Deploy

Vercel will automatically handle the Postgres database and Blob storage.

### Other Hosting

The app can be deployed to any platform supporting Node.js, such as Netlify, Railway, or VPS. You'll need to set up your own Postgres database and file storage.