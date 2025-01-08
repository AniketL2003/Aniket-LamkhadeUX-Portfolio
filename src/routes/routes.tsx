import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { MainHomePage } from "../pages/mainHomePage/mainHomePage";

export const AppRoute = (
  <Routes>
    <Route path="/" element={<HomePage />}>
      <Route path="/home" element={<MainHomePage />} />
    </Route>
  </Routes>
);
