import { createClient } from 'contentful';

const contentfulApi = createClient({
  accessToken: process.env.NEXT_CONTENTUL_ACESS_TOKEN,
  space: process.env.NEXT_CONTENTUL_SPACE_ID,
});

export default contentfulApi;
