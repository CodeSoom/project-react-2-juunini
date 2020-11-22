import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { fetchItems, Item } from '../services/items';

const initialState: Item[] = [];

const { actions, reducer } = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, { payload }: PayloadAction<Item[]>) {
      return payload;
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
