import React from "react";

import Title from "./Navbar/title.jsx";
import MobileNavigation from "./Navbar/MobileNavigation.jsx";
import NavbarLinks from "./Navbar/NavbarLinks.jsx";

export default class Header extends React.Component {
  render() {
    return (
      <div class="navbar">
        <div class="container">
          <nav id="navbar">
            <div class="navbar-header">
              <MobileNavigation />
              <Title />
            </div>

            <NavbarLinks />
          </nav>
        </div>
      </div>
    )
  }
}
