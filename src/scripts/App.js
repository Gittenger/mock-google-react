import React from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Icons from "./components/Icons";

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Logo />
        <Search />
        <Icons />
      </div>
    </div>
  );
}

export default App;
