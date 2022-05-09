import { Routes, Route } from "react-router-dom";

import AllCompanies from "./pages/AllCompanies";
import AllCompaniesNum from "./pages/AllCompaniesNum";
import CompanyNumber from "./pages/CompanyNumber";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AllCompanies />} />
      <Route path="/companies" element={<AllCompaniesNum />} />
      <Route path="/numbers" element={<CompanyNumber />} />
    </Routes>
  );
}
