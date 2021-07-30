import React, { useState } from "react";
import "../header/index.css";
import MenuList from "../menu-list";
export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleFunction=function () {
    setToggle(!toggle);
  }

  const closeMenuContainer=function(){
    setToggle(!toggle);
    console.log(toggle,'closebutton');
  }

  return (
    <>
      <div className="navBar">
        <i onClick={toggleFunction} className="fas fa-bars hamburger"></i>
        <ul className="navBarList">
          <li className="navBarListItem">
            <a href="#">About</a>
          </li>
          <li className="navBarListItem">
            <a href="#">Home</a>
          </li>
          <li className="navBarListItem">
            <a href="#">Contact</a>
          </li>
          <li className="navBarListItem">
            <a href="#">Resources</a>
          </li>
          <li className="navBarListItem">
            <a href="#">Partners</a>
          </li>
        </ul>
      </div>
      {console.log(toggle, "toggle")}
      {toggle && <MenuList toggle={toggle} closeMenuContainer={closeMenuContainer}/>}
    </>
  );
}
