import React from 'react';

import { Wrapper } from 'src/layout';

type WrapperContainerProps = {
  children: React.ReactNode;
};

function WrapperContainer({ children }: WrapperContainerProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default WrapperContainer;
