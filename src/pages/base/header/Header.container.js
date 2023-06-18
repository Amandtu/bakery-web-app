import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import _get from 'lodash/get';

import Header from './Header';

function mapStateToProps(state) {
  return {
    cart: _get(state, 'app.cart'),
  };
}

export default compose(withRouter, connect(mapStateToProps))(Header);
