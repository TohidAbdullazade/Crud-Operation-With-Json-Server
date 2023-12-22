import { Routes, Route } from "react-router-dom";
import Create from "../pages/Create";
import Read from "../pages/Read";
import Update from "../pages/Update";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Create />}></Route>
      <Route path="/read" element={<Read />}></Route>
      <Route path="/update" element={<Update />}></Route>
    </Routes>
  );
};
export default MainRoutes;
