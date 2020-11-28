import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Product } from 'src/services/products';
import reducer, {
  setProducts,
  loadProducts,
} from '../products';

jest.mock('src/services/products');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('products reducer', () => {
  const initialState: Record<number, Product> = {};

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setProducts', () => {
    it('changes products', () => {
      const product: Product = {
        id: 1,
        brandId: 1,
        name: 'product name',
        price: 1,
        currency: 'product currency',
        category: 1,
        href: 'product href',
        images: ['product image 1'],
        sizes: ['product size 1'],
        description: 'product description',
      };

      const state = reducer(initialState, setProducts([product]));

      expect(state).toEqual({ [product.id]: product });
    });
  });
});

describe('products actions', () => {
  describe('loadProducts', () => {
    it('runs setProducts', async () => {
      const store = mockStore({});

      await store.dispatch<Promise<Dispatch<AnyAction>>>(loadProducts());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setProducts([]));
    });
  });
});
