import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ItemsContainer from 'src/containers/ItemsContainer';
import { loadProducts } from 'src/redux/products';
import { loadShops } from 'src/redux/shops';
import { loadTaxes } from 'src/redux/taxes';
import { loadCurrencies } from 'src/redux/currencies';

export default function ItemsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadShops());
    dispatch(loadProducts());
    dispatch(loadTaxes());
    dispatch(loadCurrencies());
  });

  return (<ItemsContainer />);
}
