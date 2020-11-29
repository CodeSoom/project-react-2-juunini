import React from 'react';
import { round } from 'lodash';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import {
  Wrapper,
  ImageGalleryWrapper,
  ContentsWrapper,
} from 'src/layout/ProductDetail';

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
  const imageGallery = images.map((image) => ({ original: image, thumbnail: image }));

  return (
    <Wrapper>
      <ImageGalleryWrapper>
        <ImageGallery
          items={imageGallery}
          thumbnailPosition="left"
          showNav={false}
          showFullscreenButton={false}
          autoPlay
          slideInterval={5000}
        />
      </ImageGalleryWrapper>
      <ContentsWrapper>
        <p>{name}</p>
        <p>{brand}</p>
        <a href={href} target="_new">브랜드 페이지로 이동</a>
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
      </ContentsWrapper>
    </Wrapper>
  );
}

export default React.memo(ProductDetail);
