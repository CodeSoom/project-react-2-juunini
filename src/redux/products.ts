import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { fetchProducts, Product } from 'src/services/products';

const initialState: Record<number, Product> = {};

const { actions, reducer } = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, { payload }: PayloadAction<Product[]>) {
      return payload.reduce((products, product) => ({
        ...products,
        [product.id]: product,
      }), {});
    },
  },
});

export function loadProducts() {
  return async (dispatch: Dispatch<PayloadAction<Product[]>>) => {
    const products = await fetchProducts();

    dispatch(actions.setProducts(products));
  };
}

export const {
  setProducts,
} = actions;

export default reducer;
