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
        <NavBar setHandleResponsiveNavBars={setHandleResponsiveNavBars} />
        <div className="outletWrapper">
          {handleResponsiveNavBars ? (
            <div className="responsiveNavBar">
              <span
                className="navlist navlist1"
                onClick={() => {
                  navigate("/home");
                }}
              >
                Home
              </span>
              <span
                className="navlist"
                onClick={() => {
                  navigate("/work");
                }}
              >
                Work
              </span>
              <span className="navlist">About</span>
              <span
                className="navlist"
                onClick={() => {
                  window.open("https://tally.so/r/3j5lRR", "_blank");
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
