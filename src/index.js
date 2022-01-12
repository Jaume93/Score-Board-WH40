import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { render } from 'react-dom';

const ScoreBoardApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<ScoreBoardApp />, document.getElementById("root"));