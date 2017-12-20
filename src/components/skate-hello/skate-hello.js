import { props, withComponent } from 'skatejs';
import withReact from '@skatejs/renderer-react';
import React, { Component } from 'react';
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

class ReactWithManyProps extends Component {
  render() {
    return (
      <div>
        name: {this.props.name}, kot: {this.props.kot} 
      </div>
    );
  }

}


class ReactAsSkateHello extends withReact(withComponent()) {
  static get props() {
    return {
      name: props.string,
      kot: props.string
    };
  }
  render( ) {
    return (
        <ReactWithManyProps name={this.props.name} kot={this.props.kot}/>
    );
  }
}

customElements.define('skate-hello', SkateHello);
customElements.define('skate-hello-react', SkateHelloReact);
customElements.define('react-as-skate-hello', ReactAsSkateHello);