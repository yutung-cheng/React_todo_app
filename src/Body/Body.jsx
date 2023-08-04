import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";

import "./Body.css";

export default class Body extends Component {
  // Restrict recieved props types and required.
  static propTypes = {
    todoList: PropTypes.array.isRequired,
    checkBoxCallback: PropTypes.func.isRequired,
    deleteCallback: PropTypes.func.isRequired,
  };

  render() {
    const { todoList, checkBoxCallback, deleteCallback } = this.props;
    return (
      <div>
        <ul className="todo-body">
          {todoList?.map((todo) => {
            return (
              <Item
                key={todo.id}
                {...todo}
                /// This callback function isn't from Body component
                /// So no need to add "this." keyword.
                checkBoxCallback={checkBoxCallback}
                deleteCallback={deleteCallback}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
