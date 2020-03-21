import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img src={this.props.coinSide} />
      </div>
    );
  }
}

export default Coin;

//tails image:  https://i.imgur.com/bIEMLRL.jpg
//heads image: https://i.imgur.com/dMCjmN1.jpg
