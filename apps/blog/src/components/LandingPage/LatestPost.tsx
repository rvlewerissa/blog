const posts = [
  {
    title: 'Boost your conversion rate. ',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description:
      'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
  },
  {
    title: 'Writing effective landing page copy',
    href: '#',
    description:
      'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
    date: 'Jan 29, 2020',
    datetime: '2020-01-29',
  },
];

export default function LatestPost() {
  return (
    <div className='py-8 sm:pb-4 px-4 sm:px-6 lg:pt-0 lg:pb-20 lg:px-8'>
      <div className='relative max-w-lg mx-auto divide-y-2 divide-gray-800 lg:max-w-5xl'>
        <div>
          <h2 className='text-2xl tracking-tight font-extrabold text-white sm:text-3xl'>
            Recent Posts
          </h2>
        </div>
        <div className='pt-8 grid gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12'>
          {posts.map((post) => (
            <div
              key={post.title}
              className='transition duration-300 h-64 bg-gray-700 border-gray-700 border-2 rounded-lg p-6 hover:border-sky-400 hover:shadow-2xl overflow-hidden flex flex-col sm:hover:scale-105 cursor-pointer'
            >
              <p className='text-sm text-gray-400'>
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <div className='mt-2 block'>
                <a href='#' className=''>
                  <p className='text-xl font-semibold text-white hover:underline'>
                    {post.title}
                  </p>
                </a>
              </div>
              <p className='mt-3 text-base text-gray-400 flex-1'>
                {post.description}
              </p>
              <div className='mt-3 flex-none'>
                <a
                  href={post.href}
                  className='text-base font-semibold text-sky-600 hover:text-sky-500'
                >
                  Read full post
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
