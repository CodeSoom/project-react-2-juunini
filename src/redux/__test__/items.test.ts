import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Product } from 'src/services/products';
import reducer, {
  setItems,
  loadItems,
} from '../items';

jest.mock('src/services/items');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('items reducer', () => {
  const initialState: Record<number, Product> = {};

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setItems', () => {
    it('changes items', () => {
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

      const state = reducer(initialState, setItems([item]));

      expect(state).toEqual({ [item.id]: item });
    });
  });
});

describe('items actions', () => {
  describe('loadItems', () => {
    it('runs setItems', async () => {
      const store = mockStore({});

      await store.dispatch<Promise<Dispatch<AnyAction>>>(loadItems());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setItems([]));
    });
  });
});
