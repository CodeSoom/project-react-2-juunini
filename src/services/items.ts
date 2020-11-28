import items from 'fixtures/items';

export type Item = {
  id: number;
  brand_id: number;
  name: string;
  price: number;
  currency: string;
  category: number;
  href: string;
  images: string[];
  sizes: string[];
  description: string;
};

export async function fetchItems(): Promise<Item[]> {
  return Promise.resolve(items);
}
