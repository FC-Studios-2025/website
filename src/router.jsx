import { createHashRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import TestimonialsPage from './pages/TestimonialPage';
import Works from './pages/Works';
import Page404 from './pages/Page404';
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
    path: '/*',
    element: <Page404/>,
  },
]);

export default router;