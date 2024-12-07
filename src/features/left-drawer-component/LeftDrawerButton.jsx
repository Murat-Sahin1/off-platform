import React, { useState } from "react";
import "./LeftDrawerButton.css";

function LeftDrawerButton({ onClick, item, isActive }) {
  return (
    <div
      className={
        isActive
          ? "activeLeftDrawerButtonContainer"
          : "leftDrawerButtonContainer"
      }
      onClick={onClick}
    >
      <div className="leftDrawerLogoContainer">
        <img
          src={item.icon}
          className={
            isActive ? "leftDrawerActiveButtonIcon" : "leftDrawerButtonIcon"
          }
          draggable="false"
        ></img>
      </div>
      <div
        className={
          isActive ? "buttonActiveTextContainer" : "buttonTextContainer"
        }
      >
        <p>{item.label}</p>
      </div>
    </div>
  );
}

export default LeftDrawerButton;
