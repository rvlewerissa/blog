import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import readingTime from 'reading-time';
import { ClockIcon } from '@heroicons/react/solid';

import {
  fetchSanityContent,
  GET_ALL_POSTS_BY_SLUG,
  GET_POST,
} from '../../utils/fetchSanityContent';
import Sandpack from '../../components/Sandpack';
import CodeHighlighter from '../../components/CodeHighlighter';

type Page = {
  slug: {
    current: string;
  };
};

type StaticProps = {
  params: {
    slug: string;
  };
};

type PageProps = {
  slug: string;
  pageData: {
    content: MDXRemoteSerializeResult;
    description: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    readingTime: {
      text: string;
    };
  };
};

export async function getStaticPaths() {
  const data = await fetchSanityContent({
    query: GET_ALL_POSTS_BY_SLUG,
  });

  const pages: Array<Page> = data.allPage;

  return {
    paths: pages.map((page) => ({
      params: { slug: `${page.slug.current}` },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: StaticProps) {
  const data = await fetchSanityContent({
    query: GET_POST,
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
        readingTime: readingTime(content),
      },
    },
    revalidate: 60,
  };
}

export default function Page({
  pageData: { content, title, createdAt, readingTime },
}: PageProps) {
  let createdAtDateString = new Date(createdAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='pt-0 pb-4 px-4 sm:px-6 lg:pt-0 lg:pb-20 lg:px-8'>
      <div className='max-w-lg mx-auto lg:max-w-5xl py-12'>
        <h1 className='text-3xl tracking-tight font-extrabold text-white sm:text-4xl'>
          {title}
        </h1>
        <div className='flex items-center pt-4 pb-6 text-gray-400 font-medium'>
          <img src='/me.jpeg' alt='' className='w-6 h-6 rounded-full mr-2' />
          <span>Vitto Lewerissa / {createdAtDateString}</span>
          <span className='mx-2'>•</span>
          <ClockIcon className='w-4 h-4 mt-0.5 mr-1' />
          <span>{readingTime.text}</span>
        </div>
        <article className='prose text-white prose-a:text-sky-500 prose-headings:text-gray-200 prose-strong:text-white prose-base lg:prose-lg max-w-none prose-pre:p-0 lg:prose-pre:p-0 lg:prose-pre:border-r-0'>
          <MDXRemote
            {...content}
            components={{ Sandpack, code: CodeHighlighter }}
            lazy
          />
        </article>
      </div>
    </div>
  );
}
