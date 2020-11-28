import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { fetchProducts, Product } from 'src/services/products';

const initialState: Record<number, Product> = {};

const { actions, reducer } = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, { payload }: PayloadAction<Product[]>) {
      return payload.reduce((items, item) => ({
        ...items,
        [item.id]: item,
      }), {});
    },
  },
});

export function loadItems() {
  return async (dispatch: Dispatch<PayloadAction<Product[]>>) => {
    const items = await fetchProducts();

    dispatch(actions.setItems(items));
  };
}

export const {
  setItems,
} = actions;

export default reducer;
