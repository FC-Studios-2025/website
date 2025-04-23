import { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Handle scrolling to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Method to be called when clicking on same-page links
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  // Add this method to the window object so it can be accessed from anywhere
  useEffect(() => {
    window.scrollToTopOfPage = scrollToTop;
    
    return () => {
      // Clean up when component unmounts
      delete window.scrollToTopOfPage;
    };
  }, [scrollToTop]);

  return null;
}

export default ScrollToTop;