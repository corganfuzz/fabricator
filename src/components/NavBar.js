import React from 'react';
import {PropTypes as T } from 'prop-types';
import {SearchBox} from 'office-ui-fabric-react/lib/SearchBox';
import './_styles/navbar.css'

const NavBar = ({onchange, onsearch}) => (
  <div className="NavBar">
    <div className="logo ms-font-xl ms-fontColor-white">
      <strong>The Second App</strong>
    </div>
    <div className="searchbox">
      <SearchBox
        labelText="wanna write?"
        onchange={(newValue) => console.log('dude' + newValue)}
        onsearch={(newValue) => console.log('bruh' + newValue)}
      />
    </div>
  </div>
);


NavBar.propTypes = {
  onchange: T.func,
  onsearch: T.func,
}

NavBar.defaultProps = {
  onchange: (newValue) => console.log('dude' + newValue),
  onsearch: (newValue) => console.log('bruh' + newValue),
}

export default NavBar;
