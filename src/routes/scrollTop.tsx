import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Route changed, scrolling to top");
    window.scrollTo(0, 0);
    window.scrollTo(0, 0);
    // console.error("in useEffect");
    document.documentElement.scrollTop = 0; // For modern browsers
    document.body.scrollTop = 0; // For Safari/older browsers
  }, [pathname]);

  return null;
};

export default ScrollToTop;
