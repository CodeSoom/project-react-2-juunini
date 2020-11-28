import sampleTaxes from 'fixtures/taxes';
import { fetchTaxes } from '../taxes';

test('shops', async () => {
  const taxes = await fetchTaxes();

  expect(taxes[0]).toEqual(sampleTaxes[0]);
});
