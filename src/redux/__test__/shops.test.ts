import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Shop } from 'src/services/shops';
import reducer, {
  setShops,
  loadShops,
} from '../shops';

jest.mock('src/services/shops');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('shops reducer', () => {
  const initialState: {[id: number]: Shop} = {};

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setShops', () => {
    it('changes shops', () => {
      const shop: Shop = {
        id: 1,
        name: 'KILLSTAR',
      };

      const state = reducer(initialState, setShops([shop]));

      expect(state).toEqual({ [shop.id]: shop });
    });
  });
});

describe('shops actions', () => {
  describe('loadShops', () => {
    it('runs setShops', async () => {
      const store = mockStore({});

      await store.dispatch<Promise<Dispatch<AnyAction>>>(loadShops());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setShops([]));
    });
  });
});
