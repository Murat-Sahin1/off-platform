import { Routes, Route } from "react-router";
import Home from "../app/pages/Home/Home";
import Categories from "../app/pages/Categories/Categories";
import MainLayout from "../app/MainLayout.jsx";
import NotFound from "../app/pages/NotFound/NotFound.jsx";
import Downloaded from "../app/pages/Downloaded/Downloaded.jsx";
import Feedback from "../app/pages/Feedback/Feedback.jsx";
import Following from "../app/pages/Following/Following.jsx";
import Help from "../app/pages/Help/Help.jsx";
import History from "../app/pages/History/History.jsx";
import Saved from "../app/pages/Saved/Saved.jsx";
import Settings from "../app/pages/Settings/Settings.jsx";
import Trending from "../app/pages/Trending/Trending.jsx";
import Podcasts from "../app/pages/Podcasts/Podcasts.jsx";

function OffRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="downloaded" element={<Downloaded />} />
        <Route path="podcasts" element={<Podcasts />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="following" element={<Following />} />
        <Route path="help" element={<Help />} />
        <Route path="history" element={<History />} />
        <Route path="saved" element={<Saved />} />
        <Route path="settings" element={<Settings />} />
        <Route path="trending" element={<Trending />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default OffRouter;
