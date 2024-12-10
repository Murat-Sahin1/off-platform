import { Outlet } from "react-router";
import LeftDrawer from "../features/left-drawer-component/LeftDrawer";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="applicationWrapper">
      <LeftDrawer />
      <div className="outletWrapper">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default MainLayout;
