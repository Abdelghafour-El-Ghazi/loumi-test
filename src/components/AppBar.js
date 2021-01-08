import React from "react";
import logo from "../images/logo.png";
import "../AppBar.css";

const AppBar = () => {
  return (
    <div className='appbar'>
      <img src={logo} alt='appbar'></img>
      <h1 style={{ marginLeft: "15px" }}>Loumi Test</h1>
    </div>
  );
};

export default AppBar;
