import {Component} from 'react'
import './index.css'

const head_img = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tail_img = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    image: head_img,
  }

  tossCoin = () => {
    const {total, heads, tails} = this.state
    const value = Math.floor(Math.random() * 2)
    let imgUrl = ''
    let newHeads = heads
    let newTails = tails

    if (value === 0) {
      imgUrl = head_img
      newHeads += 1
    } else {
      imgUrl = tail_img
      newTails += 1
    }
    this.setState({
      image: imgUrl,
      heads: newHeads,
      tails: newTails,
    })
  }

  render() {
    const {heads, tails, image} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="image" />
          <button className="button" type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="para1">Total: {heads + tails}</p>
            <p className="para1">Heads: {heads}</p>
            <p className="para1">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
