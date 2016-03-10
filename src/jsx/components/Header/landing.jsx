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
              Якість - наш принцип
            </p>
            <p class="landing-subtitle">
              Ми команда кваліфікованих спеціалістів та професіоналів з розробки програмного забезпечення
            </p>
            <a class="button landing-button" onClick={this.scrollToProducts.bind(this)}>Більше</a>
          </div>
        </div>
      </div>
    );
  }
}
