import React from 'react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { RootState } from 'src/redux/rootReducer';
import shops from 'fixtures/shops';
import items from 'fixtures/items';
import ItemsContainer from '../ItemsContainer';

jest.mock('react-redux');

test('ItemsContainer', () => {
  (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
    shops: shops.reduce((map, shop) => ({
      ...map,
      [shop.id]: shop,
    }), {}),
    items: items.reduce((map, item) => ({
      ...map,
      [item.id]: item,
    }), {}),
  }));

  render((
    <MemoryRouter>
      <ItemsContainer />
    </MemoryRouter>
  ));
});
