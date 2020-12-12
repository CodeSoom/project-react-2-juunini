import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import ProductsPage from 'src/pages/ProductsPage';
import ProductDetailPage from 'src/pages/ProductDetailPage';
import NotFoundPage from 'src/pages/NotFoundPage';
import WrapperContainer from 'src/containers/WrapperContainer';
import HeaderContainer from 'src/containers/HeaderContainer';
import FooterContainer from 'src/containers/FooterContainer';
import { Main } from 'src/layout';

export default function App() {
  return (
    <WrapperContainer>
      <HeaderContainer />

      <Main>
        <Switch>
          <Route exact path="/" component={ProductsPage} />
          <Route path="/products/:id" component={ProductDetailPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Main>

      <FooterContainer />
    </WrapperContainer>
  );
}
