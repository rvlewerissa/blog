import {
  KodefoxProjectsWithoutImage,
  KodefoxProjects,
  GDISProjects,
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
    <div className='pt-0 pb-4 px-4 sm:px-6 lg:pt-0 lg:pb-20 lg:px-8'>
      <div className='relative max-w-lg mx-auto lg:max-w-5xl py-12'>
        <h1 className='text-4xl tracking-tight font-bold text-white mb-16'>
          All Projects
        </h1>

        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-gray-700'>
                <th className='text-left py-4 px-0 text-gray-400 font-bold text-sm'>
                  Year
                </th>
                <th className='text-left py-4 px-6 text-gray-400 font-bold text-sm'>
                  Project
                </th>
                <th className='text-left py-4 px-6 text-gray-400 font-bold text-sm'>
                  Made at
                </th>
                <th className='text-left py-4 px-6 text-gray-400 font-bold text-sm'>
                  Built with
                </th>
                <th className='text-left py-4 px-6 text-gray-400 font-bold text-sm'>
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {allProjects.map((project, index) => (
                <tr
                  key={index}
                  className='border-b border-gray-800 hover:bg-gray-900/30 transition-colors'
                >
                  <td className='py-6 pr-6 text-gray-400 text-sm'>
                    {project.year}
                  </td>
                  <td className='py-6 px-6 text-white font-medium'>
                    {project.name}
                  </td>
                  <td className='py-6 px-6 text-gray-400 text-sm'>
                    {project.madeAt}
                  </td>
                  <td className='py-6 px-6'>
                    <div className='flex flex-wrap gap-2'>
                      {project.builtWith.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className='inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-teal-900/30 text-teal-300 border border-teal-800/50'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className='py-6 px-6'>
                    {project.href && project.link ? (
                      <a
                        href={project.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-400 hover:text-white transition-colors inline-flex items-center text-sm'
                      >
                        {project.link}
                        <svg
                          className='ml-1 w-3 h-3'
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
