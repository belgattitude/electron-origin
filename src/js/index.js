import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../js/store/index';
import App from './containers/App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('app')
)

