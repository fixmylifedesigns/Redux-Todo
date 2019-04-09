import React, { Component } from 'react';
// import Title from './components/Title'
import TodoList from './components/TodoList'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Title /> */}
        <TodoList />
      </div>
    );
  }
}

export default App;
