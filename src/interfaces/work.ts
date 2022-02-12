import { Asset } from 'contentful';

export interface Work {
  name: string;
  banner: Asset;
  siteUrl?: string;
  githubUrl?: string;
}
