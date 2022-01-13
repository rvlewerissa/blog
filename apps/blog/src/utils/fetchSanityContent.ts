const SANITY_URL =
  'https://uy67ioxk.api.sanity.io/v1/graphql/production/default';

type Props = {
  query: string;
  variables?: { [key: string]: any };
};

export async function fetchSanityContent({ query, variables = {} }: Props) {
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
