import React from "react";

function AppDrawer() {
  return (
    <a href="#">
      <svg className="app-drawer-icon">
        <use xlinkHref="/symbol-defs.svg#icon-grid" />
      </svg>
    </a>
  );
}

export default AppDrawer;
