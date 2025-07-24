export default function ContactMe() {
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:rvlewerissa@gmail.com',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/>
        </svg>
      ),
      label: 'rvlewerissa@gmail.com'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vittolewerissa/',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
        </svg>
      ),
      label: 'LinkedIn'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/rvlewerissa',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
        </svg>
      ),
      label: 'GitHub'
    }
  ];

  return (
    <div className='py-8 sm:pb-4 px-4 sm:px-8 lg:pt-0 lg:pb-20' id='contact-me'>
      <div className='relative max-w-lg mx-auto lg:max-w-5xl'>
        <div className='text-center mb-12'>
          <h2 className='text-2xl tracking-tight font-extrabold text-white sm:text-3xl mb-4'>
            Let's Connect
          </h2>
          <p className='text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto'>
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and development.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto'>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800/70 hover:border-gray-600/50 hover:scale-105'
            >
              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 bg-sky-900/20 rounded-lg flex items-center justify-center text-sky-300 group-hover:bg-sky-800/30 group-hover:text-sky-200 transition-colors'>
                    {link.icon}
                  </div>
                </div>
                <div className='flex-1 min-w-0'>
                  <h3 className='text-lg font-semibold text-white group-hover:text-sky-400 transition-colors'>
                    {link.name}
                  </h3>
                  <p className='text-gray-400 text-sm truncate group-hover:text-gray-300 transition-colors'>
                    {link.label}
                  </p>
                </div>
                <div className='flex-shrink-0'>
                  <svg
                    className='w-5 h-5 text-gray-400 group-hover:text-sky-400 transition-colors'
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
