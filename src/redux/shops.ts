import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { fetchShops, Shop } from '../services/shops';

const initialState: {[id: number]: Shop} = {};

const { actions, reducer } = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    setShops(state, { payload }: PayloadAction<Shop[]>) {
      return payload.reduce((shops, { id, name }) => ({
        ...shops,
        [id]: { id, name },
      }), {});
    },
  },
});

export function loadShops() {
  return async (dispatch: Dispatch<PayloadAction<Shop[]>>) => {
    const shops = await fetchShops();

    dispatch(actions.setShops(shops));
  };
}

export const {
  setShops,
} = actions;

export default reducer;