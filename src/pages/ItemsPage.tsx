import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ItemsContainer from 'src/containers/ItemsContainer';
import { loadItems } from 'src/redux/items';
import { loadShops } from 'src/redux/shops';

export default function ItemsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems());
    dispatch(loadShops());
  });

  return (<ItemsContainer />);
}
