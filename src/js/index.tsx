import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../js/store/index';
import App from './containers/App';
import '../style/style.scss';

render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('app')
)

