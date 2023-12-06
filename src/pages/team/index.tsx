import { memo } from 'react';
import cn from 'classnames';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '@/components/Layout';
import Carousel from '@/components/Carousel';
import { renderTeamCardItem } from '@/components/Carousel/TeamCardItem';
import TeamDesktop from '@/components/TeamDesktop';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { CORE_TEAM, DEGEN_DELEGATES } from '@/constants/team';
import styles from './index.module.scss';

const Team: NextPage = () => {
  return (
    <Layout classes={{ root: 'team-pg' }}>
      <Head>
        <title>Nifty League | Team</title>
        <meta property="og:title" content="Nifty League | Team" />
        <meta name="description" content="Build a decentralized future with the Nifty DAO" key="desc" />
        <meta property="og:description" content="Build a decentralized future with the Nifty DAO" />
        <meta property="og:image" content="https://niftyleague.com/img/niftyverse/mansion_livingroom_int_03.png" />
      </Head>

      <div className={cn(styles.container, 'mx-auto px-3')}>
        <div className="about-intro mt-5 pt-5 position-relative">
          <div className="row m-0 p-0 pt-sm-5 position-relative d-flex flex-column align-items-center">
            <AnimatedWrapper>
              <h1 className="text-center animated-header-text animated-header-text-start transition-delay-small">
                NIFTY DAO
              </h1>
            </AnimatedWrapper>
            <div className={cn(styles.body, 'mt-5 mt-sm-3')}>
              <AnimatedWrapper>
                <p className="text-center p1 animated-header-text animated-header-text-start transition-delay-medium">
                  Nifty League is a game studio at the cutting edge of Web3. Our mission is to inspire indie game
                  developers to build a decentralized future with us by establishing a game studio focused on
                  unparalleled quality and player experiences.
                </p>
                <br />
              </AnimatedWrapper>
              <AnimatedWrapper>
                <p className="text-center p1 animated-header-text animated-header-text-start transition-delay-medium">
                  We will gradually transfer ownership of Nifty League to our DAO in order to decentralize the platform
                  and encourage others to build with us! Our vision is to power rapid growth and development through
                  community contributions enabling us to build a gaming platform like no other. Simply put, DAOs are the
                  future. We see only one route to becoming the world&apos;s leading gaming platform and that&apos;s by
                  building together. 💜
                </p>
              </AnimatedWrapper>
            </div>

            <div className="display-buttons mt-3 mt-md-4 d-flex justify-content-center desktop">
              <AnimatedWrapper>
                <Link href="/careers" passHref legacyBehavior>
                  <button className="btn theme-btn-primary mx-sm-2 animated-fade-slow animated-fade-start transition-delay-medium">
                    Join Us
                  </button>
                </Link>
              </AnimatedWrapper>
              <AnimatedWrapper>
                <Link href="/roadmap" passHref legacyBehavior>
                  <button className="btn theme-btn-transparent mx-sm-2 mx-0 animated-fade-slow animated-fade-start transition-delay-medium">
                    Check our roadmap
                  </button>
                </Link>
              </AnimatedWrapper>
            </div>
          </div>
          <div className={cn(styles.gradient1, 'radial-gradient-piece')} />
        </div>
      </div>

      <div className={cn(styles.container, 'mx-auto px-3')}>
        <div className={cn(styles.section, 'position-relative pb-5')}>
          <AnimatedWrapper>
            <h4 className="text-align-center animated-header-text animated-header-text-start transition-delay-small">
              MEET THE DEGENS WHO MAKE NIFTY LEAGUE POSSIBLE
            </h4>
          </AnimatedWrapper>
          <TeamDesktop />
          <section
            className="teams-slider slider px-0 mobile-block"
            style={{
              alignItems: 'center',
              maxWidth: '100%',
              textAlign: 'center',
              minHeight: 300,
            }}
          >
            <Carousel isMobileViewOnly hideGradient tabletItems={2}>
              {[...CORE_TEAM, ...DEGEN_DELEGATES].map(renderTeamCardItem)}
            </Carousel>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default memo(Team);
