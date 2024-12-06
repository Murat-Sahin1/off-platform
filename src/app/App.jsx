import { useState } from "react";
import "./App.css";
import LeftDrawer from "../features/left-drawer-component/LeftDrawer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <LeftDrawer></LeftDrawer>
    </div>
  );
}

export default App;
