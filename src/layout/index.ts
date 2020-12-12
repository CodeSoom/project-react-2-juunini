import styled from '@emotion/styled';

const Wrapper = styled.div({
  overflowX: 'hidden',
  overflowY: 'auto',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',

  color: '#666666',
  fontSize: '16px',
});

const Main = styled.main({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '3.75em',
});

export {
  Wrapper,
  Main,
};
