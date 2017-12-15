import React, { Component } from 'react';
// import logo from '../logo.svg';
// import './MyHello.css';

class MyHello extends Component {
  render() {
    return (
      <div className="MyHello test-me">
        <header className="MyHello-header">
          <img src={"https://picsum.photos/100/100?" + Math.random()} className="MyHello-logo" alt="logo" />
          <h2 className="MyHello-title">I'm a {this.props.name} component!</h2>
        </header>
        <p className="MyHello-intro">
          To get started, edit <code>src/components/my-hello/MyHello.js</code> and save to reload. Define your own component type by clicking <button onClick={this.props.onClickHere}>here</button>.
        </p>
      </div>
    );
  }
}

export default MyHello;
