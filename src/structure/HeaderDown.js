import React, { Component } from 'react';

export default class HeaderDown extends Component {
  render() {
    return (
        <div className="container pt-3 pb-3 header-down">
            <div className="row">
            <div className="col-4">
                <div className="nav-logo">
                <div>Miguel Santos</div>
                </div>
            </div>
            <div className="col-8">
                <div className="menu-bar d-flex float-right">
                <div><a href="#introduction">Introduction</a></div>
                <div><a href="#projects">Projects</a></div>
                <div><a href="#skills">Skills</a></div>
                <div><a href="#contacts">Contacts</a></div>
                </div>
            </div>
            </div>
        </div>
    );
  }
}
