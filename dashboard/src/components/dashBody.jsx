import React from "react";
import "./dashBody.css";
import TopBody from "./dashbodysection/Top/topBody.jsx";
import ActivityBody from "./dashbodysection/Activity/activityBody.jsx";
import ListBody from "./dashbodysection/Listing/listBody.jsx";

function DashBody() {
  return (
    <div className="main-content">
      <TopBody />
      
      <div className="bottom-content">
        <ListBody />
        <ActivityBody />
      </div>
    </div>
  );
}

export default DashBody;