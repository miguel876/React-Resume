import React, { Component } from 'react';
import Banner from '../structure/components/Banner.js';
import Introduction from '../structure/components/Introduction.js';
import Projects from '../structure/components/Projects.js';
import Information from '../structure/components/Information';
import '../styles/Layout.scss';
import _ from "lodash";

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          top: 0,
          animationEnd: false,
          numSlides: 0,
        };
    }
    
    componentDidMount() {
      //window.addEventListener('wheel', _.throttle(this.scrollEffect, 1000));
    }

    // scrollEffect = (evt) => {
    //   let getCurrentTop = this.state.top;
    //   let topLayout = document.getElementsByClassName("Layout")[0], 
    //       screenHeight = document.getElementsByClassName("introduction")[0].offsetHeight;
  
    //   if(evt){
    //     if(evt.deltaY > 0 && topLayout.offsetHeight > ((topLayout.offsetTop * -1) + screenHeight)){
    //       //Scroll Down
    //       //Start Blur In Animation
          
    //       if(evt.path.includes(document.getElementsByClassName("introduction")[0])){
    //         //console.log("Intro component")
    //       }
    //       this.transitionEffect().blurIn();
    //       topLayout.addEventListener('animationend', () => {

    //         this.setState({top: getCurrentTop - 100});
            
    //         //Start Blur Out Animation
    //         this.transitionEffect().blurOut();
    //         this.transitionEndingEffect();


            
    //       });
          
    //     }else if(evt.deltaY < 0 && this.state.top < 0){
    //       //Scroll Up
    //       //Start Blur Out Animation
    //       console.log(evt);
    //       this.transitionEffect().blurIn();
    //       topLayout.addEventListener('animationend', () => {

    //         this.setState({top: getCurrentTop + 100});

    //         //Start Blur Out Animation
    //         this.transitionEffect().blurOut();
    //         this.transitionEndingEffect();

    //       });

    //     }

    //   }
    // }

    // transitionEffect = () => {
    //   const topLayout = document.getElementsByClassName("Layout")[0];

    //   const animations = { 
    //     blurIn: () => { topLayout.classList.add("blurIn"); },
    //     blurOut: () => { topLayout.classList.add("blurOut"); },
    //   };
      
    //   return animations;

    // }

    // transitionEndingEffect = () => {
    //   const topLayout = document.getElementsByClassName("Layout")[0];

    //   topLayout.addEventListener('animationend', () =>{
    //     topLayout.classList.remove("blurIn");
    //     topLayout.classList.remove("blurOut");
    //   });
    // }

  render() {
    //let topRef = { top: this.state.top + "vh"};

    return (
      <div className="Layout">
        <Banner />
        <Introduction />
        <Projects />
        <Information />
      </div>
    );
  }
}












