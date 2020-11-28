import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { Item } from 'src/services/items';
import { fetchProduct } from 'src/services/products';

const initialState: Item = {
  id: 0,
  brandId: 0,
  name: '',
  price: 0,
  currency: '',
  category: 0,
  href: '',
  images: [],
  sizes: [],
  description: '',
};

const { actions, reducer } = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct(state, { payload }: PayloadAction<Item>) {
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export function loadProduct(id: number) {
  return async (dispatch: Dispatch<PayloadAction<unknown>>) => {
    const product = await fetchProduct(id);

    dispatch(actions.setProduct(product));
  };
}

export const {
  setProduct,
} = actions;

export default reducer;
