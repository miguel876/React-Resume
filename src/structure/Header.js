import React, { Component } from 'react';
import HeaderDown from './HeaderDown'
import HeaderUp from './HeaderUp';
import _ from 'lodash';

export default class Header extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      headerScroll: false,
      headerMenus: [
        {
          link: "#introduction",
          label: "Introduction",
        },
        {
          link: "#projects",
          label: "Projects",
        },
        {
          link: "#skills",
          label: "Technologies",
        },
        {
          link: "#contacts",
          label: "Contacts",
        },
      ]
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", _.throttle(() => this.getPageScrolling(), 700))
  }
  
  getPageScrolling = () => {
    let pageScroll = window.scrollY;
    let navLogoHeight = document.getElementsByClassName("nav-logo")[0].offsetHeight;
    let bannerPosition = document.getElementsByClassName("banner")[0].offsetHeight - navLogoHeight;

    if(pageScroll > bannerPosition){
      this.setState({ headerScroll: true })
    }else{
      this.setState({ headerScroll: false })
    }

  }


  render() {
    return (
      <header>
        {
          this.state.headerScroll ?
            <HeaderDown menus={this.state.headerMenus} />
          :
            <HeaderUp menus={this.state.headerMenus} />
        }
        
      </header>
    );
  }
}
