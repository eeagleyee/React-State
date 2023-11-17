import React, { Component } from "react";
import bellA from "./bellA.jpg";
import bellB from "./bellB.jpg";

class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to my page",
      sub: "Subscribe",
      imgSrc: bellB,
    };
  }
  styles = {
    fontStyle: "italic",
    color: "purple",
  };
  ButtonChange = () => {
    this.setState({
      message: "Hit the bell icon to never miss an update",
      sub: "Subscribed",
    });
  };
  ImageChange = () => {
    this.setState({
      message: "Thank you! Happy Learning",
      imgSrc: bellA,
    });
  };

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}> {this.state.sub} </button>
        <p />
        <img
          onClick={this.ImageChange}
          style={{ width: "30px", height: "30px" }}
          src={this.state.imgSrc}
          alt=""
        />
      </div>
    );
  }
}

export default NewComp;

// this.setState({quantity: value});
