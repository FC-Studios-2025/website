# 🎬 Film Craft Studios – Website Documentation

## 📌 Overview
#
This document serves as a technical and functional overview of the website built for **Film Craft Studios**. It is intended for both the client team and any future developers who may maintain or enhance the project.

* **Site Type**: Portfolio + Business Website
* **Frontend Stack**: React + Tailwind CSS + Vite
* **Animations**: GSAP, Framer Motion, Lottie
* **3D/Graphics**: OGL, Three.js, React Three Fiber
* **Hosted On**: *GreenGeeks*
* **Developer**: Anish Jaiswal

## 🧠 Tech Stack Summary

| Purpose | Technology Used |
|---------|----------------|
| Frontend Framework | React 19 |
| Bundler | Vite |
| CSS Framework | Tailwind CSS 4 |
| Animations | Framer Motion, GSAP |
| Icons | FontAwesome, React Icons |
| Forms | Formspree |
| Carousel | Swiper.js |
| Lottie Integration | `lottie-react`, `@lottiefiles/react-lottie-player` |

## 🗂 Folder Structure

```
/src
├── components   # Reusable UI elements and modules
│   ├── NavBar
│   ├── Footer
│   ├── HeroText
│   ├── VideoCarousels (Reel, Horizontal, Square, etc.)
│   ├── Testimonials 
│   ├── ContactForm
│   ├── CircularGallery
│   └── Motion/Scroll/Loading Components
├── pages        # Main routes/pages
│   ├── Landing, AboutUs, Contact, FAQ
│   ├── Works, Testimonials, T&C, Privacy
└── Main.jsx      # Main app wrapper with routing
```

## 💡 Key Features

* **Responsive Design** – Optimized for mobile, tablet, and desktop.
* **Animated Experience** – Scroll-triggered transitions, video carousels, and dynamic text.
* **FAQ Section** – Toggleable answers using Framer Motion.
* **Contact Form** – Functional form integrated with Formspree.
* **Testimonials Section** – Fully customizable testimonial carousels and sliders.
* **Loading Screen** – Animated intro screen before content appears.
* **Accessible Design** – Proper contrast, alt tags, and keyboard navigability (where applicable).

## 🛠️ Local Development

### Prerequisites
* Node.js `>=18`
* npm `>=9`

### Install & Run

```bash
git clone <your-repo-url>
cd film-craft-website
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

## 🚀 Deployment

**Method**: *Static deployment using GreenGeeks*

* Build Command: `npm run build`
* Output Directory: `dist`
* Environment: No special variables required

## 📋 Component Notes
#
Here are a few notable components and their usage:

| Component | Purpose |
|-----------|---------|
| `HorizontalVideoCarousel.jsx` | Scrollable video reels, used on homepage |
| `CreativeApproachComponent.jsx` | Stylized explanation of brand philosophy |
| `ReelVideoCarousel.jsx` | Reel 9/16 video slider |
| `SqVideoCarousel.jsx` | square 1/1 video slider |
| `LoadingScreen.jsx` | Animated loader before main site content |
| `ScrollToTop.jsx` | Smooth back-to-top button |

*Each component is modular and can be updated independently.*

## 🧼 Maintenance Guide

* **Text & Content**: Located in each respective component or page file.
* **New Sections**: Duplicate and modify existing components from `/components`.
* **Styling**: Tailwind utility-first CSS—modify class names in JSX.

## 🧪 Testing & Optimization

While this build does not include automated tests, it has been manually tested across:

* Chrome, Firefox (desktop)
* Android Chrome (mobile)

## 🛡️ Troubleshooting

| Issue | Solution |
|-------|----------|
| Site not loading | Ensure correct domain mapping and deploy env |
| Video not playing | Check formats (`.mp4`, `.webm` recommended) |
| Styling issues | Clear browser cache or re-deploy |

## 🧾 Legal Pages Implemented

* ✅ Privacy Policy
* ✅ Terms & Conditions
* ✅ 404 Page

## 📞 Support

For future updates or support:

**Developer**: Anish Jaiswal  
**Email**: `anishjaiswal1220@gmail.com`  
**Contact**: `+91 7679447605`
**Availability**: Maintenance packages provided via google docs.