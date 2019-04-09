import React, { Component } from 'react';
// import Title from './components/Title'
import TodoList from './components/TodoList'
import styled from 'styled-components'

const Container = styled.div`
width:400px
margin: auto;

background:white;
border-radius:3px;
height:100%;


`
const List = styled.div`
margin:  auto;
padding:20;
text-align:center;
`

class App extends Component {
  render() {
    return (
    
      <Container className="App">
      <List>
        {/* <Title /> */}
        <TodoList />
        </List>
      </Container>
    );
  }
}

export default App;
