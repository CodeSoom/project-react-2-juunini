import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialStateProps = {
  scrollTop: number;
};

const initialState: InitialStateProps = {
  scrollTop: 0,
};

const { actions, reducer } = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setScrollTop(state, { payload }: PayloadAction<number>) {
      return {
        ...state,
        scrollTop: payload,
      };
    },
  },
});

export const {
  setScrollTop,
} = actions;

export default reducer;
