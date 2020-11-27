import { CalculatePrice } from 'src/services/products';

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

      expect(exchangePrice).toBe(price * exchangeRate);
      expect(tax).toBe(exchangePrice * taxRate);
      expect(vat).toBe((exchangePrice + tax) * vatRate);
      expect(exchangeDeliveryFee).toBe(deliveryFee * exchangeRate);
      expect(finalPrice).toBe(exchangePrice + tax + vat + deliveryFee);
    });
  });
});
