import React from 'react';
import { round } from 'lodash';

export type ProductDetailProps = {
  name: string;
  brand: string;
  href: string;
  images: string[];
  sizes: string[];
  description: string;

  price: number;
  currency: string;
  exchangeRate: number;
  taxRate: number;
  vatRate: number;
  deliveryFee: number;

  exchangePrice: number;
  tax: number;
  vat: number;
  exchangeDeliveryFee: number;
  finalPrice: number;
};

function ProductDetail({
  name, brand, href, images, sizes, description,
  price, currency, exchangeRate, taxRate, vatRate, deliveryFee,
  exchangePrice, tax, vat, exchangeDeliveryFee, finalPrice,
}: ProductDetailProps) {
  return (
    <div>
      <p>{name}</p>
      <p>{brand}</p>
      <a href={href} target="_new">브랜드 페이지로 이동</a>
      <div>
        {images.map((src) => <img key={src} src={src} alt="" />)}
      </div>
      <p>
        {
          sizes.map((size) => (
            <span key={size}>
              {size}
              {' '}
            </span>
          ))
        }
      </p>
      <p>{description}</p>

      <p>
        {currency}
        {price}
      </p>
      <p>
        {price}
        {' '}
        *
        {' '}
        {exchangeRate}
        {' '}
        =
        {' '}
        {exchangePrice}
      </p>
      <p>
        {exchangePrice}
        {' '}
        *
        {' '}
        {taxRate}
        {' '}
        =
        {' '}
        {tax}
      </p>
      <p>
        (
        {exchangePrice}
        {' '}
        +
        {' '}
        {tax}
        ) *
        {' '}
        {vatRate}
        {' '}
        =
        {' '}
        {vat}
      </p>
      <p>
        {deliveryFee}
        {' '}
        *
        {' '}
        {exchangeRate}
        {' '}
        =
        {' '}
        {exchangeDeliveryFee}
      </p>
      <p>
        {exchangePrice}
        {' '}
        +
        {' '}
        {tax}
        {' '}
        +
        {' '}
        {vat}
        {' '}
        +
        {' '}
        {exchangeDeliveryFee}
        {' '}
        =
        {' '}
        {finalPrice}
      </p>
      <p>
        {round(finalPrice)}
        원
      </p>
    </div>
  );
}

export default React.memo(ProductDetail);