import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import APP_ROUTES from '../../constants/routes';
import Home from '../home';
import Cart from '../cart';
import Layout from './Layout';

import './index.css';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path={APP_ROUTES.CART} component={Cart} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default withRouter(App);
