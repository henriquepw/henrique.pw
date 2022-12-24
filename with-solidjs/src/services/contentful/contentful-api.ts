import { createClient } from 'contentful';

const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;

if (!accessToken || !space) {
  throw new Error('Contentful envs not found');
}

export const contentfulApi = createClient({
  accessToken,
  space,
});
