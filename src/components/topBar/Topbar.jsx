import React from "react";

import "./topbar.css";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topItem">Home</li>
          <li className="topItem">About</li>
          <li className="topItem">Write</li>
          <li className="topItem">Contact</li>
          <li className="topItem">Logout </li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg"
          src="https://media.licdn.com/dms/image/D4D03AQFulZypIQXPrg/profile-displayphoto-shrink_200_200/0/1685688538965?e=1696464000&v=beta&t=ULf_WnBgB3CSK-l6o6giRrnAg9RBEtm9dqlSay1Hi34"
          alt=""
        />
      <i className="topSearch fas fa-search"></i>  
      </div>
    </div>
  );
}
