import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProductsContainer from 'src/containers/ProductsContainer';
import { loadProducts } from 'src/redux/products';
import { loadShops } from 'src/redux/shops';
import { loadTaxes } from 'src/redux/taxes';
import { loadCurrencies } from 'src/redux/currencies';

export default function ProductsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadShops());
    dispatch(loadProducts());
    dispatch(loadTaxes());
    dispatch(loadCurrencies());
  });

  return (<ProductsContainer />);
}
