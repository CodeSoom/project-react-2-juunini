import React from 'react';

import {
  Card, Img, BrandLogo,
  CardLink, Name, Price,
  SizeWrapper, Size,
} from 'src/layout/products';

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
    <Card>
      <CardLink to={`/products/${id}`}>
        <BrandLogo src={`/img/brands/${brand}.png`} alt="" />
        <Img src={image} alt="product" />
        <Name>
          {name}
        </Name>
        <Price>
          {currency}
          {finalPrice.toLocaleString()}
        </Price>
        <SizeWrapper>
          {sizes.map((size) => (
            <Size key={size}>
              {size}
            </Size>
          ))}
        </SizeWrapper>
      </CardLink>
    </Card>
  );
}

export default React.memo(Product);
