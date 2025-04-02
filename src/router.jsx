import { createHashRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import TestimonialsPage from './pages/TestimonialPage';
import Works from './pages/Works';
// Import other pages as needed

const router = createHashRouter([
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
  // Add more routes as needed
  {
    path: '*',
    element: <div><h1>404 - Page Not Found</h1></div>,
  },
]);

export default router;