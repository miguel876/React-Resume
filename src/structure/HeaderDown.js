import React, { Component } from 'react';
import '../styles/Header.scss';

export default class HeaderDown extends Component {

  menuLinkAnimationEnter = (target) => {
    const menu = target.target;

    menu.classList.remove("linkSlideClose")
    menu.classList.add("linkSlideOpen")
  }

  menuLinkAnimationLeave = (target) => {
    const menu = target.target;

    menu.classList.add("linkSlideClose")
    menu.classList.remove("linkSlideOpen")

    setTimeout(() => {
      menu.classList.remove("linkSlideClose")
    }, 300)
  }
  
  render() {
    return (
      <nav className="header-down">
        <div className="container pt-3 pb-3">
            <div className="row">
            <div className="col-4">
                <div className="nav-logo">
                <div>Miguel Santos</div>
                </div>
            </div>
            <div className="col-8">
                <div className="menu-bar d-flex float-right">
                <div><a href="#introduction" onMouseEnter={(evt) => this.menuLinkAnimationEnter(evt)} onMouseLeave={(evt) => this.menuLinkAnimationLeave(evt)}>Introduction</a></div>
                  <div><a href="#projects" onMouseEnter={(evt) => this.menuLinkAnimationEnter(evt)} onMouseLeave={(evt) => this.menuLinkAnimationLeave(evt)}>Projects</a></div>
                  <div><a href="#skills" onMouseEnter={(evt) => this.menuLinkAnimationEnter(evt)} onMouseLeave={(evt) => this.menuLinkAnimationLeave(evt)}>Skills</a></div>
                  <div><a href="#contacts" onMouseEnter={(evt) => this.menuLinkAnimationEnter(evt)} onMouseLeave={(evt) => this.menuLinkAnimationLeave(evt)}>Contacts</a></div>
                </div>
            </div>
            </div>
        </div>
      </nav>
    );
  }
}
