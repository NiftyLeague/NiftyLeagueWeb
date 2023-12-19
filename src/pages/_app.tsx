import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
// import { publicProvider } from 'wagmi/providers/public';

import * as ga from '@/lib/ga';

import '@/styles/globals.css';
import '@/styles/animations.css';
import '@/styles/app.css';
import '@/styles/slick.css';
import '@/styles/footer.scss';
import '@/styles/header.scss';

// const { publicClient, webSocketPublicClient } = configureChains([mainnet], [publicProvider()]);

// const config = createConfig({
//   autoConnect: true,
//   publicClient,
//   webSocketPublicClient,
// });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </Head>
      {/* <WagmiConfig config={config}> */}
      <Component {...pageProps} />
      {/* </WagmiConfig> */}
    </>
  );
}

export default MyApp;
