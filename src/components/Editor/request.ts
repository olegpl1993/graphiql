const request = async (
  requestContent: string,
  variablesContent: string,
  headersContent: string,
  url: string
): Promise<string> => {
  const variables = variablesContent ? { ...JSON.parse(variablesContent) } : {};
  const headers = headersContent
    ? { ...JSON.parse(headersContent), 'Content-type': 'application/json' }
    : { 'Content-type': 'application/json' };
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: requestContent,
      variables,
    }),
  });
  return res.json();
};

export default request;
