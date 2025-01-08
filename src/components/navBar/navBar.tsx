import "./navBar.scss";
import logo from "../../asset/images/appLogo.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import { IconButton } from "@mui/material";
interface NavBarProps {
  setHandleResponsiveNavBars: (data: boolean) => void;
}
export const NavBar = (props: NavBarProps) => {
  const { setHandleResponsiveNavBars } = props;
  const [navBarState, setNavBarState] = useState(false);
  return (
    <div className="navBarWrapper">
      <div className="navBarContainer">
        <div className="logoContainer">
          <img src={logo} alt="Logo" className="appLogo" />
        </div>
        <div className="navListContainer">
          <span className="navlist navlist1">Home</span>
          <span className="navlist">Work</span>
          <span className="navlist">About</span>
          <span className="navlist">Contact</span>
        </div>
        <IconButton
          onClick={() => {
            setNavBarState(!navBarState);
            setHandleResponsiveNavBars(navBarState);
          }}
          className="menuIcon"
        >
          {navBarState ? <MenuRoundedIcon /> : <CloseRoundedIcon />}
        </IconButton>
      </div>
    </div>
  );
};
