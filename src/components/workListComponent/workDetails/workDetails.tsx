import { GoBackButton } from "../../commonComponent/projectButton/backButton";
import "./workDetails.scss";
import coolTronImg from "../../../asset/images/coolTronWallpaper.png";
export const WorkDetails = () => {
  return (
    <>
      <div className="workDetailsWrapper">
        <div className="buttonWrapper">
          <GoBackButton />
        </div>
        <div className="workDetailsContianer">
          <div className="workProblemPageContainer">
            <div className="workTitleHeadingWrapper">
              <div className="headingContainer">
                <span className="Heading">Cool Tron</span>
                <div className="subHeadingWrapper">
                  <span className="subHeading">UX RESEARCH</span>
                  <span className="subHeading">UX DESGIN </span>
                  <span className="subHeading">UI DESGIN </span>
                  <span className="subHeading">USABILITY TEST</span>
                </div>
              </div>
              <div className="dateContainer">
                <span className="date">Dec 2024</span>
              </div>
            </div>
            <div className="workImageWrapper">
              <img src={coolTronImg} alt="workimage" className="workImage" />
            </div>
            <div className="problemDescription">
              <span className="descriptionHeading">
                <span className="underLineText">The</span> problem
              </span>
              <span className="description">
                Overcoming UI/UX challenges in navigation, real-time tracking,
                and role-specific interactions for seamless service management.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
