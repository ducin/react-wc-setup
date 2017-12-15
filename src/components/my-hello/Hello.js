import React, { Component } from 'react';
// import logo from './logo.svg';
// import './MyHello.css';

class Hello extends Component {
  render() {
    return (
      <div className="MyHello">
        <header className="MyHello-header">
          <img src={"https://picsum.photos/100/100?" + Math.random()} className="MyHello-logo" alt="logo" />
          <h1 className="MyHello-title">Welcome to React</h1>
        </header>
        <p className="MyHello-intro">
          To get started, edit <code>src/components/my-hello/MyHello.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Hello;
