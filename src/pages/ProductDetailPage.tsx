import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { parseInt, isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import ProductDetailContainer from 'src/containers/ProductDetailContainer';
import { RootState } from 'src/redux/rootReducer';
import { loadShops } from 'src/redux/shops';
import { loadCurrencies } from 'src/redux/currencies';
import { loadTaxes } from 'src/redux/taxes';
import { loadProduct, setProduct } from 'src/redux/product';

function ProductDetailPage() {
  type ParamsType = {
    id: string;
  };
  const { id } = useParams<ParamsType>();
  const integerId = parseInt(id);

  const dispatch = useDispatch();

  const {
    items, shops, currencies, taxes,
  } = useSelector((state: RootState) => ({
    items: state.items,
    shops: state.shops,
    currencies: state.currencies,
    taxes: state.taxes,
  }));

  useEffect(() => {
    if (isEmpty(shops)) {
      dispatch(loadShops());
    }
    if (isEmpty(currencies)) {
      dispatch(loadCurrencies());
    }
    if (isEmpty(taxes)) {
      dispatch(loadTaxes());
    }
    if (items[integerId]) {
      dispatch(setProduct(items[integerId]));
    } else {
      dispatch(loadProduct(integerId));
    }
  }, [dispatch, shops, currencies, taxes, items, integerId]);

  return (<ProductDetailContainer />);
}

export default ProductDetailPage;
