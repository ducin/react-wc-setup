import { props, withComponent } from 'skatejs';
import withReact from '@skatejs/renderer-react';
import React, { Component } from 'react';

import ReactWithManyProps from './react-example';

class ReactExampleSkate extends withReact(withComponent()) {
  static get props() {
    return {
      name: props.string,
      kot: props.string,
      className: 'kot'
    };
  }
  render() {
    return (
      <ReactWithManyProps  name={this.props.name} kot={this.props.kot}/>
    );
  }
}

customElements.define('react-example-skate', ReactExampleSkate);
