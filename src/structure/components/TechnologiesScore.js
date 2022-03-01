import React, { Component } from 'react'
import '../../styles/Technologies.scss'

export default class TechnologiesScore extends Component {
    constructor(props) {
        super(props)
        this.state = {
          scoreTotal: 5,
          scoreElementArr: []
        }
      }

    componentDidMount() {
      this.scoreCheck()
    }

    scoreCheck = () => {
      let arrAux = []
      for(let i = 1; i <= 5; i++){
        this.props.score >= i ? arrAux = [...arrAux, 'checked'] : arrAux = [...arrAux, 'unchecked']
      }

      this.setState({scoreElementArr: arrAux})
    }
    
  render() {
    return (
      <div className='row mb-2'>
        <div className='col-5'>
          { this.props.label }
        </div>
        <div className='col-7'>
          { this.state.scoreElementArr.map((val) => <div className={val}></div>) }
        </div>
      </div>
      
    )
  }
}
