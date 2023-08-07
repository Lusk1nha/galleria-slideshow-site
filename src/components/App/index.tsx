import { Outlet } from "react-router-dom"
import { StyledApp } from "./styles"
import { Header } from "../../pages/Header"

function App() {

  return (
    <StyledApp>
      <Header />
      <Outlet />
    </StyledApp >
  )
}

export {
  App
}
