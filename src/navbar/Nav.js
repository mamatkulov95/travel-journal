import React from "react";
import EarthLogo from "../images/globus.svg";
import './Nav.css';

export default function Nav() {
  return (
    <navbar className="navbar">
      <img className="nav-logo" src={EarthLogo}></img>
      <p className="nav-text">my travel journal.</p>
    </navbar>
  );
}
