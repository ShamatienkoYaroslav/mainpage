import React from "react";

import Navbar from "./navbar.jsx";
import Header from "./header.jsx";
import Body   from "./body.jsx";
import Footer from "./footer.jsx";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}
