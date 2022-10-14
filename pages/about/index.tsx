import { memo } from 'react';
import cn from 'classnames';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '@components/layout';
import Carousel from '@components/carousel';
import { renderTeamCardItem } from '@components/carousel/TeamCardItem';
import { TEAM_MEMBERS, TEAM_OFFICERS } from '@data/constants';
import TeamDesktop from '@components/TeamDesktop';
import AnimatedWrapper from '@components/AnimatedWrapper';
import styles from './index.module.scss';

const About: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');
  return (
    <Layout classes={{ root: 'about-pg' }}>
      <Head>
        <title>Nifty League | About</title>
        <meta name="description" content="About Nifty League and our team" />
      </Head>

      <div className={cn(styles.container, 'mx-auto px-3')}>
        <div className="about-intro mt-5 pt-5 position-relative">
          <div className="row m-0 p-0 pt-sm-5 position-relative d-flex flex-column align-items-center">
            <div className="mt-3 mb-0 mb-md-3">
              <AnimatedWrapper>
                <p className="text-center animated-header-text animated-header-text-start transition-delay-small">
                  Welcome to
                </p>
              </AnimatedWrapper>
            </div>
            <AnimatedWrapper>
              <h1 className="text-center animated-header-text animated-header-text-start transition-delay-small">
                NIFTY LEAGUE
              </h1>
            </AnimatedWrapper>
            <div className={cn(styles.body, 'mt-5 mt-sm-3')}>
              <AnimatedWrapper>
                <p className="text-center p1 animated-header-text animated-header-text-start transition-delay-medium">
                  Nifty League is a game studio at the cutting edge of Web3. Our mission is to create a leading Web3
                  gaming platform through community governance and development while always putting quality before hype.
                </p>
                <br />
              </AnimatedWrapper>
              <AnimatedWrapper>
                <p className="text-center animated-header-text animated-header-text-start transition-delay-medium">
                  Advance your gaming skills and join our community to earn daily NFTL rewards!
                </p>
              </AnimatedWrapper>
            </div>

            <div className="display-buttons mt-3 mt-md-4 d-flex justify-content-center desktop">
              <AnimatedWrapper>
                <Link href="/docs" passHref>
                  <a target="_blank" rel="noreferrer">
                    <button className="btn theme-btn-primary mx-sm-2 animated-fade-slow animated-fade-start transition-delay-medium">
                      Read our docs
                    </button>
                  </a>
                </Link>
              </AnimatedWrapper>
              <AnimatedWrapper>
                <Link href="/roadmap" passHref>
                  <button className="btn theme-btn-transparent mx-sm-2 mx-0 animated-fade-slow animated-fade-start transition-delay-medium">
                    Check our roadmap
                  </button>
                </Link>
              </AnimatedWrapper>
            </div>
            <div className="display-buttons my-3 d-flex mobile">
              <Link href="/docs" passHref>
                <a target="_blank" rel="noreferrer">
                  <button className="btn theme-btn-primary mx-sm-2">Read our docs</button>
                </a>
              </Link>
            </div>
          </div>
          <div className={cn(styles.gradient1, 'radial-gradient-piece')} />
        </div>

        <div
          className={cn(
            styles.section,
            'd-flex mx-auto flex-column-reverse flex-md-row align-items-center position-relative',
          )}
        >
          <div className="col-12 col-md-7 pe-md-5">
            <AnimatedWrapper>
              <h3 className="my-0 animated-header-text animated-header-text-start transition-delay-small">
                NIFTY SMASHERS
              </h3>
            </AnimatedWrapper>
            <div className="my-3 my-md-4">
              <AnimatedWrapper>
                <p className="animated-header-text animated-header-text-start transition-delay-medium">
                  First NFT Brawler game on the Ethereum blockchain featuring multiplayer modes, training modes and even
                  a jail where you get to boink the head of criminals in the ecosystem!
                </p>
              </AnimatedWrapper>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start">
              <AnimatedWrapper>
                <a href="https://app.niftyleague.com/games/smashers" target="_blank" rel="noreferrer">
                  <button className="btn theme-btn-primary px-3 animated-fade-slow animated-fade-start transition-delay-medium">
                    PLAY SMASHERS
                  </button>
                </a>
              </AnimatedWrapper>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <AnimatedWrapper>
              <div className="position-relative text-align-right animated-fade-slow animated-fade-start transition-delay-medium mb-3 mb-md-0">
                <iframe
                  src="https://www.youtube.com/embed/ylJzfLcWChc"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="NIFTY SMASHERS"
                  className={styles.video}
                />
              </div>
            </AnimatedWrapper>
          </div>
          <div className={cn(styles.gradient2, 'radial-gradient-piece')} />
          <div className={cn(styles.gradient3, 'radial-gradient-piece')} />
        </div>

        <div
          className={cn(styles.section, 'd-flex mx-auto flex-column flex-md-row align-items-center position-relative')}
        >
          <div className="col-12 col-md-5">
            <AnimatedWrapper>
              <div className="position-relative animated-fade-slow animated-fade-start transition-delay-medium mb-3 mb-md-0 pixelated">
                <Image
                  src="/img/about/nifty-degans.svg"
                  layout="responsive"
                  width={396}
                  height={465}
                  alt="Andy and Spike"
                  priority
                />
              </div>
            </AnimatedWrapper>
          </div>
          <div className="col-12 col-md-7 ps-md-5">
            <AnimatedWrapper>
              <h3 className="my-0 animated-header-text animated-header-text-start transition-delay-small text-align-right">
                NIFTY DEGENS
              </h3>
            </AnimatedWrapper>
            <div className="my-3 my-md-4">
              <AnimatedWrapper>
                <p className="animated-header-text animated-header-text-start transition-delay-medium text-align-right">
                  The max supply of genesis DEGENs is 10k, of which, 9.9k were minted on Mainnet in Fall 2021. All of
                  the DEGENs were hand-created by members of our community who minted, based on available traits and
                  accessories. The final 100 DEGENs will be given to elite players in the Nifty League community.
                </p>
              </AnimatedWrapper>
            </div>
            <div className="d-flex justify-content-center justify-content-md-end">
              <AnimatedWrapper>
                <a href="/docs/overview/degens/About" target="_blank" rel="noreferrer">
                  <button className="btn theme-btn-primary px-3 animated-fade-slow animated-fade-start transition-delay-medium">
                    LEARN MORE ABOUT DEGEN NFTS
                  </button>
                </a>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(styles.tokenAndPlay, styles.section)}>
        <div className={cn(styles.container, 'mx-auto px-3')}>
          <div className="d-flex mx-auto flex-column flex-md-row justify-content-between position-relative">
            <div className="col-md-5 mb-3">
              <AnimatedWrapper>
                <h3 className="animated-header-text animated-header-text-start transition-delay-small">NFTL TOKEN</h3>
              </AnimatedWrapper>
              <div className="my-3 my-md-4">
                <AnimatedWrapper>
                  <p className="animated-header-text animated-header-text-start transition-delay-medium">
                    The sale of our characters kicked off the initial distribution of our ecosystem&apos;s native
                    utility and governance token, NFTL. In the future, NFTL will serve to give users voting rights on
                    upcoming games and tournaments, and for platform-wide expenses. For now, this only includes naming
                    characters, but will soon be expanded to be used for purchasing additional in-game items and
                    collectibles. NFTL is currently available to trade and stake on SushiSwap.
                  </p>
                </AnimatedWrapper>
              </div>
              <div className="d-flex justify-content-center justify-content-md-start">
                <AnimatedWrapper>
                  <Link href="/docs/overview/nftl/overview" passHref>
                    <a target="_blank" rel="noreferrer">
                      <button
                        className={cn(
                          styles.button,
                          'btn theme-btn-primary animated-fade-slow animated-fade-start transition-delay-medium',
                        )}
                      >
                        LEARN MORE
                      </button>
                    </a>
                  </Link>
                </AnimatedWrapper>
              </div>
            </div>
            <div className="col-md-5 mb-3">
              <AnimatedWrapper>
                <h3 className="animated-header-text animated-header-text-start transition-delay-small">
                  PLAY-AND-EARN
                </h3>
              </AnimatedWrapper>
              <div className="my-3 my-md-4">
                <AnimatedWrapper>
                  <p className="animated-header-text animated-header-text-start transition-delay-medium">
                    Players earn NFTL by winning matches or tournaments in our games such as Nifty Smashers. The more
                    you play and improve your skills the better your chances of earning NFTL tokens through gameplay!
                    NFTL can be used to purchase in-game items and bonuses, trade with other players, or &apos;cash
                    out&apos; of the ecosystem for other cryptocurrencies. Your earnings are determined by a number of
                    multipliers such as those from special backgrounds or items.
                  </p>
                </AnimatedWrapper>
              </div>
              <div className="d-flex justify-content-center justify-content-md-start">
                <AnimatedWrapper>
                  <Link href="/docs/overview/p2e/daily-rewards" passHref>
                    <a target="_blank" rel="noreferrer">
                      <button
                        className={cn(
                          styles.button,
                          'btn theme-btn-primary animated-fade-slow animated-fade-start transition-delay-medium',
                        )}
                      >
                        LEARN MORE
                      </button>
                    </a>
                  </Link>
                </AnimatedWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(styles.container, 'mx-auto px-3')}>
        <div className={cn(styles.section, 'text-align-center')}>
          <AnimatedWrapper>
            <h3 className="animated-header-text animated-header-text-start transition-delay-small">NIFTY DAO</h3>
          </AnimatedWrapper>
          <div className={cn(styles.body, 'mx-auto mt-4')}>
            <AnimatedWrapper>
              <p className="animated-header-text animated-header-text-start transition-delay-medium">
                We will gradually be transferring ownership of the Nifty League to our DAO in order to decentralize the
                platform and encourage devs to help us build! Our vision is to power rapid growth and development
                through community contributions enabling us to build a gaming platform like no other.{' '}
                {desktop && (
                  <span>
                    Simply put, DAOs are the future. We see only one route to becoming the world&apos;s leading GameFi
                    platform and that&apos;s by building together. 💜
                  </span>
                )}
              </p>
            </AnimatedWrapper>
          </div>
        </div>
        <div className={cn(styles.section, 'position-relative pb-5')}>
          <AnimatedWrapper>
            <h3 className="text-align-center animated-header-text animated-header-text-start transition-delay-small">
              MEET THE NIFTY TEAM
            </h3>
          </AnimatedWrapper>
          <TeamDesktop />
          <section
            className="teams-slider slider px-0 mobile-block "
            style={{
              alignItems: 'center',
              maxWidth: '100%',
              textAlign: 'center',
            }}
          >
            <Carousel isMobileViewOnly hideGradient tabletItems={2}>
              {[...TEAM_OFFICERS, ...TEAM_MEMBERS].map(renderTeamCardItem)}
            </Carousel>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default memo(About);
