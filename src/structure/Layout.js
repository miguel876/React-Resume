import React, { Component } from 'react';
import Banner from '../structure/components/Banner.js';
import Introduction from '../structure/components/Introduction.js';
import Projects from '../structure/components/Projects.js';
import Information from '../structure/components/Information';
import '../styles/Layout.scss';
import Technologies from './components/Technologies.js';
import { Parallax } from 'react-parallax';
import bgImage from '../resources/images/code.jpg'
import bgImage2 from '../resources/images/pc_2.jpg'
import bgImage3 from '../resources/images/teclado_2.jpg'
import bgImage4 from '../resources/images/pc_3.jpg'
import bgImage5 from '../resources/images/pc_1.jpg'
export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          headerState: false
        };
    }
    
  render() {

    return (
      <div className="Layout" style={{ paddingTop: this.state.headerState ? '100px' : '0' }}>
        <Parallax bgImage={bgImage5} strength={500}>
          <div style={{ height: '100vh' }}>
            <Banner />
          </div>
        </Parallax>
        <Parallax bgImage={bgImage2} strength={500}>
          <Introduction />
        </Parallax>
        <Parallax bgImage={bgImage3} strength={500}>
          <div style={{ height: 500 }}></div>
        </Parallax>
        <Projects />
        <Parallax bgImage={bgImage4} strength={500}>
          <Technologies />
        </Parallax>
        <Parallax bgImage={bgImage} strength={500}>
          <Information />
        </Parallax>
      </div>
    );
  }
}












