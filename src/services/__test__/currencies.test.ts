import sampleCurrencies from 'fixtures/currencies';
import { fetchCurrencies } from 'src/services/currencies';

describe('currencies', () => {
  describe('fetchCurrencies', () => {
    it('returns currencies', async () => {
      const currencies = await fetchCurrencies();

      expect(currencies).toEqual(sampleCurrencies);
    });
  });
});
