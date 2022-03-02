import React, { Component } from 'react'

export default class Menu extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
          menu: 'none',
          burger: '',
          burgerMenu: '',
          burgerMenuList: '',
          burgerClose: '',
          headerScroll: false
        }
      }

    componentDidMount(){
        this.setState({ 
          burger: document.getElementsByClassName("burger")[0],
          burgerMenu: document.getElementsByClassName("menu-bar")[0],
          burgerMenuList: document.getElementsByClassName("menu-list")[0],
          burgerClose: document.getElementsByClassName("close-menu")[0]
        });
        
      }
    
      openNavMenu = () => {
        //Burger Menu
        this.state.burger.classList.remove('burgerClose')
        this.state.burger.classList.add('burgerOpen')
    
        //Nav menu
        this.state.burgerMenu.classList.remove('menuBarClose');
        this.state.burgerMenu.classList.add('menuBarOpen');
        this.setState({ menu: 'block' });
    
        //Nav menu list and close burger
        this.state.burgerMenuList.classList.remove('menuListClose');
        this.state.burgerMenuList.classList.add('menuListOpen');
    
        this.state.burgerClose.classList.remove('menuListClose');
        this.state.burgerClose.classList.add('menuListOpen');    
    
      }
    
      closeNavMenu = () => {
        //Burger Menu
        this.state.burger.classList.remove('burgerOpen')
        this.state.burger.classList.add('burgerClose')
    
        //Nav Menu
        this.state.burgerMenu.classList.remove('menuBarOpen');
        this.state.burgerMenu.classList.add('menuBarClose');
    
        setTimeout(() => {
          this.setState({ menu: 'none' });
        },700)
    
        //Nav menu list
        this.state.burgerMenuList.classList.add('menuListClose');
        this.state.burgerMenuList.classList.remove('menuListOpen');
    
        this.state.burgerClose.classList.add('menuListClose');
        this.state.burgerClose.classList.remove('menuListOpen');   
        
      }
    
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
    
      menuLinkClick = () => {
        this.setState({ menu: 'none' });
      }
      
      getPageScrolling = () => {
        let pageScroll = window.scrollY;
        let navLogoHeight = document.getElementsByClassName("nav-logo")[0].offsetHeight;
        let bannerPosition = document.getElementsByClassName("banner")[0].offsetHeight - navLogoHeight;
    
        if(pageScroll > bannerPosition){
          // store.dispatch({
          //   type: "HEADER_STATE",
          //   detail: true
          // }) 
          this.setState({ headerScroll: true })
        }else{
          this.setState({ headerScroll: false })
        }
    
      }

  render() {
    return (
        <>
        <div className={`container pt-3 pb-3 mx-auto ${this.props?.propStyle}`} >
          <div className="row">
            <div className="col-8">
              <div className="nav-logo">
                <div>Miguel Santos</div>
              </div>
            </div>
            <div className="col-4">
              <div className="burger float-right" onClick={this.openNavMenu}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="menu-bar" style={{display: this.state.menu}}>
            <div className="container mx-auto">
                <div>
                    <div className="close-menu d-flex float-right" onClick={this.closeNavMenu}>
                    <div className="close-bar"></div>
                    <div className="close-bar"></div>
                    </div>
                </div>
                <div className="menu-list">
                    {
                    this.props?.menus?.map(({link, label}) => <div><a href={link} onMouseEnter={(evt) => this.menuLinkAnimationEnter(evt)} onMouseLeave={(evt) => this.menuLinkAnimationLeave(evt)}>{label}</a></div>)
                    }
                </div>
            </div>
        </div>
        </>
    )
  }
}
