import React from 'react';

import Product, { ProductProps } from 'src/components/Product';
import { List } from 'src/layout/products';

export type ProductsProps = {
  products: ProductProps[];
};

function Products({ products }: ProductsProps) {
  return (
    <List>
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
    </List>
  );
}

export default React.memo(Products);
