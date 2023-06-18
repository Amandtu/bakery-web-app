import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import _filter from 'lodash/filter';
import _map from 'lodash/map';

import { ADD_TO_CART, DELETE_FROM_CART, FETCH_DATA, UPDATE_IN_CART } from '../constants/actionTypes';

const initialState = { data: [], cart: [] };

const settingsVIReducer = handleActions(
  {
    [FETCH_DATA]: (state, { payload }) =>
      produce(state, draft => {
        draft.data = payload;
      }),
    [ADD_TO_CART]: (state, { payload }) =>
      produce(state, draft => {
        draft.cart = [...draft.cart, payload];
      }),
    [DELETE_FROM_CART]: (state, { payload }) =>
      produce(state, draft => {
        const { id: itemId } = payload;
        draft.cart = _filter(draft.cart, ({ id }) => id !== itemId);
      }),
    [UPDATE_IN_CART]: (state, { payload }) =>
      produce(state, draft => {
        const { id: itemId } = payload;
        draft.cart = _map(draft.cart, item => {
          if (item.id !== itemId) return item;
          return payload;
        });
      }),
  },
  initialState
);

export default settingsVIReducer;
