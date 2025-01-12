import { WorkListComponent } from "../../components/workListComponent/workListComponent";
import "./workPage.scss";

export const WorkPage = () => {
  return (
    <div className="workPageParent">
      <div className="workPageContainer">
        <WorkListComponent />
      </div>
    </div>
  );
};
