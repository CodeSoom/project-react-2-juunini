import { combineReducers } from '@reduxjs/toolkit';

import shopsReducer from './shops';
import productsReducer from './products';
import productReducer from './product';
import currenciesReducer from './currencies';
import taxesReducer from './taxes';

const rootReducer = combineReducers({
  shops: shopsReducer,
  products: productsReducer,
  product: productReducer,
  currencies: currenciesReducer,
  taxes: taxesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
