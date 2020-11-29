import React from 'react';
import { round } from 'lodash';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import {
  Wrapper,
  ImageGalleryWrapper,
  ContentsWrapper,
  BrandLogoWrapper,
  BrandLogo,
  Name,
  SizeWraper,
  Size,
  DescriptionWrapper,
  DescriptionRow,
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
  const descriptionRows = description.split('\n').map((row) => (<DescriptionRow>{row}</DescriptionRow>));

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
        <BrandLogoWrapper>
          <BrandLogo src={`/img/brands/${brand}.png`} />
        </BrandLogoWrapper>
        <Name>{name}</Name>
        <a href={href} target="_new">브랜드 페이지로 이동</a>
        <SizeWraper>
          {
            sizes.map((size) => (
              <Size key={size}>
                {size}
              </Size>
            ))
          }
        </SizeWraper>
        <DescriptionWrapper>
          {
            description
              .split('\n')
              .map((row) => <DescriptionRow key={row}>{row}</DescriptionRow>)
          }
        </DescriptionWrapper>

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
