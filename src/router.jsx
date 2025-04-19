import { createHashRouter, Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import TestimonialsPage from './pages/TestimonialPage';
import Works from './pages/Works';
import Page404 from './pages/Page404';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import FAQ from './pages/Faq';

// Create a root layout component
function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createHashRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/testimonials',
        element: <TestimonialsPage />,
      },
      {
        path: '/works',
        element: <Works />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/tnc',
        element: <TermsAndConditions />,
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/*',
        element: <Page404 />,
      },
    ],
  },
]);

export default router;