import React, { Component } from 'react';
import '../styles/Header.scss';
import Menu from './components/Menu';

export default class HeaderUp extends Component {
  render() {
    return (
      <nav>
        <Menu menus={this.props?.menus} />  
      </nav>
    );
  }
}
