# Deployment Guide - OrientHeight Website

This guide covers deploying the OrientHeight website to various platforms.

## 🚀 Vercel Deployment (Recommended)

Vercel is the recommended platform for deploying this Next.js application.

### Automatic Deployment

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project**
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

3. **Environment Variables**
   \`\`\`
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   \`\`\`

4. **Deploy**
   - Click "Deploy"
   - Automatic deployments on every push to main branch

### Custom Domain

1. **Add Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records as instructed

2. **SSL Certificate**
   - Automatically provisioned by Vercel
   - HTTPS enforced by default

## 🌐 Alternative Deployment Options

### Netlify

1. **Build Settings**
   \`\`\`
   Build command: npm run build
   Publish directory: out
   \`\`\`

2. **Next.js Configuration**
   \`\`\`javascript
   // next.config.mjs
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   export default nextConfig
   \`\`\`

### AWS Amplify

1. **Build Settings**
   \`\`\`yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   \`\`\`

### Docker Deployment

1. **Dockerfile**
   \`\`\`dockerfile
   FROM node:18-alpine AS base
   
   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   
   COPY package.json package-lock.json* ./
   RUN npm ci
   
   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   
   RUN npm run build
   
   # Production image, copy all the files and run next
   FROM base AS runner
   WORKDIR /app
   
   ENV NODE_ENV production
   
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   
   COPY --from=builder /app/public ./public
   
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   
   USER nextjs
   
   EXPOSE 3000
   
   ENV PORT 3000
   
   CMD ["node", "server.js"]
   \`\`\`

2. **Docker Compose**
   \`\`\`yaml
   version: '3.8'
   services:
     orientheight-web:
       build: .
       ports:
         - "3000:3000"
       environment:
         - NODE_ENV=production
   \`\`\`

## 🔧 Build Optimization

### Performance Optimizations

1. **Image Optimization**
   - All images use Next.js Image component
   - Automatic WebP conversion
   - Lazy loading enabled

2. **Bundle Analysis**
   \`\`\`bash
   npm install --save-dev @next/bundle-analyzer
   \`\`\`
   
   \`\`\`javascript
   // next.config.mjs
   import bundleAnalyzer from '@next/bundle-analyzer'
   
   const withBundleAnalyzer = bundleAnalyzer({
     enabled: process.env.ANALYZE === 'true',
   })
   
   export default withBundleAnalyzer(nextConfig)
   \`\`\`

3. **Build Analysis**
   \`\`\`bash
   ANALYZE=true npm run build
   \`\`\`

### SEO Optimizations

1. **Sitemap Generation**
   \`\`\`javascript
   // app/sitemap.js
   export default function sitemap() {
     return [
       {
         url: 'https://orientheight.com',
         lastModified: new Date(),
         changeFrequency: 'yearly',
         priority: 1,
       },
       {
         url: 'https://orientheight.com/services',
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.8,
       },
       // Add more URLs
     ]
   }
   \`\`\`

2. **Robots.txt**
   \`\`\`javascript
   // app/robots.js
   export default function robots() {
     return {
       rules: {
         userAgent: '*',
         allow: '/',
         disallow: '/private/',
       },
       sitemap: 'https://orientheight.com/sitemap.xml',
     }
   }
   \`\`\`

## 📊 Monitoring & Analytics

### Performance Monitoring

1. **Vercel Analytics**
   \`\`\`bash
   npm install @vercel/analytics
   \`\`\`
   
   \`\`\`javascript
   // app/layout.tsx
   import { Analytics } from '@vercel/analytics/react'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   \`\`\`

2. **Web Vitals**
   \`\`\`javascript
   // app/layout.tsx
   import { SpeedInsights } from '@vercel/speed-insights/next'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <SpeedInsights />
         </body>
       </html>
     )
   }
   \`\`\`

### Error Tracking

1. **Sentry Integration**
   \`\`\`bash
   npm install @sentry/nextjs
   \`\`\`

## 🔒 Security Considerations

### Headers Configuration

\`\`\`javascript
// next.config.mjs
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
\`\`\`

### Environment Variables

- Never commit sensitive data to version control
- Use Vercel's environment variable management
- Prefix client-side variables with `NEXT_PUBLIC_`

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Clear `.next` directory and `node_modules`
   - Verify all dependencies are installed

2. **Image Loading Issues**
   - Ensure images are in the `public` directory
   - Check image paths are correct
   - Verify image formats are supported

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for CSS conflicts
   - Verify custom CSS is imported correctly

### Debug Commands

\`\`\`bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Build with verbose output
npm run build -- --debug

# Analyze bundle size
ANALYZE=true npm run build
\`\`\`

## 📞 Support

For deployment issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Vercel documentation](https://vercel.com/docs)
- Contact the development team

---

Last updated: January 2024
