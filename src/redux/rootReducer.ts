import { combineReducers } from '@reduxjs/toolkit';

import shopsReducer from './shops';
import itemsReducer from './items';
import productReducer from './product';

const rootReducer = combineReducers({
  shops: shopsReducer,
  items: itemsReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
