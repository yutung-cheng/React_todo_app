import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import "./Header.css";

export default class Header extends Component {
  // Restrict recieved props types and required.
  static propTypes = {
    addToDoCallback: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    // Destructuring assignment "keyCode" and "target".
    const { keyCode, target } = event;

    // keyCode 13 === "Enter" on the keyboard.
    // If it's not "Enter", do nothing until the user press enter.
    if (keyCode !== 13) return;

    if (target.value.trim() === "") {
      alert("Input can't be empty.");
      return;
    }

    // Create a temp todo object for callback function.
    const tempTodoObj = { id: nanoid(), name: target.value, check: false };

    // Add a new todo object to the list. Using props callback arrow function.
    this.props.addToDoCallback(tempTodoObj);

    //Clear input value
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="Press Enter to add a duty..."
        />
      </div>
    );
  }
}
