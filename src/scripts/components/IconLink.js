import React from "react";

class IconLink extends React.Component {
  render() {
    return (
      <a
        href={`${this.props.link}`}
        className={`icon-link icon-link__${this.props.name}`}
      >
        <svg className="icon-link__icon">
          <use xlinkHref={`${icons}#icon-${this.props.name}`} />
        </svg>
        <p className="icon-link__title">{this.props.title}</p>
      </a>
    );
  }
}

const icons = "/svg/symbol-defs.svg";

export default IconLink;
