import React, { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import './cartItem.css';

function CartItem({ item, onDeleteItem, updateItem }) {
  const { imgUrl, description, price } = item;
  const [inputValue, setInputValue] = useState(item.message || '');

  const onDelete = () => {
    onDeleteItem(item);
  };

  const onTextChange = e => {
    const value = e.target.value;
    setInputValue(value);
    updateItem({ ...item, message: value });
  };

  return (
    <>
      <div className="itemContainer">
        <img src={imgUrl} alt={description} className="imgCart" />
        <div className="infoAndAction">
          <div className="description">{description}</div>
          <div className="price">
            <span className="currencySymbol">₹ </span>
            <span>{price}</span>
          </div>
          <Input placeholder="Enter message for cake" value={inputValue} onChange={onTextChange} />
          <DeleteOutlined className="deleteIcon" onClick={onDelete} />
        </div>
      </div>
    </>
  );
}

export default React.memo(CartItem);
