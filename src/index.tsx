import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import App from './App';
import store from './store/index'

import GlobalStyles from "./style/GlobalStyled";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles/>
      <App/>
    </Provider>
  </React.StrictMode>
);
