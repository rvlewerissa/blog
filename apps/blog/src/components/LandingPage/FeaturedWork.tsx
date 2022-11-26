import Link from 'next/link';

const projects = [
  {
    title: 'Vospay',
    href: '/work#Vospay',
    category: { name: 'Built' },
    description: `Vospay is bridging multifinance customers with Indonesia's e-commerce platforms. I was responsible for building the dashboard, account registration & activation interface.`,
    imageUrl: '/vospay-dashboard.png',
    company: {
      name: 'Built at Kodefox',
      imageUrl: '/kodefox-logo.png',
    },
  },
  {
    title: 'Marketwurks',
    href: '/work#Marketwurks',
    category: { name: 'Maintained' },
    description:
      'Marketwurks is an app that allows you to easily and affordably manage your market. I help maintain the application by fixing bugs and build new features.',
    imageUrl: '/marketwurks-dashboard.png',
    company: {
      name: 'Built at Kodefox',
      imageUrl: '/kodefox-logo.png',
    },
  },
  {
    title: 'Procost',
    href: '/work#ProCost',
    category: { name: 'Built' },
    description:
      'Procost is a budget management software for construction companies. I was responsible for building the frontend side of the application.',
    imageUrl: '/procost-dashboard.png',
    company: {
      name: 'Built at GDIS',
      imageUrl: '/gdis-logo.png',
    },
  },
];

export default function RecentWork() {
  return (
    <div className='py-8 sm:pb-4 px-4 sm:px-6 lg:pt-0 lg:pb-20 lg:px-8'>
      <div className='relative max-w-lg mx-auto divide-y-2 divide-gray-800 lg:max-w-5xl'>
        <div>
          <h2 className='text-2xl tracking-tight font-extrabold text-white sm:text-3xl'>
            Featured Work
          </h2>
          <p className='text-gray-200 mt-2 md:mt-2 font-mdedium text-md md:text-lg'>
            Here are some of my work in the past. You can view all my work{' '}
            <Link href='/work' passHref>
              <a className='text-sky-500'>here</a>
            </Link>
            .
          </p>
          <div className='pt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {projects.map((post) => (
              <div
                key={post.title}
                className='flex flex-col rounded-lg shadow-lg overflow-hidden transition duration-300 cursor-pointer sm:hover:scale-105 border-gray-700 border-2 hover:border-sky-400 hover:shadow-2xl'
              >
                <div className='flex-shrink-0 bg-white'>
                  <img
                    className='h-48 w-full object-cover'
                    src={post.imageUrl}
                    alt=''
                  />
                </div>
                <div className='flex-1 bg-gray-700 p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    <p className='text-sm font-bold text-sky-500'>
                      <span>{post.category.name}</span>
                    </p>
                    <a href={post.href} className='block mt-2'>
                      <p className='text-xl font-semibold text-white hover:underline'>
                        {post.title}
                      </p>
                      <p className='mt-3 text-base text-gray-300'>
                        {post.description}
                      </p>
                    </a>
                  </div>
                  <div className='mt-6 flex items-center'>
                    <div className='flex-shrink-0'>
                      <div>
                        <span className='sr-only'>{post.company.name}</span>
                        <img
                          className='h-8 w-8'
                          src={post.company.imageUrl}
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='ml-2'>
                      <p className='text-sm font-regular text-gray-300'>
                        <span>{post.company.name}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
