# 🎓 Getting Started Guide

## Welcome! 👋

Your website has been completely rebuilt with a modern, premium AI SaaS design. This guide will help you get started quickly.

## ⚡ 5-Minute Quick Start

### Step 1: Open Terminal
Navigate to your project folder:
```bash
cd "C:\Users\A.MEZINE\Desktop\Nouveau dossier"
```

### Step 2: Configure Node.js
Add Node to PATH:
```bash
$env:PATH = "C:\Users\A.MEZINE\Desktop\Nouveau dossier\node-v20.11.1-win-x64;$env:PATH"
```

### Step 3: Install & Run
```bash
npm install          # Install dependencies (if needed)
npm run dev          # Start development server
```

### Step 4: View Website
Open browser to: **http://localhost:3000**

## 📚 Documentation Map

| Document | Best For | Priority |
|----------|----------|----------|
| **README.md** | Setup, deployment, quick reference | 🔴 READ FIRST |
| **REBUILD_SUMMARY.md** | Understanding what's new | 🟠 READ SECOND |
| **DESIGN_SYSTEM.md** | Understanding design, colors, components | 🟡 IMPORTANT |
| **COMPONENT_PREVIEW.md** | Visual guide to components | 🟡 HELPFUL |
| **QUICK_REFERENCE.md** | Common commands & troubleshooting | 🟢 HANDY |
| **ADVANCED_CUSTOMIZATION.md** | Adding features & customization | 🟢 LATER |

## 🎯 Your Next Steps

### Immediate (Day 1)
- [ ] Read README.md
- [ ] Run development server
- [ ] Preview website locally
- [ ] Explore the components in code

### Short-term (This Week)
- [ ] Update content (company name, description)
- [ ] Change colors to match your brand
- [ ] Set up database (PostgreSQL)
- [ ] Configure environment variables
- [ ] Test admin dashboard (/admin)

### Medium-term (This Month)
- [ ] Deploy to Vercel
- [ ] Set up domain
- [ ] Configure SSL certificate
- [ ] Add analytics
- [ ] Add more pages/sections

## 🎨 Customization Priority

### Easy (5 minutes each)
1. **Change colors** - Edit `tailwind.config.js`
2. **Update text** - Edit components directly
3. **Change logo** - Replace logo text in Navbar
4. **Update links** - Modify Footer links

### Medium (30 minutes each)
1. **Add new section** - Create new component
2. **Change animations** - Edit keyframes in `globals.css`
3. **Modify layout** - Adjust grid in Feature component
4. **Add new page** - Create in `app/` directory

### Advanced (1+ hours)
1. **Integrate CMS** - Connect headless CMS
2. **Add authentication** - Implement user login
3. **Custom animations** - Implement Framer Motion
4. **E-commerce** - Add Stripe integration

## 📂 File Guide for Common Tasks

### To Change Colors
**File**: `tailwind.config.js` (lines 8-17)
```javascript
colors: {
  'accent-purple': '#your-color',
  'accent-blue': '#your-color',
  'accent-cyan': '#your-color',
}
```

### To Update Company Info
**File**: Multiple files - Search for "Scientific Association"
- `components/Navbar.tsx` - Logo text
- `components/Footer.tsx` - Company info
- `app/page.tsx` - Other mentions

### To Add New Section
**File**: Create `components/NewSection.tsx`
```tsx
export default function NewSection() {
  return (
    <section className="py-20">
      {/* Your content */}
    </section>
  )
}
```

Then import in `app/page.tsx`

### To Modify Hero Section
**File**: `components/Hero.tsx` (lines 1-121)
- Change text: Edit h1, p tags
- Change button text: Edit button labels
- Change animation: Edit className

## 🔄 Common Workflows

### Update Website Content
1. Open `components/Hero.tsx` or relevant component
2. Find the text you want to change
3. Edit the text
4. Save file
5. Browser automatically reloads (Hot Reload)

### Add a New Color Theme
1. Open `tailwind.config.js`
2. Modify colors object
3. Update component classNames to use new colors
4. Test in browser

### Create New Page
1. Create `app/mypage/page.tsx`
2. Add content and styling
3. Link from Navbar or Footer
4. Access at `http://localhost:3000/mypage`

### Deploy to Vercel
1. Push code to GitHub
2. Go to `vercel.com`
3. Connect repository
4. Add environment variables
5. Click Deploy
6. Done! 🚀

## 💡 Pro Tips

