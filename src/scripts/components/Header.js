import React from "react";
import AppDrawer from "./AppDrawer";
import UserIcon from "./UserIcon";

function Header() {
  return (
    <nav className="nav">
      <div className="nav--top-left">
        <div className="nav-link--box">
          <a href="#" className="nav-link--link">
            About
          </a>
        </div>
        <div className="nav-link--box">
          <a href="#" className="nav-link--link">
            Store
          </a>
        </div>
      </div>
      <div className="nav--top-right">
        <div className="nav-link--box">
          <a href="#" className="nav-link--link">
            Gmail
          </a>
        </div>
        <div className="nav-link--box">
          <a href="#" className="nav-link--link">
            Images
          </a>
        </div>
        <div className="nav-link--box">
          <AppDrawer />
        </div>
        <div className="nav-link--box">
          <UserIcon />
        </div>
      </div>
    </nav>
  );
}

export default Header;
