import React from 'react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { RootState } from 'src/redux/rootReducer';
import allConditionsState from 'fixtures/allConditionsState';
import ProductsContainer from '../ProductsContainer';

jest.mock('react-redux');

test('ProductsProductsContainer', () => {
  (useSelector as jest.Mock)
    .mockImplementation((selector: (arg: RootState) => void) => selector(allConditionsState));

  render((
    <MemoryRouter>
      <ProductsContainer />
    </MemoryRouter>
  ));
});
