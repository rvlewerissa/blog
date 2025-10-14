import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ClockIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import {
  getAllCompanies,
  getArticleSlugs,
  getArticleBySlug,
  Company,
} from '../../../utils/workContent';
import Sandpack from '../../../components/Sandpack';
import CodeHighlighter from '../../../components/CodeHighlighter';

type Props = {
  company: Company;
  article: {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: MDXRemoteSerializeResult;
    readingTime: {
      text: string;
    };
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const companies = getAllCompanies();
  const paths: Array<{ params: { company: string; slug: string } }> = [];

  companies.forEach((company) => {
    const slugs = getArticleSlugs(company.id);
    slugs.forEach((slug) => {
      paths.push({
        params: {
          company: company.id,
          slug,
        },
      });
    });
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const companyId = params?.company as string;
  const slug = params?.slug as string;

  const companies = getAllCompanies();
  const company = companies.find((c) => c.id === companyId);

  if (!company) {
    return {
      notFound: true,
    };
  }

  const articleData = getArticleBySlug(companyId, slug);

  if (!articleData) {
    return {
      notFound: true,
    };
  }

  const content = await serialize(articleData.content);

  return {
    props: {
      company,
      article: {
        slug: articleData.slug,
        title: articleData.title,
        date: articleData.date,
        description: articleData.description,
        content,
        readingTime: articleData.readingTime,
      },
    },
    revalidate: 60,
  };
};

export default function WorkArticle({ company, article }: Props) {
  const dateString = new Date(article.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='pt-0 pb-4 px-4 sm:px-6 lg:pt-0 lg:pb-20 lg:px-8'>
      <div className='max-w-lg mx-auto lg:max-w-5xl py-12'>
        <Link href={`/work/${company.id}`}>
          <a className='inline-flex items-center text-sky-500 hover:text-sky-400 mb-6'>
            <svg
              className='w-4 h-4 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
            Back to {company.displayName}
          </a>
        </Link>

        <h1 className='text-3xl tracking-tight font-extrabold text-white sm:text-4xl'>
          {article.title}
        </h1>

        <div className='flex items-center pt-4 pb-6 text-gray-400 font-medium'>
          <img src='/me.jpeg' alt='' className='w-6 h-6 rounded-full mr-2' />
          <span>Vitto Lewerissa / {dateString}</span>
          <span className='mx-2'>•</span>
          <ClockIcon className='w-4 h-4 mt-0.5 mr-1' />
          <span>{article.readingTime.text}</span>
        </div>

        <div className='mb-6 flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg border border-gray-700'>
          {company.logo && (
            <div
              className={`w-10 h-10 rounded shadow-sm flex-shrink-0 ${
                company.name === 'TipTip' || company.name === 'Phantom Network'
                  ? 'bg-transparent p-0'
                  : company.name === 'KodeFox'
                    ? 'bg-white p-1'
                    : company.name === 'CHI'
                      ? 'bg-black p-2'
                      : 'bg-white p-2'
              }`}
            >
              <img
                src={company.logo}
                alt={`${company.displayName} logo`}
                className={`w-full h-full ${
                  company.name === 'TipTip' ||
                  company.name === 'Phantom Network' ||
                  company.name === 'CHI'
                    ? 'object-cover rounded'
                    : 'object-contain'
                }`}
              />
            </div>
          )}
          <div>
            <p className='text-sm text-gray-400'>Part of the series</p>
            <p className='text-white font-semibold'>{company.displayName}</p>
          </div>
        </div>

        <article className='prose text-white prose-a:text-sky-500 prose-headings:text-gray-200 prose-strong:text-white prose-base lg:prose-lg max-w-none prose-pre:p-0 lg:prose-pre:p-0 lg:prose-pre:border-r-0'>
          <MDXRemote
            {...article.content}
            components={{ Sandpack, code: CodeHighlighter }}
            lazy
          />
        </article>
      </div>
    </div>
  );
}
