import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { fetchSanityContent } from '../../utils/fetchSanityContent';
import Sandpack from '../../components/Sandpack';

type Page = {
  slug: {
    current: string;
  };
};

const GET_PAGE = `
query PageBySlug($slug: String!) {
  allPage(where: { slug: { current: { eq: $slug } } }) {
    title
    content
    _createdAt
    _updatedAt
  }
}
`;

const GET_ALL_PAGES = `
query AllPages {
  allPage {
    slug {
      current
    }
  }
}
`;

export async function getStaticPaths() {
  const data = await fetchSanityContent({
    query: GET_ALL_PAGES,
  });

  const pages: Array<Page> = data.allPage;

  return {
    paths: pages.map((page) => ({
      params: { slug: `${page.slug.current}` },
    })),
    fallback: false,
  };
}

type StaticProps = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: StaticProps) {
  const data = await fetchSanityContent({
    query: GET_PAGE,
    variables: {
      slug: params.slug,
    },
  });

  const [{ content, title, _createdAt: createdAt, _updatedAt: updatedAt }] =
    data.allPage;

  return {
    props: {
      slug: params.slug,
      pageData: {
        content: await serialize(content),
        title,
        createdAt,
        updatedAt,
      },
    },
  };
}

type PageProps = {
  slug: string;
  pageData: {
    content: MDXRemoteSerializeResult;
    title: string;
    createdAt: string;
    updatedAt: string;
  };
};

export default function Page({
  pageData: { content, title, createdAt, updatedAt },
}: PageProps) {
  return (
    <div>
      <h1>{title}</h1>
      <MDXRemote {...content} components={{ Sandpack }} />
    </div>
  );
}
