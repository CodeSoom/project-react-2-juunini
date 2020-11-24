import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/redux/rootReducer';
import Items from 'src/components/Items';

export default function ItemsContainer() {
  const { items } = useSelector((state: RootState) => ({
    items: state.items,
  }));

  return (
    <Items items={Object.values(items)} />
  );
}
