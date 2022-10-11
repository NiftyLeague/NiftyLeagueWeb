import { Stack, useMediaQuery } from '@mui/material';
import { memo } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@components/layout';
import AnimatedWrapper from '@components/AnimatedWrapper';
import Sponsors from '@components/Sponsors';
import { SPONSORS } from '@data/constants';

const Home: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');
  const md = useMediaQuery('(min-width:921px)');

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
        {md ? (
          <div>
            <AnimatedWrapper parallax parallaxDirection="verticalScale">
              <div className="parallax-child position-relative flex-grow-1 animation-zoomin">
                <Image
                  src="/img/home-hero-bg.png"
                  alt="Nifty Home Banner"
                  layout="responsive"
                  width={3408}
                  height={1849}
                  priority
                />
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper parallax parallaxDirection="verticalScale">
              <div className="position-absolute parallax-child home-hero-characters-image flex-grow-1 animation-zoomin-large">
                <Image
                  src="/img/home-hero-characters.png"
                  alt="Nifty Hero Characters"
                  layout="responsive"
                  width={3408}
                  height={1849}
                  priority
                />
              </div>
            </AnimatedWrapper>
            <div className="home-hero-companion">
              <div className="position-relative flex-grow-1">
                <AnimatedWrapper>
                  <div className="animation-bounce animated-fade-start animated-fade transition-delay-extreme">
                    <Image
                      src="/img/home-hero-companion.gif"
                      alt="Home Hero Companion"
                      layout="responsive"
                      width={436}
                      height={436}
                      className="pixelated"
                    />
                  </div>
                </AnimatedWrapper>
              </div>
            </div>
            <div className="home-hero-halo">
              <div className="position-relative flex-grow-1">
                <AnimatedWrapper>
                  <div className="animation-bounce2 animated-fade-start animated-fade transition-delay-extreme">
                    <Image
                      src="/img/home-hero-halo.png"
                      alt="Home Hero Halo"
                      layout="responsive"
                      width={325}
                      height={117}
                      className="pixelated"
                    />
                  </div>
                </AnimatedWrapper>
              </div>
            </div>
            <div className="radial-gradient-background" />
          </div>
        ) : (
          <div className="position-relative flex-grow-1">
            <Image
              src="/img/home-banner-desktop.png"
              alt="Nifty Home Banner"
              layout="responsive"
              width={3408}
              height={1849}
              priority
            />
          </div>
        )}
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
              WELCOME TO NIFTYVERSE
            </h1>
          </AnimatedWrapper>
          <div className="my-2 my-lg-4">
            <AnimatedWrapper>
              <p className="home-content-description animated-header-text animated-header-text-start transition-delay-small">
                JOIN THE SEVEN TRIBES OF SATOSHI AND COMPETE TO UNLOCK THE NIFTYVERSE
              </p>
            </AnimatedWrapper>
          </div>
          <div className="home-content-button-bubble">
            <AnimatedWrapper>
              <Link href="/land">
                <a>
                  <div className="position-relative flex-grow-1 satoshi-learn-more animated-fade-slow animated-fade-start transition-delay-large">
                    <Image src="/img/speech-bubble.png" alt="Learn More" layout="responsive" width={407} height={125} />
                    <p className="my-0 py-0 speech-bubble-text">Learn More</p>
                  </div>
                </a>
              </Link>
            </AnimatedWrapper>
          </div>
          <Link href="/land">
            <a>
              <button className="btn theme-btn-primary mt-2 mt-md-4 home-content-button">LEARN MORE</button>
            </a>
          </Link>
        </div>
      </div>

      <div className="row row-top-spacing m-0 p-0 position-relative">
        <div className="d-flex flex-column text-center position-relative p-0">
          <div className="my-3 my-lg-5">
            <AnimatedWrapper>
              <h2 className="px-5 animated-header-text animated-header-text-start">CLASSIC GAMING REINVENTED</h2>
            </AnimatedWrapper>
          </div>
          {desktop ? (
            <div className="position-relative">
              <AnimatedWrapper>
                <div className="position-relative flex-grow-1 animated-fade-slow animated-fade-start transition-delay-small">
                  <Image
                    alt="Classic Gaming Reinvented"
                    className="pixelated"
                    width={4842}
                    height={3371}
                    layout="responsive"
                    src="/img/home-classic-gaming-reinvented-tvbase.png"
                  />
                </div>
              </AnimatedWrapper>
              <div className="gaming-controller">
                <AnimatedWrapper parallax parallaxDirection="bottom">
                  <div className="animation-bounce animated-fade-start animated-fade transition-delay-extreme">
                    <Image
                      alt="Classic Gaming Reinvented Controller Left"
                      className="pixelated"
                      width={4842}
                      height={3371}
                      layout="responsive"
                      src="/img/gaming_controller_left.png"
                    />
                  </div>
                </AnimatedWrapper>
              </div>
              <div className="gaming-controller">
                <AnimatedWrapper parallax parallaxDirection="bottom">
                  <div className="animation-bounce2 animated-fade-start animated-fade transition-delay-extreme">
                    <Image
                      alt="Classic Gaming Reinvented Controller Right"
                      className="pixelated"
                      width={4842}
                      height={3371}
                      layout="responsive"
                      src="/img/gaming_controller_right.png"
                    />
                  </div>
                </AnimatedWrapper>
              </div>
              <div className="radial-gradient-background" />
            </div>
          ) : (
            <div className="position-relative flex-grow-1">
              <Image
                alt="Classic Gaming Reinvented"
                className="pixelated"
                width={4842}
                height={3371}
                layout="responsive"
                src="/img/home-classic-gaming-reinvented.png"
              />
            </div>
          )}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={{ xs: 1.25, xl: 4 }}
            px={{ xs: 2, md: 0 }}
            mt={{ xs: 2, sm: 0 }}
            className="game-playing-actions"
          >
            <AnimatedWrapper>
              <a href="https://app.niftyleague.com/" target="_blank" rel="noreferrer">
                <button className="btn theme-btn-primary section-black-button animated-fade animated-fade-start transition-delay-medium">
                  START PLAYING
                </button>
              </a>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <Link href="/games">
                <a>
                  <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start transition-delay-medium">
                    LEARN MORE
                  </button>
                </a>
              </Link>
            </AnimatedWrapper>
          </Stack>
        </div>
      </div>

      <div className="row row-top-spacing m-0 p-0 position-relative sliding-nfts">
        <div className="d-flex flex-column text-center position-relative p-0">
          <div className="my-3 my-lg-5">
            <AnimatedWrapper>
              <h2 className="px-5 animated-header-text animated-header-text-start">COMMUNITY-GENERATED ART</h2>
            </AnimatedWrapper>
          </div>
          <div className={`position-relative sliding-background-wrapper-${desktop ? 'desktop' : 'mobile'}`}>
            <div className="sliding-background" />
            <div className="radial-gradient-background" />
          </div>
        </div>
      </div>

      <div className="row row-top-spacing px-0 mx-auto inner-container">
        <div className="d-flex px-3 px-md-4 position-relative align-items-center">
          <div className={`${desktop ? 'col-6' : 'full-width'}`}>
            <div className="d-flex flex-column compete-to-earn-section position-relative">
              {desktop && (
                <div className="compete-to-earn-section-token-1">
                  <div className="position-relative flex-grow-1">
                    <AnimatedWrapper parallax parallaxDirection="left">
                      <div className="animated-fade animated-fade-start transition-delay-large">
                        <Image
                          src="/img/home-compete-and-earn-token-1.png"
                          alt="Compete and Earn NFTL 1"
                          layout="responsive"
                          width={413}
                          height={408}
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
                    <AnimatedWrapper parallax parallaxDirection="right">
                      <div className="animated-fade animated-fade-start transition-delay-large">
                        <Image
                          src="/img/home-compete-and-earn-token-2.png"
                          alt="Compete and Earn NFTL 2"
                          layout="responsive"
                          width={398}
                          height={390}
                          className="pixelated"
                        />
                      </div>
                    </AnimatedWrapper>
                  </div>
                </div>
              )}
              <Stack gap={2} alignItems="center">
                {!desktop && (
                  <div className="position-relative flex-grow-1 full-width">
                    <AnimatedWrapper>
                      <div className="animated-fade animated-fade-start">
                        <Image
                          src="/img/home-compete-and-earn-mobile.png"
                          alt="Compete and Earn"
                          layout="responsive"
                          width={3208}
                          height={1342}
                        />
                        <div className="radial-gradient-background" />
                      </div>
                    </AnimatedWrapper>
                  </div>
                )}
                <div className={`d-flex flex-column compete-to-earn-section-body`}>
                  <div className="mb-3">
                    <AnimatedWrapper>
                      <h2 className="compete-to-earn-section-title section-heading animated-header-text animated-header-text-start transition-delay-small">
                        COMPETE & EARN
                      </h2>
                    </AnimatedWrapper>
                  </div>
                  <div className="my-0">
                    <AnimatedWrapper>
                      <p className="py-1 py-lg-3 section-description animated-header-text animated-header-text-start transition-delay-medium">
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
                      <a href="https://app.niftyleague.com/games/smashers" target="_blank" rel="noreferrer">
                        <button className="btn theme-btn-primary ms-0 mx-0 section-black-button animated-fade animated-fade-start transition-delay-large">
                          TRY BRAWL MODE
                        </button>
                      </a>
                    </AnimatedWrapper>
                    <AnimatedWrapper>
                      <Link href="/compete-and-earn">
                        <a>
                          <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start transition-delay-large">
                            LEARN MORE
                          </button>
                        </a>
                      </Link>
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
                    width={1561}
                    height={1227}
                  />
                </div>
              </AnimatedWrapper>
            </div>
          )}
        </div>
      </div>

      <div className="row row-top-spacing mx-auto inner-container">
        <div className="d-flex px-3 px-md-4 position-relative align-items-center">
          {desktop && (
            <div className="col-6 position-relative">
              <AnimatedWrapper>
                <div className="animated-fade animated-fade-start transition-delay-medium">
                  <Image
                    src="/img/home-land-in-the-niftyverse.png"
                    alt="Land in the Niftyverse"
                    layout="responsive"
                    width={3055}
                    height={2406}
                  />
                  <div className="radial-gradient-background" />
                </div>
              </AnimatedWrapper>
            </div>
          )}
          <div className={`${desktop ? 'col-6' : 'full-width'} d-flex flex-column land-in-the-niftyverse-section`}>
            <Stack pl={{ xs: 0, xl: 6 }} gap={2} className="land-in-the-niftyverse-section-body">
              {!desktop && (
                <div className="position-relative full-width text-align-center">
                  <Image
                    src="/img/home-land-in-the-niftyverse.png"
                    alt="Land in the Niftyverse"
                    layout="responsive"
                    width={1920}
                    height={1512}
                  />
                  <div className="radial-gradient-background" />
                </div>
              )}
              <div className={`d-flex flex-column align-items-${desktop ? 'start' : 'center'}`}>
                <div className="mb-3">
                  <AnimatedWrapper>
                    <h2
                      className={`section-title section-heading animated-header-text animated-header-text-start transition-delay-small`}
                    >
                      LAND IN THE NIFTYVERSE
                    </h2>
                  </AnimatedWrapper>
                </div>
                <div className="my-0">
                  <AnimatedWrapper>
                    <p className="py-1 py-lg-3 section-description animated-header-text animated-header-text-start transition-delay-medium">
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
                        GET NOTIFIED
                      </button>
                    </a>
                  </AnimatedWrapper>
                  <AnimatedWrapper>
                    <Link href="/land">
                      <a>
                        <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start transition-delay-large">
                          LEARN MORE
                        </button>
                      </a>
                    </Link>
                  </AnimatedWrapper>
                </Stack>
              </div>
            </Stack>
          </div>
        </div>
      </div>

      {/* <div className="row row-top-spacing mx-0 py-3 py-md-5">
        <div className="px-0 position-relative">
          {desktop && (
            <AnimatedWrapper>
              <div className="position-relative flex-grow-1 animated-fade animated-fade-start transition-delay-small">
                <Image
                  src="/img/home-rental.png"
                  alt="Rent a Degen"
                  layout="responsive"
                  width={3590}
                  height={2192}
                  className="pixelated"
                />
                <div className="radial-gradient-background" />
              </div>
            </AnimatedWrapper>
          )}
          <div className="d-flex flex-column px-3 home-rental-section">
            <Stack gap={2}>
              {!desktop && (
                <div className="position-relative flex-grow-1 full-width">
                  <Image src="/img/home-rental.png" alt="Rent a Degen" layout="responsive" width={3590} height={2192} />
                  <div className="radial-gradient-background" />
                </div>
              )}
              <div className="d-flex flex-column home-rental-section-body">
                <div className="mb-3">
                  <AnimatedWrapper>
                    <h2 className="section-heading animated-header-text animated-header-text-start transition-delay-small">
                      RENT A DEGEN
                    </h2>
                  </AnimatedWrapper>
                </div>
                <div className="my-0">
                  <AnimatedWrapper>
                    <p className="py-1 py-lg-3 section-description animated-header-text animated-header-text-start transition-delay-medium">
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
                    <Link href="/rentals">
                      <a>
                        <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start transition-delay-large">
                          LEARN MORE
                        </button>
                      </a>
                    </Link>
                  </AnimatedWrapper>
                </Stack>
              </div>
            </Stack>
          </div>
        </div>
      </div> */}

      <div className="row row-top-spacing mx-auto inner-container">
        <div className="d-flex px-3 px-md-4 position-relative align-items-center">
          <div className={`${desktop ? 'col-6' : 'full-width'}`}>
            <div className="d-flex flex-column home-nftl-token-section">
              <Stack gap={2}>
                {!desktop && (
                  <div className="position-relative full-width text-align-center">
                    <Image
                      src="/img/home-nftl-token.png"
                      alt="NFTL Token"
                      width={1470}
                      height={1778}
                      layout="responsive"
                    />
                    <div className="radial-gradient-background" />
                  </div>
                )}
                <div className={`d-flex flex-column home-nftl-token-section-body`}>
                  <div className="mb-3">
                    <AnimatedWrapper>
                      <h2 className="home-nftl-token-section-title section-heading animated-header-text animated-header-text-start transition-delay-small">
                        NFTL TOKEN
                      </h2>
                    </AnimatedWrapper>
                  </div>
                  <AnimatedWrapper>
                    <p className="py-1 py-lg-3 home-nftl-token-section-description animated-header-text animated-header-text-start transition-delay-medium">
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
                      <a
                        href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x3c8D2FCE49906e11e71cB16Fa0fFeB2B16C29638&chainId=1"
                        target="_blank"
                        rel="noreferrer"
                      >
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
                    width={1470}
                    height={1778}
                    layout="responsive"
                    className="pixelated"
                  />
                  <div className="radial-gradient-background" />
                </div>
              </AnimatedWrapper>
            </div>
          )}
        </div>
      </div>

      <div className="row inner-container row-top-spacing mx-auto">
        <div className="d-flex px-3 px-md-4 position-relative align-items-end">
          {desktop && (
            <div className="col-6">
              <AnimatedWrapper>
                <div className="position-relative flex-grow-1 quick-pop-anim quick-pop-anim-start transition-delay-medium home-community-image">
                  <Image
                    src="/img/home-community.png"
                    alt="The Best Community on Earth"
                    layout="responsive"
                    width={1417}
                    height={1525}
                    className="pixelated"
                  />
                  <div className="radial-gradient-background" />
                </div>
              </AnimatedWrapper>
            </div>
          )}
          <div className={`${desktop ? 'col-6' : 'full-width'}`}>
            <div
              className={`d-flex flex-column home-community-section align-items-${
                desktop ? 'start' : 'center'
              } ps-0 ps-md-3 ps-xl-5 pe-md-3`}
            >
              <Stack gap={2} className="home-community-section-container">
                {!desktop && (
                  <div className="position-relative flex-grow-1 full-width">
                    <Image
                      src="/img/home-community.png"
                      alt="The Best Community on Earth"
                      layout="responsive"
                      width={1417}
                      height={1525}
                    />
                    <div className="radial-gradient-background" />
                  </div>
                )}
                {!desktop && (
                  <div className="position-relative flex-grow-1 home-community-characters">
                    <Image
                      src="/img/home-community-characters.png"
                      alt="Community DEGENs"
                      width={1910}
                      height={620}
                      layout="responsive"
                    />
                    <div className="radial-gradient-background" />
                  </div>
                )}
                <div className={`d-flex flex-column home-community-section-body`}>
                  <div className="mb-3">
                    <AnimatedWrapper>
                      <h2 className="section-title section-heading animated-header-text animated-header-text-start transition-delay-small">
                        THE BEST COMMUNITY ON EARTH
                      </h2>
                    </AnimatedWrapper>
                  </div>
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
                    mt={{ xs: 1.25, xl: 2 }}
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
                          width={1910}
                          height={620}
                          layout="responsive"
                          src="/img/home-community-characters.png"
                        />
                        <div className="radial-gradient-background" />
                      </div>
                    </AnimatedWrapper>
                  )}
                </div>
              </Stack>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-top-spacing mx-0 py-3 py-md-5 position-relative">
        <div className="d-flex flex-column text-center position-relative p-0">
          <div className="my-3 my-lg-5">
            <AnimatedWrapper>
              <h2 className="section-heading animated-header-text animated-header-text-start transition-delay-small">
                PROUDLY BACKED BY
              </h2>
            </AnimatedWrapper>
          </div>
          {desktop ? (
            <AnimatedWrapper>
              <div className="position-relative flex-grow-1 animated-fade animated-fade-start transition-delay-medium">
                <Image
                  alt="Proudly Backed By"
                  className="pixelated"
                  width={3600}
                  height={1735}
                  layout="responsive"
                  src="/img/home-sponsors.png"
                />
                <div className="radial-gradient-background" />
              </div>
            </AnimatedWrapper>
          ) : (
            <Sponsors sponsors={SPONSORS} />
          )}
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
              <Link href="/careers">
                <a>
                  <button className="btn theme-btn-primary section-black-button animated-fade animated-fade-start transition-delay-large">
                    JOIN THE TEAM
                  </button>
                </a>
              </Link>
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
