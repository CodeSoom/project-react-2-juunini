import React from 'react';
import { useSelector } from 'react-redux';

import { Header, Logo, LogoLink } from 'src/layout/Header';
import { RootState } from 'src/redux/rootReducer';

function HeaderContainer() {
  const { layout } = useSelector((state: RootState) => ({
    layout: state.layout,
  }));

  return (
    <Header
      className={layout.scrollTop > 50 ? 'shrink' : ''}
    >
      <Logo>
        <LogoLink>
          Equal Dark
        </LogoLink>
      </Logo>
    </Header>
  );
}

export default HeaderContainer;
