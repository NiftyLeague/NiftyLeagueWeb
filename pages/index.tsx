import { Stack, useMediaQuery } from '@mui/material';
import { memo } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@components/layout';
import AnimatedWrapper from '@components/AnimatedWrapper';

const Home: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');

  return (
    <Layout classes={{ root: 'home-pg' }}>
      <Head>
        <title>Nifty League: Compete &amp; Earn Web3 Gaming Metaverse</title>
        <meta
          name="description"
          content="Compete &amp; earn Web3 gaming metaverse brought to you by the Nifty League"
        />
        <meta property="og:title" content="Nifty League: Compete &amp; Earn Web3 Gaming Metaverse" />
        <meta property="og:image" content="https://niftyleague.com/img/home-banner-desktop.png" />
      </Head>

      <div className="p-0 position-relative home-intro">
        <AnimatedWrapper>
          <div className="position-relative flex-grow-1 animated-fade animated-fade-start">
            <Image
              src="/img/home-banner-desktop.png"
              alt="Nifty Home Banner"
              layout="responsive"
              width={1698}
              height={932}
              priority
            />
          </div>
        </AnimatedWrapper>
        <div className="home-satoshi-container">
          <AnimatedWrapper>
            <div className="position-relative flex-grow-1 home-satoshi satoshi-quick-pop-anim satoshi-quick-pop-anim-start transition-delay-medium">
              <Image alt="Satoshi" layout="fill" objectFit="cover" src="/img/satoshi.png" />
            </div>
          </AnimatedWrapper>
        </div>
        <div className="d-flex flex-column mt-auto home-content">
          <AnimatedWrapper>
            <h1 className="home-content-title animated-header-text animated-header-text-start">
              WELCOME TO THE NIFTYVERSE
            </h1>
          </AnimatedWrapper>
          <div className="mt-2 mt-md-4">
            <AnimatedWrapper>
              <p className="home-content-description animated-header-text animated-header-text-start transition-delay-small">
                JOIN THE SEVEN TRIBES OF SATOSHI AND COMPETE TO UNLOCK THE NIFTYVERSE
              </p>
            </AnimatedWrapper>
          </div>
          <div className="home-content-button-bubble">
            <AnimatedWrapper>
              <Link href="/learn">
                <a>
                  <div className="position-relative flex-grow-1 satoshi-learn-more animated-fade-slow animated-fade-start transition-delay-large">
                    <Image src="/img/speech-bubble.png" alt="Learn More" layout="responsive" width={407} height={125} />
                    <p className="my-0 py-0 speech-bubble-text">Learn More</p>
                  </div>
                </a>
              </Link>
            </AnimatedWrapper>
          </div>
          <Link href="/learn">
            <a>
              <button className="btn theme-btn-primary mt-2 mt-md-4 home-content-button">LEARN MORE</button>
            </a>
          </Link>
        </div>
      </div>

      <div className="row row-top-spacing m-0 p-0 position-relative">
        <div className="d-flex flex-column text-center position-relative my-3 my-md-5 p-0">
          <div className="my-3 my-md-5">
            <AnimatedWrapper>
              <h2 className="px-5 animated-header-text animated-header-text-start">CLASSIC GAMING REINVENTED</h2>
            </AnimatedWrapper>
          </div>
          <AnimatedWrapper>
            <div className="position-relative flex-grow-1 animated-fade-slow animated-fade-start">
              <Image
                alt="Classic Gaming Reinvented"
                className="pixelated"
                width={2500}
                height={1366}
                layout="responsive"
                src="/img/home-classic-gaming-reinvented.png"
              />
            </div>
          </AnimatedWrapper>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={{ xs: 1.25, xl: 4 }}
            px={{ xs: 2, md: 0 }}
            mt={4}
            className="game-playing-actions"
          >
            <AnimatedWrapper>
              <a href="https://app.niftyleague.com/" target="_blank" rel="noreferrer">
                <button className="btn theme-btn-primary section-black-button animated-fade animated-fade-start">
                  START PLAYING
                </button>
              </a>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <a href="/learn" target="_blank" rel="noreferrer">
                <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start">
                  LEARN MORE
                </button>
              </a>
            </AnimatedWrapper>
          </Stack>
        </div>
      </div>

      <div className="row row-top-spacing m-0 p-0 position-relative sliding-nfts">
        <div className="d-flex flex-column text-center position-relative my-3 my-md-5 p-0">
          <div className="my-3 my-md-5">
            <AnimatedWrapper>
              <h2 className="px-5 animated-header-text animated-header-text-start">COMMUNITY-GENERATED ART</h2>
            </AnimatedWrapper>
          </div>
          <div className={`sliding-background-wrapper-${desktop ? 'desktop' : 'mobile'}`}>
            <div className="sliding-background" />
          </div>
        </div>
      </div>

      <div className="row row-top-spacing px-0 py-3 py-md-5 px-3 mx-0 position-relative align-items-center">
        <div className={`${desktop ? 'col-6' : ''}`}>
          <div className="d-flex flex-column compete-to-earn-section position-relative">
            {desktop && (
              <div className="compete-to-earn-section-token-1">
                <div className="position-relative flex-grow-1">
                  <AnimatedWrapper>
                    <div className="animation-bounce animated-fade animated-fade-start transition-delay-large">
                      <Image
                        src="/img/home-compete-and-earn-token-1.png"
                        alt="Compete and Earn NFTL 1"
                        layout="responsive"
                        width={246}
                        height={261}
                        className="pixelated"
                      />
                    </div>
                  </AnimatedWrapper>
                </div>
              </div>
            )}
            {desktop && (
              <div className="compete-to-earn-section-token-2">
                <div className="position-relative flex-grow-1">
                  <AnimatedWrapper>
                    <div className="animation-bounce2 animated-fade animated-fade-start transition-delay-large">
                      <Image
                        src="/img/home-compete-and-earn-token-2.png"
                        alt="Compete and Earn NFTL 2"
                        layout="responsive"
                        width={245}
                        height={253}
                        className="pixelated"
                      />
                    </div>
                  </AnimatedWrapper>
                </div>
              </div>
            )}
            <div className="mb-3">
              <AnimatedWrapper>
                <h2 className="compete-to-earn-section-title section-heading animated-header-text animated-header-text-start transition-delay-small">
                  COMPETE & EARN
                </h2>
              </AnimatedWrapper>
            </div>
            <Stack gap={2} alignItems="center">
              {!desktop && (
                <div className="position-relative flex-grow-1 full-width">
                  <AnimatedWrapper>
                    <div className="animated-fade animated-fade-start">
                      <Image
                        src="/img/home-compete-and-earn-mobile.png"
                        alt="Compete and Earn"
                        layout="responsive"
                        width={320}
                        height={124}
                      />
                    </div>
                  </AnimatedWrapper>
                </div>
              )}
              <div className={`d-flex flex-column compete-to-earn-section-body`}>
                <div className="my-0">
                  <AnimatedWrapper>
                    <p className="py-1 py-md-3 section-description animated-header-text animated-header-text-start transition-delay-medium">
                      4 - 16 PLAYERS POOL NFTL TOGETHER IN A CUTTHROAT BATTLE FOR THE SURVIVAL OF THE FITTEST.
                    </p>
                  </AnimatedWrapper>
                </div>
                <Stack
                  direction="row"
                  alignItems="center"
                  flexWrap="wrap"
                  gap={{ xs: 1.25, xl: 4 }}
                  mt={{ xs: 1.25, xl: 4 }}
                  className="section-actions"
                >
                  <AnimatedWrapper>
                    <a href="https://app.niftyleague.com/degen-rentals" target="_blank" rel="noreferrer">
                      <button className="btn theme-btn-primary ms-0 mx-0 section-black-button animated-fade animated-fade-start transition-delay-large">
                        RENT A DEGEN
                      </button>
                    </a>
                  </AnimatedWrapper>
                  <AnimatedWrapper>
                    <a href="/compete-and-earn" target="_blank" rel="noreferrer">
                      <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start transition-delay-large">
                        LEARN MORE
                      </button>
                    </a>
                  </AnimatedWrapper>
                </Stack>
              </div>
            </Stack>
          </div>
        </div>
        {desktop && (
          <div className="col-6 position-relative">
            <AnimatedWrapper>
              <div className="quick-pop-anim quick-pop-anim-start transition-delay-medium">
                <Image
                  src="/img/home-compete-and-earn.png"
                  alt="Compete and Earn"
                  layout="responsive"
                  width={916}
                  height={680}
                />
              </div>
            </AnimatedWrapper>
          </div>
        )}
      </div>

      <div className="row row-top-spacing mx-0 py-3 py-md-5 px-3 position-relative align-items-center">
        {desktop && (
          <div className="col-7 position-relative">
            <AnimatedWrapper>
              <div className="animated-fade animated-fade-start transition-delay-medium">
                <Image
                  src="/img/home-land-in-the-niftyverse.png"
                  alt="Land in the Niftyverse"
                  layout="responsive"
                  width={974}
                  height={710}
                />
              </div>
            </AnimatedWrapper>
          </div>
        )}
        <div className={`${desktop ? 'col-5' : ''} d-flex flex-column land-in-the-niftyverse-section`}>
          <div className="mb-3">
            <AnimatedWrapper>
              <h2
                className={`section-title section-heading animated-header-text animated-header-text-start transition-delay-small`}
              >
                LAND IN THE NIFTYVERSE
              </h2>
            </AnimatedWrapper>
          </div>
          <Stack gap={2} className="land-in-the-niftyverse-section-body">
            {!desktop && (
              <div className="position-relative full-width text-align-center">
                <Image
                  src="/img/home-land-in-the-niftyverse.png"
                  alt="Land in the Niftyverse"
                  layout="fixed"
                  width={317}
                  height={229}
                />
              </div>
            )}
            <div className={`d-flex flex-column align-items-${desktop ? 'start' : 'center'}`}>
              <div className="my-0">
                <AnimatedWrapper>
                  <p className="py-1 py-md-3 section-description animated-header-text animated-header-text-start transition-delay-medium">
                    SOON WE WILL MINT LAND IN OUR METAVERSE, TO DEGEN OWNERS AND THE PUBLIC.
                  </p>
                </AnimatedWrapper>
              </div>
              <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                gap={{ xs: 1.25, xl: 4 }}
                mt={{ xs: 1.25, xl: 4 }}
                className="section-actions"
              >
                <AnimatedWrapper>
                  <a href="https://app.niftyleague.com/" target="_blank" rel="noreferrer">
                    <button className="btn theme-btn-primary ms-0 mx-0 section-black-button animated-fade animated-fade-start transition-delay-large">
                      MINT LAND
                    </button>
                  </a>
                </AnimatedWrapper>
                <AnimatedWrapper>
                  <a href="/learn" target="_blank" rel="noreferrer">
                    <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start transition-delay-large">
                      LEARN MORE
                    </button>
                  </a>
                </AnimatedWrapper>
              </Stack>
            </div>
          </Stack>
        </div>
      </div>

      <div className="row row-top-spacing mx-0 py-3 py-md-5">
        <div className="px-3 px-md-4 position-relative">
          {desktop && (
            <AnimatedWrapper>
              <div className="position-relative flex-grow-1 animated-fade animated-fade-start transition-delay-small">
                <Image
                  src="/img/home-rental.png"
                  alt="Rent a Degen"
                  layout="responsive"
                  width={1664}
                  height={870}
                  className="pixelated"
                />
              </div>
            </AnimatedWrapper>
          )}
          <div className="d-flex flex-column home-rental-section">
            <div className="mb-3">
              <AnimatedWrapper>
                <h2 className="section-heading animated-header-text animated-header-text-start transition-delay-small">
                  RENT A DEGEN
                </h2>
              </AnimatedWrapper>
            </div>
            <Stack gap={2}>
              {!desktop && (
                <div className="position-relative flex-grow-1 full-width">
                  <Image src="/img/home-rental.png" alt="Rent a Degen" layout="responsive" width={170} height={89} />
                </div>
              )}
              <div className={`d-flex flex-column home-rental-section-body`}>
                <div className="my-0">
                  <AnimatedWrapper>
                    <p className="py-1 py-md-3 section-description animated-header-text animated-header-text-start transition-delay-medium">
                      READY TO PLAY? WANT TO TEST OUT ALL THE DEGEN TRIBES BEFORE YOU BUY? REMT A DEGEN FOR A WEEK.
                    </p>
                  </AnimatedWrapper>
                </div>
                <Stack
                  direction="row"
                  alignItems={{ xs: 'flex-end', sm: 'center' }}
                  flexWrap="wrap"
                  gap={{ xs: 1.25, xl: 4 }}
                  mt={{ xs: 1.25, xl: 4 }}
                  className="section-actions"
                >
                  <AnimatedWrapper>
                    <a href="https://app.niftyleague.com/degen-rentals" target="_blank" rel="noreferrer">
                      <button className="btn theme-btn-primary ms-0 mx-0 section-black-button animated-fade animated-fade-start transition-delay-large">
                        RENT A DEGEN
                      </button>
                    </a>
                  </AnimatedWrapper>
                  <AnimatedWrapper>
                    <a href="/rentals" target="_blank" rel="noreferrer">
                      <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start transition-delay-large">
                        LEARN MORE
                      </button>
                    </a>
                  </AnimatedWrapper>
                </Stack>
              </div>
            </Stack>
          </div>
        </div>
      </div>

      <div className="row row-top-spacing mx-auto inner-container py-3 py-md-5">
        <div className="d-flex px-3 px-md-4 position-relative align-items-center">
          <div className={`${desktop ? 'col-6' : 'full-width'}`}>
            <div className="d-flex flex-column home-nftl-token-section">
              <div className="mb-3">
                <AnimatedWrapper>
                  <h2 className="home-nftl-token-section-title section-heading animated-header-text animated-header-text-start transition-delay-small">
                    NFTL TOKEN
                  </h2>
                </AnimatedWrapper>
              </div>
              <Stack gap={2}>
                {!desktop && (
                  <div className="position-relative full-width text-align-center">
                    <Image src="/img/home-nftl-token.png" alt="NFTL Token" width={288} height={376} layout="fixed" />
                  </div>
                )}
                <div className={`d-flex flex-column home-nftl-token-section-body`}>
                  <AnimatedWrapper>
                    <p className="py-1 py-md-3 home-nftl-token-section-description animated-header-text animated-header-text-start transition-delay-medium">
                      NFTL IS OUR UTILITY AND GOVERNANCE TOKEN. DEGENs EARN NFTY DAILY FOR THE FIRST 3 YEARS POST-MINT.
                      WAGER AND WIN NFTL BY COMPETING VIA COMPETE-AND-EARN.
                    </p>
                  </AnimatedWrapper>
                  <Stack
                    direction="row"
                    alignItems="center"
                    flexWrap="wrap"
                    gap={{ xs: 1.25, xl: 4 }}
                    mt={{ xs: 1.25, xl: 4 }}
                    className="section-actions"
                  >
                    <AnimatedWrapper>
                      <a href="https://app.niftyleague.com/" target="_blank" rel="noreferrer">
                        <button className="btn theme-btn-primary ms-0 mx-0 section-black-button animated-fade animated-fade-start transition-delay-large">
                          BUY TOKEN
                        </button>
                      </a>
                    </AnimatedWrapper>
                    <AnimatedWrapper>
                      <a href="https://niftyleague.com/docs/overview/nftl/overview" target="_blank" rel="noreferrer">
                        <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start transition-delay-large">
                          LEARN MORE
                        </button>
                      </a>
                    </AnimatedWrapper>
                  </Stack>
                </div>
              </Stack>
            </div>
          </div>
          {desktop && (
            <div className="col-6 text-align-right">
              <AnimatedWrapper>
                <div className="position-relative quick-pop-anim quick-pop-anim-start transition-delay-medium">
                  <Image
                    src="/img/home-nftl-token.png"
                    alt="NFTL Token"
                    width={520}
                    height={680}
                    layout="responsive"
                    className="pixelated"
                  />
                </div>
              </AnimatedWrapper>
            </div>
          )}
        </div>
      </div>

      <div className="row inner-container row-top-spacing mx-auto py-3 py-md-5">
        <div className="d-flex px-3 px-md-4 position-relative align-items-end">
          {desktop && (
            <div className="col-6">
              <AnimatedWrapper>
                <div className="position-relative flex-grow-1 quick-pop-anim quick-pop-anim-start transition-delay-medium home-community-image">
                  <Image
                    src="/img/home-community.png"
                    alt="The Best Community on Earth"
                    layout="responsive"
                    width={774}
                    height={874}
                    className="pixelated"
                  />
                </div>
              </AnimatedWrapper>
            </div>
          )}
          <div className={`${desktop ? 'col-6' : 'full-width'}`}>
            <div
              className={`d-flex flex-column home-community-section align-items-${
                desktop ? 'start' : 'center'
              } px-md-3`}
            >
              <div className="mb-3">
                <AnimatedWrapper>
                  <h2 className="section-title section-heading animated-header-text animated-header-text-start transition-delay-small">
                    THE BEST COMMUNITY ON EARTH
                  </h2>
                </AnimatedWrapper>
              </div>
              <Stack gap={2} className="home-community-section-container">
                {!desktop && (
                  <div className="position-relative flex-grow-1 full-width">
                    <Image
                      src="/img/home-community.png"
                      alt="The Best Community on Earth"
                      layout="responsive"
                      width={774}
                      height={874}
                    />
                  </div>
                )}
                {!desktop && (
                  <div className="position-relative flex-grow-1 home-community-characters">
                    <Image
                      src="/img/home-community-characters.png"
                      alt="Community DEGENs"
                      width={790}
                      height={260}
                      layout="responsive"
                    />
                  </div>
                )}
                <div className={`d-flex flex-column home-community-section-body`}>
                  <AnimatedWrapper>
                    <p
                      className={`py-1 home-community-section-description animated-header-text animated-header-text-start transition-delay-medium`}
                    >
                      WE HATE TO BRAG, BUT OUR OUR COMMUNITY OF OWNERS AND PLAYERS IS TRULY THE BEST IN WEB3. WE MEET UP
                      IRL OFTEN, ATTEND EVENTS TOGETHER, AND GET TOGETHER GAME (OBVIOUSLY).
                    </p>
                  </AnimatedWrapper>
                  <Stack
                    direction="row"
                    alignItems="center"
                    flexWrap="wrap"
                    gap={{ xs: 1.25, xl: 4 }}
                    mt={{ xs: 1.25, xl: 4 }}
                    className="section-actions"
                  >
                    <AnimatedWrapper>
                      <a href="https://discord.gg/niftyleague" target="_blank" rel="noreferrer">
                        <button className="btn theme-btn-primary ms-0 mx-0 animated-fade animated-fade-start transition-delay-large">
                          JOIN OUR DISCORD
                        </button>
                      </a>
                    </AnimatedWrapper>
                    <AnimatedWrapper>
                      <a href="https://opensea.io/collection/niftydegen" target="_blank" rel="noreferrer">
                        <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start transition-delay-large">
                          BUY A DEGEN
                        </button>
                      </a>
                    </AnimatedWrapper>
                  </Stack>
                  {desktop && (
                    <AnimatedWrapper>
                      <div className="position-relative flex-grow-1 animated-fade animated-fade-start transition-delay-large home-community-degens">
                        <Image
                          alt="Community DEGENs"
                          width={790}
                          height={260}
                          layout="responsive"
                          src="/img/home-community-characters.png"
                        />
                      </div>
                    </AnimatedWrapper>
                  )}
                </div>
              </Stack>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-top-spacing mx-0 position-relative">
        <div className="d-flex flex-column text-center position-relative">
          <div className="my-3 my-md-5">
            <AnimatedWrapper>
              <h2 className="section-heading animated-header-text animated-header-text-start transition-delay-small">
                PROUDLY BACKED BY
              </h2>
            </AnimatedWrapper>
          </div>
          <AnimatedWrapper>
            <div className="position-relative flex-grow-1 animated-fade animated-fade-start transition-delay-medium">
              <Image
                alt="Proudly Backed By"
                className="pixelated"
                width={1652}
                height={787}
                layout="responsive"
                src="/img/home-sponsors.png"
              />
            </div>
          </AnimatedWrapper>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            gap={{ xs: 1.25, xl: 4 }}
            mt={{ xs: 2, md: 8 }}
            px={{ xs: 2, md: 0 }}
            className="section-actions"
          >
            <AnimatedWrapper>
              <a href="/careers" rel="noreferrer">
                <button className="btn theme-btn-primary section-black-button animated-fade animated-fade-start transition-delay-large">
                  JOIN THE TEAM
                </button>
              </a>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <a href="https://niftyleague.medium.com/" target="_blank" rel="noreferrer">
                <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start transition-delay-large">
                  READ OUR POST
                </button>
              </a>
            </AnimatedWrapper>
          </Stack>
        </div>
      </div>
    </Layout>
  );
};

export default memo(Home);
