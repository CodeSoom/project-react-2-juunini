import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import ItemsPage from 'src/pages/ItemsPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ItemsPage} />
    </Switch>
  );
}
