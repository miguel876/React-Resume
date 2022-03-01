import React, { Component } from 'react';
import '../../styles/Banner.scss';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-img" ></div>
        <div className="banner-container">
          <div className="banner-text-container">
            <div className="banner-text-container-h1 text-left">Welcome</div>
            <div className="banner-text-container-h2 text-left pl-3">to my Online Resume</div>
          </div>
          <div className="banner-bottom">
            <div className="arrow-down-container">
                <div className="arrow-down arrow-down-1"></div>
                <div className="arrow-down arrow-down-2"></div>
            </div>
            <span>Swipe for more</span>
          </div>
        </div>
      </div>
    );
  }
}
