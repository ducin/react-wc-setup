import { props, withComponent } from 'skatejs';
import withReact from '@skatejs/renderer-react';
import React, { Component } from 'react';

class SkateHello extends withComponent() {
  static get props() {
    return {
      name: props.string
    };
  }
  render({ name }) {
    return `Hello, ${name}!`;
  }
}

class SkateHelloReactStyle extends withComponent(withReact()) {
  static get props() {
    return {
      name: props.string
    };
  }
  render({ name }) {
    return <span>Hello, {name}!</span>;
  }
}

customElements.define('skate-hello', SkateHello);
customElements.define('skate-hello-react-style', SkateHelloReactStyle);
