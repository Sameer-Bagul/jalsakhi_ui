# Landing Page - Quick Start Guide

## 🚀 Running the Landing Page

### Development Server
```bash
cd landing-page
npm install
npm run dev
```
Then open: http://localhost:5173

### Production Build
```bash
cd landing-page
npm run build
npm run preview
```
Build output: `landing-page/dist/`

## 📁 Project Structure

```
landing-page/
├── src/
│   ├── App.tsx                    # Main app with routing
│   ├── index.css                  # Global styles (JalSakhi theme)
│   └── components/
│       ├── Hero.tsx               # Hero section (GitHub CTA)
│       ├── Stats.tsx              # Open Source section (NEW!)
│       ├── Navbar.tsx             # Navigation (GitHub button)
│       ├── Download.tsx           # Get Involved section (NEW!)
│       ├── Features.tsx           # Features showcase
│       ├── About.tsx              # About the project
│       ├── Contact.tsx            # Contact form
│       └── Footer.tsx             # Footer
├── public/
│   └── images/                    # App screenshots + logos
├── dist/                          # Build output
└── package.json
```

## 🎯 Key Changes Summary

### 1. Hero Section
- **Primary CTA:** "Star on GitHub" → https://github.com/Sameer-Bagul/jalsakhi-ai-powered-precision-agriculture-platform
- **Secondary CTA:** "View Contributors" → Scrolls to #opensource
- **Message:** Emphasizes open-source nature

### 2. Stats Section (Completely Rebuilt)
- **Now called:** "Open Source" section
- **Features:**
  - 6 project stats cards
  - GitHub repository info card
  - Contribution info card
  - Contributors avatars (auto-updating)
  - Technology stack badges
- **Links:**
  - View on GitHub
  - Star on GitHub
  - View All Contributors
  - Become a Contributor
  - Contribution Guide

### 3. Navbar
- **Added:** "Open Source" nav item
- **Changed:** "Get App" button → "GitHub" button
- **Colors:** Updated to emerald theme

### 4. Download Section (Now "Get Involved")
- **4 Action Cards:**
  1. Star Repository
  2. Fork & Contribute
  3. Read Docs
  4. Report Issues
- **Bottom CTA:**
  - Visit GitHub Repository
  - Contribution Guide

## 🎨 Theme Colors (JalSakhi)

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#059669` | Buttons, links, accents |
| Primary Dark | `#065f46` | Hover states |
| Primary Light | `#10b981` | Backgrounds, badges |
| Accent | `#34d399` | Gradients, highlights |
| Forest | `#064e3b` | Dark mode accents |

## 🔗 External Links

All links point to:
```
https://github.com/Sameer-Bagul/jalsakhi-ai-powered-precision-agriculture-platform
```

**Sections:**
- `/` - Repository home (7+ links)
- `/fork` - Fork page (1 link)
- `/issues` - Issues page (2 links)
- `/graphs/contributors` - Contributors (1 link)
- `/blob/main/CONTRIBUTING.md` - Contributing guide (3 links)

## 📱 Testing Checklist

### Visual Tests
- ✅ Hero section displays correctly
- ✅ "Star on GitHub" button works
- ✅ Stats section shows all 6 cards
- ✅ Contributors avatars load
- ✅ GitHub links work
- ✅ Dark mode toggle works
- ✅ Mobile menu opens/closes

### Responsive Tests
- ✅ Mobile (320px-640px)
- ✅ Tablet (640px-1024px)
- ✅ Desktop (1024px+)

### Link Tests
- ✅ All GitHub links open in new tab
- ✅ Internal nav scrolls smoothly
- ✅ Contribution guide link works

## 🛠️ Customization

### Update Repository URL
Edit these files:
- `src/components/Hero.tsx` - Line 10
- `src/components/Stats.tsx` - Line 5
- `src/components/Download.tsx` - Line 4
- `src/components/Navbar.tsx` - Line 84 & 135

### Update Team Size
- `src/components/Stats.tsx` - Line 10 (contributors value)
- `src/components/Stats.tsx` - Line 68 (description text)

### Change Theme Colors
Edit `src/index.css`:
```css
--primary: #059669;        /* Your primary color */
--primary-dark: #065f46;   /* Darker shade */
--primary-light: #10b981;  /* Lighter shade */
```

## 📊 GitHub API (Optional Future Enhancement)

To fetch real-time stats:

```typescript
// Example: Fetch star count
const response = await fetch(
  'https://api.github.com/repos/Sameer-Bagul/jalsakhi-ai-powered-precision-agriculture-platform'
)
const data = await response.json()
const stars = data.stargazers_count
const forks = data.forks_count
```

## 🐛 Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Check `public/images/` folder exists
- Verify image paths in components
- Run: `ls -la public/images/`

### TypeScript Errors
```bash
npm run build -- --no-typecheck  # Skip type checking
```

## 📝 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## 🎉 Success Metrics

The landing page successfully:
- ✅ Emphasizes open-source nature
- ✅ Provides 7+ GitHub links
- ✅ Showcases 4 contributors
- ✅ Uses JalSakhi brand colors
- ✅ Invites community participation
- ✅ Maintains professional design
- ✅ Works on all devices
- ✅ Builds without errors

---

**For detailed transformation info:** See [OPEN_SOURCE_TRANSFORMATION.md](OPEN_SOURCE_TRANSFORMATION.md)  
**Repository:** https://github.com/Sameer-Bagul/jalsakhi-ai-powered-precision-agriculture-platform
