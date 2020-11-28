import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import ItemsPage from 'src/pages/ItemsPage';
import ProductDetailPage from 'src/pages/ProductDetailPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ItemsPage} />
      <Route path="/products/:id" component={ProductDetailPage} />
    </Switch>
  );
}
