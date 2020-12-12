import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import FooterContainer from '../FooterContainer';

test('FooterContainer', () => {
  render((
    <MemoryRouter>
      <FooterContainer />
    </MemoryRouter>
  ));
});
