import shops from 'fixtures/shops';
import items from 'fixtures/items';
import currencies from 'fixtures/currencies';
import taxes from 'fixtures/taxes';

const allConditionsState = {
  shops: shops.reduce((map, shop) => ({
    ...map,
    [shop.id]: shop,
  }), {}),
  items: {},
  product: items[0],
  currencies: currencies.reduce((map, currency) => ({
    ...map,
    [currency.name]: currency,
  }), {}),
  taxes: taxes.reduce((map, tax) => ({
    ...map,
    [tax.id]: tax,
  }), {}),
};

export default allConditionsState;
