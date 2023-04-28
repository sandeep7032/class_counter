import { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>You clicked {this.state.count} times</h2>
        <button
          className="btn"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          increment
        </button>
        <button
          className="btn"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          decrement
        </button>
        <button
          className="btn"
          onClick={() => this.setState({ count: (this.setState.count = 0) })}
        >
          reset
        </button>
      </div>
    );
  }
}
export default Counter;
