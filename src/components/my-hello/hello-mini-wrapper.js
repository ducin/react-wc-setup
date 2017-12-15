import React from 'react';
import ReactDOM from 'react-dom';
import MyHello from './MyHello';

customElements.define('hello-mini-wrapper', class HelloMiniWrapper extends HTMLElement {
    connectedCallback() {
        if (typeof this.getAttribute('shadow') === 'string') {
            this.root = this.attachShadow({ mode: 'open' });
            ReactDOM.render(<MyHello name="mini shadowed React + WebComponents" />, this.root);
        } else {
            ReactDOM.render(<MyHello name="mini non-shadowed React + WebComponents" />, this);
        }
    }
});
