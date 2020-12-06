import { createClient } from 'contentful';

const client = createClient({
  accessToken: process.env.NEXT_CONTENTUL_ACESS_TOKEN,
  space: process.env.NEXT_CONTENTUL_SPACE_ID,
});

export default client;
