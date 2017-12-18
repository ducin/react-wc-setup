<<<<<<< HEAD
// custom elements wrapper for ES5
// import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'

// all components below
import './components/my-hello/my-hello';
import './components/skate-hello/skate-hello';
=======
// custom elements wrapper for ES5 (only ES6+ works without it)
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'

// all components below
import './components/my-hello/my-hello';
// web components are used from HTML level

// this single react component is rendered without webcomponents
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/my-hello/Hello';

const $outside = document.getElementById("outside");
ReactDOM.render(<Hello />, $outside);
>>>>>>> d127abfac059017bd06961992c68e71081be2831
