# Sami's at the Bradda Glen

A modern, high-end restaurant website for **Sami's at the Bradda Glen**, located in Port Erin Bay, Isle of Man. This website showcases Mediterranean and Middle Eastern cuisine with a focus on driving bookings for dining, events, weddings, and functions.

## 🎨 Brand Identity

**Sami's** is a Mediterranean & Middle Eastern-inspired restaurant named in loving memory of Sami Benbatoul. The brand represents warmth, generosity, and togetherness, offering a premium yet welcoming dining experience with stunning coastal views.

### Color Palette
- **Primary Blue:** #3F79A8
- **Accent Gold:** #D9C46B
- **Supporting Colors:** Olive Green (#6E7F6A), Warm Earth (#8A6A4A), Light Blue (#5F8FB8)

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** React with Server & Client Components
- **Fonts:** System fonts with serif for headings, sans-serif for body

## 📁 Project Structure

```
samis-at-bradda-glen/
├── app/
│   ├── page.tsx              # Homepage
│   ├── menus/page.tsx        # Menus page
│   ├── gallery/page.tsx      # Gallery with image filtering
│   ├── events/page.tsx       # Corporate events
│   ├── weddings/page.tsx     # Wedding venue hire
│   ├── functions/page.tsx    # Private functions
│   ├── contact/page.tsx      # Contact form & info
│   ├── layout.tsx            # Root layout with Navbar & Footer
│   └── globals.css           # Global styles & Tailwind config
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky navigation
│   │   └── Footer.tsx        # Site footer
│   └── ui/
│       ├── Hero.tsx          # Hero section component
│       ├── Section.tsx       # Section wrapper
│       ├── Card.tsx          # Reusable card component
│       └── CTABlock.tsx      # Call-to-action blocks
└── public/                   # Static assets
```

## 🌟 Features

### Pages
- **Homepage:** Hero, about section, experience highlights, events preview, opening hours
- **Menus:** Daytime (10:00-16:00) and Evening (18:00-22:00) menus with PDF links
- **Gallery:** Responsive image grid with filtering (Food, Venue, Views) and lightbox
- **Events:** Corporate event hosting information and packages
- **Weddings:** Exclusive venue hire details with capacity info
- **Functions:** Private celebrations (birthdays, anniversaries, parties)
- **Contact:** Contact form, business hours, location details

### Components
- Responsive sticky navbar with mobile menu
- Reusable hero sections with customizable heights
- Card components for content display
- CTA blocks for conversion optimization
- Comprehensive footer with social links

### Design Features
- Mobile-first responsive design
- Smooth scrolling and hover animations
- Accessible (semantic HTML, ARIA labels)
- SEO optimized with Next.js metadata API
- Performance optimized with Next.js Image component (placeholder images used)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
cd samis-at-bradda-glen
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Configuration

### Tailwind CSS
Custom colors and design tokens are configured in `app/globals.css` using Tailwind v4's inline theme syntax.

### Contact Information
- **Phone:** 07624 259500
- **Email:** bookings@samis.im
- **Location:** Bradda Glen, Port Erin Bay, Isle of Man

### Opening Hours
- **Monday:** Closed
- **Tuesday - Saturday:** 10:00 - 22:00
- **Sunday:** 10:00 - 17:00

## 🎯 Key Conversion Points

- Multiple "Book Now" CTAs throughout the site
- Contact form for enquiries
- Phone number prominently displayed
- Clear event/wedding/function booking paths
- Urgency messaging ("Limited availability")

## 🖼️ Images

Currently using Unsplash placeholder images. Replace with actual restaurant photos:
- Food photography
- Venue interior/exterior shots
- Port Erin Bay views
- Event setups
- Team photos (optional)

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `app/`
2. Add `page.tsx` with your content
3. Update navigation in `components/layout/Navbar.tsx`

### Modifying Colors
Edit the color variables in `app/globals.css` under the `@theme inline` section.

### Updating Content
All content is directly in the page components for easy editing. No CMS required.

## 📄 License

This project is proprietary and confidential. All rights reserved by Sami's at the Bradda Glen.

## 🙏 Acknowledgments

Built with modern web technologies to provide a premium user experience that reflects the quality of Sami's restaurant and honors the memory of Sami Benbatoul.
