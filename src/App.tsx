import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import ProductsPage from 'src/pages/ProductsPage';
import ProductDetailPage from 'src/pages/ProductDetailPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ProductsPage} />
      <Route path="/products/:id" component={ProductDetailPage} />
    </Switch>
  );
}
