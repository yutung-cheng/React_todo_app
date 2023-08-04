import React, { Component } from "react";
import "./Item.css";

export default class Item extends Component {
  // Assign mouse enter or mouse leave.
  state = { mouse: false };

  // Handle mouse effect and update state.
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  // Handle check box value and update check status.
  handleCheckBox = (id) => {
    return (event) => {
      // Destructuring assignment
      const { target } = event;
      // Send new check status back to parent component.
      this.props.checkBoxCallback(id, target.checked);
    };
  };

  // Handle Delete todo and update status
  handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      this.props.deleteCallback(id);
    }
  };

  render() {
    const { id, name, check } = this.props;
    const { mouse } = this.state;

    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={check}
            onChange={this.handleCheckBox(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          Delete
        </button>
      </li>
    );
  }
}
