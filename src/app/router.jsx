import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import App from "./App";

function OffRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default OffRouter;
