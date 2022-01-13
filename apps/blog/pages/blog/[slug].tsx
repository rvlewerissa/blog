import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { fetchSanityContent } from '../../utils/fetchSanityContent';
import Sandpack from '../../components/Sandpack';

type Page = {
  slug: {
    current: string;
  };
};

export async function getStaticPaths() {
  const data = await fetchSanityContent({
    query: `
      query AllPages {
        allPage {
          slug {
            current
          }
        }
      }
    `,
  });

  const pages: Array<Page> = data.allPage;

  return {
    paths: pages.map((page) => ({
      params: { slug: `${page.slug.current}` },
    })),
    fallback: false,
  };
}

type Params = {
  slug: string;
};

export async function getStaticProps({ params }: { params: Params }) {
  const data = await fetchSanityContent({
    query: `
         query PageBySlug($slug: String!) {
           allPage(where: { slug: { current: { eq: $slug } } }) {
             title
             content
           }
         }
       `,
    variables: {
      slug: params.slug,
    },
  });

  const [{ content, title }] = data.allPage;

  const mdxSource = await serialize(
    `Some **mdx** text, with a component using a scope variable <Sandpack template="react" files={{'/App.js':'halo'}} />`
  );

  return {
    props: {
      slug: params.slug,
      pageData: {
        content: mdxSource,
        title,
      },
    },
  };
}

export default function Page({ slug, pageData: { content, title } }) {
  // let scope = {
  //   files: {
  //     '/App.js': 'halo',
  //   },
  //   dependencies: {},
  // };
  return (
    <div>
      <h1>{title}</h1>
      <MDXRemote
        {...content}
        // scope={scope}
        components={{
          Sandpack,
        }}
      />
    </div>
  );
}
