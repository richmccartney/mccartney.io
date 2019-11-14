import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <section>
        <h5>Hello my name is Richard McCartney</h5>
        <h1>Frontend developer, Web designer</h1>
        <p>I’m an passionate developer and product designer currenting empowering the future of travel and aviation at <a href="https://ba.com">British Airways</a>.</p>
      </section>
    );
  }
}
