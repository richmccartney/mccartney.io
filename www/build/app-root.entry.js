import { r as registerInstance, h } from './core-680ca03b.js';

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("header", null, h("stencil-route-link", { url: '/' }, h("img", { src: "/assets/logo.svg", alt: "RM Logo" })), h("stencil-route-link", { url: '/', class: "contact" }, "Contact me")), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: '/', component: 'app-home', exact: true }), h("stencil-route", { url: '/profile/:name', component: 'app-profile' }))))));
    }
    static get style() { return "header {\n  color: var(--color-dark-blue);\n  height: calc(5 * var(--base-spacing));\n  padding: 0 var(--column-margin);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--color-off-white);\n}\n\nheader img {\n  display: block;\n}\n\n.contact a {\n  font-size: calc(0.75 * var(--base-font-size));\n  color: var(--color-dark-blue);\n  border: 1.5px solid var(--color-grey);\n  border-radius: 28.5px;\n  text-decoration: none;\n  text-transform: uppercase;\n  padding: calc(0.75 * var(--base-font-size)) calc(2 * var(--base-spacing));\n  letter-spacing: 0.98px;\n}\n\nmain {\n  padding: 0 var(--column-margin);\n  margin: 0 auto;\n\n  width: 100%;  \n  max-width: var(--max-width);\n}"; }
};

export { AppRoot as app_root };
