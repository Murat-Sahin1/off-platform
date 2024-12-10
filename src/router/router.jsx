import { Routes, Route } from "react-router";
import Home from "../app/pages/Home/Home";
import Categories from "../app/pages/Categories/Categories";
import MainLayout from "../app/MainLayout.jsx";
import NotFound from "../app/pages/NotFound/NotFound.jsx";

function OffRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default OffRouter;
