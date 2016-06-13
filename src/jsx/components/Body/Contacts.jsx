import React from "react";

export default class Contacts extends React.Component {
  render() {
    return (
      <section id="contacts">
        <div name="contacts" class="container">
          <div class="center">
            <p class="section-title">Contacts</p>
            <div class="wrapper clearfix">
              <a href="mailto:shamatienko.yaroslav@gmail.com" class="contact-item email"><span class="contact-title"><i class="fa fa-at"></i></span>shamatienko.yaroslav@gmail.com</a>
            </div>
            <div class="wrapper clearfix">
              <p class="contact-item contact-title"><i class="fa fa-phone"></i></p>
              <p class="contact-item phone">+38 (097) 646-77-37</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
