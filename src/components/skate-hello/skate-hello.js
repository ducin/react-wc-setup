// @jsx React.createElement

import { props, withComponent } from 'skatejs';
import withReact from '@skatejs/renderer-react';
import React from 'react';

class SkateHello extends withComponent(withReact()) {
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