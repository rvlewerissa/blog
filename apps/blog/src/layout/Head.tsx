import NextHead from 'next/head';

export default function Head() {
  return (
    <NextHead>
      <title>Vitto Lewerissa</title>
      <meta
        property='og:title'
        content={`Vitto Lewerissa's personal website`}
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:image'
        content='https://res.cloudinary.com/dyiamdse5/image/upload/v1642286968/blog-og_fe3smt.png'
      />
      <meta property='og:url' content='https://www.vittolewerissa.com' />
      <meta name='description' content={`Vitto Lewerissa's personal website`} />
    </NextHead>
  );
}
