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
            <IconLink
              link="https://account.google.com/"
              name="user"
              title="Account"
            />
          </div>
          <div className="apps-popup--link-box">
            <IconLink
              link="https://www.google.com"
              name="google"
              title="Search"
            />
          </div>
          <div className="apps-popup--link-box">
            <IconLink
              link="https://www.google.com/maps"
              name="maps"
              title="Maps"
            />
          </div>
          <div className="apps-popup--link-box">
            <IconLink
              link="https://www.youtube.com"
              name="youtube"
              title="YouTube"
            />
          </div>
          <div className="apps-popup--link-box">
            <IconLink link="https://play.google.com" name="play" title="Play" />
          </div>
          <div className="apps-popup--link-box">
            <IconLink
              link="https://news.google.com/"
              name="news"
              title="News"
            />
          </div>
          <div className="apps-popup--link-box">
            <IconLink
              link="https://www.google.com/gmail/"
              name="gmail"
              title="Gmail"
            />
          </div>
          <div className="apps-popup--link-box">
            <IconLink
              link="https://contacts.google.com/"
              name="contacts"
              title="Contacts"
            />
          </div>
          <div className="apps-popup--link-box">
            <IconLink
              link="https://www.google.com/drive/"
              name="drive"
              title="Drive"
            />
          </div>
          <div className="apps-popup--link-box">
            <IconLink
              link="https://www.google.com/calendar"
              name="calendar"
              title="Calendar"
            />
          </div>
          <div className="apps-popup--link-box">
            <IconLink
              link="https://translate.google.com/"
              name="google-translate"
              title="Translate"
            />
          </div>
          <div className="apps-popup--link-box">
            <IconLink
              link="https://play.google.com/music"
              name="play-music"
              title="Play Music"
            />
          </div>
          <div className="apps-popup--link-box">
            <IconLink
              link="https://aboutme.google.com/u/0/?referer=gplus"
              name="google-plus"
              title="Google+"
            />
          </div>
          <div className="apps-popup--link-box">
            <IconLink
              link="https://www.google.com/chrome/"
              name="google-chrome"
              title="Chrome"
            />
          </div>
          <div className="apps-popup--link-box">
            <IconLink
              link="https://code.google.com/"
              name="code"
              title="Code"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Apps;
