import items from 'fixtures/items';

export type Item = {
  brand: string;
  name: string;
  price: number;
  currency: string;
  href: string;
  images: string[];
  sizes: string[];
  description: string;
};

export async function fetchItems(): Promise<Item[]> {
  return Promise.resolve(items);
}
