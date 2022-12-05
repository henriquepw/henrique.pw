import ky from 'ky';

export const spotifyApi = ky.create({
  prefixUrl: 'https://api.spotify.com/v1/',
});
