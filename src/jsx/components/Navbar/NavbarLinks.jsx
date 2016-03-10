import React from "react";

import NavbarLink from "./NavbarLink.jsx";

export default class NavbarLinks extends React.Component {
  render() {
    return (
      <div class="navbar-right">
        <NavbarLink name="Продукти" href="#products" />
        <NavbarLink name="Клієнти" href="#clients" />
        <NavbarLink name="Про нас" href="#about" />
        <NavbarLink name="Контакти" href="#contacts" />
      </div>
    )
  }
}
