import items from 'fixtures/items';

import { round } from 'lodash';

export type CalculatePriceProps = {
  price: number;
  exchangeRate: number;
  taxRate: number;
  vatRate: number;
  deliveryFee: number;
};

export function CalculatePrice({
  price, exchangeRate, taxRate, vatRate, deliveryFee,
}: CalculatePriceProps) {
  const exchangePrice = round(price * exchangeRate, 2);
  const tax = round(exchangePrice * taxRate, 2);
  const vat = round((exchangePrice + tax) * vatRate, 2);
  const exchangeDeliveryFee = round(deliveryFee * exchangeRate, 2);
  const finalPrice = round(exchangePrice + tax + vat + deliveryFee, 2);

  return {
    exchangePrice,
    tax,
    vat,
    exchangeDeliveryFee,
    finalPrice,
  };
}

export async function fetchProduct(id: number) {
  return Promise.resolve(items[id - 1]);
}
