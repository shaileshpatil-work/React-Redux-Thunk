import React, { Component } from "react";

export class Showproject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.list.map((items, i) => (
          <li key={i}>
            <span>{items}</span>
            <button onClick={() => this.props.del(items)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}
