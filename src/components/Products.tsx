import React from 'react';

import Product, { ProductProps } from './Product';

export type ProductsProps = {
  products: ProductProps[];
};

function Products({ products }: ProductsProps) {
  return (
    <ul>
      {
        products.map(({
          id, brand, name, finalPrice, currency, image, sizes,
        }) => (
          <Product
            key={id}
            id={id}
            brand={brand}
            name={name}
            finalPrice={finalPrice}
            currency={currency}
            image={image}
            sizes={sizes}
          />
        ))
      }
    </ul>
  );
}

export default React.memo(Products);
