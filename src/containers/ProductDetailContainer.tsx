import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/redux/rootReducer';
import ProductDetail from 'src/components/ProductDetail';
import { CalculatePrice } from 'src/services/products';

function ProductDetailContainer() {
  const { product, shops, currencies } = useSelector((state: RootState) => ({
    product: state.product,
    shops: state.shops,
    currencies: state.currencies,
  }));

  const {
    brand_id: brandId,
    name,
    price,
    currency,
    href,
    images,
    sizes,
    description,
  } = product;

  const {
    symbol,
    exchangeRate,
  } = currencies[currency];

  const {
    name: brand,
    deliveryFee,
    minimumFreeDeliveryPrice,
  } = shops[brandId];

  const productDeliveryFee = price < minimumFreeDeliveryPrice ? deliveryFee : 0;

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
