export async function tryResolve<Data, E = unknown>(
  promise: Promise<Data>,
): Promise<[Data, null] | [null, E]> {
  try {
    const data = await promise;

    return [data, null];
  } catch (error) {
    return [null, error as E];
  }
}
