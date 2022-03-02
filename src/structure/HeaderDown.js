import React, { Component } from 'react';
import '../styles/Header.scss';
import Menu from './components/Menu';

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
      <>
      <nav className="header-down">
        <div className="container pt-3 pb-3 d-none d-sm-block">
            <div className="row">
            <div className="col-6 col-sm-4">
                <div className="nav-logo">
                <div>Miguel Santos</div>
                </div>
            </div>
            <div className="col-8">
                <div className="menu-bar d-flex float-right">
                  {
                    this.props?.menus?.map(({link, label}) => <div><a href={link} onMouseEnter={(evt) => this.menuLinkAnimationEnter(evt)} onMouseLeave={(evt) => this.menuLinkAnimationLeave(evt)}>{label}</a></div>)
                  }
                </div>
            </div>
            
            </div>
        </div>
        <Menu menus={this.props?.menus} propStyle='d-block d-sm-none' />
      </nav>
      
    </>
    );
  }
}
