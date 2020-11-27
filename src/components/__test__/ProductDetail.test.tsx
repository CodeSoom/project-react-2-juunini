import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductDetail, { ProductDetailProps } from '../ProductDetail';

test('ProductDetail', () => {
  const {
    name,
    brand,
    href,
    images,
    sizes,
    description,

    price,
    currency,
    exchangeRate,
    taxRate,
    vatRate,
    deliveryFee,
  }: ProductDetailProps = {
    name: 'product name',
    brand: 'brand name',
    href: 'https://brand/products/href',
    images: ['image src'],
    sizes: ['size1'],
    description: 'product description',

    price: 150,
    currency: '£',
    exchangeRate: 1478.02,
    taxRate: 13,
    vatRate: 10,
    deliveryFee: 20,
  };

  render(<ProductDetail
    name={name}
    brand={brand}
    href={href}
    images={images}
    sizes={sizes}
    description={description}
    price={price}
    currency={currency}
    exchangeRate={exchangeRate}
    taxRate={taxRate}
    vatRate={vatRate}
    deliveryFee={deliveryFee}
  />);
});
