import { r as registerInstance, h } from './core-680ca03b.js';

const AppHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("section", null, h("div", null, h("h5", null, "Hello my name is Richard McCartney"), h("h1", null, "Frontend developer, Web\u00A0designer"), h("p", null, "I\u2019m an passionate developer and designer currenting empowering the future of travel and aviation at ", h("a", { href: "https://ba.com" }, "British Airways"), ".")), h("div", null, h("img", { src: "/assets/code.svg", alt: "Image of a code editor", class: "hero-image" }), h("div", { class: "social" }, h("a", { href: "https://github.com/richmccartney", class: "github" }, h("img", { src: "/assets/github.svg", alt: "Github icon", width: "20" }), " Github"), h("a", { href: "https://dribbble.com/richmccartney", class: "dribbble" }, h("img", { src: "/assets/dribbble.png", alt: "Dribbble icon", width: "20" }), "Dribbble")))));
    }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: calc(5 * var(--base-spacing)) 0;\n}\n\n\@media screen and (min-width: 768px) {\n  :host {\n    height: calc(100vh - calc(5 * var(--base-spacing)));\n    padding: 0;\n  }\n}\n\nsection {\n  display: grid;\n  grid-template-columns: repeat(var(--columns), [col-start] 1fr);\n  grid-template-rows: auto;\n  grid-gap: var(--column-gutter);\n  grid-auto-flow: 1fr;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\nsection > * {\n  grid-column: span 12;\n}\n\n\@media screen and (min-width: 768px) {\n  section > * {\n    grid-column: span 6;\n  }\n\n  section > *:not(:first-child) {\n    grid-column: 8 / 5 span;\n  }\n}\n\n\@media screen and (min-width: 1280px) {\n  section > * {\n    grid-column: span 5;\n  }\n}\n\nh1 {\n  margin: 0;\n  font-family: var(--font-playfair-display);\n  font-weight: var(--font-bold);\n  font-size: calc(3 * var(--base-font-size));\n  line-height: calc(3.5 * var(--base-font-size));\n  color: var(--color-dark-blue);\n}\n\nh5 {\n  color: var(--color-light-blue);\n  font-weight: var(--font-semi-bold);\n  font-size: calc(0.75 * var(--base-font-size));\n  line-height: var(--base-font-size);\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  margin: 0;\n}\n\na:not([class]) {\n  color: var(--color-kashmir-blue);\n}\n\n.hero-image {\n  width: 100%;\n  max-width: 420px;\n  margin: 0 auto;\n  display: block;\n}\n\n.social {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.social a {\n  --color: var(--color-dark-grey);\n\n  color: var(--color);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  text-decoration: none;\n  font-weight: var(--font-bold);\n}\n\n.social img {\n  margin-right: calc(0.5 * var(--base-spacing));\n}\n\n.social a:not(:first-of-type) {\n  margin-left: calc(3 * var(--base-spacing));\n}\n\n.social .dribbble {\n  --color: #EA4C89;\n}"; }
};

export { AppHome as app_home };
