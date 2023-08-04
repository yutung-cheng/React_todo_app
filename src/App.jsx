import React, { Component } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todoList: [
      { id: "1", name: "Eat", check: false },
      { id: "2", name: "Sleep", check: false },
      { id: "3", name: "Coding", check: false },
    ],
  };

  // For add a todo in Header, receive a "todo" object.
  addToDoCallback = (todoObj) => {
    // Fetch todoList
    const { todoList } = this.state;
    // Create a new list
    const newList = [todoObj, ...todoList];
    //Update state using setState.
    this.setState({ todoList: newList });
  };

  // For update checkbox checked status.
  checkBoxCallback = (id, check) => {
    // Destructuring assigment.
    const { todoList } = this.state;

    // Create a new list. Filter out the same id item and update it's "check" status.
    /* 
    const newList = todoList.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, check };
      } else {
        return todoObj;
      }
    });
    */
    const newList = todoList.map((todoObj) => {
      return todoObj.id === id ? { ...todoObj, check } : todoObj;
    });

    //Update state using setState
    this.setState({ todoList: newList });
  };

  // For delete todo.
  deleteCallback = (id) => {
    // Destructuring assigment.
    const { todoList } = this.state;
    const newList = todoList.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todoList: newList });
  };

  // For Footer handle all done checkbox callback
  allCheckCallback = (check) => {
    // Destructuring assigment.
    const { todoList } = this.state;
    const newList = todoList.map((todoObj) => {
      return { ...todoObj, check: check };
    });
    this.setState({ todoList: newList });
  };

  // For Footer handle all delete callback
  allDeleteCallback = () => {
    const { todoList } = this.state;
    // Filter where todoObj.check is false...we don't need it anymore.
    const newList = todoList.filter((todoObj) => {
      return !todoObj.check;
    });
    this.setState({ todoList: newList });
  };

  render() {
    const { todoList } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addToDoCallback={this.addToDoCallback} />
          <Body
            todoList={todoList}
            checkBoxCallback={this.checkBoxCallback}
            deleteCallback={this.deleteCallback}
          />
          <Footer
            todoList={todoList}
            allCheckCallback={this.allCheckCallback}
            allDeleteCallback={this.allDeleteCallback}
          />
        </div>
      </div>
    );
  }
}
