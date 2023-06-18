import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import _reduce from 'lodash/reduce';

import { notification } from 'antd';

import CartItem from '../../molecules/CartItem/CartItem';
import './cart.css';

function Cart({ actions, cart, history }) {
  const [api, contextHolder] = notification.useNotification();

  const orderTotal = useMemo(() => _reduce(cart, (acc, item) => acc + Number(item.price), 0), [cart]);

  const goBackToHome = useCallback(() => {
    history.push('/');
  }, [history]);

  const openNotification = message => {
    api.open({
      description: message,
      placement: 'top',
      duration: 2,
    });
  };

  const onDelete = item => {
    actions.deleteFromCart(item);
    openNotification('Removed from Cart');
  };

  const onSubmit = useCallback(() => {
    const payload = {
      orderTotal,
      items: cart,
    };
    console.log('Order Placed', payload);
    openNotification('Order Placed Successfully');
  }, [cart]);

  const emptyPlaceholder = useMemo(() => {
    if (!cart.length)
      return (
        <div className="emptyContainer">
          <div style={{ paddingBottom: '16px' }}>Looks like your cart is empty!</div>
          <button className="ctaBtn" onClick={goBackToHome}>
            Back to Home
          </button>
        </div>
      );
  }, [cart, goBackToHome]);

  const renderOrderSummary = () => (
    <div className="orderContainer">
      <h4 style={{ marginBottom: '8px' }}>Order Summary</h4>
      <div>Total &nbsp;&nbsp;&nbsp;&nbsp;{orderTotal}</div>
      <button className="submitBtn" onClick={onSubmit}>
        Place Order
      </button>
    </div>
  );

  const renderContent = () => (
    <div className="cartContainer">
      <div>
        {_map(cart, item => (
          <CartItem key={item.id} item={item} onDeleteItem={onDelete} updateItem={actions.updateItemInCart} />
        ))}
      </div>
      {renderOrderSummary()}
    </div>
  );

  return (
    <>
      {contextHolder}
      {cart?.length ? renderContent() : emptyPlaceholder}
    </>
  );
}

Cart.propTypes = {
  actions: PropTypes.object,
  cart: PropTypes.array,
};

Cart.defaultProps = {
  actions: {},
  cart: [],
};

export default Cart;
