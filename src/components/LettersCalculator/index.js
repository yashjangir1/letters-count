// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letters: 0, inputField: ''}

  letterCount = event => {
    this.setState({
      letters: event.target.value.split(' ').join('').length,
      inputField: event.target.value,
    })
  }

  render() {
    const {letters, inputField} = this.state

    return (
      <div className="main-container">
        <div className="texts-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="input-detail" htmlFor="hello">
            Enter the phrase
          </label>
          <input
            type="text"
            className="input-space"
            placeholder="Enter the phrase"
            onChange={this.letterCount}
            value={inputField}
            id="hello"
          />
          <div className="letters-container">
            <p className="letter-detail">No.of letters: {letters}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="stopwatch-image"
        />
      </div>
    )
  }
}

export default LettersCalculator
