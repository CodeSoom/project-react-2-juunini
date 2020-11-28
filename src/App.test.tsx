import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import { RootState } from 'src/redux/rootReducer';
import shops from 'fixtures/shops';
import products from 'fixtures/products';
import currencies from 'fixtures/currencies';
import taxes from 'fixtures/taxes';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  const allConditions = {
    shops: shops.reduce((map, shop) => ({
      ...map,
      [shop.id]: shop,
    }), {}),
    products: products.reduce((map, item) => ({
      ...map,
      [item.id]: item,
    }), {}),
    product: products[0],
    currencies: currencies.reduce((map, currency) => ({
      ...map,
      [currency.name]: currency,
    }), {}),
    taxes: taxes.reduce((map, tax) => ({
      ...map,
      [tax.id]: tax,
    }), {}),
  };

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useSelector as jest.Mock)
      .mockImplementation((selector: (arg: RootState) => void) => selector(allConditions));
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
});
