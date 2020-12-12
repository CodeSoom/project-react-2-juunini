import React from 'react';

import { Footer, CopyRight } from 'src/layout/Footer';

function FooterContainer() {
  return (
    <Footer>
      <CopyRight>
        &#169;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Equal Dark
      </CopyRight>
    </Footer>
  );
}

export default React.memo(FooterContainer);
