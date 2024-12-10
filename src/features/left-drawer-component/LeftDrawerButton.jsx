import React, { useState } from "react";
import "./LeftDrawerButton.css";
import { NavLink } from "react-router";

function LeftDrawerButton({ item }) {
  const [isLeftDrawerButtonActive, setIsLeftDrawerButtonActive] =
    useState(false);

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) => {
        setIsLeftDrawerButtonActive(isActive);
        return isLeftDrawerButtonActive
          ? "activeLeftDrawerButtonContainer"
          : "leftDrawerButtonContainer";
      }}
      draggable="false"
    >
      <div className="leftDrawerLogoContainer">
        <img
          src={item.icon}
          className={
            isLeftDrawerButtonActive
              ? "leftDrawerActiveButtonIcon"
              : "leftDrawerButtonIcon"
          }
          draggable="false"
        ></img>
      </div>
      <div
        className={
          isLeftDrawerButtonActive
            ? "buttonActiveTextContainer"
            : "buttonTextContainer"
        }
      >
        <p>{item.label}</p>
      </div>
    </NavLink>
  );
}

export default LeftDrawerButton;
