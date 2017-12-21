import React, { Component } from 'react';
// import logo from '../logo.svg';
// import './MyHello.css';

class MyHello extends Component {
  article(phrase){
    return ['a', 'e', 'o', 'i', 'u', 'y', 'h'].includes(phrase[0].toLowerCase()) ? 'an' : 'a';
  }
  render() {
    return (
      <div className="MyHello test-me">
        <header className="MyHello-header">
          <img src={"https://picsum.photos/100/100?" + Math.random()} className="MyHello-logo" alt="logo" />
          <h2 className="MyHello-title">I'm {this.article(this.props.name)} {this.props.name} component!</h2>
        </header>
        <p className="MyHello-intro">
          To get started, edit <code>src/components/my-hello/MyHello.js</code> and save to reload. Define your own component type by clicking <button onClick={this.props.onClickHere}>here</button>.
        </p>
      </div>
    );
  }
}

export default MyHello;
