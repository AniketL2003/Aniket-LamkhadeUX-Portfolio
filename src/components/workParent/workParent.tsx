import "./workParent.scss";
import LoadingButtonCustom from "../commonComponent/customBtn";
import GlassCards from "../commonComponent/cardComponent/projectCardsComponent";
import { useNavigate } from "react-router-dom";

export const WorkParent = () => {
  const navigate = useNavigate();
  return (
    <div className="workParentWrapper">
      <div className="workParentContainer">
        <div className="workParentHeader">
          <span className="headerText">
            See my Projects That Impress Both Clients & Customers
          </span>
        </div>
        <GlassCards />
        <LoadingButtonCustom
          buttonLabel="Check Out"
          className="viewProjectBtn"
          onClickCallBack={() => {
            navigate("/work");
          }}
        />
      </div>
    </div>
  );
};
