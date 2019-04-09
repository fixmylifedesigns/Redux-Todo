import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/reducer";
import styled from "styled-components";
import background from "./background.jpg";

import App from "./App";

const Div = styled.div`
  margin: 0;
  padding:0;
  background: url(${background});
  height: 95vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

const store = createStore(rootReducer);

ReactDOM.render(
    
  <Provider store={store}>
    <Div>
      <App />
    </Div>
  </Provider>,
  document.getElementById("root")
);
