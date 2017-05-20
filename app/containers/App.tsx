import React, { Component } from 'react';
import { Children } from 'react';

interface Props {
  children?: React.ReactNode
};

export default class App extends Component<Props, Object> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
