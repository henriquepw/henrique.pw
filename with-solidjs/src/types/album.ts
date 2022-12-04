export type Album = {
  image: AlbumImage;
  blurImage: AlbumImage;
  externalUrl: string;
};

export type AlbumImage = {
  url: string;
  height: string;
  width: string;
};
