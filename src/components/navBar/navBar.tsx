import "./navBar.scss";
import logo from "../../asset/images/appLogo.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  setHandleResponsiveNavBars: (data: boolean) => void;
  handleResponsiveNavBars: boolean;
}

export const NavBar = (props: NavBarProps) => {
  const { setHandleResponsiveNavBars, handleResponsiveNavBars } = props;
  const [navBarState, setNavBarState] = useState(handleResponsiveNavBars);
  const navigate = useNavigate();
  const toggleNavBarState = () => {
    const newState = !navBarState; // Compute the new state
    setNavBarState(newState); // Update the local state
    setHandleResponsiveNavBars(newState); // Pass the updated state to the parent
  };
  useEffect(() => {
    setNavBarState(handleResponsiveNavBars);
  }, [handleResponsiveNavBars]);
  return (
    <div className="navBarWrapper">
      <div className="navBarContainer">
        <div className="logoContainer" onClick={() => navigate("/home")}>
          <img src={logo} alt="Logo" className="appLogo" />
        </div>
        <div className="navListContainer">
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
        <IconButton onClick={toggleNavBarState} className="menuIcon">
          {navBarState ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </IconButton>
      </div>
    </div>
  );
};
