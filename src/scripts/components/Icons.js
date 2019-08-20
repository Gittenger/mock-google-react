import React from "react";
import IconLink from "./IconLink";

function Icons() {
  return (
    <div className="icons-box">
      <div className="icons-box--content">
        <div className="icons__icon-box">
          <IconLink
            link="https://www.github.com/gittenger"
            name="github"
            title="Gittenger"
          />
        </div>
        <div className="icons__icon-box">
          <IconLink
            link="https://www.youtube.com"
            name="youtube"
            title="YouTube"
          />
        </div>
        <div className="icons__icon-box">
          <IconLink link="https://reactjs.org/" name="react" title="React" />
        </div>
        <div className="icons__icon-box">
          <IconLink
            link="https://codepen.io/gittenger"
            name="codepen"
            title="CodePen"
          />
        </div>
        <div className="icons__icon-box">
          <IconLink
            link="https://www.linkedin.com/in/john-pittenger/"
            name="linkedin"
            title="LinkedIn"
          />
        </div>
        <div className="icons__icon-box">
          <IconLink
            link="https://icomoon.io/app/"
            name="icomoon"
            title="IcoMoon"
          />
        </div>
        <div className="icons__icon-box">
          <IconLink
            link="https://www.google.com/drive/"
            name="drive"
            title="Drive"
          />
        </div>
        <div className="icons__icon-box">
          <IconLink link="https://www.npmjs.com/" name="npm" title="npm" />
        </div>
        <div className="icons__icon-box">
          <IconLink link="https://sass-lang.com/" name="sass" title="Sass" />
        </div>
        <div className="icons__icon-box">
          <IconLink
            link="https://www.google.com/gmail/"
            name="gmail"
            title="Gmail"
          />
        </div>
      </div>
    </div>
  );
}

export default Icons;
