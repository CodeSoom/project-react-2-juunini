import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import WrapperContainer from '../WrapperContainer';

jest.mock('react-redux');

test('WrapperContainer', () => {
  const dispatch = jest.fn();

  (useDispatch as jest.Mock).mockImplementation(() => dispatch);

  const { container } = render((
    <WrapperContainer>
      child
    </WrapperContainer>
  ));
  const wrapper = container.children[0];

  fireEvent.scroll(wrapper, { target: { scrollY: 100 } });

  expect(dispatch).toBeCalledTimes(1);
});
