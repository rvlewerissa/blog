import Link from 'next/link';

type Props = {
  posts: Array<{
    title: string;
    slug: {
      current: string;
    };
    _createdAt: string;
    description: string;
  }>;
};

export default function LatestPost({ posts }: Props) {
  return (
    <div className='py-8 sm:pb-4 px-4 sm:px-6 lg:pt-0 lg:pb-20 lg:px-8'>
      <div className='relative max-w-lg mx-auto lg:max-w-5xl'>
        <div>
          <h2 className='text-2xl tracking-tight font-extrabold text-white sm:text-3xl'>
            Latest Posts
          </h2>
        </div>
        <div className='pt-8 grid gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12'>
          {posts?.map((post) => {
            let createdAtDateString = new Date(
              post._createdAt
            ).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            let href = `/blog/${post.slug.current}`;

            return (
              <div
                key={post.title}
                className='transition duration-300 bg-gray-700 border-gray-700 border-2 rounded-lg p-6 hover:border-sky-400 hover:shadow-2xl overflow-hidden flex flex-col sm:hover:scale-105 cursor-pointer'
              >
                <p className='text-sm text-gray-400'>
                  <time dateTime={post._createdAt}>{createdAtDateString}</time>
                </p>
                <div className='mt-2 block'>
                  <Link href={href} passHref>
                    <a className='text-xl font-semibold text-white hover:underline'>
                      {post.title}
                    </a>
                  </Link>
                </div>
                <p className='mt-3 text-base text-gray-400 flex-1'>
                  {post.description}
                </p>
                <div className='mt-3 flex-none'>
                  <Link href={href} passHref>
                    <a className='text-base font-semibold text-sky-600 hover:text-sky-500'>
                      Read full post
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
