import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

export default class Footer extends Component {
  // Restrict recieved props types and required.
  static propTypes = {
    allCheckCallback: PropTypes.func.isRequired,
    allDeleteCallback: PropTypes.func.isRequired,
  };

  handleAllCheck = (event) => {
    // Destructuring assignment
    const { target } = event;
    // Send new check status back to parent component.
    this.props.allCheckCallback(target.checked);
  };

  handleAllDelete = () => {
    if (window.confirm("Delete all checked items?")) {
      this.props.allDeleteCallback();
    }
  };

  render() {
    // Fetch props...just like we always do.
    const { todoList } = this.props;

    // Count how many checked todo in todoList
    const doneCount = todoList.reduce((prev, todo) => {
      return prev + (todo.check ? 1 : 0);
    }, 0);

    // Count total length in todoList
    const totalCount = todoList.length;

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === totalCount && doneCount !== 0}
            onChange={this.handleAllCheck}
          />
        </label>
        <span>
          <span> Done {doneCount}</span> / All {totalCount}
        </span>
        <button
          onClick={doneCount === 0 ? null : this.handleAllDelete}
          className={doneCount === 0 ? "btn btn-nonDanger" : "btn btn-danger"}
        >
          Clear All
        </button>
      </div>
    );
  }
}
