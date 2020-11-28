import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Tax } from 'src/services/taxes';
import reducer, {
  setTaxes,
  loadTaxes,
} from '../taxes';

jest.mock('src/services/taxes');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('taxes reducer', () => {
  const initialState: Record<number, Tax> = {};

  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setTaxes', () => {
    it('changes taxes', () => {
      const tax: Tax = {
        id: 1,
        name: 'clothes',
        taxRate: 0.13,
        vatRate: 0.1,
      };

      const state = reducer(initialState, setTaxes([tax]));

      expect(state).toEqual({ [tax.id]: tax });
    });
  });
});

describe('taxes actions', () => {
  describe('loadTaxes', () => {
    it('runs setTaxes', async () => {
      const store = mockStore({});

      await store.dispatch<Promise<Dispatch<AnyAction>>>(loadTaxes());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setTaxes([]));
    });
  });
});
