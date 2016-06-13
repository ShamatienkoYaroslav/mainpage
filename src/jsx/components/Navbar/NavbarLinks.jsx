import React from "react";

import NavbarLink from "./NavbarLink.jsx";

export default class NavbarLinks extends React.Component {
  render() {
    return (
      <div class="navbar-right">
        <NavbarLink name="Products" href="#products" />
        <NavbarLink name="Clients" href="#clients" />
        <NavbarLink name="About us" href="#about" />
        <NavbarLink name="Contacts" href="#contacts" />
      </div>
    )
  }
}
