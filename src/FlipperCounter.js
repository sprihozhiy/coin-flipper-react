import React, { Component } from "react";
import "./FlipperCounter.css";

class FlipperCounter extends Component {
  render() {
    return (
      <div className="FlipperCounter">
        <p>
          <span>Out of {this.props.totalFlips} flips.</span> There have been{" "}
          {this.props.tails} tails and {this.props.heads} heads.
        </p>
      </div>
    );
  }
}

export default FlipperCounter;
