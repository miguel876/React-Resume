import React, { Component } from 'react';
import Banner from '../structure/components/Banner.js';
import Introduction from '../structure/components/Introduction.js';
import Projects from '../structure/components/Projects.js';
import Information from '../structure/components/Information';
import '../styles/Layout.scss';
import store from '../store'

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          headerState: false
        };
    }
    
    componentDidMount() {
      store.subscribe(() => {
        const { headerState } = store.getState();

        //headerState && this.setState({ headerState: true });
      });
    }


  render() {

    return (
      <div className="Layout" style={{ paddingTop: this.state.headerState ? '100px' : '0' }}>
        <Banner />
        <Introduction />
        <Projects />
        <Information />
      </div>
    );
  }
}












