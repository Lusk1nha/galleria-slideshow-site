import { styled } from 'styled-components';


const StyledHeader = styled.section`
  width: 100%;
  display: flex;

  padding: 1.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.color.HEADER_BORDER_COLOR};
  margin-bottom: 1.5rem;
`

const Logo = styled.img`

`

export {
  StyledHeader,
  Logo
}