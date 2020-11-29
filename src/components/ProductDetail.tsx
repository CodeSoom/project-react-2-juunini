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
  PriceWrapper,
  PriceRow,
  PriceRowTitle,
  PriceRowValue,
  PriceRowCalculate,
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

        <a href={href} target="_new" style={{ display: 'block', marginBottom: '1em' }}>브랜드 페이지로 이동</a>

        <PriceWrapper>
          <PriceRow>
            <PriceRowTitle>원래가격</PriceRowTitle>
            <PriceRowValue>{`${currency}${price}`}</PriceRowValue>
          </PriceRow>
          <PriceRow>
            <PriceRowTitle>환전가격</PriceRowTitle>
            <PriceRowValue>{`₩${exchangePrice}`}</PriceRowValue>
            <PriceRowCalculate>{`${price} × ${exchangeRate}`}</PriceRowCalculate>
          </PriceRow>
          <PriceRow>
            <PriceRowTitle>관세</PriceRowTitle>
            <PriceRowValue>{`₩${tax}`}</PriceRowValue>
            <PriceRowCalculate>{`${exchangePrice} × ${taxRate}`}</PriceRowCalculate>
          </PriceRow>
          <PriceRow>
            <PriceRowTitle>부가세</PriceRowTitle>
            <PriceRowValue>{`₩${vat}`}</PriceRowValue>
            <PriceRowCalculate>{`(${exchangePrice} + ${tax}) × ${vatRate}`}</PriceRowCalculate>
          </PriceRow>
          <PriceRow>
            <PriceRowTitle>배송비</PriceRowTitle>
            <PriceRowValue>{`₩${exchangeDeliveryFee}`}</PriceRowValue>
            <PriceRowCalculate>{`${deliveryFee} × ${exchangeRate}`}</PriceRowCalculate>
          </PriceRow>
          <PriceRow>
            <PriceRowTitle>최종가격</PriceRowTitle>
            <PriceRowValue>{`₩${round(finalPrice)}`}</PriceRowValue>
            <PriceRowCalculate>{`${exchangePrice} + ${tax} + ${vat} + ${exchangeDeliveryFee}`}</PriceRowCalculate>
          </PriceRow>
        </PriceWrapper>

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

      </ContentsWrapper>
    </Wrapper>
  );
}

export default React.memo(ProductDetail);
