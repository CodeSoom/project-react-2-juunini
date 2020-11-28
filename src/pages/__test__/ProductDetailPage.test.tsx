import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { RootState } from 'src/redux/rootReducer';
import shops from 'fixtures/shops';
import items from 'fixtures/items';
import currencies from 'fixtures/currencies';
import taxes from 'fixtures/taxes';
import { loadShops } from 'src/redux/shops';
import { loadCurrencies } from 'src/redux/currencies';
import { loadTaxes } from 'src/redux/taxes';
import { loadProduct, setProduct } from 'src/redux/product';
import ProductDetailPage from '../ProductDetailPage';

jest.mock('react-redux');
jest.mock('react-router-dom', (): Record<string, unknown> => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));
jest.mock('src/services/shops');

describe('ProductDetailPage', () => {
  const dispatch = jest.fn();
  const productInitialState = {
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
  const allConditions = {
    shops: shops.reduce((map, shop) => ({
      ...map,
      [shop.id]: shop,
    }), {}),
    items: items.reduce((map, item) => ({
      ...map,
      [item.id]: item,
    }), {}),
    product: productInitialState,
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
    (useSelector as jest.Mock).mockClear();
  });

  function mockState(state: RootState) {
    (useSelector as jest.Mock)
      .mockImplementation((selector: (arg: RootState) => void) => selector(state));
  }

  function renderProductDetailPage() {
    return render((
      <MemoryRouter>
        <ProductDetailPage />
      </MemoryRouter>
    ));
  }

  context('with all conditions', () => {
    it('renders ProductDetailPage', () => {
      mockState(allConditions);

      renderProductDetailPage();

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('without shops', () => {
    it('renders ProductDetailPage', () => {
      mockState({
        ...allConditions,
        shops: {},
      });

      expect(dispatch).not.toBeCalled();

      renderProductDetailPage();

      expect(screen.getByText(/loading/)).toBeInTheDocument();
      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('without currencies', () => {
    it('renders ProductDetailPage', () => {
      mockState({
        ...allConditions,
        currencies: {},
      });

      expect(dispatch).not.toBeCalled();

      renderProductDetailPage();

      expect(screen.getByText(/loading/)).toBeInTheDocument();
      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('without taxes', () => {
    it('renders ProductDetailPage', () => {
      mockState({
        ...allConditions,
        taxes: {},
      });

      expect(dispatch).not.toBeCalled();

      renderProductDetailPage();

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('without items', () => {
    it('renders ProductDetailPage', () => {
      mockState({
        ...allConditions,
        items: {},
      });

      expect(dispatch).not.toBeCalled();

      renderProductDetailPage();

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
