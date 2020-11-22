import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import { RootState } from 'src/redux/rootReducer';
import items from 'fixtures/items';
import ItemsContainer from '../ItemsContainer';

jest.mock('react-redux');

test('ItemsContainer', () => {
  (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
    shops: [],
    items,
  }));

  render(<ItemsContainer />);
});
