import { Outlet } from "react-router";
import LeftDrawer from "../features/left-drawer-component/LeftDrawer";
import "./App.css";

function App() {
  return (
    <>
      <LeftDrawer />
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
