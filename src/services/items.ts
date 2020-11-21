import items from 'fixtures/items';

type ItemsType = {
  brand: string;
  name: string;
  price: number;
  currency: string;
  href: string;
  images: string[];
  sizes: string[];
  description: string;
};

export async function fetchItems(): Promise<ItemsType[]> {
  return Promise.resolve(items);
}

export function xxx() {

}
