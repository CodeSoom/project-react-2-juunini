import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { RootState } from 'src/redux/rootReducer';
import products from 'fixtures/products';
import allConditionsState from 'fixtures/allConditionsState';
import ProductDetailContainer from '../ProductDetailContainer';

jest.mock('react-redux');

describe('ProductDetailContainer', () => {
  context('without include tax', () => {
    it('renders container', () => {
      (useSelector as jest.Mock)
        .mockImplementation((selector: (arg: RootState) => void) => selector({
          ...allConditionsState,
          product: products[0],
        }));

      render(<ProductDetailContainer />);
    });
  });

  context('with include tax', () => {
    it('renders container', () => {
      (useSelector as jest.Mock)
        .mockImplementation((selector: (arg: RootState) => void) => selector({
          ...allConditionsState,
          product: products[4],
        }));

      render(<ProductDetailContainer />);
    });
  });

  context('over minimum free delivery price', () => {
    it('renders container', () => {
      (useSelector as jest.Mock)
        .mockImplementation((selector: (arg: RootState) => void) => selector({
          ...allConditionsState,
          product: { ...products[0], price: 300 },
        }));

      render(<ProductDetailContainer />);
    });
  });

  context('without shops', () => {
    it('renders loading', () => {
      (useSelector as jest.Mock)
        .mockImplementation((selector: (arg: RootState) => void) => selector({
          ...allConditionsState,
          shops: {},
          product: { ...products[0], price: 300 },
        }));

      render(<ProductDetailContainer />);

      expect(screen.getByText(/loading/)).toBeInTheDocument();
    });
  });

  context('without currencies', () => {
    it('renders loading', () => {
      (useSelector as jest.Mock)
        .mockImplementation((selector: (arg: RootState) => void) => selector({
          ...allConditionsState,
          currencies: {},
          product: { ...products[0], price: 300 },
        }));

      render(<ProductDetailContainer />);

      expect(screen.getByText(/loading/)).toBeInTheDocument();
    });
  });
});
