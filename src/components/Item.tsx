import React from 'react';
import { Item as ItemProps } from 'src/services/items';

function Item({
  brand, name, price, currency, images, sizes,
}: ItemProps) {
  return (
    <li>
      <img src={images[0]} alt="item" />
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
