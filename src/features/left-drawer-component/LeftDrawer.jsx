import React from "react";
import logo from "../../assets/hippo.png";
import "./LeftDrawer.css";
import AccountSelect from "../../components/common/account-select/AccountSelect";

function LeftDrawer() {
  return (
    <>
      <div className="leftDrawerMainContainer">
        <div className="leftDrawerContent">
          <div className="logoContainer">
            <div className="logoIconContainer">
              <img
                src={logo}
                style={{ width: "40px", height: "40px" }}
                draggable="false"
              ></img>
              <p className="logoText">West World</p>
            </div>
          </div>
          <AccountSelect />
        </div>
      </div>
    </>
  );
}

export default LeftDrawer;
