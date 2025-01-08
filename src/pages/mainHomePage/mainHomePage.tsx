import { SeprationLine } from "../../components/commonComponent/seprationLine";
import { DashBoard } from "../../components/dashBoard/dashBoard";
import { ServiceComponent } from "../../components/serviceComponent/serviceComponent";
import { WorkParent } from "../../components/workParent/workParent";

export const MainHomePage = () => {
  return (
    <>
      <DashBoard />
      <SeprationLine />
      <ServiceComponent />
      <SeprationLine />
      <WorkParent />
    </>
  );
};
