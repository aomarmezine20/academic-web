# Scientific Association Website

A modern, responsive website for a scientific association built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

- Responsive design
- French language
- Private admin dashboard
- SEO optimized
- Fast and lightweight

## Setup

1. Install Node.js (version 18 or later) from https://nodejs.org

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Supabase:
   - Create a Supabase project at https://supabase.com
   - Get your project URL and anon key
   - Update `.env.local` with your Supabase credentials
   - Create the following tables in Supabase:
     - `articles`: id (uuid), title (text), content (text), created_at (timestamp)
     - `events`: id (uuid), title (text), description (text), date (date), created_at (timestamp)
     - `publications`: id (uuid), title (text), description (text), file_url (text), created_at (timestamp)

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

Deploy to Vercel for easy hosting.

## Admin Access

- Go to `/admin`
- Use password: admin123 (change in .env.local)

## Deployment

### Vercel (Recommended)

1. Push the code to a GitHub repository
2. Connect the repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Hosting

The app can be deployed to any platform supporting Node.js, such as Netlify, Railway, or VPS.

## Customization

- Update colors in `tailwind.config.js`
- Add more pages in `app/` directory
- Implement full admin features with Supabase