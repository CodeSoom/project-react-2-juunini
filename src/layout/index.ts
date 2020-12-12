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

const Header = styled.header({
  position: 'sticky',
  zIndex: 100,
  top: 0,
  minHeight: '6.25em',
  background: '#FFFFFF',
  borderBottom: '1px solid #ebebeb',
  boxShadow: '0 0 1px 1px rgba(0,0,0,0.05)',
});

const Main = styled.main({
  display: 'flex',
  flexDirection: 'column',
});

export {
  Wrapper,
  Header,
  Main,
};
