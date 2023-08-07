import { useEffect, useLayoutEffect, useState } from "react"
import { IArt } from "../../types/IArts"
import { Background, Container, Wrapper, Name, Artist, Shadow, ShadowHover } from "./styles"

interface IArtFrame extends IArt {

}

type ImageDimensionsProps = {
  width?: number | null;
  height?: number | null;
}

function ArtFrame({ name, artist, images }: IArtFrame) {
  const [imageDimensions, setImageDimensions] = useState<ImageDimensionsProps>({ width: null, height: null })

  function loadImage(setImageDimensions: React.Dispatch<React.SetStateAction<ImageDimensionsProps>>, imageUrl: string) {
    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      setImageDimensions({
        width: image.width,
        height: image.height
      })
    }

    image.onerror = (err) => {
      console.error(err);
    };
  }

  useLayoutEffect(() => {
    loadImage(setImageDimensions, images?.thumbnail);
  }, [])

  return (
    <Container title={`${name} - ${artist?.name ?? 'unknown'}`} width={imageDimensions?.width} height={imageDimensions?.height}>
      <Background src={images?.gallery} alt={name} />
      <Shadow />
      <ShadowHover />

      <Wrapper>
        <Name>{name}</Name>
        <Artist>{artist.name}</Artist>
      </Wrapper>
    </Container>
  )
}

export {
  ArtFrame
}