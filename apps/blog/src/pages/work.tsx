import clsx from 'clsx';
import Head from 'next/head';

import Navigation from '../components/Navigation';
import Footer from '../components/LandingPage/Footer';

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

const GDISProjects = [
  {
    name: 'ProLogs',
    href: '',
    date: { dateFrom: 'Dec 2021', dateTo: 'Present' },
    description: `A ticketing software MVP for PT. TPK Koja (a container terminal company) to manage daily operations of container handling.`,
    technologyUsed: ['React (with Next.js)', 'TailwindCSS'],
    responsibilities: ['Single handedly build the MVP in less than a month.'],
    image: {
      src: '/prologs-mockup.png',
      alt: 'Showcasing Marketwurks app dashboard look.',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-contain',
      withMixBlend: true,
    },
  },
  {
    name: 'ProCost',
    href: 'https://gdis.procost.gdis-world.com/',
    date: { dateFrom: 'Feb 2020', dateTo: 'Nov 2021' },
    description: `Budget management system designed specifically for construction companies.`,
    technologyUsed: ['React', 'Apollo Client', 'GraphQL'],
    responsibilities: [
      'Architectural design (decide the stack to use)',
      'In charge of the frontend development',
    ],
    challenges: [
      'Initially, the deadline was too short (several months)',
      'Too many features with too few engineers (only 2 -- that includes me)',
    ],
    image: {
      src: '/procost-mockup.png',
      alt: 'Showcasing Marketwurks app dashboard look.',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-contain',
      withMixBlend: true,
    },
  },
];

const KodefoxProjects = [
  {
    name: 'Vospay',
    href: 'https://vospay.co.id/',
    date: { dateFrom: 'Feb 2018', dateTo: 'Jul 2018' },
    description: `Vospay is looking to revolutionize the traditional multifinance industry and expand its market reach. One of the goals is to facilitate online transactions with multifinance platforms. Vospay is bridging multifinance customers with a large number of Indonesia's e-commerce platforms.`,
    technologyUsed: ['React', 'Node.js (with AdonisJS)', 'PostgreSQL'],
    responsibilities: [
      'Build dashboard',
      'Developed account registration & activation (for an in-depth look of what the UI looks like, please visit: https://www.sixtytwo.co/works/vospay)',
    ],
    image: {
      src: '/vospay-mockup.png',
      alt: 'Showcasing Marketwurks app dashboard look.',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-contain',
      withMixBlend: true,
    },
  },
  {
    name: 'Zumi',
    href: 'https://www.zumiapp.com',
    date: { dateFrom: 'Aug 2017', dateTo: 'Jan 2018' },
    description:
      'Zumi is a parent-teacher communication app that disrupt the traditional Whatsapp based communication.',
    technologyUsed: ['React Native', 'Node.js', 'MongoDB'],
    responsibilities: [
      'Build some of the frontend pages, including signup flow, bulletins, class news, and reports.',
      'Build the backend using Node.js and MongoDB',
    ],
    image: {
      src: '/zumi-mockup.png',
      alt: 'Showcasing Zumi app mockups.',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-contain',
      withMixBlend: true,
    },
  },
  {
    name: 'Marketwurks',
    href: 'https://www.marketwurks.com',
    date: { dateFrom: 'Feb 2017', dateTo: 'Aug 2017' },
    description:
      'Marketwurks allows you to easily and affordably manage your market.',
    technologyUsed: ['React', 'Node.js'],
    responsibilities: [
      'Build new features such as adding drag & drop feature to forms, new form types, labelling, etc.',
      'Maintain application by fixing regression and bugs.',
    ],
    image: {
      src: '/marketwurks-dashboard.png',
      alt: 'Showcasing Marketwurks app dashboard look.',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-cover',
      withMixBlend: true,
    },
  },
  {
    name: 'Karsa',
    href: '',
    date: { dateFrom: 'Oct 2016', dateTo: 'Jan 2017' },
    description:
      'Karsa is an app designed for farmers. You can browse news related to crops, check the current weather, save catalogs of your own plant, have conversations in forums, sell and buy products related to farming, etc.',
    technologyUsed: ['React Native'],
    responsibilities: [
      'Revamp the app from ground up using new technology but with the same design.',
    ],
    image: {
      src: '/karsa-mockup.png',
      alt: 'Showcasing Karsa app mockup look.',
      aspectRatio: 'aspect-w-4 aspect-h-4',
      objectFit: 'object-cover',
      withMixBlend: true,
    },
  },
];

const KodefoxProjectsWithoutImage = [
  {
    name: 'Vision UI',
    href: '',
    date: { dateFrom: 'Mar 2019', dateTo: 'Dec 2019' },
    description: `It was designed as an in-house framework for clients to build
      applications without needing to code (no-code tool). The idea
      was to have a Drag-and-Drop GUI that generates a JSON schema
      that will be consumed by an executable. That executable then
      generates a cross-platform React app. We managed to generate the
      app just by using the JSON schema, but we didn&apos;t proceed
      with building the GUI.`,
    technologyUsed: ['React', 'React Native', 'Expo'],
    responsibilities: [
      'Help build the spec',
      'Help build the executables that consumes the JSON schema',
    ],
  },
  {
    name: 'ElitePro',
    href: '',
    date: { dateFrom: 'Jul 2018', dateTo: 'Dec 2018' },
    description: `A link rotator built for digital marketers. You generate a link that will be distributed to your marketplace. If a customer clicks on the link, they will be redirected to a target destination of your choice (most likely to be customer service/sales). The app needs to be able to rotate the link intelligently.`,
    technologyUsed: ['React', 'Node.js', 'MongoDB'],
    responsibilities: ['Build backend', 'Build frontend'],
  },
];

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

function ProjectWithImage({ project }) {
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

function ProjectWithoutImage({ project }) {
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
