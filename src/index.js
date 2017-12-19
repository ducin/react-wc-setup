// custom elements wrapper for ES5 (only ES6+ works without it)
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'
// custom elements polyfill
import '@webcomponents/custom-elements';

import './polyfills/node-list-foreach';

// all components below
import './components/my-hello/hello-wrapper';
import './components/my-hello/hello-mini-wrapper';
import './components/skate-hello/skate-hello';
// web components are used from HTML level

// this single react component is rendered without webcomponents
import React from 'react';
import ReactDOM from 'react-dom';
import MyHello from './components/my-hello/MyHello';

const $outside = document.getElementById("outside");
ReactDOM.render(<MyHello name="pure React" />, $outside);

const $wrappers = document.querySelectorAll('hello-wrapper');
const $car = document.getElementById("carSelect");
$car.addEventListener('change', (e) => {
    let value = e.target.value;
    if (value){
        $wrappers.forEach(el => el.setAttribute('name', value));
    }
});
