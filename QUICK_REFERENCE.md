# ⚡ Quick Reference Card

## Essential Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run ESLint

# Dependencies
npm install             # Install all dependencies
npm install <package>   # Install specific package
npm uninstall <package> # Remove package
```

## File Locations

| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page |
| `app/layout.tsx` | Root layout |
| `app/globals.css` | Global styles |
| `tailwind.config.js` | Tailwind config |
| `components/` | Reusable components |
| `.env.local` | Environment variables |

## Component Imports

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
```

## Common CSS Classes

```jsx
// Gradients
bg-gradient-to-r from-accent-purple to-accent-blue
bg-clip-text text-transparent

// Animations
animate-slide-up
animate-float
animation-delay-1s

// Effects
backdrop-blur-lg
shadow-glow
hover:shadow-glow-lg

// Colors
text-text-primary
text-text-secondary
bg-surface
border border-white/10
```

## Component Structure Template

```tsx
'use client'

import { useState } from 'react'

export default function MyComponent() {
  const [state, setState] = useState(false)

  return (
    <section className="py-20 px-4">
      {/* Your content */}
    </section>
  )
}
```

## Responsive Classes

```jsx
// Responsive grid
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Responsive text
text-base md:text-lg lg:text-xl

// Responsive padding
p-4 md:p-6 lg:p-8
```

## Color Quick Reference

```
Purple:  #a855f7
Blue:    #3b82f6
Cyan:    #06b6d4
White:   #ffffff
Dark:    #0f0f0f
```

## Animation Quick Reference

```css
Float:   6s continuous vertical
Slide:   0.6s fade + up movement
Fade:    0.6s opacity change
Hover:   300ms smooth transitions
```

## Deployment Checklist

- [ ] Update `.env.local` variables
- [ ] Run `npm run build`
- [ ] Test locally with `npm start`
- [ ] Push to GitHub
- [ ] Connect to Vercel
- [ ] Add environment variables
- [ ] Deploy

## Tailwind Breakdown

```
text-       → Font size
font-       → Font weight
bg-         → Background color
text-       → Text color
p-          → Padding
m-          → Margin
rounded-    → Border radius
hover:      → Hover state
md:, lg:    → Responsive
```

## Create New Component Template

```tsx
'use client'

import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title?: string
}

export default function NewComponent({ children, title }: Props) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {title && <h2 className="text-5xl font-bold mb-8">{title}</h2>}
        {children}
      </div>
    </section>
  )
}
```

## Git Commands

```bash
git add .                   # Stage changes
git commit -m "message"     # Commit with message
git push                    # Push to GitHub
git pull                    # Pull latest changes
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `lsof -i :3000` then kill process |
| Dependencies not found | `npm install` |
| Build fails | `npm run build` with error details |
| Styles not loading | Check `tailwind.config.js` content paths |
| Components not found | Check import paths use `@/` alias |

## Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Vercel Docs](https://vercel.com/docs)

## Browser DevTools Tips

```javascript
// Check performance
performance.mark('start')
// ... code ...
performance.mark('end')
performance.measure('duration', 'start', 'end')

// Check animations
document.querySelector('.animate-slide-up')

// Check responsive
// F12 → Toggle device toolbar (Ctrl+Shift+M)
```

## CSS Property Ref

```
Position: static, relative, absolute, fixed
Display: block, inline, inline-block, flex, grid
Flex: justify, items, gap
Overflow: hidden, auto, scroll
Opacity: 0-100
Transform: rotate, scale, translate
Transition: duration, ease-out
```

---

**Print this card and keep it handy! 📌**
