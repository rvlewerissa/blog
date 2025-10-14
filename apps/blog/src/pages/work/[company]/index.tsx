import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import {
  getAllCompanies,
  getArticlesByCompany,
  Company,
  WorkArticle,
} from '../../../utils/workContent';

type Props = {
  company: Company;
  articles: WorkArticle[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const companies = getAllCompanies();

  return {
    paths: companies.map((company) => ({
      params: { company: company.id },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const companyId = params?.company as string;
  const companies = getAllCompanies();
  const company = companies.find((c) => c.id === companyId);

  if (!company) {
    return {
      notFound: true,
    };
  }

  const articles = getArticlesByCompany(companyId);

  return {
    props: {
      company,
      articles,
    },
    revalidate: 60,
  };
};

export default function CompanyWork({ company, articles }: Props) {
  return (
    <div className='pt-0 pb-4 px-4 sm:px-6 lg:pt-0 lg:pb-20 lg:px-8'>
      <div className='max-w-lg mx-auto lg:max-w-5xl py-12'>
        <Link href='/work'>
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
            Back to all companies
          </a>
        </Link>

        <div className='flex items-start gap-6 mb-8'>
          {company.logo && (
            <div
              className={`w-16 h-16 rounded-lg shadow-sm flex-shrink-0 ${
                company.name === 'TipTip' || company.name === 'Phantom Network'
                  ? 'bg-transparent p-0'
                  : company.name === 'KodeFox'
                    ? 'bg-white p-1'
                    : company.name === 'CHI'
                      ? 'bg-black p-3'
                      : 'bg-white p-3'
              }`}
            >
              <img
                src={company.logo}
                alt={`${company.displayName} logo`}
                className={`w-full h-full ${
                  company.name === 'TipTip' ||
                  company.name === 'Phantom Network' ||
                  company.name === 'CHI'
                    ? 'object-cover rounded-lg'
                    : 'object-contain'
                }`}
              />
            </div>
          )}
          <div>
            <h1 className='text-3xl tracking-tight font-extrabold text-white sm:text-4xl'>
              {company.displayName}
            </h1>
            <p className='text-sm font-medium text-gray-400 uppercase tracking-wider mt-2'>
              {company.period}
            </p>
            <p className='text-gray-300 mt-3 font-medium text-md'>
              {company.description}
            </p>
          </div>
        </div>
      </div>

      <div className='relative max-w-lg mx-auto divide-y-2 divide-gray-800 lg:max-w-5xl'>
        <div>
          <h2 className='text-2xl tracking-tight font-extrabold text-white sm:text-3xl'>
            Articles
          </h2>
        </div>

        {articles.length > 0 ? (
          <div className='pt-8 grid gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12'>
            {articles.map((article) => {
              const dateString = new Date(article.date).toLocaleDateString(
                undefined,
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }
              );

              const href = `/work/${company.id}/${article.slug}`;

              return (
                <div
                  key={article.slug}
                  className='transition duration-300 bg-gray-700 border-gray-700 border-2 rounded-lg p-6 hover:border-sky-400 hover:shadow-2xl overflow-hidden flex flex-col sm:hover:scale-105 cursor-pointer'
                >
                  <p className='text-sm text-gray-400'>
                    <time dateTime={article.date}>{dateString}</time>
                  </p>
                  <div className='mt-2 block'>
                    <a href={href}>
                      <p className='text-xl font-semibold text-white hover:underline'>
                        {article.title}
                      </p>
                    </a>
                  </div>
                  <p className='mt-3 text-base text-gray-400 flex-1'>
                    {article.description}
                  </p>
                  <div className='mt-3 flex items-center justify-between flex-none'>
                    <a
                      href={href}
                      className='text-base font-semibold text-sky-600 hover:text-sky-500'
                    >
                      Read article
                    </a>
                    <span className='text-sm text-gray-500'>
                      {article.readingTime.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className='pt-8'>
            <p className='text-gray-400 text-center py-12'>
              No articles available yet for {company.displayName}. Check back
              soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
