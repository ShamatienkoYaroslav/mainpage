import React from "react";

import Products from "./Body/Products.jsx";
import Clients from "./Body/Clients.jsx";
import About from "./Body/About.jsx";
import Contacts from "./Body/Contacts.jsx";

export default class Body extends React.Component {
  render() {
    return (
      <div name="body">
        <Products />
        <Clients />
        <About />
        <Contacts />
      </div>
    );
  }
}
