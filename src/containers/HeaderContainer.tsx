import React from 'react';
import { useSelector } from 'react-redux';

import { Header } from 'src/layout';
import { RootState } from 'src/redux/rootReducer';

function HeaderContainer() {
  const { layout } = useSelector((state: RootState) => ({
    layout: state.layout,
  }));

  return (
    <Header className={layout.scrollTop > 50 ? 'shrink' : ''} />
  );
}

export default HeaderContainer;
