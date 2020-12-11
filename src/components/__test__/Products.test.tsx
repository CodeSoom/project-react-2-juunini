import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Products, { ProductsProps } from '../Products';

test('Products', () => {
  const { products }: ProductsProps = {
    products: [
      {
        id: 1,
        brand: 'DISTURBIA',
        brandImage: '/img/brands/DISTURBIA.svg',
        name: 'Stellar Oversized Jumper',
        finalPrice: 87736,
        currency: '£',
        image: 'https://www.disturbia.co.uk/products/womens-all-tops/Stellar-Oversized-Jumper/image/15797.jpeg',
        sizes: ['XS-S', 'M-L', 'XL-2XL'],
      },
    ],
  };

  render((
    <MemoryRouter>
      <Products products={products} />
    </MemoryRouter>
  ));
});
