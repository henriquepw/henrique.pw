import { createClient } from 'contentful';

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const space = process.env.CONTENTFUL_SPACE_ID;

if (!accessToken || !space) {
  throw new Error('Contentful envs not found');
}

export const contentfulApi = createClient({
  accessToken,
  space,
});
