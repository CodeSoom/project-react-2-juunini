import taxes from 'fixtures/taxes';

export type Tax = {
  id: number;
  name: string;
  taxRate: number;
  vatRate: number;
};

export async function fetchTaxes() {
  return Promise.resolve(taxes);
}
