import "./workParent.scss";
import coolTronImg from "../../asset/images/coolTronWallpaper.png";
import LoadingButtonCustom from "../commonComponent/customBtn";
import buttonLogo from "../../asset/svgs/buttonLogo.svg";
import GlassCards from "../commonComponent/cardComponent/projectCardsComponent";

export const WorkParent = () => {
  return (
    <div className="workParentWrapper">
      <div className="workParentContainer">
        <div className="workParentHeader">
          <span className="headerText">
            See my Projects That Impress Both Clients & Customers
          </span>
        </div>
        {/* <div className="workListWrapper">
          <div className="workListContainer">
            <img src={coolTronImg} alt="" className="workListImg" />
            <div className="workInfoContainer">
              <span className="workInfoTextTitle">
                Cooltron Streamlining AC & Refrigerator Repairs Service
              </span>
              <span className="workInfoText">
                Cooltron Streamlined AC and Refrigerator repair services.
                Connecting customers, admins, and technicians for efficient
                service. Real-time tracking and seamless communication for
                hassle-free repairs.
              </span>
              <LoadingButtonCustom
                className="primaryBtn"
                buttonLabel={"View"}
                onClickCallBack={() => {}}
              />
            </div>
          </div>
        </div> */}
        <GlassCards />
        <LoadingButtonCustom
          buttonLabel="View"
          className="viewProjectBtn"
          onClickCallBack={() => {}}
        />
      </div>
    </div>
  );
};
