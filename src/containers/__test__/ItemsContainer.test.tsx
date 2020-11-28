import React from 'react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { RootState } from 'src/redux/rootReducer';
import allConditionsState from 'fixtures/allConditionsState';
import ItemsContainer from '../ItemsContainer';

jest.mock('react-redux');

test('ItemsContainer', () => {
  (useSelector as jest.Mock)
    .mockImplementation((selector: (arg: RootState) => void) => selector(allConditionsState));

  render((
    <MemoryRouter>
      <ItemsContainer />
    </MemoryRouter>
  ));
});
