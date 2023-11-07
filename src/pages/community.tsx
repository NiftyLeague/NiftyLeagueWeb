import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import Layout from '@/components/Layout';
import SocialCards from '@/components/SocialCards';
import AnimatedWrapper from '@/components/AnimatedWrapper';

const Community: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');
  return (
    <Layout classes={{ root: 'com-pg' }}>
      <Head>
        <title>Nifty League | Community</title>
        <meta property="og:title" content="Nifty League | Community" />
        <meta name="description" content="Community comes first at Nifty League" key="desc" />
        <meta property="og:description" content="Community comes first at Nifty League" />
        <meta property="og:image" content="https://niftyleague.com/img/home/banner-mobile.png" />
      </Head>

      <div className="position-relative pt-md-5 mt-md-5 com-intro">
        <div className="container pt-5 mt-sm-5 px-0 px-sm-5" style={{ maxWidth: '90%' }}>
          <div className="row m-0 position-relative com-intro-content">
            <div className="col-md-6 px-0 com-intro-text">
              <div className="mt-5">
                <AnimatedWrapper>
                  <h4 className="animated-header-text animated-header-text-start">Nifty League</h4>
                </AnimatedWrapper>
              </div>
              <AnimatedWrapper>
                <h1 className="animated-header-text animated-header-text-start">Community</h1>
              </AnimatedWrapper>
              <div className="my-3">
                <AnimatedWrapper>
                  <p className="animated-header-text animated-header-text-start transition-delay-small">
                    Meet our global community of gamers
                  </p>
                </AnimatedWrapper>
              </div>
            </div>
            <div className="col-sm-8 col-md-6 col-xl-4 position-relative text-center com-banner">
              <AnimatedWrapper>
                <div className="position-relative animated-fade-start animated-fade transition-delay-medium">
                  <Image
                    src="/img/community/moon.png"
                    alt="Satoshi moon"
                    width={445}
                    height={437}
                    priority
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              </AnimatedWrapper>
              <div className="moon-grad">
                <Image
                  src="/img/community/moon-grad.svg"
                  alt="gradient background"
                  width={685}
                  height={685}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 h-auto position-absolute bottom-0 earth-com">
          <AnimatedWrapper>
            <div className="position-relative animated-fade-start animated-fade transition-delay-medium">
              <Image
                src="/img/community/community-bg-1.png"
                width={1684}
                height={525}
                alt="Earth"
                priority
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </AnimatedWrapper>
          <div className="radial-gradient-background" />
        </div>
        <span className="earth-grad">
          <Image
            src="/img/community/earth-grad.svg"
            alt="Purple eclipse"
            width={704}
            height={704}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </span>
      </div>

      <div className="container com-content pb-5" style={{ maxWidth: '100%' }}>
        <div className="row m-0 p-0 position-relative text-center coversation-container">
          <div className="">
            <AnimatedWrapper>
              <h3 className="animated-header-text animated-header-text-start transition-delay-small">
                Join the conversation
              </h3>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <p className="text-m-center animated-header-text animated-header-text-start transition-delay-medium my-3">
                Nifty League&apos;s community is unlike any other. Get your questions answers and connect with fellow
                DEGENs!
              </p>
            </AnimatedWrapper>
          </div>
        </div>
      </div>

      <SocialCards />

      <div className="row row-top-spacing m-0 p-0 position-relative sliding-nfts">
        <div className="d-flex flex-column text-center position-relative p-0">
          <div className={`position-relative sliding-background-wrapper-${desktop ? 'desktop' : 'mobile'}`}>
            <div className="sliding-background" />
            <div className="radial-gradient-background top" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
