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

  if (isEmpty(taxes[product.category])) {
    return (<p>loading...</p>);
  }
  if (isEmpty(currencies[currency])) {
    return (<p>loading...</p>);
  }
  if (isEmpty(shops[brandId])) {
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

  return (
    <ProductDetail
      name={name}
      brand={brand}
      href={href}
      images={images}
      sizes={sizes}
      description={description}
      price={price}
      currency={symbol}
      exchangeRate={exchangeRate}
      taxRate={taxRate}
      vatRate={vatRate}
      deliveryFee={productDeliveryFee}
      exchangePrice={exchangePrice}
      tax={tax}
      vat={vat}
      exchangeDeliveryFee={exchangeDeliveryFee}
      finalPrice={finalPrice}
    />
  );
}

export default ProductDetailContainer;
