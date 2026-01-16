# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Important Configuration Steps

### 1. Update Contact Information

Search and replace the following in the codebase:
- Phone: `+1 234 567 890` → Your actual phone number
- Email: `contact@amaanagroint.com` → Your actual email (already updated)
- WhatsApp: `1234567890` → Your actual WhatsApp number (in `wa.me/` links)
- Address: Update in `components/contact/ContactInfo.tsx` and `components/contact/MapSection.tsx`

### 2. Update Google Maps

In `components/contact/MapSection.tsx`, replace the Google Maps embed URL with your actual location coordinates.

### 3. Replace Placeholder Images

All images currently use Unsplash placeholders. Replace with your actual:
- Product images
- Facility photos
- Team photos
- Gallery images

### 4. Configure Email Service

The contact form is configured to send emails to `contact@amaanagroint.com`. To enable actual email sending:

**Option A: EmailJS (Recommended - Already Configured)**
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template with these variables:
   - `to_email` (will be set to contact@amaanagroint.com)
   - `from_name`, `from_email`, `phone`, `company`, `country`
   - `product_interest`, `other_product`, `quantity`, `message`
   - `subject`
4. Copy your Service ID, Template ID, and Public Key
5. Create a `.env.local` file in the root directory:
   ```
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id
   EMAILJS_PUBLIC_KEY=your_public_key
   ```
6. Restart your development server

**Option B: Other Email Services**
You can modify `app/api/contact/route.ts` to use:
- SendGrid (requires API key)
- Nodemailer (requires SMTP configuration)
- AWS SES (requires AWS credentials)
- Resend API

**Note:** The API route is already set up at `/api/contact` and will send emails to `contact@amaanagroint.com`.

### 5. Add Real Favicon

Replace `app/favicon.ico` with your company logo/favicon.

### 6. Update Company Information

Review and update:
- Company name (if different)
- Years in business
- Statistics (countries served, clients, etc.)
- Team member information
- Certifications list

### 7. Social Media Links

Update social media links in `components/Footer.tsx` with your actual profiles.

### 8. Analytics (Optional)

Add Google Analytics:
1. Create `app/analytics.tsx`:
   ```typescript
   import Script from 'next/script'
   
   export default function Analytics() {
     return (
       <>
         <Script
           src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'GA_MEASUREMENT_ID');
           `}
         </Script>
       </>
     )
   }
   ```
2. Add to `app/layout.tsx`

## Production Deployment

### Build for Production
```bash
npm run build
npm start
```

### Recommended Hosting
- **Vercel** (Recommended - optimized for Next.js)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**

### Environment Variables

Create `.env.local` for:
- Email service API keys
- Google Maps API key (if using Maps API)
- Analytics IDs
- Any other sensitive data

## SEO Checklist

- [ ] Update all meta descriptions
- [ ] Add alt text to all images
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt
- [ ] Add Google Analytics
- [ ] Set up Google Business Profile
- [ ] Create social media profiles

## Performance Optimization

- [ ] Optimize all images (use WebP format)
- [ ] Enable Next.js Image Optimization
- [ ] Set up CDN for static assets
- [ ] Enable compression
- [ ] Test with Lighthouse

## Security

- [ ] Set up SSL certificate
- [ ] Enable HTTPS
- [ ] Add security headers
- [ ] Review and secure contact form
- [ ] Set up rate limiting for forms

## Testing

- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Test all links
- [ ] Verify contact information
- [ ] Test WhatsApp integration

## Launch Checklist

- [ ] All pages completed
- [ ] All images replaced
- [ ] Contact information updated
- [ ] Forms working
- [ ] Mobile responsive
- [ ] SEO optimized
- [ ] Analytics configured
- [ ] SSL certificate installed
- [ ] Domain configured
- [ ] Backup strategy in place

---

Need help? Contact the development team.

