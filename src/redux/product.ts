import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { Product, fetchProduct } from 'src/services/products';

const initialState: Product = {
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
    setProduct(state, { payload }: PayloadAction<Product>) {
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export function loadProduct(id: number) {
  return async (dispatch: Dispatch<PayloadAction<Product>>) => {
    const product = await fetchProduct(id);

    dispatch(actions.setProduct(product));
  };
}

export const {
  setProduct,
} = actions;

export default reducer;
