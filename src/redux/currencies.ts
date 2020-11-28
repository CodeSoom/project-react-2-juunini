import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { fetchCurrencies, Currency } from 'src/services/currencies';

const initialState: Record<string, Currency> = {};

const { actions, reducer } = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCurrencies(state, { payload }: PayloadAction<Currency[]>) {
      return payload.reduce((currencies, currency) => ({
        ...currencies,
        [currency.name]: currency,
      }), {});
    },
  },
});

export function loadCurrencies() {
  return async (dispatch: Dispatch<PayloadAction<Currency[]>>) => {
    const currencies = await fetchCurrencies();

    dispatch(actions.setCurrencies(currencies));
  };
}

export const {
  setCurrencies,
} = actions;

export default reducer;
