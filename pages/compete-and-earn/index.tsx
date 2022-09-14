import { memo } from 'react';
import cn from 'classnames';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@components/layout';
import AnimatedWrapper from '@components/AnimatedWrapper';
import styles from './index.module.scss';

const CompeteAndEarn: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Nifty League | Compete and Earn</title>
        <meta name="description" content="Adrenaline fueled, fast-paced brawl mode where the winner takes ALL" />
      </Head>
      <div className={cn(styles.container, 'overview mx-auto px-3')}>
        <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-center">
          <div className={cn(styles.block, 'd-flex flex-column col-12 col-md-6 pe-0 pe-md-5')}>
            <div className="mb-2 mb-md-4">
              <AnimatedWrapper>
                <h1 className="animated-header-text animated-header-text-start">COMPETE AND EARN</h1>
              </AnimatedWrapper>
            </div>
            <div className="mb-0">
              <AnimatedWrapper>
                <p className="animated-header-text animated-header-text-start transition-delay-small">
                  Adrenaline fueled, fast-paced brawl mode where the winner takes ALL
                </p>
              </AnimatedWrapper>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <AnimatedWrapper>
                <div className="position-relative animated-fade-slow animated-fade-start transition-delay-medium ps-0 ps-lg-5">
                  <Image
                    src="/img/compete-and-earn/splash.png"
                    alt="Nifty League Compete & Earn"
                    layout="responsive"
                    width={1214}
                    height={623}
                    priority
                  />
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
        <div className={cn(styles.content, 'mx-auto')}>
          <div className="d-flex flex-column-reverse flex-md-row mt-3 mt-md-5 py-3 py-md-5 align-items-center">
            <div className={cn(styles.block, 'col-12 col-md-6 pe-md-5')}>
              <div className="mb-3">
                <AnimatedWrapper>
                  <h3 className="animated-header-text animated-header-text-start transition-delay-small">
                    HOW IT WORKS
                  </h3>
                </AnimatedWrapper>
              </div>
              <AnimatedWrapper>
                <p className="animated-header-text animated-header-text-start transition-delay-medium">
                  4 - 16 Players pool NFTL together in a cuththroat battle for the survuval of the fittest. Only the
                  first, second and third positions will take home earnings from the pooled pot!
                </p>
              </AnimatedWrapper>
            </div>
            <div className="col-12 col-md-6">
              <AnimatedWrapper>
                <div className="position-relative text-align-right animated-fade-slow animated-fade-start transition-delay-medium mb-4 ps-0 ps-lg-5">
                  <iframe
                    src="https://www.youtube.com/embed/wv_fI1PPBi0"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Nifty League Compete & Earn"
                    className={styles.video}
                  />
                </div>
              </AnimatedWrapper>
            </div>
          </div>
          <AnimatedWrapper>
            <h3 className="mt-3 mt-md-5 heading-thin text-align-center animated-fade animated-fade-start transition-delay-medium">
              GAME MODES
            </h3>
          </AnimatedWrapper>
          <AnimatedWrapper>
            <div
              className={cn(
                styles.features,
                'd-flex pt-3 pt-md-5 mx-auto animated-fade animated-fade-start transition-delay-medium',
              )}
            >
              <div className="col-4 d-flex flex-column">
                <h5 className={styles.cell}>FEATURES</h5>
                <p className={styles.cell}>Requires an invite</p>
                <p className={styles.cell}>Buy-in</p>
                <p className={styles.cell}>Region</p>
                <p className={styles.cell}>Player Number</p>
              </div>
              <div className="col-4 d-flex flex-column">
                <h5 className={styles.cell}>PUBLIC BRAWL</h5>
                <p className={styles.cell}>No</p>
                <p className={styles.cell}>1000 NFTL</p>
                <p className={styles.cell}>Decided by the Host</p>
                <p className={styles.cell}>Decided by the Host</p>
              </div>
              <div className="col-4 d-flex flex-column">
                <div className="d-flex flex-column fit-width">
                  <h5 className={styles.cell}>PRIVATE BRAWL</h5>
                  <p className={styles.cell}>Yes</p>
                  <p className={styles.cell}>Decided by the Host</p>
                  <p className={styles.cell}>Decided by the Host</p>
                  <p className={styles.cell}>Decided by the Host</p>
                </div>
              </div>
            </div>
          </AnimatedWrapper>

          <div className="d-flex justify-content-center pb-3 pb-md-5">
            <AnimatedWrapper>
              <a href="https://app.niftyleague.com/" target="_blank" rel="noreferrer">
                <button
                  className={cn(
                    styles.button,
                    'btn theme-btn-transparent animated-fade animated-fade-start transition-delay-small',
                  )}
                >
                  START PLAYING NOW
                </button>
              </a>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default memo(CompeteAndEarn);
