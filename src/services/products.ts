import items from 'fixtures/items';

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
  const exchangePrice = price * exchangeRate;
  const tax = exchangePrice * taxRate;
  const vat = (exchangePrice + tax) * vatRate;
  const exchangeDeliveryFee = deliveryFee * exchangeRate;
  const finalPrice = exchangePrice + tax + vat + deliveryFee;

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
