import "./dashBoard.scss";
import statusTag from "../../asset/images/avaialable.png.png";
import LoadingButtonCustom from "../commonComponent/customBtn";
import profileImg from "../../asset/images/profileImage-2.png";
import Lottie from "react-lottie";
import animationData from "../../asset/lottie/arrowAnimation.json";
import { useEffect } from "react";
export const DashBoard = () => {
  const defaultOptions = {
    loop: true, // Whether the animation should loop
    autoplay: true, // Whether the animation should start automatically
    animationData: animationData, // The animation data you imported
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Keeps the aspect ratio of the animation
    },
  };
  
  return (
    <div className="dashBoardParent">
      <div className="dashBoardWrapper">
        <div className="infoContainer">
          <div className="statusContainer">
            <div className="statusTagContainer">
              <img src={statusTag} alt="status" className="statusTag" />
            </div>
          </div>
          <div className="tittleContainer">
            <div className="mainTitleContainer">
              <span className="title">
                Your Friendly Product Designer Improving Experiences.
              </span>
            </div>
            <div className="subT">
              <span className="subTitle">
                My focus is on simplifying user interactions while enhancing
                usability. <span className="subTextHighlight"> Together</span>,
                let’s create designs that make life better for everyone.
              </span>
            </div>
          </div>
          <div className="bottomWrapper">
            <div className="bottomContainer">
              <div className="buttonWrapper">
                <div className="normalButtonContainer">
                  <LoadingButtonCustom
                    className="primaryBtn"
                    buttonLabel={"Let's Work Together"}
                    onClickCallBack={() => {
                      window.open("https://tally.so/r/3j5lRR", "_blank");
                    }}
                  />
                </div>
                <div className="bottomArrowWrapper">
                  {/* <img src={downArrow} alt="arrow" className="bottomArrow" /> */}
                  <Lottie
                    options={defaultOptions}
                    style={{
                      height: "75px",
                      marginBottom: "75px",
                      width: "75px",
                      margin: "0px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="imageWrapper">
          <img src={profileImg} alt="profleImage" className="profleImage" />
        </div>
      </div>
    </div>
  );
};
