import React, {Component} from 'react';
import './Header.css';


class Header extends Component {
    // render is a required function of a component
    render() {
      return (
          <div id="header" className="hoc-header">
            <div id="logo">
              HighOnCoding
            </div>
            <div id="menuItem1">
              Home
            </div>
            <div id="menuItem2">
              Categories
            </div>
          </div>
      )
    }
}

export default Header;


/*
From JS101 repo...

// create header element
let header = document.createElement("div");
header.id = "header";
header.className = "hoc-header";
let logo = document.createElement("div");
logo.id = "logo";
logo.innerHTML = "HighOnCoding";
let menuItem1 = document.createElement("div");
menuItem1.id = "menuItem1";
menuItem1.innerHTML = "Home";
let menuItem2 = document.createElement("div");
menuItem2.id = "menuItem2";
menuItem2.innerHTML = "Categories";
header.appendChild(logo);
header.appendChild(menuItem1);
header.appendChild(menuItem2);

*/
