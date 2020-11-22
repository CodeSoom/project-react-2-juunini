import React from 'react';
import { render, screen } from '@testing-library/react';

import Item from '../Item';

test('Item', () => {
  const {
    brand, name, price, currency, href, images, sizes, description,
  } = {
    brand: 'DISTURBIA',
    name: 'Stellar Oversized Jumper',
    price: 48,
    currency: '£',
    href: 'https://www.disturbia.co.uk/products/womens-all-tops/Stellar-Oversized-Jumper',
    images: ['https://www.disturbia.co.uk/products/womens-all-tops/Stellar-Oversized-Jumper/image/15797.jpeg'],
    sizes: ['XS-S', 'M-L', 'XL-2XL'],
    description: '',
  };

  render(<Item
    id={1}
    brand={brand}
    name={name}
    price={price}
    currency={currency}
    href={href}
    images={images}
    sizes={sizes}
    description={description}
  />);

  expect(screen.getByText(new RegExp(brand))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(name))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(String(price) + currency))).toBeInTheDocument();
  expect(screen.getByAltText('item')).toHaveAttribute('src', images[0]);

  sizes.forEach((size) => {
    expect(screen.getByText(new RegExp(size))).toBeInTheDocument();
  });
});
