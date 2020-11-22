import React from 'react';
import { render, screen } from '@testing-library/react';

import Item from '../Item';

test('Item', () => {
  const {
    brand, name, price, currency, image, sizes,
  } = {
    brand: 'DISTURBIA',
    name: 'Stellar Oversized Jumper',
    price: 48,
    currency: '£',
    image: 'https://www.disturbia.co.uk/products/womens-all-tops/Stellar-Oversized-Jumper/image/15797.jpeg',
    sizes: ['XS-S', 'M-L', 'XL-2XL'],
  };

  render(<Item
    brand={brand}
    name={name}
    price={price}
    currency={currency}
    image={image}
    sizes={sizes}
  />);

  expect(screen.getByText(new RegExp(brand))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(name))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(String(price) + currency))).toBeInTheDocument();
  expect(screen.getByAltText('item')).toHaveAttribute('src', image);

  sizes.forEach((size) => {
    expect(screen.getByText(new RegExp(size))).toBeInTheDocument();
  });
});
