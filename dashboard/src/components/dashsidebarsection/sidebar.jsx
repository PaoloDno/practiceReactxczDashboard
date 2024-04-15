import React from "react"
import "./sidebar.css";
import { GoStopwatch } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import { BsCompass } from "react-icons/bs";
import { PiTrophy, PiTrendUp } from "react-icons/pi";
import { FaChartPie } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { CiCreditCard2 } from "react-icons/ci";
import { FaRegCircleQuestion } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <h2>Frootus</h2>
      </div>
        <div className="menuDiv">
          <h3 className="divTitle">
            Quick Menu
          </h3>
        
        <ul className="menuLists grid">
          <li className="list-item">
            <a href="" className="menulink flex">
            <GoStopwatch className="icons"/>
            <span className="smalltext"> Dashboard </span>
            </a>
          </li>
          <li className="list-item">
            <a href="" className="menulink flex">
            <GiShoppingCart className="icons"/>
            <span className="smalltext"> Orders </span>
            </a>
          </li>
          <li className="list-item">
            <a href="" className="menulink flex">
            <BsCompass className="icons"/>
            <span className="smalltext"> Navigate</span>
            </a>
          </li>
          <li className="list-item">
            <a href="" className="menulink flex">
            <PiTrophy className="icons"/>
            <span className="smalltext"> Product </span>
            </a>
          </li>
        </ul>
        </div>
        
        <div className="settingDiv">
          <h3 className="divTitle">
            Settings
          </h3>
        
        <ul className="settingLists grid">
          <li className="list-item">
            <a href="" className="menulink flex">
            <FaChartPie className="icons"/>
            <span className="smalltext"> Graph </span>
            </a>
          </li>
          <li className="list-item">
            <a href="" className="menulink flex">
            <PiTrendUp className="icons"/>
            <span className="smalltext"> Trends </span>
            </a>
          </li>
          <li className="list-item">
            <a href="" className="menulink flex">
            <LuPhone className="icons"/>
            <span className="smalltext"> Contact </span>
            </a>
          </li>
          <li className="list-item">
            <a href="" className="menulink flex">
            <CiCreditCard2 className="icons"/>
            <span className="smalltext"> Billing </span>
            </a>
          </li>
        </ul>
        </div>
        <div className="sideBarCard">
        < FaRegCircleQuestion className="icons"/>
        <div className="sideBarCardContent">

        <p>Having rouble using the App contact us at our Help Center</p>
        <button className="btn">Get Help</button>
        </div>
        </div>
    </div>
  )
};

export default Sidebar;
