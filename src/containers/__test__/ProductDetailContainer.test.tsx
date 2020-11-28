import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { RootState } from 'src/redux/rootReducer';
import shops from 'fixtures/shops';
import items from 'fixtures/items';
import currencies from 'fixtures/currencies';
import taxes from 'fixtures/taxes';
import ProductDetailContainer from '../ProductDetailContainer';

jest.mock('react-redux');

describe('ProductDetailContainer', () => {
  context('without include tax', () => {
    it('renders container', () => {
      (useSelector as jest.Mock)
        .mockImplementation((selector: (arg: RootState) => void) => selector({
          shops: shops.reduce((map, shop) => ({
            ...map,
            [shop.id]: shop,
          }), {}),
          items: {},
          product: items[0],
          currencies: currencies.reduce((map, currency) => ({
            ...map,
            [currency.name]: currency,
          }), {}),
          taxes: taxes.reduce((map, tax) => ({
            ...map,
            [tax.id]: tax,
          }), {}),
        }));

      render(<ProductDetailContainer />);
    });
  });

  context('with include tax', () => {
    it('renders container', () => {
      (useSelector as jest.Mock)
        .mockImplementation((selector: (arg: RootState) => void) => selector({
          shops: shops.reduce((map, shop) => ({
            ...map,
            [shop.id]: shop,
          }), {}),
          items: {},
          product: items[4],
          currencies: currencies.reduce((map, currency) => ({
            ...map,
            [currency.name]: currency,
          }), {}),
          taxes: taxes.reduce((map, tax) => ({
            ...map,
            [tax.id]: tax,
          }), {}),
        }));

      render(<ProductDetailContainer />);
    });
  });

  context('over minimum free delivery price', () => {
    it('renders container', () => {
      (useSelector as jest.Mock)
        .mockImplementation((selector: (arg: RootState) => void) => selector({
          shops: shops.reduce((map, shop) => ({
            ...map,
            [shop.id]: shop,
          }), {}),
          items: {},
          product: { ...items[0], price: 300 },
          currencies: currencies.reduce((map, currency) => ({
            ...map,
            [currency.name]: currency,
          }), {}),
          taxes: taxes.reduce((map, tax) => ({
            ...map,
            [tax.id]: tax,
          }), {}),
        }));

      render(<ProductDetailContainer />);
    });
  });

  context('without shops', () => {
    it('renders loading', () => {
      (useSelector as jest.Mock)
        .mockImplementation((selector: (arg: RootState) => void) => selector({
          shops: {},
          items: {},
          product: { ...items[0], price: 300 },
          currencies: currencies.reduce((map, currency) => ({
            ...map,
            [currency.name]: currency,
          }), {}),
          taxes: taxes.reduce((map, tax) => ({
            ...map,
            [tax.id]: tax,
          }), {}),
        }));

      render(<ProductDetailContainer />);

      expect(screen.getByText(/loading/)).toBeInTheDocument();
    });
  });

  context('without currencies', () => {
    it('renders loading', () => {
      (useSelector as jest.Mock)
        .mockImplementation((selector: (arg: RootState) => void) => selector({
          shops: shops.reduce((map, shop) => ({
            ...map,
            [shop.id]: shop,
          }), {}),
          items: {},
          product: { ...items[0], price: 300 },
          currencies: {},
          taxes: taxes.reduce((map, tax) => ({
            ...map,
            [tax.id]: tax,
          }), {}),
        }));

      render(<ProductDetailContainer />);

      expect(screen.getByText(/loading/)).toBeInTheDocument();
    });
  });
});
