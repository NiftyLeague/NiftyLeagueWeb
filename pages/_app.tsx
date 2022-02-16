import '../styles/app.css';
import '../styles/animation.css';
import '../styles/slick.css';
import '../styles/roadmap.css';
import '../styles/satoshi-right.css';
import '../styles/blog.scss';
import '../styles/footer.scss';
import '../styles/header.scss';

import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
