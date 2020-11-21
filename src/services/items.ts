import items from 'fixtures/items';

type ItemType = {
  brand: string;
  name: string;
  price: number;
  currency: string;
  href: string;
  images: string[];
  sizes: string[];
  description: string;
};

export async function fetchItems(): Promise<ItemType[]> {
  return Promise.resolve(items);
}

export function xxx() {

}
