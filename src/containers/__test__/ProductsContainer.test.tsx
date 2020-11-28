import React from 'react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { RootState } from 'src/redux/rootReducer';
import allConditionsState from 'fixtures/allConditionsState';
import ProductsContainer from '../ProductsContainer';

jest.mock('react-redux');

describe('ProductsProductsContainer', () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockClear();
  });

  function mockState(state: RootState) {
    (useSelector as jest.Mock)
      .mockImplementationOnce(
        (selector: (arg: RootState) => void) => selector(state),
      );
  }

  context('with all conditions', () => {
    it('renders container', () => {
      mockState(allConditionsState);

      render((
        <MemoryRouter>
          <ProductsContainer />
        </MemoryRouter>
      ));
    });
  });

  context('without currencies', () => {
    it('renders loading', () => {
      mockState({
        ...allConditionsState,
        currencies: {},
      });

      render((
        <MemoryRouter>
          <ProductsContainer />
        </MemoryRouter>
      ));

      expect(screen.getByText(/loading/)).toBeInTheDocument();
    });
  });

  context('without shops', () => {
    it('renders loading', () => {
      mockState({
        ...allConditionsState,
        shops: {},
      });

      render((
        <MemoryRouter>
          <ProductsContainer />
        </MemoryRouter>
      ));

      expect(screen.getByText(/loading/)).toBeInTheDocument();
    });
  });
});
