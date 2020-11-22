import sampleShops from 'fixtures/shops';
import { fetchShops } from '../shops';

test('shops', async () => {
  const shops = await fetchShops();

  expect(shops[0]).toEqual(sampleShops[0]);
});
