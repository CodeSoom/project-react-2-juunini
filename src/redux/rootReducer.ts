import { combineReducers } from '@reduxjs/toolkit';

import shopsReducer from './shops';
import itemsReducer from './items';
import productReducer from './product';
import currenciesReducer from './currencies';

const rootReducer = combineReducers({
  shops: shopsReducer,
  items: itemsReducer,
  product: productReducer,
  currencies: currenciesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
