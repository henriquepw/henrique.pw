import axios from 'axios';

const clientId = process.env.NEXT_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_SPOTIFY_CLIENT_SECRET;

export async function getSpotifyToken(): Promise<string> {
  try {
    const credentials = Buffer.from(`${clientId}:${clientSecret}`);

    const response = await axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${credentials.toString('base64')}`,
      },
      data: 'grant_type=client_credentials',
      method: 'POST',
    });

    const accessToken: string = response.data.access_token;
    const tokenType: string = response.data.token_type;

    axios.defaults.headers.Authorization = `${tokenType} ${accessToken}`;

    return `${tokenType} ${accessToken}`;
  } catch (error) {
    console.warn(error);
  }

  return '';
}

export const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});
