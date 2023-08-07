import { styled } from 'styled-components';


const Render = styled.ul`
  max-width: fit-content;
  width: 100%;

  display: grid;

  align-items: center;
  justify-content: center;

  gap: 1.563rem;

  list-style: none;

  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-auto-flow: dense;

    align-self: flex-start;
    gap: 2.5rem;
  }
`

export {
  Render
}