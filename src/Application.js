import React, { Component } from "react";
import HighScore from "./HighScore";
import "./css/style.css"

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      kntlAjg: false
    };
  }

  handleClick = pencet => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidUpdate(props, state) {
    if (
      this.state.count > 10 &&
      this.state.count !== state.count &&
      !this.state.kntlAjg
    ) {
      console.log("Updating over ten");
      this.setState({ kntlAjg: true });
    }
  }

  ilangAjg = e => {
      console.log('Event is', e)
    this.setState({
      count: 0,
      kntlAjg: false
    });
  };

  render() {
    let { count } = this.state;

    return (
      <div>
        <h1>You clicked the button {count} times</h1>
        <HighScore
          kntlAjg={this.state.kntlAjg}
          onReset={this.ilangAjg}
        />

        <span>
          <button onClick={pencet => this.handleClick(pencet)}>Click Me</button>
        </span>
      </div>
    );
  }
}

export default Application;
