import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/redux/rootReducer';
import allConditionsState from 'fixtures/allConditionsState';
import HeaderContainer from '../HeaderContainer';

jest.mock('react-redux');

describe('HeaderContainer', () => {
  context('when scrollTop under 50', () => {
    it('renders container without shirnk class', () => {
      (useSelector as jest.Mock)
        .mockImplementation((selector: (arg: RootState) => void) => selector({
          ...allConditionsState,
        }));

      const { container } = render(<HeaderContainer />);
      const header = container.children[0];

      expect(header.classList.contains('shrink')).toBeFalsy();
    });
  });

  context('when scrollTop over 50', () => {
    it('renders container with shirnk class', () => {
      (useSelector as jest.Mock)
        .mockImplementation((selector: (arg: RootState) => void) => selector({
          ...allConditionsState,
          layout: {
            scrollTop: 100,
          },
        }));

      const { container } = render(<HeaderContainer />);
      const header = container.children[0];

      expect(header.classList.contains('shrink')).toBeTruthy();
    });
  });
});
