import React from 'react';
import { ceil, isEmpty } from 'lodash';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import {
  Wrapper,
  ImageGalleryWrapper,
  ContentsWrapper,
  BrandLogoWrapper,
  BrandLogo,
  Name,
  SourcePageAnchorWrapper,
  SourcePageAnchor,
  PriceWrapper,
  PriceRow,
  PriceRowTitle,
  PriceRowValue,
  PriceRowCalculate,
  SizeWraper,
  Size,
  SoldOut,
  DescriptionWrapper,
  DescriptionRow,
} from 'src/layout/ProductDetail';

export type ProductDetailPropsWrapper = {
  props: ProductDetailProps;
};

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

function ProductDetail({ props }: ProductDetailPropsWrapper) {
  const {
    name, brand, href, images, sizes, description,
    price, currency, exchangeRate, taxRate, vatRate, deliveryFee,
    exchangePrice, tax, vat, exchangeDeliveryFee, finalPrice,
  } = props;
  const imageGallery = images.map((image) => ({ original: image, thumbnail: image }));

  return (
    <Wrapper>
      <ImageGalleryWrapper>
        <ImageGallery
          items={imageGallery}
          thumbnailPosition="bottom"
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

        <SourcePageAnchorWrapper>
          <SourcePageAnchor href={href} target="_new">
            브랜드 페이지로 이동
          </SourcePageAnchor>
        </SourcePageAnchorWrapper>

        <PriceWrapper>
          <PriceRow>
            <PriceRowTitle>판매가격</PriceRowTitle>
            <PriceRowValue>{`${currency}${price.toLocaleString()}`}</PriceRowValue>
            <PriceRowCalculate>{`${!taxRate && !vatRate ? 'inc. tax' : ''}`}</PriceRowCalculate>
          </PriceRow>
          <PriceRow>
            <PriceRowTitle>환율계산</PriceRowTitle>
            <PriceRowValue>{`₩${ceil(exchangePrice).toLocaleString()}`}</PriceRowValue>
            <PriceRowCalculate>{`${price} × ${exchangeRate}`}</PriceRowCalculate>
          </PriceRow>
          {
            taxRate ? (
              <PriceRow>
                <PriceRowTitle>관세</PriceRowTitle>
                <PriceRowValue>{`₩${ceil(tax).toLocaleString()}`}</PriceRowValue>
                <PriceRowCalculate>{`${exchangePrice} × ${taxRate}`}</PriceRowCalculate>
              </PriceRow>
            ) : null
          }
          {
            vatRate ? (
              <PriceRow>
                <PriceRowTitle>부가세</PriceRowTitle>
                <PriceRowValue>{`₩${ceil(vat).toLocaleString()}`}</PriceRowValue>
                <PriceRowCalculate>{`(${exchangePrice} + ${tax}) × ${vatRate}`}</PriceRowCalculate>
              </PriceRow>
            ) : null
          }
          <PriceRow>
            <PriceRowTitle>배송비</PriceRowTitle>
            <PriceRowValue>{`₩${ceil(exchangeDeliveryFee).toLocaleString()}`}</PriceRowValue>
            <PriceRowCalculate>{`${deliveryFee} × ${exchangeRate}`}</PriceRowCalculate>
          </PriceRow>
          <PriceRow>
            <PriceRowTitle>최종가격</PriceRowTitle>
            <PriceRowValue>{`₩${ceil(finalPrice).toLocaleString()}`}</PriceRowValue>
            <PriceRowCalculate>{`${exchangePrice}${tax ? ` + ${tax}` : ''}${vat ? ` + ${vat}` : ''} + ${exchangeDeliveryFee}`}</PriceRowCalculate>
          </PriceRow>
        </PriceWrapper>

        <SizeWraper>
          {
            isEmpty(sizes)
              ? <SoldOut>Sold Out</SoldOut>
              : (
                sizes.map((size) => (
                  <Size key={size}>
                    {size}
                  </Size>
                ))
              )
          }
        </SizeWraper>
        <DescriptionWrapper>
          {
            description
              .split('\n')
              .map((row, i) => <DescriptionRow key={row || i}>{row}</DescriptionRow>)
          }
        </DescriptionWrapper>

      </ContentsWrapper>
    </Wrapper>
  );
}

export default React.memo(ProductDetail);