### Tip 1: Use Hot Reload
- Changes appear instantly without manual refresh
- Perfect for quick iterations
- Always active during `npm run dev`

### Tip 2: Browser DevTools
- Press F12 to open DevTools
- Check responsive design (Ctrl+Shift+M)
- Inspect elements to understand structure
- Check console for errors

### Tip 3: Component Structure
- All components use the same pattern
- Look at existing components for examples
- Follow the same style for new components
- Use TypeScript for type safety

### Tip 4: Tailwind Classes
- Use utility classes instead of custom CSS
- Combine classes for complex styles
- Use `md:` and `lg:` for responsive
- Use `hover:` for interactive states

### Tip 5: Git Workflow
```bash
git add .              # Stage changes
git commit -m "msg"    # Commit with message
git push               # Push to GitHub
```

## ❓ Common Questions

### Q: Where do I edit the main heading?
**A**: In `components/Hero.tsx`, look for the `<h1>` tag around line 50.

### Q: How do I change the dark background?
**A**: In `tailwind.config.js`, find `background: '#0f0f0f'` and change the color code.

### Q: Can I add more feature cards?
**A**: Yes! In `components/Features.tsx`, add items to the `features` array and they'll appear automatically.

### Q: How do I add a new navigation link?
**A**: In `components/Navbar.tsx`, add to the `navItems` array (line 10).

### Q: Where's the admin dashboard?
**A**: Visit `http://localhost:3000/admin` with password `admin123`.

### Q: How do I change the password?
**A**: Edit `.env.local` file, change `NEXT_PUBLIC_ADMIN_PASSWORD` value.

### Q: Can I use custom fonts?
**A**: Yes! Google Fonts is already configured. Edit `app/layout.tsx` to add more fonts.

### Q: How do I add images?
**A**: Put images in `public/` folder, import with `<Image>` component.

## 🆘 Troubleshooting

### Issue: "npm is not recognized"
**Solution**: 
```bash
$env:PATH = "C:\Users\A.MEZINE\Desktop\Nouveau dossier\node-v20.11.1-win-x64;$env:PATH"
npm run dev
```

### Issue: Port 3000 already in use
**Solution**: 
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

### Issue: Changes not showing
**Solution**: 
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Restart dev server

### Issue: Styles not loading
**Solution**: 
- Check `tailwind.config.js` content paths
- Rebuild: `npm run build`
- Restart dev server

### Issue: Build fails
**Solution**: 
```bash
npm run build  # See error details
npm install    # Reinstall dependencies
npm run dev    # Try again
```

## 📊 Performance Tips

### Before Deployment
1. Run `npm run build`
2. Check bundle size
3. Test on mobile
4. Run `npm run lint`
5. Fix any warnings

### After Deployment
1. Set up analytics
2. Monitor performance
3. Check error logs
4. Optimize images
5. Enable caching

## 🎓 Learning Path

### Week 1: Foundation
- [ ] Understand project structure
- [ ] Learn Tailwind CSS basics
- [ ] Understand React components
- [ ] Make simple text changes

### Week 2: Intermediate
- [ ] Create new component
- [ ] Modify styling
- [ ] Understand animations
- [ ] Add new page

### Week 3: Advanced
- [ ] Integrate database
- [ ] Add dynamic content
- [ ] Deploy to production
- [ ] Monitor analytics

## 📞 Support Resources

### Official Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

### Community
- [Stack Overflow](https://stackoverflow.com)
- [Next.js Discord](https://discord.gg/bUG7V3jhyC)
- [Dev.to Community](https://dev.to)

### Local Files
- Check `QUICK_REFERENCE.md` for commands
- Check `DESIGN_SYSTEM.md` for design rules
- Check `ADVANCED_CUSTOMIZATION.md` for patterns

## 🎉 Congratulations!

You now have:
- ✅ Modern, premium design
- ✅ Production-ready code
- ✅ Comprehensive documentation
- ✅ Ready to deploy
- ✅ Admin dashboard
- ✅ Database integration

**Ready to launch? Let's go! 🚀**

---

## Quick Command Reference

```bash
npm run dev         # Start development
npm run build       # Build for production
npm start           # Run production build
npm run lint        # Check code quality
npm install         # Install dependencies
git push            # Push to GitHub (deploy)
```

**Your website is ready. Now customize it to make it yours!** 🎨

---

**Questions? Check the other documentation files!**
- 📖 README.md
- 🎨 DESIGN_SYSTEM.md
- ⚡ QUICK_REFERENCE.md
