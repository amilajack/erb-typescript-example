import React, { Component } from 'react';
import { Children } from 'react';

interface Props {
  children?: React.ReactChildren,
  component: React.ComponentClass<Object>,
  path: string
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
