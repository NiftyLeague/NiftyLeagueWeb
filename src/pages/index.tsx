import { Stack, useMediaQuery } from '@mui/material';
import { memo, useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import Sponsors from '@/components/Sponsors';
import Carousel from '@/components/Carousel';
import ExternalIcon from '@/components/ExternalIcon';
import ConsoleGame from '@/components/ConsoleGame';
import MintOMatic from '@/components/MintOMatic';
import { renderDegen } from '@/components/Carousel/DegenCardItem';
import { COMMUNITY_DEGEN_LIST } from '@/constants/degens';
import { SPONSORS } from '@/constants/sponsors';

const DesktopIntro = ({ scrollToGamingSection }: { scrollToGamingSection: () => void }) => {
  return (
    <div className="p-0 position-relative home-intro">
      <div>
        <div className="position-relative flex-grow-1 home-banner animation-zoomin">
          <Image
            src="/img/home/hero-bg.png"
            alt="Nifty Home Banner"
            width={3408}
            height={1849}
            priority
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <AnimatedWrapper parallax parallaxDirection="top" transitionAmount="small">
          <div className="parallax-hero-child position-absolute home-hero-characters-image flex-grow-1 animation-zoomin-large">
            <Image
              src="/img/home/hero-characters.png"
              alt="Nifty Hero Characters"
              width={3408}
              height={1849}
              priority
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </AnimatedWrapper>
        <div className="home-hero-companion">
          <div className="position-relative flex-grow-1">
            <AnimatedWrapper>
              <div className="animation-bounce animated-fade-start animated-fade transition-delay-extreme">
                <Image
                  src="/img/home/hero-companion-base.png"
                  alt="Home Hero Companion Base"
                  width={436}
                  height={436}
                  className="pixelated"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
                <div className="position-absolute home-hero-companion-swing animation-propeller" />
              </div>
            </AnimatedWrapper>
          </div>
        </div>
        <div className="home-hero-halo">
          <div className="position-relative flex-grow-1">
            <AnimatedWrapper>
              <div className="animation-bounce2 animated-fade-start animated-fade transition-delay-extreme">
                <Image
                  src="/img/home/hero-halo.png"
                  alt="Home Hero Halo"
                  width={325}
                  height={117}
                  className="pixelated"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </AnimatedWrapper>
          </div>
        </div>
        <div className="radial-gradient-background" />
      </div>
      <div className="home-satoshi-container">
        <AnimatedWrapper>
          <div className="position-relative flex-grow-1 home-satoshi satoshi-quick-pop-anim satoshi-quick-pop-anim-start transition-delay-medium">
            <Image
              alt="Satoshi"
              src="/img/home/satoshi.png"
              priority
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </AnimatedWrapper>
      </div>
      <div className="d-flex flex-column mt-auto home-content">
        <AnimatedWrapper>
          <h1 className="home-content-title animated-header-text animated-header-text-start">
            WELCOME TO <br />
            NIFTY LEAGUE
          </h1>
        </AnimatedWrapper>
        <div className="my-2 my-lg-4">
          <AnimatedWrapper>
            <p className="home-content-description animated-header-text animated-header-text-start transition-delay-small">
              <span className="white-space-no-wrap">COMMUNITY-GOVERNED GAME STUDIO.</span>
              <br />
              <span className="white-space-no-wrap">BY GAMERS, FOR GAMERS.</span>
            </p>
          </AnimatedWrapper>
        </div>
        <div>
          <AnimatedWrapper>
            <div
              className="d-inline-block position-relative flex-grow-1 satoshi-learn-more animated-fade-slow animated-fade-start transition-delay-large"
              onClick={scrollToGamingSection}
            >
              <Image
                src="/img/home/speech-bubble.png"
                alt="Learn More"
                width={407}
                height={125}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <p className="my-0 py-0 speech-bubble-text">Learn More!</p>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

const MobileIntro = () => {
  return (
    <div className="row m-0 p-0 position-relative pt-5 home-mobile-intro">
      <div className="overlay-dark min-vh-100" />
      <div className="radial-gradient-background d-block" />
      <div className="d-flex flex-column align-items-center text-center my-auto py-3 pt-md-5 home-mobile-content">
        <h1 className="mt-0 mt-sm-4 mt-md-5">Nifty League</h1>
        <h5 className="mt-2">By Gamers. For Gamers.</h5>
        <p className="my-4 text-center white-space-no-wrap">Community-Governed Game Studio</p>
        <AnimatedWrapper>
          <a href="https://app.niftyleague.com/" target="_blank" rel="noreferrer">
            <button className="btn theme-btn-primary section-black-button animated-fade animated-fade-start transition-delay-medium">
              START PLAYING <ExternalIcon />
            </button>
          </a>
        </AnimatedWrapper>
        <div className="d-flex align-items-center mt-3 mb-5 social-icons">
          <a className="pe-4" href="https://discord.gg/niftyleague" target="_blank" rel="noreferrer">
            <Image
              src="/icons/discord.svg"
              alt="Discord Logo"
              width={26}
              height={22}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </a>
          <a className="pe-4" href="https://twitter.com/NiftyLeague" target="_blank" rel="noreferrer">
            <Image
              src="/icons/twitter.svg"
              alt="Twitter Logo"
              width={26}
              height={22}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </a>
          <a className="pe-4" href="https://opensea.io/collection/niftydegen" target="_blank" rel="noreferrer">
            <Image
              src="/icons/opensea.svg"
              alt="OpenSea Logo"
              width={24}
              height={22}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </a>
          <a href="https://www.twitch.tv/niftyleagueofficial" target="_blank" rel="noreferrer">
            <Image
              src="/icons/twitch.svg"
              alt="Twitch Logo"
              width={24}
              height={22}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');
  const mobile = useMediaQuery('(max-width:768px)');
  const gamingSectionRef = useRef(null);

  const scrollToGamingSection = () => {
    if (!gamingSectionRef.current) return;
    (gamingSectionRef.current as HTMLDivElement).scrollIntoView();
  };

  return (
    <Layout classes={{ root: 'home-pg' }}>
      <Head>
        <title>Nifty League</title>
        <meta property="og:title" content="Nifty League: Community-Governed Game Studio" />
        <meta
          name="description"
          content="A game studio at the cutting edge of Web3 with a mission to inspire other indie game developers to build a decentralized future with us."
          key="desc"
        />
        <meta
          property="og:description"
          content="A game studio at the cutting edge of Web3 with a mission to inspire other indie game developers to build a decentralized future with us."
        />
        <meta property="og:image" content="https://niftyleague.com/img/home/classic-gaming-reinvented.png" />
      </Head>

      {mobile ? <MobileIntro /> : <DesktopIntro scrollToGamingSection={scrollToGamingSection} />}

      {/* SMASHERS */}
      <div className="row row-top-spacing m-0 p-0 position-relative" ref={gamingSectionRef}>
        <div className="d-flex flex-column text-center position-relative p-0">
          <div className="mt-2 mt-md-4 mt-lg-5 move-position-down">
            <AnimatedWrapper>
              <h2 className="px-sm-5 animated-header-text animated-header-text-start">CLASSIC GAMING REINVENTED</h2>
            </AnimatedWrapper>
          </div>
          <ConsoleGame src="/video/smashers.mp4" />

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
              <a href="https://niftysmashers.com" target="_blank" rel="noreferrer">
                <button className="btn theme-btn-primary section-black-button animated-fade animated-fade-start transition-delay-medium">
                  START PLAYING
                </button>
              </a>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <Link href="/games" legacyBehavior>
                <a>
                  <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start transition-delay-medium">
                    MORE GAMES
                  </button>
                </a>
              </Link>
            </AnimatedWrapper>
          </Stack>
        </div>
      </div>

      {/* DEGENS */}
      <div className="row row-top-spacing m-0 p-0 mb-5 position-relative sliding-nfts">
        <div className="d-flex flex-column text-center position-relative p-0">
          <div className="my-3 my-lg-5">
            <AnimatedWrapper>
              <h2 className="px-sm-5 animated-header-text animated-header-text-start">COMMUNITY-GENERATED AVATARS</h2>
            </AnimatedWrapper>
          </div>

          <div className="row row-top-spacing m-0 p-0 mb-5 position-relative sliding-nfts">
            <div className="d-flex flex-column text-center position-relative p-0">
              <div className="nifty-ape-overlay">
                <Image
                  className="pixelated nifty-ape-img"
                  src="/img/home/nifty-ape.png"
                  width={856}
                  height={842}
                  alt="ape degen overlay"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
              <Carousel mobileItems={2} hideGradient>
                {COMMUNITY_DEGEN_LIST.map(renderDegen)}
              </Carousel>
              <div className="radial-gradient-background d-block" />
            </div>
          </div>
        </div>
      </div>

      {/* COMPETE & EARN */}
      <div className="row row-top-spacing px-0 mx-auto inner-container">
        <div className="d-flex px-3 px-md-4 position-relative align-items-center">
          <div className={`${desktop ? 'col-6' : 'full-width'}`}>
            <div className="d-flex flex-column compete-to-earn-section position-relative">
              {desktop && (
                <>
                  <div className="compete-to-earn-section-token-1">
                    <div className="position-relative flex-grow-1">
                      <AnimatedWrapper parallax parallaxDirection="left">
                        <div className="animation-bounce-coin1 animated-fade animated-fade-start transition-delay-large">
                          <Image
                            src="/img/home/compete-and-earn-token-1.png"
                            alt="Compete and Earn NFTL 1"
                            width={413}
                            height={408}
                            className="pixelated"
                            sizes="100vw"
                            style={{
                              width: '100%',
                              height: 'auto',
                            }}
                          />
                        </div>
                      </AnimatedWrapper>
                    </div>
                  </div>
                  <div className="compete-to-earn-section-token-2">
                    <div className="position-relative flex-grow-1">
                      <AnimatedWrapper parallax parallaxDirection="right">
                        <div className="animation-bounce-coin2 animated-fade animated-fade-start transition-delay-large">
                          <Image
                            src="/img/home/compete-and-earn-token-2.png"
                            alt="Compete and Earn NFTL 2"
                            width={398}
                            height={390}
                            className="pixelated"
                            sizes="100vw"
                            style={{
                              width: '100%',
                              height: 'auto',
                            }}
                          />
                        </div>
                      </AnimatedWrapper>
                    </div>
                  </div>
                  <div className="compete-to-earn-section-token-3">
                    <div className="position-relative flex-grow-1">
                      <AnimatedWrapper parallax parallaxDirection="top">
                        <div className="animation-bounce-coin3 animated-fade animated-fade-start transition-delay-large">
                          <Image
                            src="/img/home/compete-and-earn-token-3.png"
                            alt="Compete and Earn NFTL 3"
                            width={492}
                            height={192}
                            className="pixelated"
                            sizes="100vw"
                            style={{
                              width: '100%',
                              height: 'auto',
                            }}
                          />
                        </div>
                      </AnimatedWrapper>
                    </div>
                  </div>
                </>
              )}
              <Stack gap={2} alignItems="center">
                {!desktop && (
                  <div className="position-relative flex-grow-1 full-width">
                    <AnimatedWrapper>
                      <div className="quick-pop-anim quick-pop-anim-start transition-delay-small">
                        <Image
                          src="/img/home/compete-and-earn-mobile.png"
                          alt="Compete and Earn"
                          width={3208}
                          height={1342}
                          sizes="100vw"
                          style={{
                            width: '100%',
                            height: 'auto',
                          }}
                        />
                        <div className="radial-gradient-background" />
                      </div>
                    </AnimatedWrapper>
                  </div>
                )}
                <div className={`d-flex flex-column position-relative compete-to-earn-section-body`}>
                  <div className="gradient-top-left radial-gradient-piece" />
                  <div className="mb-3">
                    <AnimatedWrapper>
                      <h2 className="compete-to-earn-section-title section-heading animated-header-text animated-header-text-start transition-delay-small">
                        SMASHERS
                        <br />
                        <span className="white-space-no-wrap">COMPETE & EARN</span>
                      </h2>
                    </AnimatedWrapper>
                  </div>
                  <div className="my-0">
                    <AnimatedWrapper>
                      <p className="py-1 py-lg-3 section-description animated-header-text animated-header-text-start transition-delay-medium">
                        4 - 16 PLAYERS COMPETE IN A CUT-THROAT BATTLE FOR THE SURVIVAL OF THE FITTEST!
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
                      <a href="https://niftysmashers.com" target="_blank" rel="noreferrer">
                        <button className="btn theme-btn-primary ms-0 mx-0 section-black-button animated-fade animated-fade-start transition-delay-large">
                          LET&apos;S BRAWL!
                        </button>
                      </a>
                    </AnimatedWrapper>
                    <AnimatedWrapper>
                      <Link href="/compete-and-earn" legacyBehavior>
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
                    src="/img/home/compete-and-earn.png"
                    alt="Compete and Earn"
                    width={1648}
                    height={1319}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              </AnimatedWrapper>
              <div className="position-absolute compete-to-earn-section-token-4">
                <AnimatedWrapper parallax parallaxDirection="bottom" transitionAmount="extreme">
                  <div className="animated-fade-start animated-fade transition-delay-large">
                    <Image
                      alt="Compete and Earn NFTL Token"
                      className="pixelated"
                      width={641}
                      height={640}
                      src="/img/home/compete-and-earn-token-4.png"
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                  </div>
                </AnimatedWrapper>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* NIFTYVERSE */}
      <div className="row row-top-spacing mx-auto inner-container">
        <div className="d-flex px-3 px-md-4 position-relative align-items-center">
          {desktop && (
            <div className="col-6 position-relative">
              <AnimatedWrapper>
                <div className="animated-fade animated-fade-start transition-delay-medium">
                  <Image
                    src="/img/home/land-in-the-niftyverse.png"
                    alt="Land in the Niftyverse"
                    width={3055}
                    height={2406}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
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
                    src="/img/home/land-in-the-niftyverse.png"
                    alt="Land in the NiftyVerse"
                    width={1920}
                    height={1512}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                  <div className="radial-gradient-background" />
                </div>
              )}
              <div className={`d-flex flex-column position-relative align-items-${desktop ? 'start' : 'center'}`}>
                <div className="gradient-bottom-right radial-gradient-piece" />
                <div className="mb-3">
                  <AnimatedWrapper>
                    <h2
                      className={`section-title section-heading animated-header-text animated-header-text-start transition-delay-small`}
                    >
                      <span className="white-space-no-wrap">DISCOVER THE</span>
                      <br />
                      NIFTYVERSE
                    </h2>
                  </AnimatedWrapper>
                </div>
                <div className="my-0">
                  <AnimatedWrapper>
                    <p className="py-1 py-lg-3 section-description animated-header-text animated-header-text-start transition-delay-medium">
                      A VIRTUAL SOCIAL HUB LIKE NONE OTHER FOR GAMERS.
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
                    <button className="btn disabled theme-btn-primary ms-0 mx-0 section-black-button animated-fade animated-fade-start transition-delay-large">
                      COMING SOON
                    </button>
                  </AnimatedWrapper>
                  <AnimatedWrapper>
                    <Link href="/niftyverse" legacyBehavior>
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

      {/* DASHBOARDS */}
      <div className="row row-top-spacing mx-0 py-3 py-md-5">
        <div className="px-0 position-relative">
          {desktop && (
            <AnimatedWrapper>
              <div className="position-relative flex-grow-1 animated-fade animated-fade-start transition-delay-small">
                <Image
                  src="/img/home/dashboard.png"
                  alt="App Dashboard"
                  width={3590}
                  height={2192}
                  className="pixelated"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
                <div className="radial-gradient-background" />
              </div>
            </AnimatedWrapper>
          )}
          <div className="d-flex flex-column px-3 home-rental-section">
            <Stack gap={2}>
              {!desktop && (
                <div
                  className="position-relative flex-grow-1 full-width"
                  style={{ width: '100vw', marginLeft: '-1rem' }}
                >
                  <Image
                    src="/img/home/dashboard.png"
                    alt="App Dashboard"
                    width={3590}
                    height={2192}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                  <div className="radial-gradient-background" />
                </div>
              )}
              <div className="d-flex flex-column home-rental-section-body">
                <div className="mb-3">
                  <AnimatedWrapper>
                    <h2 className="section-heading animated-header-text animated-header-text-start transition-delay-small">
                      DASHBOARDS
                    </h2>
                  </AnimatedWrapper>
                </div>
                <div className="my-0">
                  <AnimatedWrapper>
                    <p className="py-1 py-lg-3 section-description animated-header-text animated-header-text-start transition-delay-medium">
                      ACCESS WEB3-ENABLED PLAYER DASHBOARDS TO SEE YOUR GAME STATS, WINNINGS, AND NIFTY LEAGUE ASSETS.
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
                    <a href="https://app.niftyleague.com/" target="_blank" rel="noreferrer">
                      <button className="btn theme-btn-primary ms-0 mx-0 section-black-button animated-fade animated-fade-start transition-delay-large">
                        LAUNCH APP
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
              </div>
            </Stack>
          </div>
        </div>
      </div>

      {/* NFTL */}
      <div className="row row-top-spacing mx-auto inner-container">
        <div className="d-flex px-3 px-md-4 position-relative align-items-center">
          <div className={`${desktop ? 'col-6' : 'full-width'}`}>
            <div className="d-flex flex-column home-nftl-token-section">
              <Stack gap={2}>
                {!desktop && (
                  <div className="position-relative full-width text-align-center">
                    <MintOMatic />
                  </div>
                )}
                <div className={`d-flex flex-column position-relative home-nftl-token-section-body`}>
                  <div className="gradient-top-left radial-gradient-piece" />
                  <div className="mb-3">
                    <AnimatedWrapper>
                      <h2 className="home-nftl-token-section-title section-heading animated-header-text animated-header-text-start transition-delay-small">
                        NFTL TOKEN
                      </h2>
                    </AnimatedWrapper>
                  </div>
                  <AnimatedWrapper>
                    <p className="py-1 py-lg-3 home-nftl-token-section-description animated-header-text animated-header-text-start transition-delay-medium">
                      NFTL IS OUR GOVERNANCE &amp; UTILITY TOKEN. DEGENS EARN NFTL DAILY FOR THE FIRST 3 YEARS
                      POST-MINT. GOVERN THE FUTURE OF NIFTY LEAGUE &amp; ACCESS EXCLUSIVE ASSET DROPS WITH NFTL.
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
                        href="https://app.uniswap.org/#/tokens/ethereum/0x3c8d2fce49906e11e71cb16fa0ffeb2b16c29638"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn theme-btn-primary ms-0 mx-0 section-black-button animated-fade animated-fade-start transition-delay-large">
                          TRADE NFTL
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
            <div className="col-6 text-align-right position-relative">
              <MintOMatic />
            </div>
          )}
        </div>
      </div>

      {/* COMMUNITY */}
      <div className="row inner-container row-top-spacing mx-auto">
        <div className="d-flex px-3 px-md-4 position-relative align-items-end">
          {desktop && (
            <div className="col-6">
              <AnimatedWrapper>
                <div className="position-relative flex-grow-1 quick-pop-anim quick-pop-anim-start transition-delay-medium home-community-image">
                  <Image
                    src="/img/home/community.png"
                    alt="The Best Community on Earth"
                    width={1417}
                    height={1525}
                    className="pixelated"
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
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
                  <AnimatedWrapper>
                    <div className="position-relative flex-grow-1 full-width quick-pop-anim quick-pop-anim-start transition-delay-small">
                      <Image
                        src="/img/home/community.png"
                        alt="The Best Community on Earth"
                        width={1417}
                        height={1525}
                        sizes="100vw"
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                      />
                      <div className="radial-gradient-background" />
                    </div>
                  </AnimatedWrapper>
                )}
                {!desktop && (
                  <AnimatedWrapper>
                    <div className="position-relative flex-grow-1 animated-fade animated-fade-start transition-delay-small home-community-characters">
                      <Image
                        src="/img/home/community-characters.png"
                        alt="Community DEGENs"
                        width={1910}
                        height={620}
                        sizes="100vw"
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                      />
                      <div className="radial-gradient-background" />
                    </div>
                  </AnimatedWrapper>
                )}
                <div className={`d-flex flex-column position-relative home-community-section-body`}>
                  <div className="gradient-top-right radial-gradient-piece" />
                  <div className="mb-3">
                    <AnimatedWrapper>
                      <h2 className="section-title section-heading animated-header-text animated-header-text-start transition-delay-small">
                        COMMUNITY
                      </h2>
                    </AnimatedWrapper>
                  </div>
                  <AnimatedWrapper>
                    <p
                      className={`py-1 home-community-section-description animated-header-text animated-header-text-start transition-delay-medium`}
                    >
                      WE HATE TO BRAG, BUT OUR COMMUNITY IS TRULY TOP-NOTCH! JOIN OUR DISCORD TO CONNECT WITH OTHERS
                      DEGENS &amp; HELP SHAPE NIFTY LEAGUE&apos;S FUTURE.
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
                      <Link href="/community" legacyBehavior>
                        <a>
                          <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start transition-delay-large">
                            VIEW MORE
                          </button>
                        </a>
                      </Link>
                    </AnimatedWrapper>
                  </Stack>
                  {desktop && (
                    <AnimatedWrapper>
                      <div className="position-relative flex-grow-1 animated-fade animated-fade-start transition-delay-large home-community-degens">
                        <Image
                          alt="Community DEGENs"
                          width={1910}
                          height={620}
                          src="/img/home/community-characters.png"
                          sizes="100vw"
                          style={{
                            width: '100%',
                            height: 'auto',
                          }}
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

      {/* SPONSORS */}
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
                  src="/img/home/sponsors.png"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
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
              <Link href="/careers" legacyBehavior>
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
                  READ OUR BLOG
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
