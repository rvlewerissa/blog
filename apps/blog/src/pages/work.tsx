import clsx from 'clsx';
import Head from 'next/head';

import Navigation from '../components/Navigation';
import Footer from '../components/LandingPage/Footer';
import {
  KodefoxProjectsWithoutImage,
  KodefoxProjects,
  GDISProjects,
  ProjectWithoutImage,
  ProjectWithImage,
} from '../components/Work/data';

export default function Work() {
  return (
    <div className='bg-gray-800 min-h-screen'>
      <Head>
        <title>Vitto Lewerissa</title>
        <meta name='description' content='Personal blog by Vitto Lewerissa' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <Projects />
      <Footer />
    </div>
  );
}

function Projects() {
  return (
    <div className='pt-0 px-4 sm:px-6 lg:pt-0 lg:px-8 border-b border-gray-700 lg:border-0'>
      <div className='max-w-lg mx-auto lg:max-w-5xl py-12'>
        <h1 className='text-3xl tracking-tight font-extrabold text-white sm:text-4xl'>
          Work
        </h1>
        <p className='text-gray-200 mt-3 md:mt-5 font-medium text-md md:text-lg'>
          Here are all my work in the past. Most of my work involves building
          app from the ground up (including MVPs and POCs), but never to the
          point where it scales to millions of users, this is because I worked
          mostly with software agencies.
        </p>
        <div>
          <div className='mx-auto py-16 sm:py-16 lg:max-w-7xl space-y-16'>
            <div className='relative'>
              <div
                className='absolute inset-0 flex items-center'
                aria-hidden='true'
              >
                <div className='w-full border-t border-gray-500' />
              </div>
              <div className='relative flex justify-center'>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-200 text-orange-800'>
                  Projects at&nbsp;<span className='font-bold'>Kodefox</span>
                </span>
              </div>
            </div>

            {KodefoxProjects.map((project, i) => (
              <ProjectWithImage project={project} key={i} />
            ))}

            <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10'>
              {KodefoxProjectsWithoutImage.map((project, i) => (
                <ProjectWithoutImage project={project} key={i} />
              ))}
            </div>

            <div className='relative'>
              <div
                className='absolute inset-0 flex items-center'
                aria-hidden='true'
              >
                <div className='w-full border-t border-gray-500' />
              </div>
              <div className='relative flex justify-center'>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-200 text-blue-800'>
                  Projects at&nbsp;<span className='font-bold'>GDIS</span>
                </span>
              </div>
            </div>

            {GDISProjects.map((project, i) => (
              <ProjectWithImage project={project} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectWithImage({ project }: { project: ProjectWithImage }) {
  return (
    <div
      className='lg:grid lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'
      id={project.name}
    >
      <div className='lg:col-span-4'>
        <div
          className={clsx(
            'rounded-lg overflow-hidden',
            project.image.aspectRatio
          )}
        >
          <img
            src={project.image.src}
            alt={project.image.alt}
            className={clsx('object-center', project.image.objectFit)}
          />
          {project.image.withMixBlend && (
            <div className='object-center bg-blue-50 mix-blend-multiply' />
          )}
        </div>
      </div>
      <div className='max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:col-span-3'>
        <div className='flex flex-col-reverse'>
          <div>
            <h1 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl'>
              {project.href ? (
                <a
                  href={project.href}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:underline'
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h1>

            <h2 id='information-heading' className='sr-only'>
              Project information
            </h2>
            <p className='text-sm text-gray-400 mt-2'>
              (<time>{project.date.dateFrom}</time> -{' '}
              <time>{project.date.dateTo}</time>)
            </p>
          </div>
        </div>

        <p className='text-gray-300 mt-6'>{project.description}</p>

        <div className='sm:border-t sm:border-dashed sm:border-gray-500 sm:mt-8 pt-8'>
          <h3 className='text-lg font-medium text-white'>Responsibility</h3>
          <div className='mt-4 text-gray-300'>
            <ul role='list'>
              {project.responsibilities.map((responsibility, i) => (
                <li key={i}>- {responsibility}</li>
              ))}
            </ul>
          </div>
        </div>

        {project.challenges?.length && (
          <div className='sm:border-t sm:border-dashed sm:border-gray-500 sm:mt-8 pt-8'>
            <h3 className='text-lg font-medium text-white'>Challenges</h3>
            <div className='mt-4 text-gray-300'>
              <ul role='list'>
                {project.challenges.map((challenge, i) => (
                  <li key={i}>- {challenge}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className='mt-4 pt-4'>
          <h3 className='text-lg font-medium text-white'>Technology Used</h3>
          <div className='mt-4 text-gray-300'>
            <ul role='list'>
              {project.technologyUsed.map((highlight) => (
                <li key={highlight}>- {highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectWithoutImage({ project }: { project: ProjectWithoutImage }) {
  return (
    <div className='mt-14 sm:mt-16 lg:mt-0 bg-gray-700 p-6 rounded-lg'>
      <div className='flex flex-col-reverse'>
        <div>
          <h1 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl'>
            {project.name}
          </h1>

          <h2 id='information-heading' className='sr-only'>
            Project information
          </h2>
          <p className='text-sm text-gray-400 mt-2'>
            (<time>{project.date.dateFrom}</time> -{' '}
            <time>{project.date.dateTo}</time>)
          </p>
        </div>
      </div>

      <p className='text-gray-300 mt-6'>{project.description}</p>

      <div className='pt-8'>
        <h3 className='text-lg font-bold text-white'>Responsibility</h3>
        <div className='mt-4 text-gray-300'>
          <ul role='list'>
            {project.responsibilities.map((responsibility, i) => (
              <li key={i}>- {responsibility}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className='mt-4 pt-4'>
        <h3 className='text-lg font-medboldium text-white'>Technology Used</h3>
        <div className='mt-4 text-gray-300'>
          <ul role='list'>
            {project.technologyUsed.map((technologyUsed, i) => (
              <li key={i}>- {technologyUsed}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
