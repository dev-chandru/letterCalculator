// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onInputFromUser = event => {
    const inputCount = event.target.value
    const newCount = inputCount.length
    this.setState({
      count: newCount,
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <img
          className="image"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
        <div className="cards-container">
          <h1 className="main-heading">Calculate the Letters you enter</h1>
          <div className="cards">
            <label className="label" htmlFor="inputPhrase">
              Enter the phrase
            </label>
            <input
              type="text"
              id="inputPhrase"
              className="input-element"
              placeholder="calculator"
              onChange={this.onInputFromUser}
            />
          </div>
          <p className="counts-para">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
