import "./workListComponent.scss";
import coolTronImg from "../../asset/images/coolTronWallpaper.png";
import inGateImg from "../../asset/images/inGateWallpaper.png";
import retroRing from "../../asset/images/retroRingWallpaper.png";
import { ProjectButton } from "../commonComponent/projectButton/projectButton";

export const WorkListComponent = () => {
  const workListArray = [
    {
      img: inGateImg,
      title: "InGate Smart, Secure, and Seamless Visitor Management App",
      description:
        "InGate is a smart, secure Visitor Management System app that simplifies entry processes with a user-friendly design. Featuring real-time tracking and efficient data management, it ensures seamless coordination between visitors and hosts.",
      flexFlag: false,
    },
    {
      img: coolTronImg,
      title: "Cooltron Streamlining AC & Refrigerator Repairs Service",
      description:
        "Cooltron Streamlined AC and Refrigerator repair services. Connecting customers, admins, and technicians for efficient service. Real-time tracking and seamless communication for hassle-free repairs.",
      flexFlag: true,
    },
    {
      img: retroRing,
      title: "Cooltron Streamlining AC & Refrigerator Repairs Service",
      description:
        "Cooltron Streamlined AC and Refrigerator repair services. Connecting customers, admins, and technicians for efficient service. Real-time tracking and seamless communication for hassle-free repairs.",
      flexFlag: false,
    },
  ];
  return (
    <div className="workListParent">
      {workListArray.map((item, index) => {
        return (
          <div className="workListWrapper" key={index}>
            <div
              className={`workListContainer ${
                item.flexFlag ? "flexDirection" : ""
              }`}
            >
              <img src={item.img} alt="" className="workListImg" />
              <div className="workInfoContainer">
                <span className="workInfoTextTitle">{item.title}</span>
                <span className="workInfoText">{item.description}</span>
                <ProjectButton
                  buttonLabel="View"
                  className="primaryBtn"
                  //   className="primaryBtn"
                  //   buttonLabel={"View"}
                  onClickCallBack={() => {}}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
