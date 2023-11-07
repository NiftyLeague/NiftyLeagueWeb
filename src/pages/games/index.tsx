import { memo } from 'react';
import cn from 'classnames';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { NIFTY_GAMES } from '@/constants/games';
import { Container } from '@mui/material';
import ExternalIcon from '@/components/ExternalIcon';
import styles from './index.module.scss';

const Games: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');
  return (
    <Layout>
      <Head>
        <title>Nifty League | Games</title>
        <meta property="og:title" content="Nifty League | Games" />
        <meta
          name="description"
          content="JOIN THOUSANDS OF PLAYERS ALL OVER THE WORLD COMPETING FOR THE TOP SPOT IN THE NIFTY LEAGUE"
          key="desc"
        />
        <meta
          property="og:description"
          content="JOIN THOUSANDS OF PLAYERS ALL OVER THE WORLD COMPETING FOR THE TOP SPOT IN THE NIFTY LEAGUE"
        />
        <meta property="og:image" content="https://niftyleague.com/img/home/classic-gaming-reinvented.png" />
      </Head>
      <div className={cn(styles.container, 'overview mx-auto px-3 position-relative')}>
        <div className={cn(styles.gradient1, 'radial-gradient-piece')} />
        <Container>
          <div className="d-flex align-items-center justify-content-center flex-wrap px-lg-5">
            {desktop ? (
              <div className="col-6 desktop px-2 px-lg-3">
                <AnimatedWrapper>
                  <div className="animation-zoomin animated-fade-start animated-fade transition-delay-large">
                    <video id="lobby" width="100%" height="100%" muted autoPlay loop playsInline data-keepplaying>
                      <source src="/video/lobby.mp4" type="video/mp4" />
                    </video>
                  </div>
                </AnimatedWrapper>
              </div>
            ) : (
              <div className="col-4">
                <AnimatedWrapper>
                  <div className="animation-zoomin animated-fade-start animated-fade transition-delay-large">
                    <Image
                      alt="Arcade"
                      width={339}
                      height={661}
                      src="/img/smashers/arcade.png"
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                  </div>
                </AnimatedWrapper>
              </div>
            )}
            <div className="col-8 col-md-6 px-2 px-lg-3">
              <div className="mb-4">
                <AnimatedWrapper>
                  <h1 className="text-align-center animated-fade-slow animated-fade-start transition-delay-small white-space-no-wrap">
                    GAMES
                  </h1>
                </AnimatedWrapper>
              </div>
              <div className="mb-5">
                <AnimatedWrapper>
                  <p className="text-align-center animated-fade-slow animated-fade-start transition-delay-medium">
                    Join thousands of players around the world competing for the top spot in Nifty League!{' '}
                  </p>
                </AnimatedWrapper>
              </div>
            </div>
          </div>

          {NIFTY_GAMES.map(({ name, description, video, tag, action }, index) => (
            <div className={cn(styles.section, 'd-flex flex-column-reverse flex-md-row position-relative')} key={name}>
              <div className={cn(styles.block, 'col-12 col-md-7 pe-md-5')}>
                <div className="d-flex flex-row align-items-center justify-content-between mb-3">
                  <AnimatedWrapper>
                    <h4 className="my-0 animated-header-text animated-header-text-start transition-delay-small">
                      {name}
                    </h4>
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
                <div className="d-flex justify-content-center justify-content-md-start mt-4">
                  {action.isComingSoon ? (
                    <AnimatedWrapper>
                      <div className="animated-fade-slow animated-fade-start transition-delay-medium">
                        <button className="btn theme-btn-transparent disabled px-3">COMING SOON</button>
                      </div>
                    </AnimatedWrapper>
                  ) : null}
                  {action.link ? (
                    <AnimatedWrapper>
                      <a href={action.link} target="_blank" rel="noreferrer">
                        <button className="btn theme-btn-primary px-3 animated-fade-slow animated-fade-start transition-delay-medium">
                          {action.title}
                        </button>
                      </a>
                    </AnimatedWrapper>
                  ) : null}
                  {action.secondaryLink ? (
                    <AnimatedWrapper>
                      <Link href={action.secondaryLink}>
                        <button className="btn theme-btn-primary mx-3 animated-fade-slow animated-fade-start transition-delay-medium">
                          {action.secondaryTitle}
                        </button>
                      </Link>
                    </AnimatedWrapper>
                  ) : null}
                </div>
              </div>
              <div className="col-12 col-md-5">
                <AnimatedWrapper>
                  <div className="position-relative text-align-right animated-fade-slow animated-fade-start transition-delay-medium mb-4">
                    {video.includes('youtube') ? (
                      <iframe
                        src={video}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={name}
                        className={styles.video}
                      />
                    ) : (
                      <video
                        id="console-video"
                        width="100%"
                        height="100%"
                        muted
                        autoPlay
                        loop
                        playsInline
                        data-keepplaying
                        className={styles.video}
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    )}
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
