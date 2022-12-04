import ky from 'ky';

export async function getSpotifyToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const credentials = Buffer.from(`${clientId}:${clientSecret}`);

  const response = await ky('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${credentials.toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
    method: 'POST',
  }).json<Record<string, string>>();

  const accessToken: string = response.access_token;
  const tokenType: string = response.token_type;

  return `${tokenType} ${accessToken}`;
}
