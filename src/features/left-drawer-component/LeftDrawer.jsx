import React, { useState } from "react";
import "./LeftDrawer.css";
import AccountSelect from "../../components/common/account-select/AccountSelect";
import LeftDrawerButton from "./LeftDrawerButton";
import { LEFT_DRAWER_BUTTONS } from "../../constants/leftDrawer";
import { logo, profilePicture } from "../../assets";

function LeftDrawer() {
  // Might be stored in the local storage
  const [chosenButton, setChosenButton] = useState(0);

  const handleChosenButton = (index) => {
    setChosenButton(index);
  };

  return (
    <>
      <div className="leftDrawerMainContainer">
        <div className="leftDrawerContent">
          <div className="logoContainer">
            <div className="logoIconContainer">
              <img src={logo} className="logoIcon" draggable="false"></img>
              <p className="logoText">Off Tone</p>
            </div>
          </div>
          <AccountSelect
            nickName="dr.ford"
            mail="dr.ford@farwest.com"
            profilePicture={profilePicture}
          />
          {LEFT_DRAWER_BUTTONS[0].map((item, index) => (
            <LeftDrawerButton
              key={index}
              item={item}
              onClick={() => handleChosenButton(item.id)}
              isActive={chosenButton === item.id}
            />
          ))}
          <div className="leftDrawerRuler"></div>
          {LEFT_DRAWER_BUTTONS[1].map((item, index) => (
            <LeftDrawerButton
              key={index}
              item={item}
              onClick={() => handleChosenButton(item.id)}
              isActive={chosenButton === item.id}
            />
          ))}
          <div className="leftDrawerRuler"></div>
          {LEFT_DRAWER_BUTTONS[2].map((item, index) => (
            <LeftDrawerButton
              key={index}
              item={item}
              onClick={() => handleChosenButton(item.id)}
              isActive={chosenButton === item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default LeftDrawer;
