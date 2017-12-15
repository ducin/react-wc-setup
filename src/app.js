// this single react component is rendered without webcomponents
import React from 'react';
import ReactDOM from 'react-dom';
import MyHello from './components/my-hello/MyHello';

const state = {
    phrase: "pure React"
};

let render;

const $outside = document.getElementById("outside");
const $wrappers = document.querySelectorAll('hello-wrapper');
const $veggie = document.getElementById("veggieSelect");
$veggie.addEventListener('change', (e) => {
    state.phrase = e.target.value;
    render();
});

const dialog = () => {
    state.phrase = prompt('enter component type');
    render();
}

$wrappers.forEach(w => w.onClickHere = dialog);

const renderReact = () => {
    ReactDOM.render(<MyHello name={state.phrase} onClickHere={dialog} />, $outside);
}
const renderWC = () => {
    $wrappers.forEach(el => el.setAttribute('name', state.phrase));
}
render = () => {
    renderReact();
    renderWC();
}
render();

// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode($outside);
// }, 3000);
