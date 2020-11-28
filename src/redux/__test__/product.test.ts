import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Product } from 'src/services/products';
import reducer, {
  setProduct,
  loadProduct,
} from '../product';

jest.mock('src/services/products');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('products reducer', () => {
  const initialState: Product = {
    id: 0,
    brandId: 0,
    name: '',
    price: 0,
    currency: '',
    category: 0,
    href: '',
    images: [],
    sizes: [],
    description: '',
  };

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setProduct', () => {
    it('changes product', () => {
      const product: Product = {
        id: 0,
        brandId: 1,
        name: 'product name',
        price: 1,
        currency: 'product currency',
        href: 'product href',
        category: 1,
        images: ['product image 1'],
        sizes: ['product size 1'],
        description: 'product description',
      };

      const state = reducer(initialState, setProduct(product));

      expect(state).toEqual(product);
    });
  });
});

describe('product actions', () => {
  describe('loadProduct', () => {
    it('runs setProduct', async () => {
      const store = mockStore({});

      await store.dispatch<Promise<Dispatch<AnyAction>>>(loadProduct(1));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setProduct({}));
    });
  });
});
