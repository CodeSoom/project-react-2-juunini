import { combineReducers } from '@reduxjs/toolkit';

import shopsReducer from 'src/redux/shops';
import productsReducer from 'src/redux/products';
import productReducer from 'src/redux/product';
import currenciesReducer from 'src/redux/currencies';
import taxesReducer from 'src/redux/taxes';
import layoutReducer from 'src/redux/layout';

const rootReducer = combineReducers({
  shops: shopsReducer,
  products: productsReducer,
  product: productReducer,
  currencies: currenciesReducer,
  taxes: taxesReducer,
  layout: layoutReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
