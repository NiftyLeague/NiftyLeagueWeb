import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import cn from 'classnames';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import Layout from '@/components/Layout';
import LearnCards from '@/components/LearnCards';
import ExternalIcon from '@/components/ExternalIcon';
import styles from './index.module.scss';

const Overview: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');
  return (
    <Layout classes={{ root: 'learn-pg' }}>
      <Head>
        <title>Nifty League | Overview</title>
        <meta property="og:title" content="Nifty League | Overview" />
        <meta name="description" content="Overview and FAQ for Nifty League" key="desc" />
        <meta property="og:description" content="Overview and FAQ for Nifty League" />
        <meta property="og:image" content="https://niftyleague.com/img/about/bg-DAO.png" />
      </Head>

      <div className={cn(styles.container, 'mx-auto px-3')}>
        <div className={cn(styles.gradient1, 'radial-gradient-piece')} />
        <div className="position-relative">
          <AnimatedWrapper>
            <h1 className="text-center animated-header-text animated-header-text-start transition-delay-small">
              OVERVIEW
            </h1>
          </AnimatedWrapper>
          <div className="mt-3">
            <AnimatedWrapper>
              <p className="text-center animated-header-text animated-header-text-start transition-delay-medium">
                Learn how to navigate the Nifty League Platform
              </p>
            </AnimatedWrapper>
          </div>
          <LearnCards />
          <div className={cn(styles.gradient2, 'radial-gradient-piece')} />
          <div className={cn(styles.gradient3, 'radial-gradient-piece')} />
        </div>

        <div className="pb-0 pb-md-5 pt-5">
          <div className="text-center mb-3 mb-md-5 position-relative">
            <AnimatedWrapper>
              <h2 className="animated-header-text animated-header-text-start transition-delay-small">
                Frequently Asked Questions
              </h2>
            </AnimatedWrapper>
            <div className={cn(styles.gradient4, 'radial-gradient-piece')} />
          </div>
          <MDBAccordion flush className="faq-accordion">
            <AnimatedWrapper>
              <MDBAccordionItem
                collapseId={1}
                headerTitle="What is Nifty League?"
                className="animated-fade-quick animated-fade-start transition-delay-medium"
              >
                Nifty League is a game studio at the cutting edge of Web3. Our mission is to inspire indie game
                developers to build a decentralized future with us by establishing a game studio focused on unparalleled
                quality and player experiences. Read our{' '}
                <Link href="/docs/overview/intro" passHref legacyBehavior>
                  <a target="_blank" rel="noreferrer">
                    docs
                  </a>
                </Link>{' '}
                to learn more.
              </MDBAccordionItem>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <MDBAccordionItem
                collapseId={2}
                headerTitle="What is the NiftyVerse"
                className="animated-fade-quick animated-fade-start transition-delay-medium"
              >
                The NiftyVerse is a digital world centered around nostalgia. It not only acts as a social hub for
                connecting with friends online, but is THE ultimate Nifty League game hub with fun missions and launch
                points into our other game titles. Land parcels will be available to build custom areas for holders, and
                players can show off their digital assets from Nifty League or other partner communities to stand out.{' '}
                <Link href="/niftyverse" passHref legacyBehavior>
                  Learn more
                </Link>
              </MDBAccordionItem>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <MDBAccordionItem
                collapseId={3}
                headerTitle="What is NFTL and what is it used for?"
                className="animated-fade-quick animated-fade-start transition-delay-medium"
              >
                NFTL is our platform-wide governance token and utility token. The token is distributed freely to DEGEN
                NFT holders and Nifty Smashers players through special events. The team has never, nor will ever, sell
                NFTL to the public. It is available for trading on decentralized exchanges such as Uniswap and
                SushiSwap.
                <br />
                <br />
                Utility includes, but is not limited to:
                <ol>
                  <li>Governance: DAO formation planned Q4 2023</li>
                  <li>NFT drops: Raffles (ongoing), NiftyVerse Land, special weapons/wearables, others TBA</li>
                  <li>Ecosystem currency: Compete &amp; Earn wagering, redeem in-game hard currencies (TBD)</li>
                  <li>Platform fees: rename DEGENs, rentals(deprecated), etc</li>
                </ol>
                Read our{' '}
                <Link href="/docs/overview/nftl/overview" passHref legacyBehavior>
                  <a target="_blank" rel="noreferrer">
                    docs
                  </a>
                </Link>{' '}
                to learn more.
                <br />
              </MDBAccordionItem>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <MDBAccordionItem
                collapseId={4}
                headerTitle="What is Nifty Smashers?"
                className="animated-fade-quick animated-fade-start transition-delay-medium"
              >
                <a href="https://niftysmashers.com" target="_blank" rel="noreferrer">
                  Nifty Smashers
                </a>{' '}
                is the first title offered by Nifty League based off of the popular game Super Smash Bros.
                <br />
                <br />
                Battle it out amongst the community and get in as many bat bonks on your friends as you can! Nifty
                Smashers takes inspiration from the classic Super Smash Bros game where the objective is to knock your
                opponents off the map to score points.
              </MDBAccordionItem>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <MDBAccordionItem
                collapseId={4}
                headerTitle="Does it cost money to play your games?"
                className="animated-fade-quick animated-fade-start transition-delay-medium"
              >
                Nope! Our games such as{' '}
                <a href="https://niftysmashers.com" target="_blank" rel="noreferrer">
                  Nifty Smashers
                </a>{' '}
                are free-to-play. If you own a DEGEN or hold a partner NFT from CyberKongz, Forgotten Runes, or Degods
                your avatars will be available once you create an account and connect your wallet.
              </MDBAccordionItem>
            </AnimatedWrapper>
          </MDBAccordion>
          <div className="d-flex justify-content-center my-3 my-md-4">
            <AnimatedWrapper>
              <Link href="/docs/faq/general" legacyBehavior>
                <a target="_blank" rel="noreferrer">
                  <button className="btn theme-btn-primary theme-learn-btn animated-fade-slow animated-fade-start transition-delay-medium">
                    More FAQ
                    <ExternalIcon />
                  </button>
                </a>
              </Link>
            </AnimatedWrapper>
          </div>
        </div>

        {false && (
          <div className="row m-0 p-0 position-relative stay-informed-section">
            <div className="p-0 w-100">
              {desktop ? (
                <Image
                  alt="DGEN Network background desktop"
                  className="pixelated"
                  height={813}
                  src="/img/bg/dgen-network.png"
                  width={1440}
                  priority
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <Image
                  alt="DGEN Network background mobile"
                  className="pixelated"
                  height={500}
                  src="/img/bg/dgen-network-mobile.png"
                  width={375}
                  priority
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              )}
            </div>
            <div className="position-absolute text-center d-flex align-items-center flex-column mt-5 pt-sm-5">
              <h2 className="mt-4">Stay in the loop</h2>
              <p className="my-3 text-m-center">
                Meet our community and stay up to date with our roadmap or team updates
              </p>
              <a href="https://discord.gg/niftyleague" target="_blank" rel="noreferrer">
                <button className="btn theme-btn-primary theme-learn-btn w-auto my-3">
                  <span className="me-2">join our Discord server</span>
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Overview;
