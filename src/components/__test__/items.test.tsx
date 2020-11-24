import React from 'react';
import { render } from '@testing-library/react';

import Items, { ItemsProps } from '../Items';

test('Items', () => {
  const { items, shops }: ItemsProps = {
    items: [
      {
        id: 1,
        brand_id: 1,
        name: 'Stellar Oversized Jumper',
        price: 48,
        currency: '£',
        href: 'https://www.disturbia.co.uk/products/womens-all-tops/Stellar-Oversized-Jumper',
        images: ['https://www.disturbia.co.uk/products/womens-all-tops/Stellar-Oversized-Jumper/image/15797.jpeg'],
        sizes: ['XS-S', 'M-L', 'XL-2XL'],
        description: 'Fine knit, super soft crew neck jumper.',
      },
    ],
    shops: {
      1: {
        id: 1,
        name: 'DISTURBIA',
      },
    },
  };

  render(<Items items={items} shops={shops} />);
});
