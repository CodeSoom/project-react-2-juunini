import React from 'react';
import { isEmpty } from 'lodash';

import {
  Card, Img, BrandLogo,
  CardLink, Name, Price,
  SizeWrapper, Size, Soldout,
} from 'src/layout/products';

export type ProductProps = {
  id: number;
  brand: string;
  brandImage: string;
  name: string;
  finalPrice: number;
  currency: string;
  image: string;
  sizes: string[];
};

function Product({
  id, brand, brandImage, name, finalPrice, currency, image, sizes,
}: ProductProps) {
  const Sizes = isEmpty(sizes)
    ? <Soldout>Sold Out</Soldout>
    : sizes.map((size) => (
      <Size key={size}>
        {size}
      </Size>
    ));

  return (
    <Card>
      <CardLink to={`/products/${id}`}>
        <BrandLogo src={brandImage} alt={brand} />
        <Img src={image} alt="product" />
        <Name>
          {name}
        </Name>
        <Price>
          {currency}
          {finalPrice.toLocaleString()}
        </Price>
        <SizeWrapper>
          {Sizes}
        </SizeWrapper>
      </CardLink>
    </Card>
  );
}

export default React.memo(Product);
