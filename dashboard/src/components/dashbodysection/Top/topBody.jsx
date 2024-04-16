import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import ProfilePic from "./Profilepic.jpg";
import PromotionalVid from "./PromotionalVid.mp4"
import "./topBody.css"
import { FaLongArrowAltRight } from "react-icons/fa";

function topBody() {
  return (
    <div className="top-section">
      <div className="headerSection">
        <div className="title">
          <h1>Welcome to your Local Fruit Stand</h1>
          <p> Hi Mr. Muscles We MISS YOU!</p>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard"/>
          <FaMagnifyingGlass className="icons"/>

        </div>
        <div className="adminDiv flex">
          <a href="" className="iconLink">
          <IoChatbubbleEllipsesOutline className="icons" />
          </a>
          
          <a href="" className="iconLink">
          < GoBell className="icons" />
          </a>

          
          <a href="" className="iconLink">
            <img src={ProfilePic} alt="Profile picture" className="Profile-icon" />
          </a>
        </div>
      </div>
      <div className="cardSection">
        <div className="cardRight flex">
          <h1>Be part of the community! Sell and Buy!</h1>
          <p>We selling kidneys at the cheapest price</p>
          <div className="promoButton">
            <button className="promo-main-btn btnx">
              Learn more
            </button>
            <button className="promo-sub-btn btnx">
              View top Products
            </button>
          </div>
          <div className="videoDiv">
              <video src={PromotionalVid} autoPlay loop muted></video>
          </div>
        </div>
        <div className="cardLeft flex">
          <div className="Mystats">
            <h2>My stats</h2>
            <div className="stats">
              <div className="recent">
                <h3>Orders Today</h3>
                <p>10%</p>
              </div>
              <div className="months">
              <h3>Order this Month</h3>
              <p>21</p>
              </div>
            </div>
            <button className="goToOrders">go see my orders
             <FaLongArrowAltRight className="icons"/></button>
          </div>
        </div>
      </div>
    
    </div>
  )
};

export default topBody;
