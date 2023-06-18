import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import _findIndex from 'lodash/findIndex';
import _map from 'lodash/map';

import Card from '../../molecules/Card/Card';
import './home.css';

const Home = props => {
  const { actions, cart, data, history } = props;

  useEffect(() => {
    actions.fetchCakeData();
  }, []);

  const renderCards = () =>
    _map(data, item => {
      const { id: itemId } = item;

      let btnText = 'Add To Cart';
      let notificationMessage = 'Added To Cart';
      let onClick = actions.addToCart;

      if (_findIndex(cart, { id: itemId }) !== -1) {
        btnText = 'Delete from Cart';
        onClick = actions.deleteFromCart;
        notificationMessage = 'Removed from Cart';
      }
      return (
        <div key={itemId} className="cardContainer responsive-width">
          <Card item={item} ctaText={btnText} onClick={onClick} notificationMessage={notificationMessage} />
        </div>
      );
    });

  return <div className="contentContainer">{renderCards()}</div>;
};

Home.propTypes = {
  actions: PropTypes.object,
  cart: PropTypes.array,
  data: PropTypes.array,
};

Home.defaultProps = {
  actions: {},
  cart: [],
  data: [],
};

export default Home;
