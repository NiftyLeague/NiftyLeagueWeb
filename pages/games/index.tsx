import { memo } from 'react';
import cn from 'classnames';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@components/layout';
import AnimatedWrapper from '@components/AnimatedWrapper';
import styles from './index.module.scss';
import { NIFTY_GAMES } from '@data/games';
import { Container } from '@mui/material';
import ExternalIcon from '@components/ExternalIcon';

const Games: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Nifty League | Games</title>
        <meta
          name="description"
          content="JOIN THOUSANDS OF PLAYERS ALL OVER THE WORLD COMPETING FOR THE TOP SPOT IN THE NIFTY LEAGUE"
        />
      </Head>
      <div className={cn(styles.container, 'overview mx-auto px-3 position-relative')}>
        <div className={cn(styles.gradient1, 'radial-gradient-piece')} />
        <div className="mb-4">
          <AnimatedWrapper>
            <h1 className="text-align-center animated-fade-slow animated-fade-start transition-delay-small">
              OUR GAMES
            </h1>
          </AnimatedWrapper>
        </div>
        <div className="mb-5">
          <AnimatedWrapper>
            <p className="text-align-center animated-fade-slow animated-fade-start transition-delay-medium">
              JOIN THOUSANDS OF PLAYERS ALL OVER THE WORLD COMPETING FOR THE TOP SPOT IN THE NIFTY LEAGUE
            </p>
          </AnimatedWrapper>
        </div>
        <Container>
          {NIFTY_GAMES.map(({ name, description, video, tag, action }, index) => (
            <div className={cn(styles.section, 'd-flex flex-column-reverse flex-md-row position-relative')} key={name}>
              <div className={cn(styles.block, 'col-12 col-md-7 pe-md-5')}>
                <div className="d-flex flex-row align-items-center justify-content-between mb-3">
                  <AnimatedWrapper>
                    <h3 className="my-0 animated-header-text animated-header-text-start transition-delay-small">
                      {name}
                    </h3>
                  </AnimatedWrapper>
                  <AnimatedWrapper>
                    <p
                      className={cn(
                        styles.tagGame,
                        'my-0 animated-fade-slow animated-fade-start transition-delay-medium',
                      )}
                    >
                      {tag}
                    </p>
                  </AnimatedWrapper>
                </div>
                <AnimatedWrapper>
                  <p className="animated-header-text animated-header-text-start transition-delay-medium">
                    {description}
                  </p>
                </AnimatedWrapper>
                <div className="d-flex justify-content-center justify-content-md-start mt-5">
                  {action.isComingSoon ? (
                    <AnimatedWrapper>
                      <div className="animated-fade-slow animated-fade-start transition-delay-medium">
                        <button className="btn theme-btn-transparent disabled px-3">COMING SOON</button>
                      </div>
                    </AnimatedWrapper>
                  ) : (
                    <>
                      <AnimatedWrapper>
                        <a href={action.link} target="_blank" rel="noreferrer">
                          <button className="btn theme-btn-primary px-3 animated-fade-slow animated-fade-start transition-delay-medium">
                            {action.title}
                          </button>
                        </a>
                      </AnimatedWrapper>
                      {action.secondaryLink ? (
                        <AnimatedWrapper>
                          <a href={action.secondaryLink}>
                            <button className="btn theme-btn-primary mx-3 animated-fade-slow animated-fade-start transition-delay-medium">
                              {action.secondaryTitle}
                            </button>
                          </a>
                        </AnimatedWrapper>
                      ) : null}
                    </>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-5">
                <AnimatedWrapper>
                  <div className="position-relative text-align-right animated-fade-slow animated-fade-start transition-delay-medium mb-4">
                    <iframe
                      src={video}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={name}
                      className={styles.video}
                    />
                  </div>
                </AnimatedWrapper>
              </div>
              <div
                className={cn(
                  index === 0 ? styles.gradient2 : index === 1 ? styles.gradient1 : styles.gradient3,
                  'radial-gradient-piece',
                )}
              />
            </div>
          ))}
        </Container>
        <div className="d-flex justify-content-center mt-5 mt-md-3 mb-5">
          <AnimatedWrapper>
            <a href="https://niftyleague.com/docs/guides/nifty-smashers/general-info" target="_blank" rel="noreferrer">
              <button
                className={cn(
                  styles.button,
                  'btn theme-btn-primary px-3 animated-fade-slow animated-fade-start transition-delay-medium',
                )}
              >
                View Docs
                <ExternalIcon />
              </button>
            </a>
          </AnimatedWrapper>
        </div>
      </div>
    </Layout>
  );
};

export default memo(Games);
