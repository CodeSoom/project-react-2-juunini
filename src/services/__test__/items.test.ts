import sampleItems from 'fixtures/products';
import { fetchItems } from '../items';

test('items', async () => {
  const items = await fetchItems();

  expect(items[0]).toEqual(sampleItems[0]);
});
