# Deployment Instructions

This document provides comprehensive instructions for deploying the Airbnb NYC Analysis portfolio website.

## 🚀 Quick Deployment

The website is already deployed and live at: [**https://bolpdrke.manus.space**](https://dvjrmpow.manus.space)

## 📋 Deployment Options

### Option 1: Static Export (Recommended)

This method generates static files that can be deployed to any web server or static hosting service.

#### Steps:

1. **Build the project**

1. **Static files location**
The build process creates an `out/` directory containing all static files:

1. **Deploy to hosting service**
Upload the entire `out/` directory to your hosting provider.

#### Compatible Hosting Services:

- **Vercel** (recommended)

- **Netlify**

- **GitHub Pages**

- **AWS S3 + CloudFront**

- **Firebase Hosting**

- **Any web server** (Apache, Nginx, etc.)

### Option 2: Vercel Deployment

Vercel provides the easiest deployment experience for Next.js applications.

#### Method A: Vercel CLI

1. **Install Vercel CLI**

1. **Login to Vercel**

1. **Deploy**

#### Method B: Vercel Dashboard

1. Visit [vercel.com](https://vercel.com)

1. Connect your GitHub repository

1. Import the project

1. Deploy automatically

### Option 3: Netlify Deployment

1. **Build the project**

1. **Deploy via Netlify CLI**

1. **Or drag and drop**
  - Visit [netlify.com](https://netlify.com)
  - Drag the `out/` folder to the deploy area

### Option 4: GitHub Pages

1. **Build the project**

1. **Create gh-pages branch**

1. **Enable GitHub Pages**
  - Go to repository Settings
  - Enable Pages from gh-pages branch

## ⚙️ Configuration

### Environment Variables

No environment variables are required for basic deployment. The website is fully static.

### Custom Domain

To use a custom domain:

1. **Update metadata** in `src/app/layout.tsx`:

1. **Update sitemap** in `public/sitemap.xml`:

1. **Configure DNS** with your hosting provider

### SEO Configuration

The website includes comprehensive SEO configuration:

- **Meta tags**: Title, description, keywords

- **Open Graph**: Social media sharing

- **Twitter Cards**: Twitter sharing

- **Sitemap**: Search engine indexing

- **Robots.txt**: Crawling directives

## 🔧 Build Configuration

### Next.js Configuration

The `next.config.js` is configured for static export:

```javascript
const nextConfig = {
  output: 'export',           // Enable static export
  trailingSlash: true,        // Add trailing slashes
  images: {
    unoptimized: true,        // Disable image optimization
  },
};
```

### Package Scripts

Available npm scripts:

- `npm run dev` - Development server

- `npm run build` - Production build

- `npm run start` - Production server (not needed for static)

- `npm run lint` - Code linting

- `npm run format` - Code formatting

## 📊 Performance Optimization

### Bundle Analysis

The production build includes:

- **Homepage**: ~127 kB

- **Walkthrough**: ~128 kB

- **Results**: ~241 kB (includes charts)

- **About**: ~127 kB

### Optimization Features

- **Code splitting**: Automatic by Next.js

- **Tree shaking**: Removes unused code

- **Minification**: Compressed JavaScript/CSS

- **Static generation**: Pre-rendered HTML

- **Image optimization**: Disabled for static export

## 🐛 Troubleshooting

### Common Issues

1. **Build fails**
  - Check Node.js version (18+ required)
  - Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

1. **Charts not displaying**
  - Ensure JavaScript is enabled
  - Check browser console for errors

1. **404 errors on deployment**
  - Verify all files in `out/` directory
  - Check hosting service configuration

1. **Styling issues**
  - Ensure TailwindCSS is properly built
  - Check for CSS conflicts

### Debug Commands

```bash
# Check build output
npm run build

# Verify static files
ls -la out/

# Test locally
npx serve out/
```

## 📱 Mobile Optimization

The website is fully responsive and optimized for:

- **Mobile devices**: iPhone, Android

- **Tablets**: iPad, Android tablets

- **Desktop**: All screen sizes

- **Touch interfaces**: Optimized interactions

## 🔒 Security

### Static Site Security

- **No server-side code**: Eliminates server vulnerabilities

- **HTTPS**: Enforced by hosting providers

- **Content Security Policy**: Can be added via headers

- **No sensitive data**: All content is public

### Recommended Headers

For enhanced security, configure these headers:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## 📈 Analytics

To add analytics:

1. **Google Analytics**
  - Add tracking code to `layout.tsx`
  - Configure in Google Analytics dashboard

1. **Vercel Analytics**
  - Automatically available on Vercel
  - Enable in project settings

## 🔄 Updates

To update the deployed website:

1. **Make changes** to the source code

1. **Build** the project: `npm run build`

1. **Deploy** the new `out/` directory

1. **Verify** the changes are live

## 📞 Support

For deployment issues:

- **Check documentation** of your hosting provider

- **Review build logs** for error messages

- **Test locally** before deploying

- **Contact hosting support** if needed

---

*This deployment guide ensures your Airbnb NYC Analysis portfolio website is successfully deployed and accessible to visitors worldwide.*

