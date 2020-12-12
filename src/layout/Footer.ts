import styled from '@emotion/styled';

const Footer = styled.footer({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.25em 0',
  background: '#000000',
  color: '#FFFFFF',
});

const CopyRight = styled.p({
  opacity: '0.6',
});

export {
  Footer,
  CopyRight,
};
