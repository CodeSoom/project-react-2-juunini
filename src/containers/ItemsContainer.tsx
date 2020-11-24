import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/redux/rootReducer';
import Items from 'src/components/Items';

export default function ItemsContainer() {
  const { items, shops } = useSelector((state: RootState) => ({
    items: state.items,
    shops: state.shops,
  }));

  return (
    <Items items={Object.values(items)} shops={shops} />
  );
}
