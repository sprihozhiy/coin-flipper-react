import React, { Component } from "react";
import Coin from "./Coin";
import FlipperCounter from "./FlipperCounter";

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      "https://i.imgur.com/bIEMLRL.jpg",
      "https://i.imgur.com/dMCjmN1.jpg"
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      coinSide: "",
      totalFlips: 0,
      heads: 0,
      tails: 0
    };
  }

  flipTheCoin = () => {
    const randSide = this.props.coins[
      Math.floor(Math.random() * this.props.coins.length)
    ];
    this.setState(currentState => {
      return {
        coinSide: randSide,
        totalFlips: currentState.totalFlips + 1,
        tails:
          currentState.tails +
          (randSide === "https://i.imgur.com/bIEMLRL.jpg" ? 1 : 0),
        heads:
          currentState.heads +
          (randSide === "https://i.imgur.com/dMCjmN1.jpg" ? 1 : 0)
      };
    });
  };

  handleClick = () => {
    this.flipTheCoin();
  };

  render() {
    return (
      <div>
        <h1>Let's Flip A Coin</h1>
        <Coin coinSide={this.state.coinSide} />
        <button onClick={this.handleClick}>Flip The Coin</button>
        <FlipperCounter
          totalFlips={this.state.totalFlips}
          heads={this.state.heads}
          tails={this.state.tails}
        />
      </div>
    );
  }
}

export default CoinFlipper;
