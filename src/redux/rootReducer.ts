import { combineReducers } from '@reduxjs/toolkit';

import shopsReducer from './shops';
import itemsReducer from './items';

const rootReducer = combineReducers({
  shops: shopsReducer,
  items: itemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
