import shops from 'fixtures/shops';

export type Shop = {
  id: number;
  name: string;
  deliveryFee: number;
  minimumFreeDeliveryPrice: number;
  includeTax: boolean;
  image: string;
};

export async function fetchShops(): Promise<Shop[]> {
  return Promise.resolve(shops);
}
