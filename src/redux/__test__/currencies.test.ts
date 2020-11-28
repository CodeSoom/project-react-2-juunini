import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Currency } from 'src/services/currencies';
import reducer, {
  setCurrencies,
  loadCurrencies,
} from '../currencies';

jest.mock('src/services/currencies');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('products reducer', () => {
  const initialState: Record<string, Currency> = {};

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setCurrencies', () => {
    it('changes currencies', () => {
      const currency: Currency = {
        name: 'sample',
        symbol: '+',
        exchangeRate: 100,
      };

      const state = reducer(initialState, setCurrencies([currency]));

      expect(state).toEqual({ [currency.name]: currency });
    });
  });
});

describe('currencies actions', () => {
  describe('loadCurrencies', () => {
    it('runs setCurrencies', async () => {
      const store = mockStore({});

      await store.dispatch<Promise<Dispatch<AnyAction>>>(loadCurrencies());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCurrencies([]));
    });
  });
});
