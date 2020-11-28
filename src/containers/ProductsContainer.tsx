import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty, round } from 'lodash';

import { RootState } from 'src/redux/rootReducer';
import Products from 'src/components/Products';
import { ProductProps } from 'src/components/Product';
import { CalculatePrice } from 'src/services/products';

export default function ProductsContainer() {
  const {
    products, shops, currencies, taxes,
  } = useSelector((state: RootState) => ({
    products: state.products,
    shops: state.shops,
    currencies: state.currencies,
    taxes: state.taxes,
  }));

  if (isEmpty(currencies) || isEmpty(shops)) {
    return (<p>loading...</p>);
  }

  const CombinedProducts: ProductProps[] = Object.values(products)
    .reduce((combinedProducts, product) => {
      const {
        id, brandId, name, price, currency,
        category, images, sizes,
      } = product;
      const image = images[0];
      const {
        name: brand, includeTax,
        deliveryFee, minimumFreeDeliveryPrice,
      } = shops[brandId];
      const { exchangeRate } = currencies[currency];
      const productDeliveryFee = price < minimumFreeDeliveryPrice ? deliveryFee : 0;
      const { taxRate, vatRate } = includeTax
        ? { taxRate: 0, vatRate: 0 }
        : taxes[category];

      const {
        finalPrice,
      } = CalculatePrice({
        price, exchangeRate, taxRate, vatRate, deliveryFee: productDeliveryFee,
      });

      return [
        ...combinedProducts,
        {
          id,
          brand,
          name,
          finalPrice: round(finalPrice),
          currency: currencies.KRW.symbol,
          image,
          sizes,
        },
      ];
    }, [] as ProductProps[]);

  return (
    <Products products={CombinedProducts} />
  );
}
