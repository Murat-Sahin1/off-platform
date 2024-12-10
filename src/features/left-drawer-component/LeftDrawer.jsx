import React, { useState } from "react";
import "./LeftDrawer.css";
import AccountSelect from "../../components/common/account-select/AccountSelect";
import LeftDrawerButton from "./LeftDrawerButton";
import { LEFT_DRAWER_BUTTONS } from "../../constants/leftDrawer";
import { logo, profilePicture } from "../../assets";
import { NavLink } from "react-router";

function LeftDrawer() {
  return (
    <>
      <div className="leftDrawerMainContainer">
        <div className="leftDrawerContent">
          <NavLink to="/" className="logoContainer">
            <div className="logoIconContainer">
              <img src={logo} className="logoIcon" draggable="false"></img>
              <p className="logoText">Off Tone</p>
            </div>
          </NavLink>
          <AccountSelect
            nickName="dr.ford"
            mail="dr.ford@farwest.com"
            profilePicture={profilePicture}
          />
          {LEFT_DRAWER_BUTTONS[0].map((item, index) => (
            <LeftDrawerButton key={index} item={item} />
          ))}
          <div className="leftDrawerRuler"></div>
          {LEFT_DRAWER_BUTTONS[1].map((item, index) => (
            <LeftDrawerButton key={index} item={item} />
          ))}
          <div className="leftDrawerRuler"></div>
          {LEFT_DRAWER_BUTTONS[2].map((item, index) => (
            <LeftDrawerButton key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LeftDrawer;
