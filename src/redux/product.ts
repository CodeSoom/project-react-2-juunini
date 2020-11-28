import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

const { actions, reducer } = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct(state, { payload }) {
      const {
        name,
        brandId,
        href,
        images,
        sizes,
        description,
        price,
        currency,
        exchangeRate,
        taxRate,
        vatRate,
      } = payload;

      return {
        ...state,
        name,
        brandId,
        href,
        images,
        sizes,
        description,
        price,
        currency,
        exchangeRate,
        taxRate,
        vatRate,
      };
    },
  },
});

export function loadProduct(id) {
  return async (dispatch: Dispatch<PayloadAction<unknown>>) => {
    const product = await fetchProduct(id);

    dispatch(actions.setProduct(product));
  };
}

export const {
  setProduct,
} = actions;

export default reducer;
