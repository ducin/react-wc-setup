// this single react component is rendered without webcomponents
import React from 'react';
import ReactDOM from 'react-dom';
import MyHello from './components/my-hello/MyHello';

const state = {
    phrase: "pure React"
};

const $wrappers = document.querySelectorAll('hello-wrapper');
const $veggie = document.getElementById("veggieSelect");
$veggie.addEventListener('change', (e) => {
    let value = e.target.value;
    if (value){
        $wrappers.forEach(el => el.setAttribute('name', value));
    }
});

const $outside = document.getElementById("outside");
let render;

const dialog = () => {
    state.phrase = prompt('enter component type');
    render();
}

render = () => {
    ReactDOM.render(<MyHello name={state.phrase} onClickHere={dialog} />, $outside);
}
render();

// setTimeout(() => {
//     console.log('timeout');
//     ReactDOM.unmountComponentAtNode($outside);
// }, 3000)
