import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import ProductsPage from 'src/pages/ProductsPage';
import ProductDetailPage from 'src/pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ProductsPage} />
      <Route path="/products/:id" component={ProductDetailPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
