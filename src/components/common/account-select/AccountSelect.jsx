import React from "react";
import "./AccountSelect.css";
import downArrow from "../../../assets/down-arrow.png";

function AccountSelect({ nickName, mail, profilePicture }) {
  return (
    <div className="accountSelectContainer">
      <div className="accountIconContainer">
        <img
          src={profilePicture}
          className="profilePicture"
          draggable="false"
        ></img>
      </div>
      <div className="accountContentWrapper">
        <div className="accountTextContainer">
          {/* These overflow extensively when given big inputs */}
          <p className="accountName">{nickName}</p>
          <p className="accountMail">{mail}</p>
        </div>
        <div className="toggleIconContainer">
          <img src={downArrow} className="downArrow" draggable="false"></img>
        </div>
      </div>
    </div>
  );
}

export default AccountSelect;
