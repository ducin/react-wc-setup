import React, { Component } from 'react';

class ReactWithManyProps extends Component {
  render() {
    return (
      <div>
        name: {this.props.name}, kot: {this.props.kot}
      </div>
    );
  }
}

export default ReactWithManyProps;
