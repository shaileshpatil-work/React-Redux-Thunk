import React, { Component } from "react";
import { Showproject } from "./Showproject";

export class Addproject extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.inpVal = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.inpVal.current.value !== "") {
      if (this.state.data.includes(this.inpVal.current.value)) {
        alert("Value is Present");
      } else {
        this.setState({
          data: [...this.state.data, this.inpVal.current.value]
        });
        this.inpVal.current.value = "";
      }
    }
  }

  delete(items) {
    this.setState({
      data: this.state.data.filter(item => item !== items)
    });
  }
  render() {
    return (
      <div>
        <Showproject list={this.state.data} del={this.delete} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.inpVal} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
