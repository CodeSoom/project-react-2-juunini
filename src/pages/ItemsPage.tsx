import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ItemsContainer from 'src/containers/ItemsContainer';
import { loadItems } from 'src/redux/items';

export default function ItemsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems());
  });

  return (<ItemsContainer />);
}
