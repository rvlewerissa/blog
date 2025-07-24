import Link from 'next/link';

const projects = [
  {
    name: 'Bootcampku',
    description:
      'An online learning platform focused on Frontend Engineering and Web Development. Features short, dense, and informative content with live coding experiences directly in the browser, covering technologies for all skill levels.',
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    demo: 'https://bootcampku.com',
    image: '/bootcampku-logo.png',
    status: 'active',
    company: 'Independent',
  },
  {
    name: 'Marketwurks',
    description:
      'Marketwurks allows you to easily and affordably manage your market. Enhanced the platform with new features including drag & drop functionality for forms, new form types, labelling system, and maintained the application by fixing regressions and bugs.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demo: 'https://www.marketwurks.com',
    demoVideo: 'https://vimeo.com/marketwurks',
    image: '/marketwurks-dashboard.png',
    status: 'active',
  },
  {
    name: 'Vospay',
    description:
      "Vospay is looking to revolutionize the traditional multifinance industry and expand its market reach. One of the goals is to facilitate online transactions with multifinance platforms. Vospay is bridging multifinance customers with a large number of Indonesia's e-commerce platforms.",
    technologies: ['React', 'Node.js'],
    demo: 'https://www.linkedin.com/company/vostropay-paramarta-nusantara/',
    publication:
      'https://swa.co.id/read/343209/vospay-hadirkan-opsi-pembiayaan-dari-berbagai-perusahaan',
    design: 'https://www.sixtytwo.co/works/vospay',
    image: '/vospay-dashboard-2.png',
    status: 'archived',
  },
  {
    name: 'Zumi',
    description:
      'Zumi is a parent-teacher communication app that disrupts traditional WhatsApp-based communication. Built frontend pages including signup flow, bulletins, class news, and reports, plus developed the backend using Node.js and MongoDB for seamless parent-teacher interactions.',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    demo: 'https://zumiapp.com/',
    image: '/zumi-mockup.png',
    status: 'archived',
  },
  {
    name: 'ProCost',
    description:
      'Budget management system designed specifically for construction companies. Led architectural design decisions and was in charge of frontend development using modern React and GraphQL stack.',
    technologies: [
      'React (with Next.js)',
      'Apollo Client',
      'GraphQL',
      'TailwindCSS',
    ],
    image: '/procost-mockup.png',
    status: 'archived',
    company: 'GDIS',
  },
  {
    name: 'ProLogs',
    description:
      'A ticketing software MVP for PT. TPK Koja (a container terminal company) to manage daily operations of container handling. Built the entire MVP single-handedly in less than a month.',
    technologies: ['React (with Next.js)', 'TailwindCSS'],
    image: '/prologs-mockup.png',
    status: 'archived',
    company: 'GDIS',
  },
];

export default function Projects() {
  return (
    <div id='projects' className='py-8 sm:pb-4 px-4 sm:px-8 lg:pt-0 lg:pb-20'>
      <div className='relative max-w-lg mx-auto lg:max-w-5xl'>
        <div>
          <h2 className='text-2xl tracking-tight font-extrabold text-white sm:text-3xl mb-8'>
            Featured Projects
          </h2>

          <div className='grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
            {projects.map((project, index) => (
              <div
                key={project.name}
                className='group relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800/70 hover:border-gray-600/50'
              >
                {/* Project Image */}
                <div className='w-full h-48 bg-gray-600 rounded-lg mb-4 overflow-hidden'>
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div
                    className='w-full h-full bg-gray-600 rounded flex items-center justify-center text-white text-sm font-medium'
                    style={{ display: 'none' }}
                  >
                    {project.name}
                  </div>
                </div>

                {/* Project Info */}
                <div className='flex-1'>
                  <div className='flex items-center justify-between mb-2'>
                    {project.status === 'active' || project.demo ? (
                      <a
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-xl font-semibold text-white hover:text-sky-400 transition-colors cursor-pointer'
                      >
                        {project.name}
                      </a>
                    ) : (
                      <h3 className='text-xl font-semibold text-white transition-colors'>
                        {project.name}
                      </h3>
                    )}
                    {project.status === 'archived' && (
                      <span className='px-2 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded border border-gray-600/50'>
                        Archived
                      </span>
                    )}
                    {project.status === 'active' && (
                      <a
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center px-2 py-1 text-xs font-medium bg-emerald-900/30 text-emerald-300 hover:bg-emerald-800/40 hover:text-emerald-200 rounded border border-emerald-800/40 transition-colors'
                      >
                        <svg
                          className='w-3 h-3 mr-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                          />
                        </svg>
                        Website
                      </a>
                    )}
                  </div>

                  <p className='text-gray-300 text-sm leading-relaxed mb-3'>
                    {project.description}
                  </p>

                  <p className='text-orange-400 text-xs font-medium mb-4'>
                    {project.company === 'Independent'
                      ? 'Personal Project'
                      : `Built at ${project.company || 'KodeFox'}`}
                  </p>

                  {/* Technologies */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='px-2 py-1 text-xs font-medium bg-sky-900/20 text-sky-300 rounded-full border border-sky-800/30'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Demo, Publication, and Design buttons at bottom */}
                  <div className='flex gap-2 mt-2'>
                    {project.demoVideo && (
                      <a
                        href={project.demoVideo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 hover:bg-blue-800/40 hover:text-blue-200 rounded border border-blue-800/40 transition-colors'
                      >
                        <svg
                          className='w-3 h-3 mr-1'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M8 5v14l11-7z' />
                        </svg>
                        Demo
                      </a>
                    )}
                    {project.publication && (
                      <a
                        href={project.publication}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center px-2 py-1 text-xs font-medium bg-purple-900/30 text-purple-300 hover:bg-purple-800/40 hover:text-purple-200 rounded border border-purple-800/40 transition-colors'
                      >
                        <svg
                          className='w-3 h-3 mr-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                          />
                        </svg>
                        Publication
                      </a>
                    )}
                    {project.design && (
                      <a
                        href={project.design}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center px-2 py-1 text-xs font-medium bg-pink-900/30 text-pink-300 hover:bg-pink-800/40 hover:text-pink-200 rounded border border-pink-800/40 transition-colors'
                      >
                        <svg
                          className='w-3 h-3 mr-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                          />
                        </svg>
                        Design
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className='mt-12'>
            <Link href='/projects'>
              <span className='inline-flex items-center px-4 py-2 bg-sky-900/20 text-sky-300 hover:bg-sky-800/30 hover:text-sky-200 transition-all duration-300 font-medium rounded-lg border border-sky-800/30 hover:border-sky-700/50'>
              Explore All Projects
              <svg
                className='ml-2 w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
