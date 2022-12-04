function makeURL(str: string, params?: string): string {
  if (params) {
    return `https:${str}?${params}`;
  }

  return `https:${str}`;
}

export default makeURL;
