import type { Track } from '~/types/track';
import ky from 'ky';

type PlaylistsResponse = {
  tracks: {
    items: Array<{
      track: any;
    }>;
  };
};

const spotifyApi = ky.create({
  prefixUrl: 'https://api.spotify.com/v1/',
});

export async function getSpotifyPlaylist(token: string): Promise<Track[]> {
  const response = await spotifyApi
    .get(`playlists/${process.env.SPOTIFY_PLAYLIST_ID}`, {
      headers: {
        Authorization: token,
      },
    })
    .json<PlaylistsResponse>();

  const tracks: Track[] =
    response.tracks.items.map(({ track }) => ({
      id: track.id,
      name: track.name,
      previewUrl: track.preview_url,
      externalUrl: track.external_urls.spotify,
      artists: track.artists,
      album: {
        image: track.album.images[0],
        blurImage: track.album.images[track.album.images.length - 1] || '',
        externalUrl: track.album.external_urls.spotify,
      },
    })) || [];

  return tracks.filter((track) => track.previewUrl);
}
