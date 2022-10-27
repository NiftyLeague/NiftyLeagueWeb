import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/legacy/image';
import Layout from '@components/layout';
import Carousel from '@components/carousel';
import { renderDegen } from '@components/carousel/DegenCardItem';
import SocialCards from '@components/SocialCards';
import { CommunityDegenData } from '@data/constants';
import AnimatedWrapper from '@components/AnimatedWrapper';

const Community: NextPage = () => {
  return (
    <Layout classes={{ root: 'com-pg' }}>
      <Head>
        <title>Meet Our Degen Community | Nifty League</title>
        <meta name="description" content="Community comes first at Nifty League" />
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
                    layout="responsive"
                    priority
                  />
                </div>
              </AnimatedWrapper>
              <div className="moon-grad">
                <Image src="/img/community/moon-grad.svg" alt="gradient background" width={685} height={685} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 h-auto position-absolute bottom-0 earth-com">
          <AnimatedWrapper>
            <div className="position-relative animated-fade-start animated-fade transition-delay-medium">
              <Image
                src="/img/community/community-bg-1.png"
                layout="responsive"
                width={1684}
                height={525}
                alt="Earth"
                priority
              />
            </div>
          </AnimatedWrapper>
        </div>
        <span className="earth-grad">
          <Image
            src="/img/community/earth-grad.svg"
            alt="Purple eclipse"
            layout="responsive"
            width={704}
            height={704}
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
              <p className="text-m-center animated-header-text animated-header-text-start transition-delay-medium">
                Nifty League&apos;s community is unlike any other. Get your questions answers and connect with fellow
                DEGENs!
              </p>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
      {false && (
        <div className="com-grad-1">
          <Image
            src="/img/community/com-grad-1.svg"
            width={856}
            height={674}
            layout="responsive"
            alt="yellow gradient"
          />
        </div>
      )}
      <SocialCards />

      <div className="container" style={{ maxWidth: '100%' }}>
        <div className="row m-0 p-0 position-relative nifty-league-browse py-sm-5" style={{ minHeight: 900 }}>
          <div className="row m-0 p-0 position-relative py-5" style={{ marginBottom: 550 }}>
            <section
              style={{
                alignItems: 'center',
                maxWidth: '100%',
                textAlign: 'center',
              }}
            >
              <Carousel mobileItems={2}>{CommunityDegenData.map(renderDegen)}</Carousel>
            </section>
          </div>
          <div className="com-scroller-dark-background" />
          <div className="degen-scroller-content text-center d-flex flex-column align-items-center position-absolute">
            <div className="nifty-character nifty-ape">
              <Image
                className="pixelated"
                src="/img/community/character.png"
                width={856}
                height={842}
                layout="responsive"
                alt="ape degen header"
                priority
              />
            </div>
            <AnimatedWrapper>
              <h3 className="nifty-character-title animated-header-text animated-header-text-start transition-delay-small">
                Get Involved with
                <br />
                the Community
              </h3>
            </AnimatedWrapper>
            <div className="my-sm-4 my-2">
              <AnimatedWrapper>
                <p className="text-center animated-header-text animated-header-text-start transition-delay-medium">
                  Grab your Nifty League DEGEN and join us in the Lair in Discord! We&apos;re ready to meet you.
                </p>
              </AnimatedWrapper>
            </div>
            <a href="https://discord.gg/niftyleague" target="_blank" rel="noreferrer">
              <AnimatedWrapper>
                <button className="btn theme-btn-primary w-auto mt-3 mt-sm-0 animated-fade-start animated-fade transition-delay-medium">
                  Join our server
                </button>
              </AnimatedWrapper>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="container my-5">
        <div className="community-footer d-flex align-items-center text-center flex-column p-5">
          <img className="mb-5" src="img/logo/purple.png" />
          <h3>Download Brand Assets</h3>
          <p className="font-16 mt-1">
            Commonly used where the Nifty League Branding needs to be displayed
          </p>
          <button className="btn theme-btn-primary w-auto mt-2">
            download brand assets
          </button>
        </div>
      </div> */}
    </Layout>
  );
};

export default Community;
