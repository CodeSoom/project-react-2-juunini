import currencies from 'fixtures/currencies';

export type Currency = {
  name: string;
  symbol: string;
  exchangeRate: number;
};

export async function fetchCurrencies(): Promise<Currency[]> {
  return Promise.resolve(currencies);
}
