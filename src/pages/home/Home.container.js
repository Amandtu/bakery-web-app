import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _get from 'lodash/get';

import Home from './Home';
import * as homeActions from '../../actions';

function mapStateToProps(state) {
  return {
    data: _get(state, 'app.data'),
    cart: _get(state, 'app.cart'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...homeActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
