import React from "react";
import "./AccountSelect.css";
import profilePicture from "../../../assets/valve.jpg";
import downArrow from "../../../assets/down-arrow.png";

function AccountSelect() {
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
          <p className="accountName">Expect the unexpected</p>
          <p className="accountMail">dr.ford@farwest.com</p>
        </div>
        <div className="toggleIconContainer">
          <img src={downArrow} className="downArrow" draggable="false"></img>
        </div>
      </div>
    </div>
  );
}

export default AccountSelect;
