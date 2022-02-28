import '../styles/app.css';
import '../styles/slick.css';
import '../styles/roadmap.css';
import '../styles/satoshi-right.css';
import '../styles/blog.scss';
import '../styles/footer.scss';
import '../styles/header.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
