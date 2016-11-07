import React, { Component } from 'react';
import Giphy from './Giphy';

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Giphy Viewer</h1>
        <Giphy />
      </div>
    );
  }
}
