import React from 'react';
import { Link } from 'react-router-dom';

export type ProductProps = {
  id: number;
  brand: string;
  name: string;
  finalPrice: number;
  currency: string;
  image: string;
  sizes: string[];
};

function Product({
  id, brand, name, finalPrice, currency, image, sizes,
}: ProductProps) {
  return (
    <li>
      <Link to={`/products/${id}`}>
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
          {currency}
          {finalPrice.toLocaleString()}
        </p>
        <p>
          sizes:
          {' '}
          {sizes.map((size) => (
            <span key={size}>
              {size}
              {' '}
            </span>
          ))}
        </p>
      </Link>
    </li>
  );
}

export default React.memo(Product);
