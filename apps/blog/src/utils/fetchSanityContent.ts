const SANITY_URL = String(process.env.SANITY_URL);

export const GET_POST = `
  query PageBySlug($slug: String!) {
    allPage(where: { slug: { current: { eq: $slug } } }) {
      title
      content
      _createdAt
      _updatedAt
    }
  }
  `;

export const GET_ALL_POSTS_BY_SLUG = `
  query AllPostsBySlug {
    allPage {
      slug {
        current
      }
    }
  }
  `;

export const GET_ALL_POSTS = `
  query AllPosts {
    allPage(sort: [{
      _createdAt: ASC
    }]) {
      _id
      title
      slug {
        current
      }
      description
      _createdAt
      _updatedAt
    }
  }
`;

export const GET_LATEST_POSTS = `
  query LatestPosts {
    allPage(sort: [{
      _createdAt: ASC
    }], limit:4) {
      _id
      title
      slug {
        current
      }
      description
      _createdAt
    }
  }
`;

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
