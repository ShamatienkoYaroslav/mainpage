import React from "react";
import Scroll from "scroll-to-element";

export default class NavbarLink extends React.Component {
  scrollToDist(e) {
    e.preventDefault();
    Scroll(this.props.href, {
      offset: 0,
      ease: 'inQuad',
      duration: 800
    });
  }

  render() {
    const _href = this.props.href;
    const _name = this.props.name;

    return (
      <a class="navbar-link" href={_href} onClick={this.scrollToDist.bind(this)}>
        {_name}
      </a>
    )
  }
}
