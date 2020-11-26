import React from 'react';
import { Link } from 'react-router-dom';

export type ItemProps = {
  id: number;
  brand: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  sizes: string[];
};

function Item({
  id, brand, name, price, currency, image, sizes,
}: ItemProps) {
  return (
    <li>
      <Link to={`/product/${id}`}>
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
      </Link>
    </li>
  );
}

export default React.memo(Item);
