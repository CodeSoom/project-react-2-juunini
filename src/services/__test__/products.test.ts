import { round } from 'lodash';

import sampleItems from 'fixtures/products';
import { CalculatePrice, fetchProduct } from 'src/services/products';

describe('products', () => {
  describe('CalculatePrice', () => {
    it('returns calculated numbers', () => {
      const price = 100;
      const exchangeRate = 1400.12;
      const taxRate = 0.08;
      const vatRate = 0.1;
      const deliveryFee = 15;

      const {
        exchangePrice, tax, vat, exchangeDeliveryFee, finalPrice,
      } = CalculatePrice({
        price, exchangeRate, taxRate, vatRate, deliveryFee,
      });

      expect(exchangePrice).toBe(round(price * exchangeRate, 2));
      expect(tax).toBe(round(exchangePrice * taxRate, 2));
      expect(vat).toBe(round((exchangePrice + tax) * vatRate, 2));
      expect(exchangeDeliveryFee).toBe(round(deliveryFee * exchangeRate, 2));
      expect(finalPrice).toBe(round(exchangePrice + tax + vat + deliveryFee, 2));
    });
  });

  describe('fetchProduct', () => {
    it('returns product', async () => {
      const product = await fetchProduct(1);

      expect(product).toEqual(sampleItems[0]);
    });
  });
});
