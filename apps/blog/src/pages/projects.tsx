import {
  KodefoxProjectsWithoutImage,
  KodefoxProjects,
  GDISProjects,
  CHIProjects,
  OtherProjectsWithoutImage,
} from '../components/Work/data';

type TableProject = {
  year: string;
  name: string;
  madeAt: string;
  builtWith: string[];
  link?: string;
  href?: string;
};

export default function Projects() {
  // Transform work data into table format
  const allProjects: TableProject[] = [
    ...CHIProjects.map((project) => ({
      year: project.date.dateFrom.split(' ')[1] || project.date.dateFrom,
      name: project.name,
      madeAt: 'CHI',
      builtWith: project.technologyUsed,
      link: project.href ? extractDomain(project.href) : undefined,
      href: project.href || undefined,
    })),
    ...GDISProjects.map((project) => ({
      year: project.date.dateFrom.split(' ')[1] || project.date.dateFrom,
      name: project.name,
      madeAt: 'GDIS',
      builtWith: project.technologyUsed,
      link: project.href ? extractDomain(project.href) : undefined,
      href: project.href || undefined,
    })),
    ...KodefoxProjects.map((project) => ({
      year: project.date.dateFrom.split(' ')[1] || project.date.dateFrom,
      name: project.name,
      madeAt: 'KodeFox',
      builtWith: project.technologyUsed,
      link: project.href ? extractDomain(project.href) : undefined,
      href: project.href || undefined,
    })),
    ...KodefoxProjectsWithoutImage.map((project) => ({
      year: project.date.dateFrom.split(' ')[1] || project.date.dateFrom,
      name: project.name,
      madeAt: 'KodeFox',
      builtWith: project.technologyUsed,
      link: project.href ? extractDomain(project.href) : undefined,
      href: project.href || undefined,
    })),
    ...OtherProjectsWithoutImage.map((project) => ({
      year: project.date.dateFrom.split(' ')[1] || project.date.dateFrom,
      name: project.name,
      madeAt: project.name,
      builtWith: project.technologyUsed,
      link: project.href ? extractDomain(project.href) : undefined,
      href: project.href || undefined,
    })),
  ].sort((a, b) => parseInt(b.year) - parseInt(a.year)); // Sort by year descending

  return (
    <div className='bg-gray-900 min-h-screen pt-0 pb-4 px-4 sm:px-6 lg:pt-0 lg:pb-20 lg:px-8'>
      <div className='relative max-w-lg mx-auto lg:max-w-5xl py-12'>
        <div className='mb-16'>
          <h1 className='text-4xl md:text-5xl tracking-tight font-bold font-display text-white mb-4'>
            All Projects
          </h1>
          <p className='text-gray-400 text-lg'>
            A comprehensive list of projects I&apos;ve worked on, from web and
            mobile applications.
          </p>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='border-b border-white/10'>
                <th className='py-4 pr-8 text-gray-400 font-semibold text-sm font-mono'>
                  Year
                </th>
                <th className='py-4 px-4 text-gray-400 font-semibold text-sm font-mono'>
                  Project
                </th>
                <th className='py-4 px-4 text-gray-400 font-semibold text-sm font-mono hidden md:table-cell'>
                  Made at
                </th>
                <th className='py-4 px-4 text-gray-400 font-semibold text-sm font-mono hidden lg:table-cell'>
                  Built with
                </th>
                <th className='py-4 pl-4 text-gray-400 font-semibold text-sm font-mono'>
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {allProjects.map((project, index) => (
                <tr
                  key={index}
                  className='border-b border-white/5 hover:bg-white/5 transition-colors group'
                >
                  <td className='py-6 pr-8 text-gray-400 text-sm font-mono'>
                    {project.year}
                  </td>
                  <td className='py-6 px-4 text-white font-bold font-display text-lg group-hover:text-sky-400 transition-colors'>
                    {project.name}
                  </td>
                  <td className='py-6 px-4 text-gray-400 text-sm hidden md:table-cell'>
                    {project.madeAt}
                  </td>
                  <td className='py-6 px-4 hidden lg:table-cell'>
                    <div className='flex flex-wrap gap-2'>
                      {project.builtWith.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className='inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium font-mono bg-white/5 text-gray-300 border border-white/5'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className='py-6 pl-4'>
                    {project.href && project.link ? (
                      <a
                        href={project.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-400 hover:text-sky-400 transition-colors inline-flex items-center text-sm font-medium duration-300'
                      >
                        {project.link}
                        <svg
                          className='ml-2 w-3 h-3'
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
                      </a>
                    ) : (
                      <span className='text-gray-600 text-sm'>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function extractDomain(url: string): string {
  if (!url) return '';
  try {
    const domain = new URL(url.startsWith('http') ? url : `https://${url}`)
      .hostname;
    return domain.replace('www.', '');
  } catch {
    return url;
  }
}
