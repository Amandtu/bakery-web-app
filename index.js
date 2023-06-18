import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './src/pages/base';
import rootReducer from './src/reducers';

const middlewares = [thunk];

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
