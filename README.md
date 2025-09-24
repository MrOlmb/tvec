# TVEC Portfolio Website

A modern, professional portfolio website for TVEC (Transport Vert d'Électricité au Congo) - an electrical network solutions provider.

## 🚀 Features

- **Modern Design**: Built with Next.js 14, Tailwind CSS, and shadcn/ui
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Professional UX**: Smooth animations, hover effects, and scroll reveals
- **Contact Form**: Fully validated contact form with real-time feedback
- **Performance**: Optimized images, lazy loading, and efficient animations
- **SEO Ready**: Proper metadata and semantic HTML structure
- **Accessibility**: WCAG compliant with proper focus states and contrast ratios

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Development**: Turbopack for fast development

## 🎨 Design System

### Brand Colors
- **Navy Blue**: `#1e3a8a` (Primary)
- **Green**: `#16a34a` (Secondary)  
- **Yellow/Gold**: `#fbbf24` (Accent)

### Sections
1. **Hero**: Company introduction with carousel showcase
2. **About**: Company expertise and statistics
3. **Technology**: Advanced technology presentation
4. **Solutions**: Network diagnostics and capabilities
5. **Projects**: EPC projects and service offerings
6. **Gallery**: Project showcase with filtering
7. **Financing**: Partnership information
8. **Government**: Government support and mission
9. **Partners**: CTC Global and Electra Power details
10. **Contact**: Professional contact form with validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000) or the port shown in terminal

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and TVEC theme
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── sections/       # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   └── ...
│   ├── ui/             # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   └── ...
│   ├── navigation.tsx  # Main navigation
│   └── footer.tsx      # Site footer
├── lib/
│   ├── utils.ts        # Utility functions
│   └── validations.ts  # Form validation schemas
└── types/
    └── index.ts        # TypeScript definitions
```

## 🎯 Customization

### Adding Content
- **Images**: Add to `/public/` directory and reference in components
- **Content**: Update text in respective section components
- **Colors**: Modify TVEC brand colors in `globals.css`

### Form Configuration
- **Validation**: Update schemas in `src/lib/validations.ts`
- **Submission**: Configure backend endpoint in `contact.tsx`

### Styling
- **Tailwind**: Extend configuration in `tailwind.config.js`
- **Custom CSS**: Add to `globals.css` under appropriate layers

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `.next` directory

## 🔧 Configuration

### Environment Variables (Optional)
Create `.env.local` for environment-specific configurations:

```env
# Example: Contact form endpoint
NEXT_PUBLIC_CONTACT_ENDPOINT=https://your-api-endpoint.com/contact

# Example: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📱 Mobile Optimization

- Responsive navigation menu
- Touch-friendly interactions
- Optimized carousel for mobile
- Proper form input sizing

## 🎨 Brand Guidelines

The website follows TVEC's professional branding:
- **Industry**: Electrical infrastructure
- **Audience**: Government officials, energy companies, investors
- **Tone**: Professional, trustworthy, innovative
- **Visual Style**: Modern, clean, technical excellence

## 📄 License

This project is proprietary to TVEC. All rights reserved.

---

**Built with ❤️ for TVEC - Transforming Africa's electrical infrastructure**
