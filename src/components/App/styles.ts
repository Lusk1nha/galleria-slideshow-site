import styled from "styled-components";

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.color.BG_COLOR};

  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  flex-grow: 1;
`

export {
  StyledApp
}