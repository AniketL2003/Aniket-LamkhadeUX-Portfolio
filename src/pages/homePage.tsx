import { useEffect, useState } from "react";
import { NavBar } from "../components/navBar/navBar";
import "./homePage.scss";
import { Outlet, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [handleResponsiveNavBars, setHandleResponsiveNavBars] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <>
      <div className="homeWrapper">
        <NavBar setHandleResponsiveNavBars={setHandleResponsiveNavBars} />
        <div className="outletWrapper">
          {handleResponsiveNavBars ? (
            <div className="responsiveNavBar">
              <span className="navlist navlist1">Home</span>
              <span className="navlist">Work</span>
              <span className="navlist">About</span>
              <span className="navlist">Contact</span>
            </div>
          ) : (
            <>
              <Outlet />
            </>
          )}
        </div>
      </div>
    </>
  );
};
