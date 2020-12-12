import styled from '@emotion/styled';

const Wrapper = styled.div({
  overflow: 'auto',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',

  color: '#666666',
  fontSize: '16px',

  '@media (pointer:coarse)': {
    fontSize: '32px',
  },
});

const Main = styled.main({
  display: 'flex',
  flexDirection: 'column',
});

export {
  Wrapper,
  Main,
};
