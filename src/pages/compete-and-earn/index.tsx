import { memo } from 'react';
import cn from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import styles from './index.module.scss';

import type { NextPage } from 'next';

const CompeteAndEarn: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Nifty League | Compete &amp; Earn</title>
        <meta property="og:title" content="Nifty League | Compete & Earn" />
        <meta
          name="description"
          content="Adrenaline fueled, fast-paced brawl mode where the winner takes ALL"
          key="desc"
        />
        <meta property="og:description" content="Adrenaline fueled, fast-paced brawl mode where the winner takes ALL" />
        <meta property="og:image" content="https://niftyleague.com/img/compete-and-earn/splash.png" />
      </Head>
      <div className={cn(styles.container, 'overview mx-auto px-3')}>
        <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-center position-relative">
          <div className={cn(styles.block, 'd-flex flex-column col-12 col-md-6 pe-0 pe-md-5 position-relative')}>
            <div className="mb-2 mb-md-4">
              <AnimatedWrapper>
                <h1 className="animated-fade-slow animated-fade-start">COMPETE &amp; EARN</h1>
              </AnimatedWrapper>
            </div>
            <div className="mb-0">
              <AnimatedWrapper>
                <p className={cn(styles.heroDesc, 'animated-fade-slow animated-fade-start transition-delay-small')}>
                  Adrenaline fueled, fast-paced brawl mode where the winner takes ALL
                </p>
              </AnimatedWrapper>
            </div>
            <div className={cn(styles.gradient1, 'radial-gradient-piece')} />
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <AnimatedWrapper>
                <div className="position-relative animated-fade-slow animated-fade-start transition-delay-medium ps-0 ps-lg-5">
                  <Image
                    src="/img/compete-and-earn/splash.png"
                    alt="Nifty League Compete & Earn"
                    width={3343}
                    height={2615}
                    priority
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
        </div>
        <div className={cn(styles.content, 'mx-auto')}>
          <div className="d-flex flex-column-reverse flex-md-row mt-3 mt-md-5 py-5 align-items-center position-relative">
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
                <div className="position-relative text-align-right animated-fade-slow animated-fade-start transition-delay-medium mb-4 mb-md-0 ps-0 ps-lg-5">
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
            <div className={cn(styles.gradient3, 'radial-gradient-piece')} />
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
                'd-flex pt-3 pt-md-5 mx-auto animated-fade animated-fade-start transition-delay-medium position-relative',
              )}
            >
              <div className="col-4 d-flex flex-column">
                <h5 className={styles.headerCell}>FEATURES:</h5>
                <p className={styles.cell}>Requires an invite:</p>
                <p className={styles.cell}>Buy-in:</p>
                <p className={styles.cell}>Region:</p>
                <p className={styles.cell}>Player Number:</p>
              </div>
              <hr style={{ height: 'inherit', border: '3px solid white', marginRight: 50 }} />
              <div className="col-4 d-flex flex-column">
                <h5 className={styles.headerCell}>PUBLIC BRAWL</h5>
                <p className={styles.cell}>No</p>
                <p className={styles.cell}>1000 NFTL</p>
                <p className={styles.cell}>Decided by the Host</p>
                <p className={styles.cell}>Decided by the Host</p>
              </div>
              <div className="col-4 d-flex flex-column">
                <h5 className={styles.headerCell}>PRIVATE BRAWL</h5>
                <p className={styles.cell}>Yes</p>
                <p className={styles.cell}>Decided by the Host</p>
                <p className={styles.cell}>Decided by the Host</p>
                <p className={styles.cell}>Decided by the Host</p>
              </div>
            </div>
          </AnimatedWrapper>

          <div className="d-flex justify-content-center mt-5">
            <AnimatedWrapper>
              <a href="https://app.niftyleague.com/" target="_blank" rel="noreferrer">
                <button className="btn theme-btn-primary animated-fade animated-fade-start transition-delay-small">
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
