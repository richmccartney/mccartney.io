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
        <div>
          <h5>Hello my name is Richard McCartney</h5>
          <h1>Frontend developer, Web&nbsp;designer</h1>
          <p>I’m an passionate developer and product designer currenting empowering the future of travel and aviation at <a href="https://ba.com">British Airways</a>.</p>
        </div>
        <div>
          <img src="/assets/code.svg" alt="Image of a code editor" class="hero-image" />
          <div class="social">
            <a href="https://github.com/richmccartney" class="github"><img src="/assets/github.svg" alt="Github icon" width="20" /> Github</a>
            <a href="https://dribbble.com/richmccartney" class="dribbble"><img src="/assets/dribbble.png" alt="Dribbble icon" width="20" />Dribbble</a>
          </div>
        </div>
      </section>
    );
  }
}
