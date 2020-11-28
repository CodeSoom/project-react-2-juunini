import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import { RootState } from 'src/redux/rootReducer';
import allConditionsState from 'fixtures/allConditionsState';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock)
      .mockImplementation((selector: (arg: RootState) => void) => selector(allConditionsState));
  });

  function renderApp({ path }: {path: string}) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders products page', () => {
      renderApp({ path: '/' });
    });
  });

  context('with path /products/1', () => {
    it('renders product detail page', () => {
      renderApp({ path: '/products/1' });
    });
  });

  context('with path /not-found', () => {
    it('renders not found page', () => {
      renderApp({ path: '/not-found' });
    });
  });
});
