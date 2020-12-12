import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import { RootState } from 'src/redux/rootReducer';
import ProductDetail from 'src/components/ProductDetail';
import { CalculatePrice } from 'src/services/products';

function ProductDetailContainer() {
  const {
    product, shops, currencies, taxes,
  } = useSelector((state: RootState) => ({
    product: state.product,
    shops: state.shops,
    currencies: state.currencies,
    taxes: state.taxes,
  }));

  const {
    brandId, name, price, currency,
    href, images, sizes, description,
  } = product;

  if (
    isEmpty(taxes[product.category])
    || isEmpty(currencies[currency])
    || isEmpty(shops[brandId])
  ) {
    return (<p>loading...</p>);
  }

  const {
    name: brand, includeTax,
    deliveryFee, minimumFreeDeliveryPrice,
  } = shops[brandId];
  const { symbol, exchangeRate } = currencies[currency];
  const productDeliveryFee = price < minimumFreeDeliveryPrice ? deliveryFee : 0;
  const { taxRate, vatRate } = includeTax
    ? { taxRate: 0, vatRate: 0 }
    : taxes[product.category];

  const {
    exchangePrice, tax, vat, exchangeDeliveryFee, finalPrice,
  } = CalculatePrice({
    price, exchangeRate, taxRate, vatRate, deliveryFee: productDeliveryFee,
  });

  const props = {
    name,
    brand,
    href,
    images,
    sizes,
    description,
    price,
    currency: symbol,
    exchangeRate,
    taxRate,
    vatRate,
    deliveryFee: productDeliveryFee,
    exchangePrice,
    tax,
    vat,
    exchangeDeliveryFee,
    finalPrice,
  };

  return (
    <ProductDetail props={props} />
  );
}

export default ProductDetailContainer;
