import shops from 'fixtures/shops';

type ShopType = {
  id: number;
  name: string;
};

export async function fetchShops(): Promise<ShopType[]> {
  return Promise.resolve(shops);
}

export function xxx() {

}
