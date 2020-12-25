export interface Track {
  id: string;
  name: string;
  previewUrl: string;
  externalUrl: string;
  album: {
    image: {
      url: string;
      height: string;
      width: string;
    };
    externalUrl: string;
  };
  artists: Array<{
    id: string;
    name: string;
  }>;
}
