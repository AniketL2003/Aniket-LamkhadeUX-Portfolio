import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { MainHomePage } from "../pages/mainHomePage/mainHomePage";
import { WorkPage } from "../pages/workPage/workPage";
import { WorkDetails } from "../components/workListComponent/workDetails/workDetails";

export const AppRoute = (
  <Routes>
    <Route path="/" element={<HomePage />}>
      <Route path="/home" element={<MainHomePage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/work-details" element={<WorkDetails />} />
    </Route>
  </Routes>
);
