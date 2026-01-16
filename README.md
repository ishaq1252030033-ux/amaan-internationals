# Amaan Agro International - Website

A modern, professional website for Amaan Agro International, an import/export company specializing in agricultural products.

## Features

- **Modern Design**: Clean, professional UI with green agriculture theme
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Fast Performance**: Optimized images, lazy loading, and efficient code
- **Interactive Elements**: Contact forms, image galleries, animations
- **Accessibility**: WCAG 2.1 Level AA compliance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## Pages

1. **Homepage**: Hero section, services, products, testimonials, CTA
2. **About Us**: Company story, team, infrastructure, certifications, global reach
3. **Products**: Fresh eggs, fruits, vegetables, and grocery items
4. **Import Services**: Import capabilities, process, and countries
5. **Export Services**: Export process, markets, and services
6. **Quality Assurance**: Quality control processes and certifications
7. **Contact**: Contact form, information, and map
8. **Gallery**: Product and facility images with lightbox
9. **FAQ**: Frequently asked questions with accordion
10. **Downloads**: Company resources and documentation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Contact Information

Update contact details in:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/contact/ContactInfo.tsx`
- `components/WhatsAppWidget.tsx`

### WhatsApp Number

Update WhatsApp number in:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/WhatsAppWidget.tsx`
- `components/contact/ContactInfo.tsx`
- `components/home/CTA.tsx`

### Google Maps

Update the Google Maps embed URL in `components/contact/MapSection.tsx` with your actual location.

### Email Integration

The contact form currently shows a success message. To integrate with an email service:

1. Install EmailJS or similar service
2. Update `components/contact/ContactForm.tsx` with your service configuration
3. Add environment variables for API keys

### Images

Replace placeholder images (Unsplash URLs) with your actual product and facility images.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── products/          # Products page
│   ├── import-services/   # Import services page
│   ├── export-services/   # Export services page
│   ├── quality-assurance/ # Quality assurance page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── faq/               # FAQ page
│   ├── downloads/         # Downloads page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── home/             # Homepage components
│   ├── about/            # About page components
│   ├── products/         # Products components
│   ├── services/         # Services components
│   ├── quality/          # Quality components
│   ├── contact/          # Contact components
│   ├── gallery/          # Gallery components
│   ├── faq/              # FAQ components
│   ├── downloads/        # Downloads components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   ├── WhatsAppWidget.tsx # WhatsApp button
│   └── BackToTop.tsx     # Back to top button
├── public/               # Static files
└── package.json          # Dependencies
```

## Customization

### Colors

Update the color scheme in `tailwind.config.js`:
- Primary colors (green theme)
- Customize as needed

### Content

All content is in component files. Update text, images, and data as needed.

### Fonts

Currently using Inter font from Google Fonts. Change in `app/globals.css`.

## SEO

- Meta tags configured in each page
- Sitemap generated automatically
- robots.txt included
- Semantic HTML structure
- Alt text for images (add to all images)

## Performance

- Image optimization with Next.js Image component
- Lazy loading for images
- Code splitting with Next.js
- Optimized CSS with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Support

For questions or support, contact the development team.

---

**Amaan Agro International** - Your Trusted Partner in Global Agricultural Trade

