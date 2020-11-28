import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Item from '../Item';

test('Item', () => {
  const {
    id, brand, name, price, currency, image, sizes,
  } = {
    id: 1,
    brand: 'DISTURBIA',
    name: 'Stellar Oversized Jumper',
    price: 48,
    currency: '£',
    image: 'https://www.disturbia.co.uk/products/womens-all-tops/Stellar-Oversized-Jumper/image/15797.jpeg',
    sizes: ['XS-S', 'M-L', 'XL-2XL'],
  };

  render((
    <MemoryRouter>
      <Item
        id={id}
        brand={brand}
        name={name}
        finalPrice={price}
        currency={currency}
        image={image}
        sizes={sizes}
      />
    </MemoryRouter>
  ));

  expect(screen.getByText(new RegExp(brand))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(name))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(currency + price.toLocaleString()))).toBeInTheDocument();
  expect(screen.getByAltText('item')).toHaveAttribute('src', image);

  sizes.forEach((size) => {
    expect(screen.getByText(new RegExp(size))).toBeInTheDocument();
  });
});
