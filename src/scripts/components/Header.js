import React from "react";
import AppDrawer from "./AppDrawer";
import UserIcon from "./UserIcon";

function Header() {
  return (
    <nav className="nav">
      <div className="nav--top-left">
        <div className="nav-link--box">
          <a
            href="https://about.google/intl/en/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header"
            className="nav-link--link"
          >
            About
          </a>
        </div>
        <div className="nav-link--box">
          <a
            href="https://store.google.com/?utm_source=hp_header&utm_medium=google_oo&utm_campaign=GS100042"
            className="nav-link--link"
          >
            Store
          </a>
        </div>
      </div>
      <div className="nav--top-right">
        <div className="nav-link--box">
          <a href="https://www.google.com/gmail/" className="nav-link--link">
            Gmail
          </a>
        </div>
        <div className="nav-link--box">
          <a
            href="https://www.google.com/imghp?hl=en"
            className="nav-link--link"
          >
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
