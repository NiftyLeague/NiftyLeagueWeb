import { memo } from 'react';
import cn from 'classnames';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import Layout from '@components/layout';
import AnimatedWrapper from '@components/AnimatedWrapper';
import styles from './index.module.scss';
import { NIFTY_DEGENS } from '@data/degens';

const Games: NextPage = () => {
  const desktop = useMediaQuery('(min-width:768px)');
  return (
    <Layout>
      <Head>
        <title>Nifty League | DEGENs</title>
        <meta name="description" content="COMMUNITY DESIGNED DEGEN NFTs" />
      </Head>
      <div className={cn(styles.container, 'overview mx-auto px-3')}>
        <div className="mb-4">
          <AnimatedWrapper>
            <h1 className="text-align-center animated-header-text animated-header-text-start transition-delay-small">
              DEGENS
            </h1>
          </AnimatedWrapper>
        </div>
        <div className="mb-4">
          <AnimatedWrapper>
            <p className="text-align-center animated-header-text animated-header-text-start transition-delay-medium">
              COMMUNITY DESIGNED DEGEN NFTs
            </p>
          </AnimatedWrapper>
        </div>
        <div className="mb-5">
          <AnimatedWrapper>
            <p className="text-align-center animated-header-text animated-header-text-start transition-delay-medium">
              The Niftyleague DEGENs were specially created by the community with members pitching in and deciding hoow
              THEY want their DEGENS to look. This involved selecting special features that they wanted including
              selection of cothing, tribe and body structure among a few others. This led to the birth of 9900 Nifty
              league NFTs on the blockchain.
            </p>
          </AnimatedWrapper>
        </div>
        <AnimatedWrapper>
          <button className="btn theme-btn-primary mx-auto px-4 animated-fade-slow animated-fade-start transition-delay-large">
            SEE ALL DEGENS
          </button>
        </AnimatedWrapper>
        <div className={styles.section}>
          <div
            className={cn(
              styles.list,
              'd-flex flex-wrap align-items-center flex-md-row full-width justify-content-between',
            )}
          >
            {NIFTY_DEGENS.map(({ name, image }) => (
              <div className="mb-3 px-3" key={name}>
                <div className="d-flex flex-column">
                  <AnimatedWrapper>
                    <div className="position-relative animated-fade-slow animated-fade-start transition-delay-small">
                      <Image
                        src={image.link}
                        alt={name}
                        layout="fixed"
                        width={desktop ? image.width : image.width / 2}
                        height={desktop ? image.height : image.height / 2}
                      />
                    </div>
                  </AnimatedWrapper>
                  <AnimatedWrapper>
                    <p className="text-align-center px-3 mt-3 animated-fade-slow animated-fade-start transition-delay-small">
                      {name}
                    </p>
                  </AnimatedWrapper>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <AnimatedWrapper>
              <h3 className="text-align-center animated-header-text animated-header-text-start transition-delay-small">
                DEGEN CATEGORIES
              </h3>
            </AnimatedWrapper>
          </div>
          <div className="mb-4">
            <AnimatedWrapper>
              <p className="text-align-center animated-header-text animated-header-text-start transition-delay-medium">
                There are 6 warring DEGEN tribes with a 7th that has been left undiscovered. These tribes are digital
                representatives of the NFT inside the Niftyleague ecosystem.
              </p>
            </AnimatedWrapper>
          </div>
        </div>
        <div className={styles.section}>
          <AnimatedWrapper>
            <div className="d-flex mb-3 mb-md-5">
              <div className="col-3 col-md-5">
                <h3 className="text-align-center animated-header-text animated-header-text-start transition-delay-small">
                  TRIBES
                </h3>
              </div>
              <div className="col-6">
                <h3 className="px-2 px-md-3 animated-header-text animated-header-text-start transition-delay-small">
                  POWERS
                </h3>
              </div>
            </div>
            <div className={cn(styles.table, 'position-relative')}>
              <hr className={styles.divider} />
              {NIFTY_DEGENS.map(({ name, description, extra, image }) => (
                <div className="d-flex align-items-center" key={name}>
                  <div className="col-3 col-md-5 p-2 p-md-3">
                    <div className="d-flex flex-column">
                      <AnimatedWrapper>
                        <div className="position-relative text-align-center animated-fade-slow animated-fade-start transition-delay-small">
                          <Image
                            src={image.link}
                            alt={name}
                            layout="fixed"
                            width={desktop ? image.width : image.width / 2}
                            height={desktop ? image.height : image.height / 2}
                          />
                        </div>
                      </AnimatedWrapper>
                      <AnimatedWrapper>
                        <p className="text-align-center mt-2 animated-fade-slow animated-fade-start transition-delay-small">
                          {name}
                        </p>
                      </AnimatedWrapper>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 p-2 p-md-3">
                    <AnimatedWrapper>
                      <p className="animated-header-text animated-header-text-start transition-delay-medium">
                        {description}
                      </p>
                    </AnimatedWrapper>
                  </div>
                  <div className="col-3 col-md-3 p-2 p-md-3">
                    <AnimatedWrapper>
                      {extra ? (
                        <p className="text-align-center animated-header-text animated-header-text-start transition-delay-medium">
                          {extra}
                        </p>
                      ) : (
                        <h2
                          className={cn(
                            styles.sameAsAbove,
                            'text-align-center animated-header-text animated-header-text-start transition-delay-medium',
                          )}
                        >
                          ‘’
                        </h2>
                      )}
                    </AnimatedWrapper>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedWrapper>
        </div>
        <AnimatedWrapper>
          <a href="https://niftyleague.com/docs" target="_blank" rel="noreferrer">
            <button
              className={cn(
                styles.button,
                'btn theme-btn-transparent mx-auto my-5 px-3 animated-fade-slow animated-fade-start transition-delay-medium',
              )}
            >
              View Docs
            </button>
          </a>
        </AnimatedWrapper>
      </div>
    </Layout>
  );
};

export default memo(Games);
