import React from 'react';

export type ItemProps = {
  id?: number;
  brand: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  sizes: string[];
};

function Item({
  brand, name, price, currency, image, sizes,
}: ItemProps) {
  return (
    <li>
      <img src={image} alt="item" />
      <p>
        brand:
        {' '}
        {brand}
      </p>
      <p>
        name:
        {' '}
        {name}
      </p>
      <p>
        price:
        {' '}
        {price}
        {currency}
      </p>
      <p>
        sizes:
        {' '}
        {sizes.map((size) => (
          <span key={size}>{size}</span>
        ))}
      </p>
    </li>
  );
}

export default React.memo(Item);
