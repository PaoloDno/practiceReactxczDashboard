import React from "react";
import "./dashBody.css";
import topBodyDashboard from "./Top/topBody";
import activityBodyDashboard from "./Activity/activityBody";
import listBodyDashboard from "./Listing/listBody";

const dashBody = () => {
  return (
    <div className="maincontent">
      <topBodyDashboard />
      
      <div className="bootom flex">
        <listBodyDashboard />
        <activityBodyDashboard />
      </div>
    
    </div>
  )
};

export default dashBody;
