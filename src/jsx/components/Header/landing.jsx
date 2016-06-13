import React from "react";
import Scroll from "scroll-to-element";

export default class Landing extends React.Component {
  scrollToProducts() {
    Scroll('#products', {
    	offset: 0,
    	ease: 'inQuad',
    	duration: 800
    });
  }

  render() {
    return (
      <div class='landing'>
        <div class="container">
          <div class="landing-items">
            <p class="landing-title">
              <span id="landing-title-iot">Internet of Things</span><br/> for production facilities
            </p>
            <p class="landing-subtitle">
              Hand by hand with modern technologies
            </p>
            <a class="button landing-button" onClick={this.scrollToProducts.bind(this)}>Show more</a>
          </div>
        </div>
      </div>
    );
  }
}
