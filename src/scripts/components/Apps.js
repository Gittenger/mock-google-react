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
        className={`apps-popup ${
          isOpen ? "apps-popup--visible" : "apps-popup--hidden"
        }`}
      >
        <div className="apps-popup__content">
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
          <div className="apps-popup--link-box">
            <IconLink />
          </div>
        </div>
      </div>
    );
  }
}

export default Apps;
