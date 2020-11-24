import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { fetchItems, Item } from '../services/items';

const initialState: {[id: number]: Item} = {};

const { actions, reducer } = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, { payload }: PayloadAction<Item[]>) {
      return payload.reduce((items, {
        id, brand, name, price, currency, href, images, sizes, description,
      }) => ({
        ...items,
        [id]: {
          id,
          brand,
          name,
          price,
          currency,
          href,
          images,
          sizes,
          description,
        },
      }), {});
    },
  },
});

export function loadItems() {
  return async (dispatch: Dispatch<PayloadAction<Item[]>>) => {
    const items = await fetchItems();

    dispatch(actions.setItems(items));
  };
}

export const {
  setItems,
} = actions;

export default reducer;
