import { memo } from 'react';
import cn from 'classnames';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@components/layout';
import AnimatedWrapper from '@components/AnimatedWrapper';
import styles from './index.module.scss';
import { NIFTYVERSE_PROPERTIES } from '@data/niftyverse';
import ExternalIcon from '@components/ExternalIcon';

const NiftyVerse: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Nifty League | NiftyVerse</title>
        <meta name="description" content="Own your own land in the NiftyVerse" />
      </Head>
      <div className={cn(styles.container, 'overview mx-auto px-3')}>
        <div
          className={cn(
            styles.intro,
            'd-flex flex-column-reverse flex-md-row align-items-center justify-content-center position-relative',
          )}
        >
          <div className={cn(styles.block, 'd-flex flex-column col-12 col-md-6 col-lg-7 pe-0 pe-md-3')}>
            <div className="mb-2 mb-md-3">
              <AnimatedWrapper>
                <h1 className="animated-header-text animated-header-text-start">REAL ESTATE IN THE NIFTYVERSE</h1>
              </AnimatedWrapper>
            </div>
            <div className="mb-3 mb-md-0">
              <AnimatedWrapper>
                <p className="animated-header-text animated-header-text-start transition-delay-small">
                  Own your own piece of the Niftyverse
                </p>
              </AnimatedWrapper>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <AnimatedWrapper>
              <div className="position-relative text-align-right animated-fade-slow animated-fade-start transition-delay-medium ps-0 ps-lg-5 mb-3">
                <iframe
                  src="https://www.youtube.com/embed/wv_fI1PPBi0"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Real Estate in the Niftyverse"
                  className={styles.video}
                />
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
              'd-flex flex-column align-items-center align-items-md-start flex-md-row full-width justify-content-md-between flex-wrap',
            )}
          >
            {NIFTYVERSE_PROPERTIES.map(({ name, description }) => (
              <div className="mb-3 mb-md-5" key={name}>
                <div className={cn(styles.property, 'd-flex flex-column position-relative py-3')}>
                  <AnimatedWrapper>
                    <h5 className="my-0 mt-4 animated-fade-slow animated-fade-start transition-delay-small">{name}</h5>
                  </AnimatedWrapper>
                  <AnimatedWrapper>
                    <p className="my-0 mt-2 mt-md-4 animated-fade-slow animated-fade-start transition-delay-medium">
                      {description}
                    </p>
                  </AnimatedWrapper>
                  <div className="radial-gradient-background" />
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
      </div>
    </Layout>
  );
};

export default memo(NiftyVerse);
