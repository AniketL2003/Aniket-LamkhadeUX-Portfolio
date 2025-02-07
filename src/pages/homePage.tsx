import { useEffect, useRef, useState } from "react";
import { NavBar } from "../components/navBar/navBar";
import "./homePage.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../components/commonComponent/footer/footer";

export const HomePage = () => {
  const [handleResponsiveNavBars, setHandleResponsiveNavBars] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const scrolRef = useRef<any>(null);
  const scrollToTop = () => {
    if (scrolRef.current) {
      scrolRef.current.scrollTop = 0;
    }
  };
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/home");
    }
    // window.scrollTo(0, 0);
    // window.scrollX = 0;
    // window.scrollY = 0;
    // document.documentElement.scrollTop = 0; // For modern browsers
    // document.body.scrollTop = 0; // For Safari/older browsers
    scrollToTop();
    console.warn("in useEffect home");
  }, [location.pathname, navigate]);
  const isActive = (path: string) => location.pathname.includes(path);
  return (
    <>
      <div className="homeWrapper">
        <NavBar
          setHandleResponsiveNavBars={setHandleResponsiveNavBars}
          handleResponsiveNavBars={handleResponsiveNavBars}
        />
        <div className="outletWrapper" ref={scrolRef}>
          {handleResponsiveNavBars ? (
            <div className="responsiveNavBar">
              <span
                className={`navlist ${isActive("/home") ? "active" : ""}`}
                onClick={() => {
                  navigate("/home");
                  setHandleResponsiveNavBars(false);
                }}
              >
                Home
              </span>
              <span
                className={`navlist  ${isActive("/work") ? "active" : ""}`}
                onClick={() => {
                  navigate("/work");
                  setHandleResponsiveNavBars(false);
                }}
              >
                Work
              </span>
              <span
                className={`navlist  ${isActive("/about") ? "active" : ""}`}
                onClick={() => {
                  navigate("/about");
                  setHandleResponsiveNavBars(false);
                }}
              >
                About
              </span>
              <span
                className={`navlist  ${isActive("/contact") ? "active" : ""}`}
                onClick={() => {
                  window.open("https://tally.so/r/3j5lRR", "_blank");
                  setHandleResponsiveNavBars(false);
                }}
              >
                Contact
              </span>
            </div>
          ) : (
            <>
              <Outlet />
              <Footer />
            </>
          )}
        </div>
      </div>
    </>
  );
};
