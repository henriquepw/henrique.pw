interface Artist {
  id: string;
  name: string;
}

interface Image {
  url: string;
  height: string;
  width: string;
}

export interface Track {
  id: string;
  name: string;
  previewUrl: string;
  externalUrl: string;
  artists: Artist[];
  album: {
    image: Image;
    blurImage: Image;
    externalUrl: string;
  };
}
