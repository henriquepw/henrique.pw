async function tryGet<Data>(
  promise: Promise<Data>,
): Promise<[Data, null] | [null, Error]> {
  try {
    const data = await promise;

    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

export default tryGet;
