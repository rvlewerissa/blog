const SANITY_URL =
  'https://uy67ioxk.api.sanity.io/v1/graphql/production/default';

export async function fetchSanityContent({ query, variables = {} }) {
  const { data } = await fetch(SANITY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((response) => response.json());

  return data;
}
