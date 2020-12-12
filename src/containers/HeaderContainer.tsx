import React from 'react';
import { useSelector } from 'react-redux';

import {
  Header,
  Logo,
  LogoLink,
  HeaderInner,
} from 'src/layout/Header';
import { RootState } from 'src/redux/rootReducer';

function HeaderContainer() {
  const { layout } = useSelector((state: RootState) => ({
    layout: state.layout,
  }));

  return (
    <Header
      className={layout.scrollTop > 0 ? 'shrink' : ''}
    >
      <HeaderInner>
        <Logo>
          <LogoLink>
            Equal Dark
          </LogoLink>
        </Logo>
      </HeaderInner>
    </Header>
  );
}

export default HeaderContainer;
