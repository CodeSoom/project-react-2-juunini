import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Items, { ItemsProps } from '../Items';

test('Items', () => {
  const { items, shops }: ItemsProps = {
    items: [
      {
        id: 1,
        brandId: 1,
        name: 'Stellar Oversized Jumper',
        price: 48,
        currency: '£',
        category: 1,
        href: 'https://www.disturbia.co.uk/products/womens-all-tops/Stellar-Oversized-Jumper',
        images: ['https://www.disturbia.co.uk/products/womens-all-tops/Stellar-Oversized-Jumper/image/15797.jpeg'],
        sizes: ['XS-S', 'M-L', 'XL-2XL'],
        description: 'Fine knit, super soft crew neck jumper.',
      },
    ],
    shops: {
      1: {
        id: 1,
        name: 'KILLSTAR',
        deliveryFee: 4.99,
        minimumFreeDeliveryPrice: 150,
        includeTax: false,
      },
    },
  };

  render((
    <MemoryRouter>
      <Items items={items} shops={shops} />
    </MemoryRouter>
  ));
});
