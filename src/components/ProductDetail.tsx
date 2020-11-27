import React from 'react';

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
};

function ProductDetail({
  name, brand, href, images, sizes, description,
  price, currency, exchangeRate, taxRate, vatRate, deliveryFee,
}: ProductDetailProps) {
  const exchangePrice = price * exchangeRate;
  const tax = exchangePrice * taxRate;
  const vat = (exchangePrice + tax) * vatRate;
  const exchangedeliveryFee = deliveryFee * exchangeRate;
  const finalPrice = exchangePrice + tax + vat + deliveryFee;

  return (
    <div>
      <p>{name}</p>
      <p>{brand}</p>
      <a href={href}>브랜드 페이지로 이동</a>
      <div>
        {images.map((src) => (<img key={src} src={src} alt="" />))}
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
        {exchangedeliveryFee}
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
        {exchangedeliveryFee}
        {' '}
        =
        {' '}
        {finalPrice}
      </p>
    </div>
  );
}

export default React.memo(ProductDetail);
