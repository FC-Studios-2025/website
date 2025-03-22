import { createBrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import TestimonialsPage from './pages/TestimonialPage';
// Import other pages as needed

const router = createBrowserRouter([
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
  // Add more routes as needed
  {
    path: '*',
    element: <div><h1>404 - Page Not Found</h1></div>,
  },
]);

export default router;