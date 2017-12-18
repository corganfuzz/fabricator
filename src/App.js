import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import MenuSideBar from './components/MenuSideBar';
import NavBar from './components/NavBar';

import { initializeIcons } from '@uifabric/icons';

initializeIcons();

class App extends Component {
  render() {
    return (
      <Fabric>
        <div className="App">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div className="header" >
            <NavBar />
          </div>
          <div className="body">
            <div className="content"></div>
            <div className="sidebar">
              <MenuSideBar />
            </div>
          </div>
          <div className="footer" />
        </div>
      </Fabric>
    );
  }
}

export default App;
