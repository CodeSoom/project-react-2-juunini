import styled from '@emotion/styled';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
});

const ImageGalleryWrapper = styled.section({
  width: '60%',
});

const ContentsWrapper = styled.section({
  width: '40%',
});

const BrandLogoWrapper = styled.div({
  marginBottom: '1em',
  textAlign: 'center',
});

const BrandLogo = styled.img({
  maxWidth: '80%',
});

const Name = styled.h2({
  marginBottom: '1em',
  lineHeight: '1.2em',
  fontSize: '1.6em',
  color: '#333',
});

const SizeWraper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',

  marginBottom: '1em',
});

const Size = styled.span({
  display: 'inline-block',
  height: '2.2em',
  lineHeight: '2.2em',
  padding: '0 1em',
  margin: '0 0.5em 0.5em',

  border: '1px solid #ededed',
  color: '#333',
});

const DescriptionWrapper = styled.div({
  padding: '1em 0',
  marginBottom: '1em',

  borderTop: '1px solid #ededed',
  borderBottom: '1px solid #ededed',
});

const DescriptionRow = styled.p({
  minHeight: '1.2em',
  lineHeight: '1.2em',
});

export {
  Wrapper,
  ImageGalleryWrapper,
  ContentsWrapper,
  BrandLogoWrapper,
  BrandLogo,
  Name,
  SizeWraper,
  Size,
  DescriptionWrapper,
  DescriptionRow,
};
