import React, { Component } from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Icons from "./components/Icons";
import Apps from "./components/Apps";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appsOpen: false
    };

    this.closeApps = this.closeApps.bind(this);
    this.openApps = this.openApps.bind(this);
  }

  closeApps(e) {
    if (this.state.appsOpen === true) {
      this.setState(state => ({
        appsOpen: !state.appsOpen
      }));
    }
  }

  openApps(e) {
    if (this.state.appsOpen === false) {
      this.setState(state => ({
        appsOpen: !state.appsOpen
      }));
    }
  }

  render() {
    return (
      <div onClick={this.closeApps} className="body-container">
        <Header openApps={this.openApps} />
        <Apps closeApps={this.closeApps} appsOpen={this.state.appsOpen} />

        <div className="main-container">
          <Logo />
          <Search />
          <Icons />
        </div>
      </div>
    );
  }
}

export default App;
