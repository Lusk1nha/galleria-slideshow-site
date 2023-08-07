
export interface IArt {
  name: string
  year: number
  description: string
  source: string
  artist: IArtist
  images: IImages
}

export interface IArtist {
  image: string;
  name: string;
}

export interface IImages {
  thumbnail: string;
  hero: IHero;
  gallery: string;
}

export interface IHero {
  small: string;
  large: string;
}
