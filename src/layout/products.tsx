import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const List = styled.ul({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
});

const Card = styled.li({
  maxWidth: '400px',
  minWidth: '200px',
  width: '16%',
  marginBottom: '2em',

  textAlign: 'center',

  listStyle: 'none',
});

export type CardLinkProps = {
  children: React.ReactNode;
  to: string;
};

const CardLink = ({ to, children }: CardLinkProps) => (
  <Link
    to={to}
    style={{
      position: 'relative',
      overflow: 'hidden',

      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '20.5em 1em 0',

      color: 'inherit',
      textDecoration: 'none',
    }}
  >
    {children}
  </Link>
);

const BrandLogo = styled.img({
  position: 'absolute',
  top: 0,
  left: '50%',

  maxWidth: '80%',
  maxHeight: '2.2em',

  transform: 'translateX(-50%)',
});

const Img = styled.img({
  position: 'absolute',
  top: '2.6em',
  left: '50%',

  height: '17.4em',

  transform: 'translateX(-50%)',
});

const Name = styled.strong({
  marginBottom: '0.5em',
});

const Price = styled.p({
  marginBottom: '0.5em',
});

const SizeWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',

  color: '#999999',
});

const Size = styled.small({
  padding: '0 0.5em',
});

export {
  List,
  Card,
  CardLink,
  Img,
  BrandLogo,
  Name,
  Price,
  SizeWrapper,
  Size,
};
