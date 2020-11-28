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
      const item: Product = {
        id: 1,
        brandId: 1,
        name: 'item name',
        price: 1,
        currency: 'item currency',
        category: 1,
        href: 'item href',
        images: ['item image 1'],
        sizes: ['item size 1'],
        description: 'item description',
      };

      const state = reducer(initialState, setProducts([item]));

      expect(state).toEqual({ [item.id]: item });
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
