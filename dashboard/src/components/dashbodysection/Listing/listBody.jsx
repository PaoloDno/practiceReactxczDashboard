import React from "react"
import { BsArrowRight } from "react-icons/bs";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import Fruit1 from "../Fruits/banana.jpg";
import Fruit2 from "../Fruits/pineapple.jpg";
import Fruit3 from "../Fruits/tangerine.jpg";
import Fruit4 from "../Fruits/watermelon.jpg"
import User1 from "./customers/cat.jpg"
import User2 from "./customers/cat1.jpg"
import User3 from "./customers/cat2.jpg"
import User4 from "./customers/dog.jpg"
import User5 from "./customers/dog2.jpg"
import "./listBody.css"


function listBody() {
  return (
    <div className="listSection">
      <div className="heading flex">
        <h1>My Listing</h1>
        <button>
          See All <BsArrowRight className="icons"/>
        </button>
      </div>
      <div className="sectionContainer">
        <div className="singleItem">
          <IoMdHeart className="icons"/>
          <img src={Fruit1} className="imgItem"/>
          <h3>Banana</h3>
        </div>
        <div className="singleItem">
          <IoMdHeart className="icons"/>
          <img src={Fruit2} className="imgItem"/>
          <h3>PineApple</h3>
        </div>
        <div className="singleItem">
          <IoMdHeart className="icons"/>
          <img src={Fruit3} className="imgItem"/>
          <h3>Tangerine</h3>
        </div>
        <div className="singleItem">
          <IoMdHeartEmpty className="icons"/>
          <img src={Fruit4} className="imgItem"/>
          <h3>Watermelon</h3>
        </div>
      </div>
      <div className="bottomContainer grid">
        <div className="buySection">
          <div className="heading">
            <h1>Your Top Buyers</h1>
            <button>
              See All <BsArrowRight className="icons"/>
            </button> 
          </div>
          <div className="containerBuyers">
          <div className="singleUser">
              <img src={User2} alt=""  className="userIcon"/>
              <div className="userProfile">
                <h3>Mr White</h3>
                <p>Mutual</p>
              </div>
            </div>
            <div className="singleUser">
              <img src={User4} alt=""  className="userIcon"/>
              <div className="userProfile">
                <h3>Mr Pebble</h3>
                <p>Mutual</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sellSection">
        <div className="heading">
          <h1>My Listing</h1>
          <button>
            Your Top Stores<BsArrowRight className="icons"/>
          </button>
        
        </div>
        <div className="containerSellers">
          <div className="singleUser">
            <img src={User1} alt=""  className="userIcon"/>
            <div className="userProfile">
              <h3>Mr Chi</h3>
              <p>Mutual</p>
            </div>
          </div>
          <div className="singleUser">
            <img src={User2} alt=""  className="userIcon"/>
            <div className="userProfile">
              <h3>Mr Whiskers</h3>
              <p>Mutual</p>
            </div>
          </div>
          <div className="singleUser">
            <img src={User3} alt=""  className="userIcon"/>
            <div className="userProfile">
              <h3>Mrs Maine</h3>
              <p>Mutual</p>
            </div>
          </div>
          <div className="singleUser">
            <img src={User4} alt=""  className="userIcon"/>
            <div className="userProfile">
              <h3>Mr Pebbles</h3>
              <p>Mutual</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default listBody;
