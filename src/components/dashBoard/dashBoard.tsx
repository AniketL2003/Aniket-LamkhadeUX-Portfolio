import "./dashBoard.scss";
import statusTag from "../../asset/images/avaialable.png.png";
import downArrow from "../../asset/svgs/Vector.svg";
import LoadingButtonCustom from "../commonComponent/customBtn";
import buttonLogo from "../../asset/svgs/buttonLogo.svg";
import profileImg from "../../asset/images/profileImage.png";
export const DashBoard = () => {
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
              <span className="title">Your friendly Product desginer</span>
              <span className="title">improving experiences.</span>
            </div>
          </div>
          <div className="bottomWrapper">
            <div className="bottomContainer">
              <div className="buttonWrapper">
                <div className="normalButtonContainer">
                  <LoadingButtonCustom
                    className="primaryBtn"
                    buttonLabel={"Let's Work Together"}
                    onClickCallBack={() => {}}
                  />
                </div>
                <div className="bottomArrowWrapper">
                  <img src={downArrow} alt="arrow" className="bottomArrow" />
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
