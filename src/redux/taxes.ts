import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { fetchTaxes, Tax } from '../services/taxes';

const initialState: Record<number, Tax> = {};

const { actions, reducer } = createSlice({
  name: 'taxes',
  initialState,
  reducers: {
    setTaxes(state, { payload }: PayloadAction<Tax[]>) {
      return payload.reduce((taxes, tax) => ({
        ...taxes,
        [tax.id]: tax,
      }), {});
    },
  },
});

export function loadTaxes() {
  return async (dispatch: Dispatch<PayloadAction<Tax[]>>) => {
    const taxes = await fetchTaxes();

    dispatch(actions.setTaxes(taxes));
  };
}

export const {
  setTaxes,
} = actions;

export default reducer;
