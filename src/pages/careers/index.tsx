import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import cn from 'classnames';

import { Container, useMediaQuery } from '@mui/material';
import JobCard from '@/components/Careers/JobCard';
import Layout from '@/components/Layout';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { JOBS } from '@/constants/careers';
import styles from './index.module.scss';

const Careers: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');
  return (
    <Layout classes={{ root: 'com-pg' }}>
      <Head>
        <title>Nifty League | Careers</title>
        <meta name="description" content="Join us and change gaming forever." />
      </Head>

      <Container>
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
          <div className={`${desktop ? 'col-6' : 'full-width'}`}>
            <div className={styles.description}>
              <div className="mb-3">
                <AnimatedWrapper>
                  <h3 className="animated-header-text animated-header-text-start" style={{ whiteSpace: 'nowrap' }}>
                    JOIN NIFTY LEAGUE
                  </h3>
                </AnimatedWrapper>
              </div>
              <AnimatedWrapper>
                <p className="animated-header-text animated-header-text-start transition-delay-small">
                  Nifty League&apos;s mission is to establish a game studio of unparalleled quality and player
                  experience to inspire other indie game developers to build a decentralized future with us. We are
                  backed by top VCs including RSE Ventures, Lerer Hippeau, Spartan Group, and Gary Vaynerchuk, and are
                  looking to bulk out our engineering team with world-class Unity game developers. As a startup, we are
                  lean, have low egos, work hard and love what we do. You will have a large amount of ownership and work
                  directly with the co-founders and community. If this sounds exciting to you, keep reading!
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
      </Container>
    </Layout>
  );
};

export default Careers;
