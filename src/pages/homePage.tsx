import { useEffect, useState } from "react";
import { NavBar } from "../components/navBar/navBar";
import "./homePage.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../components/commonComponent/footer/footer";

export const HomePage = () => {
  const [handleResponsiveNavBars, setHandleResponsiveNavBars] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/home");
    }
  }, []);
  return (
    <>
      <div className="homeWrapper">
        <NavBar setHandleResponsiveNavBars={setHandleResponsiveNavBars} handleResponsiveNavBars={handleResponsiveNavBars}/>
        <div className="outletWrapper">
          {handleResponsiveNavBars ? (
            <div className="responsiveNavBar">
              <span
                className="navlist navlist1"
                onClick={() => {
                  navigate("/home");
                  setHandleResponsiveNavBars(false);
                }}
              >
                Home
              </span>
              <span
                className="navlist"
                onClick={() => {
                  navigate("/work");
                  setHandleResponsiveNavBars(false);
                }}
              >
                Work
              </span>
              <span
                className="navlist"
                onClick={() => {
                  navigate("/about");
                  setHandleResponsiveNavBars(false);
                }}
              >
                About
              </span>
              <span
                className="navlist"
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
