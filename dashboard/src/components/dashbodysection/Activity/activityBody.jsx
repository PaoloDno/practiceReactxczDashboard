import React from "react";
import './activity.css';
import { BsArrowRight } from "react-icons/bs";

import Fruit1 from "../Fruits/banana.jpg"
import Fruit2 from "../Fruits/pineapple.jpg";
import Fruit3 from "../Fruits/tangerine.jpg";
import Fruit4 from "../Fruits/watermelon.jpg"
import User1 from "./customers/cat.jpg"
import User2 from "./customers/cat1.jpg"
import User3 from "./customers/cat2.jpg"
import User4 from "./customers/dog.jpg"


function activityBody() {
  return (
    <div className="ActivitySection">
       <div className="heading flex">
        <h1>Activities</h1>
        <button>
          See All <BsArrowRight className="icons"/>
        </button>
        </div>
        <div className="notifContainer">
          <div className="entree">
              <img src={User4} alt="" className="userIconNotif"/>
            <div className="activitynotes">
              <h2>Buy Watermelons</h2>
              <p>1 hour ago</p>
            </div>
          </div>
          <div className="entree">
              <img src={User2} alt="" className="userIconNotif"/>
            <div className="activitynotes">
              <h2>Buy Banana</h2>
              <p>4 hour ago</p>
            </div>
          </div>
          <div className="entree">
              <img src={User4} alt="" className="userIconNotif"/>
            <div className="activitynotes">
              <h2>Buy banana</h2>
              <p>12 hour ago</p>
            </div>
          </div>
          <div className="entree">
              <img src={User4} alt="" className="userIconNotif"/>
            <div className="activitynotes">
              <h2>Buy Pineapple</h2>
              <p>1 day ago</p>
            </div>
          </div>
        </div>
      </div>
  )
};

export default activityBody;
