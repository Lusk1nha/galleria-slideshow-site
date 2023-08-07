import { ArtFrame } from "..";
import { IArt } from "../../types/IArts";
import { Render } from "./styles";

interface IFrameRender {
  frames?: IArt[];
}

function FrameRender({ frames }: IFrameRender) {

  function renderFrames() {
    return frames?.map((art, index) => <ArtFrame key={index} {...art} />)
  }

  return (
    <Render>
      {renderFrames()}
    </Render>
  )
}

export {
  FrameRender
}