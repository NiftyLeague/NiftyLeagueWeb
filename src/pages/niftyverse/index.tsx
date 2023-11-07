import { memo } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Stack } from '@mui/material';
import Layout from '@/components/Layout';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { NIFTYVERSE_PROPERTIES } from '@/constants/niftyverse';
import ExternalIcon from '@/components/ExternalIcon';
import ConsoleGame from '@/components/ConsoleGame';
import styles from './index.module.scss';

const NiftyVerse: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Nifty League | NiftyVerse</title>
        <meta property="og:title" content="Nifty League | NiftyVerse" />
        <meta
          name="description"
          content="A virtual space for gamers to connect, collaborate, and compete with each other"
          key="desc"
        />
        <meta
          property="og:description"
          content="A virtual space for gamers to connect, collaborate, and compete with each other"
        />
        <meta property="og:image" content="https://niftyleague.com/img/niftyverse/beachfront_night.png" />
      </Head>
      <div className="position-relative">
        <div className={cn(styles.introContainer, 'row m-0 p-0 position-relative')}>
          <div className="d-flex flex-column text-center position-relative p-0">
            <ConsoleGame src="/video/mansion_showcase.mp4" />
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
                <a href="https://app.niftyleague.com/games/niftyverse" target="_blank" rel="noreferrer">
                  <button
                    disabled
                    className="btn theme-btn-primary section-black-button animated-fade animated-fade-start transition-delay-medium"
                  >
                    COMING SOON
                  </button>
                </a>
              </AnimatedWrapper>
              <AnimatedWrapper>
                <a href="https://twitter.com/search?q=%23NiftyLeaks&src=typed_query" target="_blank" rel="noreferrer">
                  <button className="btn theme-btn-transparent section-white-button animated-fade animated-fade-start transition-delay-medium">
                    VIEW MORE
                    <ExternalIcon />
                  </button>
                </a>
              </AnimatedWrapper>
            </Stack>
          </div>
        </div>

        <Container>
          <div
            className={cn(
              styles.intro,
              'pt-md-5 pt-xl-0 d-flex flex-column-reverse flex-md-row align-items-center justify-content-center position-relative',
            )}
          >
            <div className={cn(styles.block, 'd-flex flex-column col-12 col-md-6 col-lg-7 pe-0 pe-md-3')}>
              <div className="mb-2 mb-md-3">
                <AnimatedWrapper>
                  <h1 className="animated-header-text animated-header-text-start">NIFTYVERSE</h1>
                </AnimatedWrapper>
              </div>
              <div className="mb-3 mb-md-0">
                <AnimatedWrapper>
                  <p className="animated-header-text animated-header-text-start transition-delay-small">
                    NiftyVerse is a virtual space for gamers to connect, collaborate, and compete with each other. The
                    initial districts are designed by the Nifty League team, but ultimately the vision is for NiftyVerse
                    to be a dynamic and interoperable platform for developers to create their own games, ensuring a wide
                    variety of immersive experiences for players. Do note: all DEGEN holders have been promised free
                    land parcels in the NiftyVerse!
                  </p>
                </AnimatedWrapper>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <AnimatedWrapper>
                <div className="position-relative text-align-right animated-fade-slow animated-fade-start transition-delay-medium ps-0 ps-lg-5 mb-3">
                  <video width="100%" height="100%" muted autoPlay loop playsInline data-keepplaying>
                    <source src="/video/arcade-token.mp4" type="video/mp4" />
                  </video>
                </div>
              </AnimatedWrapper>
            </div>
            <div className={cn(styles.gradient1, 'radial-gradient-piece')} />
          </div>
          <div className={cn(styles.section, 'position-relative')}>
            <div className={cn(styles.gradient2, 'radial-gradient-piece')} />
            <div className="mb-3 mb-md-5">
              <AnimatedWrapper>
                <h3 className="text-align-center animated-header-text animated-header-text-start transition-delay-small">
                  PROPERTY TYPES FOR EVERYONE
                </h3>
              </AnimatedWrapper>
            </div>
            <div
              className={cn(
                styles.properties,
                'd-flex flex-column align-items-start flex-md-row full-width justify-content-md-between flex-wrap',
              )}
            >
              {NIFTYVERSE_PROPERTIES.map(({ name, description, image }) => (
                <div
                  className={'full-width d-flex flex-column flex-lg-row position-relative py-3 px-2 mb-3 mb-md-5'}
                  key={name}
                >
                  <div className="col-12 col-lg-6 pe-lg-2 d-flex flex-column">
                    <AnimatedWrapper>
                      <h6 className="my-0 animated-fade-slow animated-fade-start transition-delay-small">{name}</h6>
                    </AnimatedWrapper>
                    <AnimatedWrapper>
                      <p className="my-0 mt-2 mt-md-4 mb-4 mb-lg-0 animated-fade-slow animated-fade-start transition-delay-medium">
                        {description}
                      </p>
                    </AnimatedWrapper>
                  </div>
                  <div className="col-12 col-lg-6 ps-lg-2 position-relative">
                    <AnimatedWrapper>
                      <div className="animated-fade animated-fade-start transition-delay-medium">
                        <Image
                          src={image}
                          alt="NiftyVerse District Highlight"
                          width={500}
                          height={283}
                          style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                          }}
                        />
                      </div>
                    </AnimatedWrapper>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center mt-5">
              <AnimatedWrapper>
                <a href="https://niftyleague.com/docs/overview/games/niftyverse" target="_blank" rel="noreferrer">
                  <button
                    className={cn(
                      styles.button,
                      'btn theme-btn-primary px-3 animated-fade-slow animated-fade-start transition-delay-small',
                    )}
                  >
                    View Docs
                    <ExternalIcon />
                  </button>
                </a>
              </AnimatedWrapper>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default memo(NiftyVerse);
