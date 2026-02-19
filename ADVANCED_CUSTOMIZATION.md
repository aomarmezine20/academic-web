# Advanced Customization Guide

## 🎨 Custom Color Schemes

### Dark Blue Theme
```javascript
// tailwind.config.js
colors: {
  background: '#0a0e27',
  surface: '#10152b',
  'accent-primary': '#3b82f6',
  'accent-secondary': '#1e40af',
  'accent-tertiary': '#1e3a8a',
}
```

### Warm Gradient Theme
```javascript
colors: {
  'accent-primary': '#f97316',
  'accent-secondary': '#ec4899',
  'accent-tertiary': '#d946ef',
}
```

### Cool Monochrome Theme
```javascript
colors: {
  'accent-primary': '#0891b2',
  'accent-secondary': '#06b6d4',
  'accent-tertiary': '#22d3ee',
}
```

## 🚀 Performance Optimization

### Image Optimization
```tsx
// Use Next.js Image component
import Image from 'next/image'

<Image
  src="/image.png"
  alt="Description"
  width={1200}
  height={800}
  priority
  placeholder="blur"
/>
```

### Font Optimization
```tsx
// Google Fonts with next/font
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })
```

### Lazy Loading Components
```tsx
import dynamic from 'next/dynamic'

const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <p>Loading...</p>,
})
```

## 🎯 Animation Enhancements

### Add Scroll Animation
```tsx
// Use Intersection Observer
import { useEffect, useRef, useState } from 'react'

export default function ScrollAnimated() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      Content
    </div>
  )
}
```

### Add Parallax Effect
```tsx
'use client'

import { useEffect, useState } from 'react'

export default function Parallax() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
      Parallax content
    </div>
  )
}
```

## 🎬 Using Framer Motion (Optional)

### Installation
```bash
npm install framer-motion
```

### Animated Components
```tsx
'use client'

import { motion } from 'framer-motion'

export default function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-8 bg-surface rounded-2xl"
    >
      Animated card
    </motion.div>
  )
}
```

## 📱 Advanced Responsive Patterns

### Container Queries
```tsx
// tailwind.config.js
theme: {
  extend: {
    containers: {
      '2xs': '16rem',
      'xs': '20rem',
      'sm': '24rem',
      'md': '28rem',
      'lg': '32rem',
      'xl': '36rem',
      '2xl': '42rem',
    },
  },
}
```

### Responsive Components
```tsx
<div className="@container">
  <div className="@lg:grid @lg:grid-cols-2 @lg:gap-4">
    Responsive based on container, not viewport
  </div>
</div>
```

## 🌐 Dark Mode Implementation

### Add Dark Mode Toggle
```tsx
'use client'

import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setIsDark(isDarkMode)
    updateTheme(isDarkMode)
  }, [])

  const updateTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', String(dark))
  }

  return (
    <button
      onClick={() => {
        setIsDark(!isDark)
        updateTheme(!isDark)
      }}
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  )
}
```

## 🔍 Analytics Integration

### Google Analytics
```tsx
// lib/gtag.ts
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag.config('GA_MEASUREMENT_ID', {
      page_path: url,
    })
  }
}
```

### Hotjar
```html
<!-- In head tag -->
<script>
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## 🔐 Security Best Practices

### Environment Variables
```bash
# .env.local (Never commit)
NEXT_PUBLIC_ADMIN_PASSWORD=secure_password_here
DATABASE_URL=your_connection_string
BLOB_READ_WRITE_TOKEN=your_token_here
```

### Password Hashing
```bash
npm install bcrypt
```

```tsx
import bcrypt from 'bcrypt'

const hashedPassword = await bcrypt.hash(password, 10)
const isValid = await bcrypt.compare(password, hashedPassword)
```

## 🧪 Testing

### Unit Tests with Vitest
```bash
npm install -D vitest @testing-library/react
```

```tsx
// components/__tests__/Navbar.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders navigation items', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
```

## 📊 SEO Optimization

### Meta Tags
```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Scientific Association - AI Research Platform',
  description: 'Transform your research with AI-powered tools',
  openGraph: {
    type: 'website',
    url: 'https://yoursite.com',
    title: 'Scientific Association',
    description: 'AI Research Platform',
    images: [
      {
        url: 'https://yoursite.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}
```

### Structured Data
```tsx
import { JsonLd } from 'json-ld'

<JsonLd
  item={{
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Scientific Association',
    url: 'https://yoursite.com',
  }}
/>
```

## 🚀 Deployment Checklist

- [ ] Update environment variables
- [ ] Test all components
- [ ] Optimize images
- [ ] Run build: `npm run build`
- [ ] Check bundle size
- [ ] Set up analytics
- [ ] Configure monitoring
- [ ] Enable SSL/HTTPS
- [ ] Set up CDN
- [ ] Configure caching headers
- [ ] Test on multiple devices
- [ ] Check accessibility (a11y)

## 📚 Advanced Resources

### Official Documentation
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React 18 Docs](https://react.dev)
- [Vercel Platform Docs](https://vercel.com/docs)

### Learning Resources
- [Web Performance APIs](https://developer.mozilla.org/en-US/docs/Web/API/Performance)
- [CSS Tricks](https://css-tricks.com)
- [Dev.to Articles](https://dev.to)

### Communities
- [Next.js Discord](https://discord.gg/bUG7V3jhyC)
- [Tailwind CSS Discord](https://discord.gg/7NF8agS)
- [React Community](https://react.dev/community)

## 🎓 Tips & Tricks

### Reusable Button Component
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
}: ButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-accent-purple to-accent-blue',
    secondary: 'bg-surface border border-white/20',
    outline: 'border-2 border-accent-purple',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`font-semibold rounded-lg transition-all ${variants[variant]} ${sizes[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

### Dynamic Gradient Generator
```tsx
export const gradients = {
  purple: 'from-accent-purple to-accent-blue',
  blue: 'from-accent-blue to-accent-cyan',
  cyan: 'from-accent-cyan to-accent-purple',
}

export default function GradientText({ text, gradient }: {
  text: string
  gradient: keyof typeof gradients
}) {
  return (
    <span className={`bg-gradient-to-r ${gradients[gradient]} bg-clip-text text-transparent`}>
      {text}
    </span>
  )
}
```

---

**Happy coding! 🚀**
