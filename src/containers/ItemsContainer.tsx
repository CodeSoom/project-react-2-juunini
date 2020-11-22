import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/redux/rootReducer';
import Items from 'src/components/Items';

export default function ItemsContainer() {
  const { items } = useSelector((state: RootState) => ({
    items: state.items,
  }));

  const list = items.map(({
    id, brand, name, price,
    currency, images, sizes,
  }) => ({
    id,
    brand,
    name,
    price,
    currency,
    image: images[0],
    sizes,
  }));

  return (
    <Items items={list} />
  );
}
