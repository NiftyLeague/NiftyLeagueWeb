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
        <meta property="og:title" content="Nifty League | Lore" />
        <meta name="description" content="Discover the origin story behind Nifty League" key="desc" />
        <meta property="og:description" content="Discover the origin story behind Nifty League" />
        <meta property="og:image" content="https://niftyleague.com/img/bg/dgen-network.png" />
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
                  Satoshi Nakamoto was a quiet genius. Having lived in Japan as an inventor, one day his prodigious
                  tinkering led to the creation of a little project known as Bitcoin. After changing the world as we
                  know it and paving the way for endless successors, imitators, and meme coins, he retired to a life of
                  equal parts solitude and secrecy.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  One day Satoshi met a panicked Frog from a parallel dimension (as you do). The Frog explained that he
                  hailed from the NiftyGalaxy, an alternate universe that was in deep trouble. With not much time left
                  to save his world, the Frog sought out the greatest minds across the multiverse to aid him in saving
                  his world, and that journey had brought him to Satoshi.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  Satoshi got into his Space Bubble and warp-jumped to the NiftyGalaxy. Once there he learned that 6
                  tribes that inhabited the NiftyGalaxy (Frogs, Cats, Doges, Humans, Aliens and Apes) had all declared
                  war amongst each other due to simple misunderstandings.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  The Cat tribe couldn’t stand how the Doge tribe rolled around so carefree, such blissful ignorance,
                  wow. The calculated Aliens were sickened by the Apes and their constant fomo-ing into everything that
                  moved. And the Frogs despised the Human tribe and their penchant for walking around without clothes.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  Satoshi however was impressed with the various tribes’ competitiveness, and decided to form The Nifty
                  League - a project whereby tribes from all over The NiftyGalaxy would be able to channel their
                  grievances into fun, friendly and safe competitive games. He formalized anyone’s entrance into the
                  Nifty League by minting them with unique attributes in his novel Mint-O-Matic machine, and named those
                  enrollees ‘DEGENs’. Satoshi started up tournaments as a way to formalize the competitions, and
                  provided rewards to those who contributed towards the Nifty League’s success.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  This culminated in Satoshi building The Citadel; an oasis of peace, prosperity, and the occasional
                  bonk on the head with a baseball bat. Any Degen with a special Citadel Key would be granted access to
                  this idyllic area, and would be the Degens Satoshi considered assets to the Nifty League community,
                  and the NiftyGalaxy as a whole.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  The tribes made a pact that Satoshi’s Nifty League was considered neutral and peaceful territory, and
                  with the help of the Degens, Satoshi brought about peace in his newly dubbed ‘NiftyVerse’.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  Inspired by the world growing before him, Satoshi reached out to tribes from other universes such as
                  The Kongz and Forgotten Runes Wizards to share in the fun of what he and his faithful Degens were
                  creating in The NiftyVerse.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  Satoshi also discovered an ancient 7th tribe - the Hydras. A primordial group long forgotten to Planet
                  Degen, they existed long before Satoshi or any of the other tribes had ever lived. He figured out a
                  way to bring them back from extinction, as they joined the ranks of Nifty League after some bargaining
                  to get the coolest outfits.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  But Satoshi’s astronomic rise as the savior of the Niftyverse perhaps went a step too far, as
                  Satoshi’s tinkering with this parallel world has seen an ancient evil once feared in the Niftyverse
                  awaken.
                </p>
              </AnimatedWrapper>
              <br />
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  Known as RugMan, he was once the ruthless ruler of the planet and responsible for decimating the
                  Hydras, and finds himself resurrected once more after a failed experiment by Satoshi. Along with his
                  grunts in the fiery Mt. Gawx, and his second in command Pengweevil who rules the Northern Ice Cap,
                  RugMan seeks to reclaim the planet he once ruled over with an iron fist and diamond hands.
                </p>
              </AnimatedWrapper>
              <AnimatedWrapper immediate>
                <p className="animated-fade-slow animated-fade-start transition-delay-small">
                  Feeling responsible for bringing his now peaceful world into danger once more, Satoshi has vowed to
                  put an end to RugMan once and for all, and with his faithful army of Degens under his control, the
                  battle for the NiftyVerse has just begun.{' '}
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
                <Image alt="Satoshi" src="/img/home/satoshi.png" fill sizes="100vw" style={{ objectFit: 'cover' }} />
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
                <Image
                  alt="DEGENs"
                  src="/img/home/community-characters.png"
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                />
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
