/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const List = styled.ul({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
});

const Card = styled.li({
  minWidth: '200px',
  maxWidth: '20%',
  marginBottom: '2em',
  padding: '0 0.6em',

  textAlign: 'center',

  listStyle: 'none',

  '@media (pointer:coarse)': {
    minWidth: '50%',
    maxWidth: '50%',
  },
});

export type CardLinkProps = {
  children: React.ReactNode;
  to: string;
};

const CardLink = ({ to, children }: CardLinkProps) => (
  <Link
    to={to}
    css={css({
      position: 'relative',
      overflow: 'hidden',

      display: 'flex',
      flexDirection: 'column',
      height: '100%',

      color: 'inherit',
      textDecoration: 'none',
    })}
  >
    {children}
  </Link>
);

const BrandLogoWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2.2em',
  marginBottom: '0.4em',
});

const BrandLogo = styled.img({
  maxWidth: '80%',
  maxHeight: '2.2em',
});

const ImgWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '17.4em',
  marginBottom: '0.6em',
});

const Img = styled.img({
  height: '100%',
});

const Name = styled.strong({
  marginBottom: '0.5em',
});

const Price = styled.p({
  marginBottom: '0.5em',
});

const SizeWrapper = styled.ul({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',

  color: '#999999',
  fontSize: '0.8em',
  listStyle: 'none',
});

const Size = styled.li({
  padding: '0 0.5em',
});

const Soldout = styled.li({
  padding: '0 0.5em',

  color: '#CA015E',
});

export {
  List,
  Card,
  CardLink,
  ImgWrapper,
  Img,
  BrandLogoWrapper,
  BrandLogo,
  Name,
  Price,
  SizeWrapper,
  Size,
  Soldout,
};
