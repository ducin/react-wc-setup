// custom elements wrapper for ES5 (only ES6+ works without it)
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'

// all components below
import './components/my-hello/my-hello';
// web components are used from HTML level
import './components/skate-hello/skate-hello';
// this single react component is rendered without webcomponents
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/my-hello/Hello';

const $outside = document.getElementById("outside");
ReactDOM.render(<Hello />, $outside);
