import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ItemsContainer from 'src/containers/ItemsContainer';
import { loadItems } from 'src/redux/items';
import { loadShops } from 'src/redux/shops';
import { loadTaxes } from 'src/redux/taxes';
import { loadCurrencies } from 'src/redux/currencies';

export default function ItemsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadShops());
    dispatch(loadItems());
    dispatch(loadTaxes());
    dispatch(loadCurrencies());
  });

  return (<ItemsContainer />);
}
