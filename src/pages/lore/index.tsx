import { memo } from 'react';
import cn from 'classnames';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ExternalIcon from '@/components/ExternalIcon';
import styles from './index.module.scss';

const Lore: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Nifty League | Lore</title>
        <meta name="description" content="" />
      </Head>
      <div className={cn(styles.container, 'overview mx-auto px-3')}>
        <div>
          <AnimatedWrapper>
            <h1 className="text-align-center animated-fade-slow animated-fade-start transition-delay-small mb-3">
              LORE
            </h1>
          </AnimatedWrapper>
        </div>
        <div className={styles.content}>
          <div className={styles.background}>
            <div className={styles.inner}>
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  Satoshi Nakamoto is a quiet genius. He lived in Japan as an inventor. After he created Bitcoin he
                  retired and lived a private life.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  One day Satoshi met a panicked Frog from a parallel dimension. The Frog explained that his NiftyGalaxy
                  was in trouble due to an inter-tribal war that had been raging for decades, and they needed Satoshi’s
                  help immediately.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  Satoshi got into his Space Bubble and warp-jumped to The NiftyGalaxy.{' '}
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  There, Satoshi learned that 6 tribes (Frogs, Cats, Doges, Humans, Aliens and Apes) in The NiftyGalaxy
                  had all declared war amongst each other due to simple misunderstandings.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  Satoshi was impressed with the various tribes’ competitiveness and decided to form The Nifty League -
                  a project whereby tribes from all over The NiftyGalaxy would be able to compete in fun, friendly and
                  safe competitive games. He formalized anyone’s entrance into the Nifty League by minting them with
                  unique attributes in his novel Mint-O-Matic machine, and named those enrollees ‘DEGENs’. Satoshi
                  started up tournaments as a way to formalize the competitions, and provided rewards to those who
                  contributed towards the Nifty League’s success.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  Satoshi built The Citadel on Planet Degen; an oasis of peace and prosperity. Any Degen with a special
                  Citadel Key would be granted access to this idyllic area, and would be the Degens Satoshi considered
                  assets to the Nifty League community, and to whom numerous benefits and freebies would be awarded to.
                  Satoshi created Comics and gave them out free to Degens, letting them burn them in Mt. Gawx in
                  exchange for unique items.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  The tribes made a pact that Satoshi’s Nifty League was considered neutral and peaceful territory.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  With the help of the Degens, Satoshi built out fantastic districts for the Degens to live, work and
                  play, and dubbed it ‘The NiftyVerse’.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  Satoshi also invited tribes from other universes such as The Kongz and Forgotten Runes Wizards to
                  share in the fun in what he and his Degens were creating in The NiftyVerse, and also allowed them to
                  compete in Nifty League games.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  Satoshi also discovered an ancient 7th tribe - the Hydras. They had lived on Planet Degen long before
                  Satoshi arrived. He figured out a way to bring them back from extinction, and they joined the ranks of
                  Degens. Satoshi is still learning a lot from them, including more about the planet’s history, their
                  ways of life, and their history with RugMan.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  As the Degens explored their new Planet Degen, they discovered the evil Pengweevil who rules the
                  Northern Ice Cap, as well as learned about a constant annoyance and arguably the most powerfully evil
                  being in the NiftyGalaxy - RugMan, who lives with his Grunts in the fiery Mt. Gawx volcano.
                </p>
              </AnimatedWrapper>
            </div>
          </div>
          <div className={styles.satoshiContainer}>
            <AnimatedWrapper>
              <div
                className={cn(
                  styles.satoshi,
                  'position-relative flex-grow-1 animated-fade-slow animated-fade-start transition-delay-large',
                )}
              >
                <Image alt="Satoshi" layout="fill" objectFit="cover" src="/img/home/satoshi.png" />
              </div>
            </AnimatedWrapper>
          </div>
          <div className={styles.degensContainer}>
            <AnimatedWrapper>
              <div
                className={cn(
                  styles.degens,
                  'position-relative flex-grow-1 animated-fade-slow animated-fade-start transition-delay-large',
                )}
              >
                <Image alt="DEGENs" layout="fill" objectFit="cover" src="/img/home/community-characters.png" />
              </div>
            </AnimatedWrapper>
          </div>
          <div className={cn(styles.gradient1, 'radial-gradient-piece')} />
          <div className={cn(styles.gradient2, 'radial-gradient-piece')} />
          <div className={cn(styles.gradient3, 'radial-gradient-piece')} />
        </div>
        <div className="d-flex justify-content-center mb-5">
          <AnimatedWrapper>
            <a href="https://niftyleague.com/docs/overview/intro" target="_blank" rel="noreferrer">
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
    </Layout>
  );
};

export default memo(Lore);
