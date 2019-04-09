import React from "react";

import { addTodo } from "../actions/index";
import { connect } from "react-redux";

class TodoList extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  addTask = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    console.log(this.props.todos);
    return (
      <>
        <h1> Todos to do: </h1>
        <div>
          {this.props.todos &&
            this.props.todos.map((todo, index) => <h3>{todo.value}</h3>)}
        </div>
        <input
          type="text"
          value={this.state.newTodo}
          placeholder="Add"
          onChange={this.handleChanges}
        />
        <button onClick={this.addTask}>Add</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoList);
