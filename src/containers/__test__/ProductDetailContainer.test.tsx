import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import { RootState } from 'src/redux/rootReducer';
import shops from 'fixtures/shops';
import product from 'fixtures/product';
import currencies from 'fixtures/currencies';
import ProductDetailContainer from '../ProductDetailContainer';

jest.mock('react-redux');

describe('ProductDetailContainer', () => {
  it('renders container', () => {
    (useSelector as jest.Mock).mockImplementation((selector: (arg: RootState) => void) => selector({
      shops: shops.reduce((map, shop) => ({
        ...map,
        [shop.id]: shop,
      }), {}),
      product,
      currencies,
    }));

    render(<ProductDetailContainer />);
  });
});
