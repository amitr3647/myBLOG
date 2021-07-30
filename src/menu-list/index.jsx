import React from "react";
import "./index.css";
export default function MenuList(props) {
  // function closeButton() {
  //   document.querySelector(".menuContainer").classList = "menuContainerClose";

  //   console.log("closed", props.toggle);
  // }

  return (
    // <div
    //   className={props.toggle ? "menuContainerNone" : "menuContainer"}
    //   style={{ display: props.toggle ? "none" : "block" }}
    // >

    <div className="menuContainer">
      <i
        className="fas fa-times closeIcon"
        onClick={props.closeMenuContainer}
      ></i>

      <ul className="menuContainerList">
        <li className="menuContainerListItem">
          <i className="fas fa-home" onClick={props.closeMenuContainer}></i>
          <a href="#" onClick={props.closeMenuContainer}>
            Home
          </a>
        </li>
        <li>
          <i
            className="fas fa-address-card"
            onClick={props.closeMenuContainer}
          ></i>
          <a href="#" onClick={props.closeMenuContainer}>
            About
          </a>
        </li>
        <li>
          <i className="fas fa-headset" onClick={props.closeMenuContainer}></i>
          <a href="#" onClick={props.closeMenuContainer}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
