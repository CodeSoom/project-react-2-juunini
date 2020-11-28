import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Item } from 'src/services/items';
import reducer, {
  setProduct,
  loadProduct,
} from '../product';

jest.mock('src/services/products');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('items reducer', () => {
  const initialState: Item = {
    id: 0,
    brand_id: 0,
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
      const product: Item = {
        id: 0,
        brand_id: 1,
        name: 'item name',
        price: 1,
        currency: 'item currency',
        href: 'item href',
        category: 1,
        images: ['item image 1'],
        sizes: ['item size 1'],
        description: 'item description',
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
