import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllCompanies, Company } from '../../utils/workContent';

type Props = {
  companies: Company[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const companies = getAllCompanies();

  return {
    props: {
      companies,
    },
  };
};

export default function WorkIndex({ companies }: Props) {
  return (
    <div className='pt-0 pb-4 px-4 sm:px-6 lg:pt-0 lg:pb-20 lg:px-8'>
      <div className='max-w-lg mx-auto lg:max-w-5xl py-12'>
        <h1 className='text-3xl tracking-tight font-extrabold text-white sm:text-4xl'>
          Work Showcase
        </h1>
        <p className='text-gray-200 mt-3 md:mt-5 font-medium text-md md:text-lg'>
          A collection of articles about the projects and challenges I&apos;ve
          worked on throughout my career. Each company represents a unique
          chapter of learning and growth.
        </p>
      </div>

      <div className='relative max-w-lg mx-auto lg:max-w-5xl'>
        <div className='space-y-6'>
          {companies.map((company) => (
            <Link key={company.id} href={`/work/${company.id}`}>
              <a className='group block'>
                <div className='relative p-6 rounded-lg transition-all duration-300 bg-gray-700/20 hover:bg-gray-700/40 hover:shadow-md border border-gray-700 hover:border-sky-400'>
                  <div className='flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8'>
                    <div className='lg:w-48 flex-shrink-0'>
                      <p className='text-sm font-medium text-gray-400 uppercase tracking-wider mb-3'>
                        {company.period}
                      </p>

                      {/* Company logo */}
                      {company.logo && (
                        <div
                          className={`w-12 h-12 rounded-lg shadow-sm ${
                            company.name === 'TipTip' ||
                            company.name === 'Phantom Network'
                              ? 'bg-transparent p-0'
                              : company.name === 'KodeFox'
                                ? 'bg-white p-1'
                                : company.name === 'CHI'
                                  ? 'bg-black p-2.5'
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
                                ? 'object-cover rounded-lg'
                                : 'object-contain'
                            }`}
                          />
                        </div>
                      )}
                    </div>

                    <div className='flex-1'>
                      <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors flex items-center'>
                        {company.displayName}
                        <svg
                          className='ml-2 w-4 h-4 text-gray-400 group-hover:text-sky-400'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      </h3>
                      <p className='text-gray-300 leading-relaxed'>
                        {company.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>

        {companies.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-400 text-lg'>
              No work articles available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
