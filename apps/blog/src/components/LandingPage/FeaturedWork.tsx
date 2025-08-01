import Link from 'next/link';

const workExperience = [
  {
    period: 'OCT 2022 — APR 2025',
    title: 'Senior Front End Engineer',
    company: 'TipTip',
    href: 'https://www.tiptip.id/',
    logo: '/tiptip-logo.png',
    bulletPoints: [
      'Developed and maintained 5 applications (user-facing and internal tools) using Next.js, TypeScript, and Retool.',
      'Shipped 10+ product-led features and 5 engineering initiatives, consistently meeting sprint deadlines 1-4 weeks.',
      'Enhanced web performance to support high-scale ticketing events e.g., Green Day, managing 30k capacity and 100 RPS.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Zustand', 'Retool', 'Jest'],
  },
  {
    period: 'APR 2022 — OCT 2022',
    title: 'Senior Front End Engineer',
    company: 'Phantom Network',
    href: 'https://www.phantom.sh/',
    logo: '/pxn-logo.png',
    bulletPoints: [
      'Contributed to the successful launch of key features for the #1 NFT project on OpenSea, helping drive $70 million in secondary sales and securing the top global ranking within two weeks of onboarding.',
      'Developed a Discord-like chat MVP within, collaborating with an 8-member cross-functional team.',
      'Delivered 3 major product features and resolved 50 critical bugs, improving platform stability by 35% and enhancing user experience, as reflected in a 20% decrease in reported issues',
    ],
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Jest'],
  },
  {
    period: 'DEC 2019 — APR 2022',
    title: 'Front End Engineer',
    company: 'GDIS',
    href: 'https://www.linkedin.com/company/gdis-inovasi-indonesia/',
    logo: '/gdis-logo.png',
    bulletPoints: [
      'Led a team of 4 developers, mentoring junior engineers while overseeing all front-end deliverables.',
      'Revamped the core product from scratch within, upgrading to the latest React & GraphQL, which reduced load times by 60% and cut maintenance overhead by 25%, enabling faster feature development.',
      'Eliminated 25% lines of legacy code, reducing technical debt, cutting bug rates by 40%, and improving development efficiency, leading to a 30% faster feature delivery time.',
    ],
    technologies: ['React.js', 'TypeScript', 'GraphQL', 'Redux', 'Jest'],
  },
  {
    period: 'OCT 2016 — NOV 2019',
    title: 'Front End Engineer',
    company: 'KodeFox',
    href: 'https://kodefox.com/',
    logo: '/kodefox-logo.png',
    bulletPoints: [
      'Delivered 4 client apps (2 web apps with React.js and 2 mobile apps with React Native).',
      'Refactored legacy app MarketWurks, upgrading it to ES6 latest React version, integrating Redux for state management.',
      'Contributed to VisionUI, a no-code framework enabling Prudential Indonesia to rapidly generate web & mobile apps.',
      'Led a one-week training/workshop for BTPN Bank and Jenius teams.',
      "Mentored developers through Kodefox's workshops at Traveloka, Skystar Ventures, and other organizations.",
    ],
    technologies: [
      'React.js',
      'React Native',
      'Node.js',
      'GraphQL',
      'REST API',
      'Redux',
      'JavaScript',
      'Jest',
    ],
  },
];

export default function RecentWork() {
  return (
    <div id='work' className='py-8 sm:pb-4 px-4 sm:px-8 lg:pt-0 lg:pb-20'>
      <div className='relative max-w-lg mx-auto lg:max-w-5xl'>
        <div>
          <h2 className='text-2xl tracking-tight font-extrabold text-white sm:text-3xl mb-8'>
            Work Experience
          </h2>

          <div className='relative'>
            <div className='space-y-6'>
              {workExperience.map((job) => (
                <div
                  key={job.company}
                  className='group relative p-6 rounded-lg transition-all duration-300 hover:bg-gray-700/20 hover:shadow-md cursor-pointer'
                  onClick={() =>
                    window.open(job.href, '_blank', 'noopener,noreferrer')
                  }
                >
                  {/* Vertical line segment with margin below company logo - hidden on hover */}
                  <div className='absolute left-6 lg:left-12 top-32 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 to-gray-600 opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>

                  <div className='flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8'>
                    <div className='lg:w-48 flex-shrink-0 relative'>
                      <p className='text-sm font-medium text-gray-400 uppercase tracking-wider mb-3'>
                        {job.period}
                      </p>

                      {/* Company logo */}
                      <div
                        className={`w-12 h-12 rounded-lg shadow-sm ${
                          job.company === 'TipTip' ||
                          job.company === 'Phantom Network'
                            ? 'bg-transparent p-0'
                            : job.company === 'KodeFox'
                              ? 'bg-white p-1'
                              : 'bg-white p-2'
                        }`}
                      >
                        <img
                          src={job.logo}
                          alt={`${job.company} logo`}
                          className={`w-full h-full ${job.company === 'TipTip' || job.company === 'Phantom Network' ? 'object-cover rounded-lg' : 'object-contain'}`}
                          onError={(e) => {
                            // Fallback if logo doesn't exist
                            const target = e.currentTarget;
                            const fallback =
                              target.nextElementSibling as HTMLElement;
                            target.style.display = 'none';
                            if (fallback) {
                              fallback.style.display = 'flex';
                            }
                          }}
                        />
                        <div
                          className='w-full h-full bg-gray-600 rounded flex items-center justify-center text-white text-xs font-bold'
                          style={{ display: 'none' }}
                        >
                          {job.company.charAt(0)}
                        </div>
                      </div>
                    </div>

                    <div className='flex-1 pl-8 lg:pl-0'>
                      <div className='mb-4'>
                        <h3 className='text-xl font-semibold text-white mb-1 group-hover:text-sky-400 transition-colors'>
                          {job.title}
                        </h3>
                        <div className='flex items-center mb-2'>
                          <Link href={job.href}>
                            <a
                              className='text-gray-300 hover:text-sky-400 group-hover:text-sky-400 transition-colors font-medium'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              {job.company}
                            </a>
                          </Link>
                          <svg
                            className='ml-2 w-4 h-4 text-gray-400'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                            />
                          </svg>
                        </div>
                      </div>

                      {job.bulletPoints && (
                        <ul className='text-gray-300 mb-4 leading-relaxed space-y-2'>
                          {job.bulletPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className='flex items-start'>
                              <span className='text-sky-400 mr-3 mt-1.5 text-xs'>
                                •
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className='flex flex-wrap gap-2'>
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='px-3 py-1 text-xs font-medium bg-sky-900/20 text-sky-300 rounded-full border border-sky-800/30'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-12'>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-4 py-2 bg-sky-900/20 text-sky-300 rounded-lg border border-sky-800/30 hover:bg-sky-800/30 hover:border-sky-700/50 transition-all duration-300'
            >
              <svg
                className='mr-2 w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
              View Full Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
