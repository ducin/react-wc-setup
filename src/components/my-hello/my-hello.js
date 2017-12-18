import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

customElements.define('my-hello', class MyHello extends HTMLElement {
    connectedCallback() {
        // - with Shadow DOM
        this.root = this.attachShadow({ mode: 'open' });
        ReactDOM.render(<Hello />, this.root);
        // - without Shadow DOM
        // ReactDOM.render(<MyHello />, this);
    }
});
