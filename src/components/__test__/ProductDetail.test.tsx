import React from 'react';
import { render, screen } from '@testing-library/react';
import { round } from 'lodash';

import ProductDetail, { ProductDetailProps } from '../ProductDetail';

describe('ProductDetail', () => {
  const toBeInTheDocument = (target: string) => {
    expect(screen.getAllByText(new RegExp(target))).not.toHaveLength(0);
  };

  context('with sizes', () => {
    it('renders product detail component', () => {
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

        exchangePrice,
        tax,
        vat,
        exchangeDeliveryFee,
        finalPrice,
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
        taxRate: 0.13,
        vatRate: 0.1,
        deliveryFee: 20,

        exchangePrice: 211703,
        tax: 28821.39,
        vat: 24052.439,
        exchangeDeliveryFee: 29560.4,
        finalPrice: 294164.229,
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
        exchangePrice={exchangePrice}
        tax={tax}
        vat={vat}
        exchangeDeliveryFee={exchangeDeliveryFee}
        finalPrice={finalPrice}
      />);

      toBeInTheDocument(name);
      toBeInTheDocument(description);
      toBeInTheDocument(currency);

      sizes.forEach((size) => toBeInTheDocument(size));

      toBeInTheDocument(price.toString());
      toBeInTheDocument(exchangeRate.toString());
      toBeInTheDocument(taxRate.toString());
      toBeInTheDocument(vatRate.toString());
      toBeInTheDocument(deliveryFee.toString());

      toBeInTheDocument(exchangePrice.toString());
      toBeInTheDocument(tax.toString());
      toBeInTheDocument(vat.toString());
      toBeInTheDocument(exchangeDeliveryFee.toString());
      toBeInTheDocument(round(finalPrice).toLocaleString());
    });
  });

  context('without sizes', () => {
    it('renders sold out', () => {
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

        exchangePrice,
        tax,
        vat,
        exchangeDeliveryFee,
        finalPrice,
      }: ProductDetailProps = {
        name: 'product name',
        brand: 'brand name',
        href: 'https://brand/products/href',
        images: ['image src'],
        sizes: [],
        description: 'product description',

        price: 150,
        currency: '£',
        exchangeRate: 1478.02,
        taxRate: 0.13,
        vatRate: 0.1,
        deliveryFee: 20,

        exchangePrice: 211703,
        tax: 28821.39,
        vat: 24052.439,
        exchangeDeliveryFee: 29560.4,
        finalPrice: 294164.229,
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
        exchangePrice={exchangePrice}
        tax={tax}
        vat={vat}
        exchangeDeliveryFee={exchangeDeliveryFee}
        finalPrice={finalPrice}
      />);

      toBeInTheDocument('Sold Out');
    });
  });
});
