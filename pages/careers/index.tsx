import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/legacy/image';
import cn from 'classnames';

import styles from './index.module.scss';
import JobCard from '../../components/careers/JobCard';
import Layout from '../../components/layout';
import { JOBS } from '../../data/constants';
import AnimatedWrapper from '@components/AnimatedWrapper';
import { useMediaQuery } from '@mui/material';

const Careers: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');
  return (
    <Layout classes={{ root: 'com-pg' }}>
      <Head>
        <title>Work With Us | Nifty League</title>
        <meta name="description" content="Join us and bring competitive gaming to Web3." />
      </Head>

      <div className={cn(styles.container, 'mx-auto')}>
        <div className={cn(styles.topSection, 'd-flex align-items-center justify-content-center flex-wrap px-3')}>
          <div className={`${desktop ? 'col-6 pe-5' : 'full-width mb-5'}`}>
            <AnimatedWrapper>
              <div
                className={cn(
                  styles.imageContainer,
                  'position-relative flex-grow-1 animated-fade-start animated-fade transition-delay-small',
                )}
              >
                <Image
                  src="/img/careers/careers_v02_2x.png"
                  alt="Satoshi moon"
                  width={648}
                  height={406}
                  layout="responsive"
                  priority
                />
              </div>
            </AnimatedWrapper>
          </div>
          <div className={`${desktop ? 'col-6' : 'full-width'}`}>
            <div className={styles.description}>
              <div className="mb-3">
                <AnimatedWrapper>
                  <h1 className="animated-header-text animated-header-text-start">Work with Nifty League</h1>
                </AnimatedWrapper>
              </div>
              <AnimatedWrapper>
                <p className="animated-header-text animated-header-text-start transition-delay-small">
                  Nifty League is leading competitive gaming in the metaverse - moving away from play-to-earn into a new
                  era of play-and-earn by offering a fun and engaging gaming ecosystem. We are backed by top VCs
                  including RSE Ventures, Lerer Hippeau, Spartan Group, and Gary Vaynerchuk, and are looking to bulk out
                  our engineering team with world-class Unity game developers. As a startup, we are lean, have low egos,
                  work hard and love what we do. You will have a large amount of ownership and work directly with the
                  co-founders and community. If this sounds exciting to you, keep reading!
                </p>
              </AnimatedWrapper>
            </div>
          </div>
        </div>

        <div className="py-5">
          {JOBS.map(details => (
            <JobCard key={details.id} details={details} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
