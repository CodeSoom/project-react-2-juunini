import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { RootState } from 'src/redux/rootReducer';
import allConditionsState from 'fixtures/allConditionsState';
import ProductsPage from '../ProductsPage';

jest.mock('react-redux');

test('ItemsPage', () => {
  const dispatch = jest.fn();

  (useDispatch as jest.Mock).mockImplementation(() => dispatch);

  (useSelector as jest.Mock)
    .mockImplementation((selector: (arg: RootState) => void) => selector(allConditionsState));

  render((
    <MemoryRouter>
      <ProductsPage />
    </MemoryRouter>
  ));

  expect(dispatch).toBeCalled();
});
