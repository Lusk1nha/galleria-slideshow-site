import { styled } from 'styled-components';

type ContainerProps = {
  width?: number | null;
  height?: number | null;
}

const ShadowHover = styled.div`
  background-color: none;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 0;

  transition: background-color 200ms ease-in;
`;

const Container = styled.li<ContainerProps>`
  max-width: 327px;
  width: ${({ width }) => width + 'px'};
  height: ${({ height }) => height + 'px'};

  display: flex;
  align-items: flex-end;
  align-self: flex-start;
  justify-content: flex-start;

  cursor: pointer;

  position: relative;

  padding: 2rem;
  z-index: 2;

  &:hover {
    ${ShadowHover} {
      background: #FFFFFF7F;
    }
  }
`

const Background = styled.img`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  z-index: 0;
`

const Shadow = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.84) 100%);

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 1;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 2;
`

const Name = styled.h3`
  color: #FFF;

  font-family: Libre Baskerville;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 6px;
`

const Artist = styled.h5`
  color: #FFF;
  font-family: Libre Baskerville;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  opacity: 0.7528;
`

export {
  Container,
  Background,
  Shadow,
  ShadowHover,
  Wrapper,
  Name,
  Artist
}