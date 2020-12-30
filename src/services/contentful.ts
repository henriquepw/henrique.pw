import { createClient } from 'contentful';

const contentfulApi = createClient({
  accessToken: process.env.CONTENTUL_ACESS_TOKEN,
  space: process.env.CONTENTUL_SPACE_ID,
});

export default contentfulApi;
