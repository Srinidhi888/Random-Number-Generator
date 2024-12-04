// Write your code here
import './index.css'

import {Component} from 'react'

class RandomNumber extends Component {
  state = {num: 0}

  onGenerate = () => {
    this.setState({num: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="head">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="btn" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="head">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumber
