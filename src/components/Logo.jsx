import React from "react";
import logo from "../assets/logo.png";

function Logo({ width = "100px" }) {
  return <img className="rounded-sm" width={width} src={logo} alt="logo" />;
}

export default Logo;
