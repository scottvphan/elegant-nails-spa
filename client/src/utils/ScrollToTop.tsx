import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Scroll after a 100 milisecond delay
    const scrollTimeout = setTimeout(scrollToTop, 100);
    return () => clearTimeout(scrollTimeout);
  }, [pathname]);

  return null;
}
