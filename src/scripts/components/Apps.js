import React, { Component } from "react";
import IconLink from "./IconLink";

class Apps extends React.Component {
  //stop propagation of click event for click-outside closing functionality
  stopProp(e) {
    e.stopPropagation();
  }

  render() {
    const isOpen = this.props.appsOpen;

    return (
      <div
        onClick={this.stopProp}
        className={`apps-popup ${isOpen ? "apps-popup--visible" : ""}`}
      >
        <div className="apps-popup__content">
          <div className="apps-popup--link-box">
            <IconLink name="user" title="Account" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="google" title="Search" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="maps" title="Maps" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="youtube" title="YouTube" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="play" title="Play" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="news" title="News" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="gmail" title="Gmail" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="contacts" title="Contacts" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="drive" title="Drive" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="calendar" title="Calendar" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="translate" title="Translate" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="playMusic" title="Play Music" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="googlePlus" title="Google+" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="googleChrome" title="Chrome" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink name="code" title="Code" />
          </div>
        </div>
      </div>
    );
  }
}

export default Apps;
