import { Album } from './album';
import { Artist } from './artist';

export type Track = {
  id: string;
  name: string;
  previewUrl: string;
  externalUrl: string;
  artists: Artist[];
  album: Album;
};
