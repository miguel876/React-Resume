import React, { Component } from 'react';
import '../../styles/Introduction.scss';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import LinkedInLogo from '../../resources/images/linkedin-brands.svg'

export default class Introduction extends Component {
  render() {
    const { t } = this.props;

    return (
      <div id="introduction" className="introduction">
        <div className="container">
          <div className="row text-left">
            <div className="col-12 col-sm-8 pr-5">
              <div className="intro-title pb-3">About myself</div>
              <p className="text-justify">
                My name is Miguel Santos and I'm a Web developer. I started developing around 2017 in my programming course. 
                I like to use Javascript (React) but I had the chance to work with other tecnologies throughout my career. 
                You can see more about my projects swipping down.
              </p>
            </div>
            <div className="col-12 col-sm-4 pt-5 pt-sm-0 pl-5">
              <div className="intro-title pb-3">Details</div>
              <div><b>Age</b></div>
              <div className="gray pb-2">24 years old</div>
              <div className="pt-2"><b>Location</b></div>
              <div className="gray">Portugal, Setúbal, Moita</div>

              <div className="pt-3">
                <a href="https://www.linkedin.com/in/miguel-santos-ab076b155/" target="_blank">
                  <img src={LinkedInLogo} className="logo"/>
                </a>
              </div>
            </div>

          </div>

        </div>
        
      </div>
    );
  }
}
