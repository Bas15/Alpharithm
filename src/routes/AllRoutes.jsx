import { Route, Routes } from "react-router";
import Home from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
