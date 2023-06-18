import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _get from 'lodash/get';

import Cart from './Cart';
import * as cartActions from '../../actions';

function mapStateToProps(state) {
  return {
    cart: _get(state, 'app.cart'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...cartActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
