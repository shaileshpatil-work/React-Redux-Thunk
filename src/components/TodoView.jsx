import React, { Component } from "react";
import ListView from "./ListView";

class TodoView extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.inpVal = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit = e => {
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
  };

  handleDelete = items => {
    this.setState({
      data: this.state.data.filter(item => item !== items)
    });
  };

  render() {
    return (
      <div>
        <ListView list={this.state.data} delete={this.handleDelete} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.inpVal} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TodoView;
