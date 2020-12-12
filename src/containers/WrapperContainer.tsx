import React from 'react';
import { useDispatch } from 'react-redux';

import { Wrapper } from 'src/layout';
import { setScrollTop } from 'src/redux/layout';

type WrapperContainerProps = {
  children: React.ReactNode;
};

function WrapperContainer({ children }: WrapperContainerProps) {
  const dispatch = useDispatch();

  function handleScroll(scrollTop: number) {
    dispatch(setScrollTop(scrollTop));
  }

  return (
    <Wrapper
      onScroll={(e) => handleScroll(e.target.scrollTop)}
    >
      {children}
    </Wrapper>
  );
}

export default WrapperContainer;
