import Head from 'next/head'

export default function Meta ({ title, keywords, description }) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon/favicon.ico' />
      <link
        rel='icon'
        sizes='512x512'
        href='/favicon/android-chrome-512x512.png'
      />
      <link
        rel='icon'
        sizes='192x192'
        href='/favicon/android-chrome-192x192.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Glenn Goossens',
  keywords:
    'web developer, web development, functional programming, full stack, javascript',
  description: 'Belgian web developer & functional thinker'
}
