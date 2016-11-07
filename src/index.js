import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Layout from './components/Layout';

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
);
