import { StyledHome } from "./styles"

import { FrameRender } from "../../components"
import { useContext } from "react"
import { DataContext } from "../../contexts/DataProvider"


function Home() {
  const data = useContext(DataContext);

  console.log(data.arts)

  return (
    <StyledHome>
      <FrameRender frames={data.arts} />
    </StyledHome>
  )
}

export {
  Home
}