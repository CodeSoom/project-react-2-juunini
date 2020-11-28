import styled from '@emotion/styled';

const Wrapper = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',

  color: '#666666',
  fontSize: '16px',
});

const Main = styled.main({
  display: 'flex',
  flexDirection: 'column',
});

export {
  Wrapper,
  Main,
};
