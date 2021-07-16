// Return an array of objects which came in as a text stream of results
export const parseStreamedData = stream =>
  stream
    ? stream
        .trim()
        .split('\n\n')
        .map(a => JSON.parse(a).result)
    : []