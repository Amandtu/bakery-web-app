import React, { useCallback } from 'react';

import { ShoppingCartOutlined } from '@ant-design/icons';
import './header.css';

function Header({ cart, history }) {
  const goToCart = useCallback(() => {
    history.push('/cart');
  }, [history]);

  const goToHome = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <div className="header">
      <h2 className="title" onClick={goToHome}>
        XYZ Bakery
      </h2>
      <h3>Baked fresh daily just for you!</h3>
      <div onClick={goToCart} className="cartCount">
        <ShoppingCartOutlined className="cartIcon" />
        <div style={{ marginLeft: '8px', color: '#ff5f5d' }}>
          Cart
          <div>{cart?.length || 0} Items</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);
