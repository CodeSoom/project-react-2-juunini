import { combineReducers } from '@reduxjs/toolkit';

import shopsReducer from './shops';

const rootReducer = combineReducers({
  shops: shopsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
