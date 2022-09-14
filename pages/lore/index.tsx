import { memo } from 'react';
import cn from 'classnames';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@components/layout';
import AnimatedWrapper from '@components/AnimatedWrapper';
import styles from './index.module.scss';

const Lore: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Nifty League | Lore</title>
        <meta name="description" content="" />
      </Head>
      <div className={cn(styles.container, 'overview mx-auto px-3')}>
        <div className={styles.title}>
          <AnimatedWrapper>
            <h1 className="text-align-center animated-fade-slow animated-fade-start transition-delay-small">LORE</h1>
          </AnimatedWrapper>
        </div>
        <div className={styles.content}>
          <div className={styles.background}>
            <AnimatedWrapper>
              <div className="position-relative animated-fade-slow animated-fade-start transition-delay-small">
                <Image src="/img/lore/background.png" alt="Lore" layout="responsive" width={662} height={638} />
              </div>
            </AnimatedWrapper>
          </div>
          <div className={styles.inner}>
            <AnimatedWrapper immediate>
              <p className="animated-fade-slow animated-fade-start transition-delay-small">
                Satoshi Nakamoto lived in Japan as an inventor. After he created Bitcoin he retired and lived a very
                private life out of the public eye.
              </p>
            </AnimatedWrapper>
            <br />
            <AnimatedWrapper immediate>
              <p className="animated-fade-slow animated-fade-start transition-delay-small">
                One day Satoshi met a being from a parallel dimension - it was a Frog. The Frog explained that The
                NiftyVerse was in trouble due to an inter-tribal war that had been raging for decades, and they needed
                help.
              </p>
            </AnimatedWrapper>
            <br />
            <AnimatedWrapper immediate>
              <p className="animated-fade-slow animated-fade-start transition-delay-small">
                Satoshi got into his Space Bubble and warp-jumped to The NiftyVerse.
              </p>
            </AnimatedWrapper>
            <br />
            <AnimatedWrapper immediate>
              <p className="animated-fade-slow animated-fade-start transition-delay-small">
                There, Satoshi learned that 6 tribes in The NiftyVerse had each got themselves in various states of
                trouble, and that they had all declared war amongst each other due to simple misunderstandings.
              </p>
            </AnimatedWrapper>
            <br />
            <AnimatedWrapper immediate>
              <p className="animated-fade-slow animated-fade-start transition-delay-small">
                Satoshi was impressed with the various (cute) tribes’ competitiveness and decided to form The Nifty
                League - a project whereby tribes from all over would be able to compete in fun games that were a safe
                way to exhibit competitiveness. He started up tournaments as a way to formalize the competitions, and
                set out providing rewards for those who contributed most towards the Nifty League’s success.
              </p>
            </AnimatedWrapper>
            <br />
            <AnimatedWrapper immediate>
              <p className="animated-fade-slow animated-fade-start transition-delay-small">
                Satoshi built The Citadel, a place of peace and prosperity for all Degens to strive towards living in,
                whereby a Key to The Citadel would grant only the most dedicated Degens access to, and these would be
                the Degens Satoshi considered assets to the Nifty League community, and to whom numerous benefits and
                freebies were awarded to.
              </p>
            </AnimatedWrapper>
            <br />
            <AnimatedWrapper immediate>
              <p className="animated-fade-slow animated-fade-start transition-delay-small">
                The tribes agreed to neutral territory where Satoshi’s Nifty League was.
              </p>
            </AnimatedWrapper>
            <br />
            <AnimatedWrapper immediate>
              <p className="animated-fade-slow animated-fade-start transition-delay-small">
                Satoshi built out fantastic districts for the Degens to live, work and play, and dubbed it ‘The
                NiftyVerse’.
              </p>
            </AnimatedWrapper>
            <br />
            <AnimatedWrapper immediate>
              <p className="animated-fade-slow animated-fade-start transition-delay-small">
                Furthermore, Satoshi invited tribes from other metaverses too to share in the fun in what he and his
                Degens were creating in The NiftyVerse, and also let them compete in Nifty League games as well as give
                them access to The NiftyVerse.
              </p>
            </AnimatedWrapper>
          </div>
        </div>
        <AnimatedWrapper>
          <a href="https://niftyleague.com/docs" target="_blank" rel="noreferrer">
            <button
              className={cn(
                styles.button,
                'btn theme-btn-transparent mx-auto my-5 px-3 animated-fade-slow animated-fade-start transition-delay-small',
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

export default memo(Lore);
