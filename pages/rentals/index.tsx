import { memo } from 'react';
import cn from 'classnames';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import Layout from '@components/layout';
import AnimatedWrapper from '@components/AnimatedWrapper';
import { RENTAL_MAIN_SECTIONS, RENTAL_TUTORIALS } from '@data/rentals';
import styles from './index.module.scss';

const Rentals: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');
  return (
    <Layout>
      <Head>
        <title>Nifty League | Rentals</title>
        <meta
          name="description"
          content="Owners can earn passive income from renting out their DEGENS and scholars can rent a DEGEN from owners using NFTL."
        />
      </Head>
      <div className={cn(styles.container, 'overview mx-auto px-3')}>
        <div
          className={cn(
            styles.intro,
            'd-flex flex-column-reverse flex-md-row align-items-center justify-content-center',
          )}
        >
          <div className={cn(styles.block, 'd-flex flex-column col-12 col-md-6 pe-0 pe-md-5')}>
            <div className="mb-2">
              <AnimatedWrapper>
                <h1 className="animated-header-text animated-header-text-start">RENTALS</h1>
              </AnimatedWrapper>
            </div>
            <div className="mb-0">
              <AnimatedWrapper>
                <p className="animated-header-text animated-header-text-start transition-delay-small">
                  Owners can earn passive income from renting out their DEGENS and scholars can rent a DEGEN from owners
                  using NFTL. <br />
                  <a
                    href="https://niftyleague.com/docs/overview/p2e/rentals"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    Learn how it works!
                  </a>
                </p>
              </AnimatedWrapper>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <AnimatedWrapper>
              <div className="position-relative text-align-right animated-fade-slow animated-fade-start transition-delay-large ps-0 ps-lg-5 mb-3">
                <iframe
                  src="https://www.youtube.com/embed/wv_fI1PPBi0"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Nifty League Rentals"
                  className={styles.video}
                />
              </div>
            </AnimatedWrapper>
          </div>
        </div>
        {RENTAL_MAIN_SECTIONS.map(({ name, description, image }) => (
          <div className={styles.section} key={name}>
            <div className="d-flex flex-column-reverse flex-md-row mt-3 align-items-center">
              <div className={cn(styles.block, 'col-12 col-md-7 pe-md-5')}>
                <AnimatedWrapper>
                  <h3 className="animated-header-text animated-header-text-start transition-delay-small">{name}</h3>
                </AnimatedWrapper>
                <div className="mt-3">
                  <AnimatedWrapper>
                    <p className="animated-header-text animated-header-text-start transition-delay-medium">
                      {description}
                    </p>
                  </AnimatedWrapper>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div className={cn(styles.sectionImg, 'mx-auto mb-3')}>
                  <AnimatedWrapper>
                    <div className="position-relative text-align-center animated-fade-slow animated-fade-start transition-delay-medium">
                      <Image
                        src={image.link}
                        alt={name}
                        layout={desktop ? 'fixed' : 'responsive'}
                        width={image.width}
                        height={image.height}
                      />
                    </div>
                  </AnimatedWrapper>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.section}>
          <div className="mb-4">
            <AnimatedWrapper>
              <h3 className="text-align-center animated-header-text animated-header-text-start transition-delay-small">
                BENEFITS OF THE RENTAL SYSTEM
              </h3>
            </AnimatedWrapper>
          </div>
          <div className="d-flex flex-column flex-md-row full-width">
            <div className={cn(styles.block, 'd-flex flex-column col-12 col-md-7 pe-0 pe-md-5 mb-4')}>
              <AnimatedWrapper>
                <h5 className="mb-4 animated-fade-slow animated-fade-start transition-delay-medium">OWNERS</h5>
                <p className="mb-2 animated-fade-slow animated-fade-start transition-delay-medium">
                  Passive NFTL income from holding a DEGEN
                </p>
                <p className="mb-2 animated-fade-slow animated-fade-start transition-delay-medium">
                  Passive income from renting out to scholars and having them play for you
                </p>
                <p className="animated-fade-slow animated-fade-start transition-delay-medium">Rewards for gameplay</p>
              </AnimatedWrapper>
            </div>
            <div className={cn(styles.block, 'd-flex flex-column col-12 col-md-5 ps-0 ps-md-5 mb-4')}>
              <AnimatedWrapper>
                <h5 className="mb-4 animated-fade-slow animated-fade-start transition-delay-medium">SCHOLARS</h5>
                <p className="mb-2 animated-fade-slow animated-fade-start transition-delay-medium">
                  Low entry barrier into the nifty league
                </p>
                <p className="animated-fade-slow animated-fade-start transition-delay-medium">
                  Almost zero risk involved
                </p>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className="mb-4">
            <AnimatedWrapper>
              <h3 className="text-align-center animated-header-text animated-header-text-start transition-delay-small">
                RENTAL STATS
              </h3>
            </AnimatedWrapper>
          </div>
          <div className="d-flex flex-column align-items-center flex-md-row full-width justify-content-md-between">
            <div className="mb-3 full-width">
              <AnimatedWrapper>
                <div className={cn(styles.stat, 'animated-fade-slow animated-fade-start transition-delay-small')}>
                  <h5 className="my-4 my-xl-5 text-align-center">TOTAL RENTALS</h5>
                  <h3 className="text-align-center mb-3">102K</h3>
                </div>
              </AnimatedWrapper>
            </div>
            <div className="mb-3 full-width">
              <AnimatedWrapper>
                <div className={cn(styles.stat, 'animated-fade-slow animated-fade-start transition-delay-small')}>
                  <h5 className="my-4 my-xl-5 text-align-center">ACTIVE RENTALS</h5>
                  <h3 className="text-align-center mb-3">1.5K</h3>
                </div>
              </AnimatedWrapper>
            </div>
            <div className="mb-3 full-width">
              <AnimatedWrapper>
                <div
                  className={cn(
                    styles.stat,
                    'px-3 px-xl-4 animated-fade-slow animated-fade-start transition-delay-small',
                  )}
                >
                  <h5 className="my-4 my-xl-5 text-align-center">EARN MORE WHEN YOU RENT PREMIUM DEGENS</h5>
                  <a href="https://app.niftyleague.com/degen-rentals" target="_blank" rel="noreferrer">
                    <button className={cn(styles.button, 'btn theme-btn-transparent mx-auto px-3 mb-3')}>
                      RENT NOW
                    </button>
                  </a>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className="mb-4">
            <AnimatedWrapper>
              <h3 className="text-align-center animated-header-text animated-header-text-start transition-delay-small">
                TOURNAMENTS
              </h3>
            </AnimatedWrapper>
          </div>
          <div className="d-flex flex-column align-items-center flex-md-row full-width justify-content-md-between">
            <div className="mb-3 full-width">
              <AnimatedWrapper>
                <div
                  className={cn(
                    styles.stat,
                    'position-relative d-flex flex-column px-3 py-3 py-md-5 animated-fade-slow animated-fade-start transition-delay-small',
                  )}
                >
                  <h5 className="text-align-center mb-3">BOLO&apos;S HUNT</h5>
                  <h3 className="text-align-center my-0 mt-auto">300</h3>
                  <h5 className="text-align-center my-0 mb-auto">PLAYERS</h5>
                  <h5 className="text-align-center mt-3">50,000 NFTL POOL</h5>
                  <div className={styles.expired}>
                    <h5>EXPIRED</h5>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
            <div className="mb-3 full-width">
              <AnimatedWrapper>
                <div
                  className={cn(
                    styles.stat,
                    'position-relative d-flex flex-column px-3 py-3 py-md-5 animated-fade-slow animated-fade-start transition-delay-small',
                  )}
                >
                  <h5 className="text-align-center mb-3">BOLO&apos;S HUNT</h5>
                  <h3 className="text-align-center my-0 mt-auto">300</h3>
                  <h5 className="text-align-center my-0 mb-auto">PLAYERS</h5>
                  <h5 className="text-align-center mt-3">50,000 NFTL POOL</h5>
                  <div className={styles.expired}>
                    <h5>EXPIRED</h5>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
            <div className="mb-3 full-width">
              <AnimatedWrapper>
                <div
                  className={cn(
                    styles.stat,
                    'position-relative d-flex flex-column px-3 py-3 py-md-5 animated-fade-slow animated-fade-start transition-delay-small',
                  )}
                >
                  <h5 className="text-align-center mb-3">MORGAN&apos;S RODEO</h5>
                  <h3 className="text-align-center my-0 mt-auto">XXX</h3>
                  <h5 className="text-align-center my-0 mb-auto">PLAYERS</h5>
                  <h5 className="text-align-center mt-3">50,000 NFTL POOL</h5>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className="mb-4">
            <AnimatedWrapper>
              <h3 className="text-align-center animated-header-text animated-header-text-start transition-delay-small">
                TUTORIALS
              </h3>
            </AnimatedWrapper>
          </div>
          <div
            className={cn(
              styles.tutorials,
              'd-flex flex-column align-items-center align-items-md-start flex-md-row full-width justify-content-md-between',
            )}
          >
            {RENTAL_TUTORIALS.map(({ name, video }) => (
              <div className="mb-3 full-width" key={name}>
                <div className={cn(styles.tutorial, 'd-flex flex-column')}>
                  <AnimatedWrapper>
                    <div className="position-relative animated-fade-slow animated-fade-start transition-delay-small">
                      <iframe
                        src={video}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={name}
                        className={styles.tutorialVideo}
                      />
                    </div>
                  </AnimatedWrapper>
                  <AnimatedWrapper>
                    <p className="text-align-center px-3 mt-2 animated-fade-slow animated-fade-start transition-delay-small">
                      {name}
                    </p>
                  </AnimatedWrapper>
                </div>
              </div>
            ))}
          </div>
          <AnimatedWrapper>
            <a href="https://niftyleague.com/docs" target="_blank" rel="noreferrer">
              <button
                className={cn(
                  styles.button,
                  'btn theme-btn-transparent mt-5 mx-auto px-3 animated-fade-slow animated-fade-start transition-delay-medium',
                )}
              >
                View Docs
              </button>
            </a>
          </AnimatedWrapper>
        </div>
      </div>
    </Layout>
  );
};

export default memo(Rentals);
