import shops from 'fixtures/shops';
import products from 'fixtures/products';
import currencies from 'fixtures/currencies';
import taxes from 'fixtures/taxes';

const allConditionsState = {
  shops: shops.reduce((map, shop) => ({
    ...map,
    [shop.id]: shop,
  }), {}),
  products: products.reduce((map, product) => ({
    ...map,
    [product.id]: product,
  }), {}),
  product: products[0],
  currencies: currencies.reduce((map, currency) => ({
    ...map,
    [currency.name]: currency,
  }), {}),
  taxes: taxes.reduce((map, tax) => ({
    ...map,
    [tax.id]: tax,
  }), {}),
  layout: {
    scrollTop: 0,
  },
};

export default allConditionsState;
