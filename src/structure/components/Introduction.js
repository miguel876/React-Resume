import React, { Component } from 'react';
import '../../styles/Introduction.scss';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export default class Introduction extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="introduction">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>About myself</h1>
              <div>
                <div>My name is Miguel Santos and I'm a Web developer. I started developing around 2017 in my programming course.</div><div> I like to use Javascript (React) but I had the chance to work with other tecnologies throughout my career.</div><div> You can see more about my projects swipping down.</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
