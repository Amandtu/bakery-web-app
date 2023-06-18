import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { StarFilled } from '@ant-design/icons';
import { notification } from 'antd';
import _noop from 'lodash/noop';

import './card.css';

const Card = ({ item, ctaText, onClick, notificationMessage }) => {
  const { imgUrl, description, price, rating, reviewCount } = item;
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      description: notificationMessage,
      placement: 'top',
      duration: 2,
    });
  };

  const clickHandler = useCallback(() => {
    onClick(item);
    openNotification();
  }, [item, onClick, notificationMessage]);

  const renderContent = useMemo(() => <img src={imgUrl} alt={description} className="image" />, [imgUrl, description]);

  const renderPriceAndRating = useMemo(
    () => (
      <div>
        <span className="rating">
          {rating}&nbsp;
          <StarFilled />
        </span>
        &nbsp;&nbsp;
        <span>{reviewCount} Reviews</span>
      </div>
    ),
    [rating, reviewCount]
  );

  const renderFooter = () => (
    <div className="footer">
      <div className="description truncate">{description}</div>
      <div className="price">
        <span className="currencySymbol">₹ </span>
        <span>{price}</span>
      </div>
      {renderPriceAndRating}
      <button className="ctaBtn" onClick={clickHandler}>
        {ctaText}
      </button>
    </div>
  );

  return (
    <div className="container">
      {renderContent}
      {renderFooter()}
      {contextHolder}
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  ctaText: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  ctaText: 'Add To Cart',
  onClick: _noop,
};

export default React.memo(Card);
