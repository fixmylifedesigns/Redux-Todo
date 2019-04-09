import React from "react";

import { addTodo } from "../actions/index";
import { connect } from "react-redux";
import styled from "styled-components";

const Button = styled.button``;

const Input = styled.input`
border:none;
border-bottom:2px solid;
`;
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

        <Input
          type="text"
          value={this.state.newTodo}
          placeholder="Type in new task here"
          onChange={this.handleChanges}
        />

        <Button onClick={this.addTask}>Add Task</Button>

        <div>
          {this.props.todos &&
            this.props.todos.map((todo, index) => <h3>{todo.value}</h3>)}
        </div>
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
