import React from 'react';
import { render, screen } from '@testing-library/react';
import { ceil } from 'lodash';

import ProductDetail, { ProductDetailProps } from '../ProductDetail';

describe('ProductDetail', () => {
  const toBeInTheDocument = (target: string) => {
    expect(screen.getAllByText(new RegExp(target))).not.toHaveLength(0);
  };

  context('with sizes', () => {
    it('renders product detail component', () => {
      const props: ProductDetailProps = {
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
        props={props}
      />);

      toBeInTheDocument(props.name);
      toBeInTheDocument(props.description);
      toBeInTheDocument(props.currency);

      props.sizes.forEach((size) => toBeInTheDocument(size));

      toBeInTheDocument(props.price.toString());
      toBeInTheDocument(props.exchangeRate.toString());
      toBeInTheDocument(props.taxRate.toString());
      toBeInTheDocument(props.vatRate.toString());
      toBeInTheDocument(props.deliveryFee.toString());

      toBeInTheDocument(props.exchangePrice.toString());
      toBeInTheDocument(props.tax.toString());
      toBeInTheDocument(props.vat.toString());
      toBeInTheDocument(props.exchangeDeliveryFee.toString());
      toBeInTheDocument(ceil(props.finalPrice).toLocaleString());
    });
  });

  context('without sizes', () => {
    it('renders sold out', () => {
      const props: ProductDetailProps = {
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
        props={props}
      />);

      toBeInTheDocument('Sold Out');
    });
  });
});
