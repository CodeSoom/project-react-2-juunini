/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Header = styled.header({
  position: 'sticky',
  zIndex: 100,
  top: 0,
  minHeight: '6.25em',
  marginBottom: '3.75em',

  '&.shrink': {
    fontSize: '0.75em',
  },
});

const HeaderInner = styled.div({
  height: '6.25em',
  background: '#FFFFFF',
  borderBottom: '1px solid #ebebeb',
  boxShadow: '0 0 1px 1px rgba(0,0,0,0.05)',
  transition: '0.5s ease-in-out',
});

const Logo = styled.h1({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  color: '#000000',
});

type LogoLinkProps = {
  children: React.ReactNode;
};

const LogoLink = ({ children }: LogoLinkProps) => (
  <Link
    to="/"
    css={css({
      textDecoration: 'none',
      color: 'inherit',
      transition: '0.5s ease-in-out',
    })}
  >
    {children}
  </Link>
);

export {
  Header,
  HeaderInner,
  Logo,
  LogoLink,
};
