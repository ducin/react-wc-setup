import React from 'react';
import ReactDOM from 'react-dom';
import MyHello from './MyHello';

customElements.define('hello-wrapper', class HelloWrapper extends HTMLElement {
    constructor() {
        super();
        this.props = {};
        this.props.shadow = typeof this.getAttribute('shadow') === 'string';
    }

    static get observedAttributes() {
        return ['name'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (attr == 'name') {
            this.props.name = newValue;
        }
        this.render(this.props);
    }

    render(props){
        if (props.shadow) {
            if (!this.root){
                this.root = this.attachShadow({ mode: 'open' });
            }
            ReactDOM.render(<MyHello name={props.name} onClickHere={this.onClickHere} />, this.root);
        } else {
            ReactDOM.render(<MyHello name={props.name} onClickHere={this.onClickHere} />, this);
        }
    }

    connectedCallback() {
        this.render(this.props);
    }

    set onClickHere(cb){
        this._onClickHere = cb;
        this.render(this.props);
    }

    get onClickHere(){
        return this._onClickHere;
    }
});
