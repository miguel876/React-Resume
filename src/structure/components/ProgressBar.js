import React, { Component } from 'react';
import '../../styles/ProgressBar.scss';

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
         numberBars: 3,
        };
    }
    
    componentDidMount() {
        this.barGenerator();
    }

    barGenerator = () =>{
        let progressBar = document.getElementsByClassName("progress-bar-container")[0];
        for(let p = 0; p <= this.state.numberBars; p++){
            progressBar.innerHTML += "<div class='progress-bar scrolled'></div>";
        }
    }
  
    render() {
    return (
      <div className="progress-bar-container">
      </div>
    );
  }
}
