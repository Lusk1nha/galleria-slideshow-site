import GaleriaLogo from '/public/assets/gallerialogo.svg';

import { Logo, StyledHeader } from "./styles"



function Header() {

  return (
    <StyledHeader>
      <Logo
        src={GaleriaLogo}
        alt="Caminho da imagem"
      />

      
    </StyledHeader>
  )
}

export {
  Header
}