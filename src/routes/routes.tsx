import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { MainHomePage } from "../pages/mainHomePage/mainHomePage";
import { WorkPage } from "../pages/workPage/workPage";

export const AppRoute = (
  <Routes>
    <Route path="/" element={<HomePage />}>
      <Route path="/home" element={<MainHomePage />} />
      <Route path="/work" element={<WorkPage />} />
    </Route>
  </Routes>
);
