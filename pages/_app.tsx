import '../styles/app.css';
import '../styles/slick.css';
import '../styles/roadmap.css';
import '../styles/satoshi-right.css';
import '../styles/blog.scss';
import '../styles/footer.scss';
import '../styles/header.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <Script
        type="text/javascript"
        src="/js/mdb.min.js"
        strategy="beforeInteractive"
      />
      <Script
        type="text/javascript"
        src="/js/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        type="text/javascript"
        src="/js/slick.js"
        strategy="beforeInteractive"
      />
    </>
  );
}

export default MyApp;
