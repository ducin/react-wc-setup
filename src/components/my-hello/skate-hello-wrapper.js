import { props, withComponent } from 'skatejs';
import withReact from '@skatejs/renderer-react';
import React, { Component } from 'react';
import MyHello from './MyHello';

class SkateHelloWrapper extends withComponent(withReact()) {
  static get props() {
    return {
      name: props.string,
      onClickHere: props.function
    };
  }
  render() {
    return (
      <MyHello name={this.props.name} onClickHere={this.props.onClickHere}/>
    );
  }
}

customElements.define('skate-hello-wrapper', SkateHelloWrapper);
