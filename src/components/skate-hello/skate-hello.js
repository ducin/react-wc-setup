import { props, withComponent } from 'skatejs';
import withReact from '@skatejs/renderer-react';
import React from 'react';
import Hello from '../my-hello/Hello';



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

class SkateHelloReact extends withComponent(withReact()) {
  static get props() {
    return {
      name: props.string
    };
  }
  render({ name }) {
    return <span>Hello, {name}!</span>;
  }
}

class ReactAsSkateHello extends withReact(withComponent()) {
  render( ) {
    return (
      <div>
        <span>elo mordo</span>
        <Hello />
      </div>
    );
  }
}

customElements.define('skate-hello', SkateHello);
customElements.define('skate-hello-react', SkateHelloReact);
customElements.define('react-as-skate-hello', ReactAsSkateHello);