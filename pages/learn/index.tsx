import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import cn from 'classnames';
import AnimatedWrapper from '@components/AnimatedWrapper';
import Layout from '@components/layout';
import LearnCards from '@components/LearnCards';
import styles from './index.module.scss';

const Learn: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');
  return (
    <Layout classes={{ root: 'learn-pg' }}>
      <Head>
        <title>Learn About Our Compete &amp; Earn Ecosystem | Nifty League</title>
        <meta name="description" content="Learn how to join and play games at Nifty League" />
      </Head>

      <div className={cn(styles.container, 'mx-auto px-3')}>
        <div className={cn(styles.gradient1, 'radial-gradient-piece')} />
        <div className="position-relative">
          <AnimatedWrapper>
            <h1 className="text-center animated-header-text animated-header-text-start transition-delay-small">
              LEARN
            </h1>
          </AnimatedWrapper>
          <div className="mt-3">
            <AnimatedWrapper>
              <p className="text-center animated-header-text animated-header-text-start transition-delay-medium">
                Learn how to navigate the NiftyLeague Platform
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
                collapseId="faq-collapse1"
                headerTitle="What is Nifty League?"
                className="animated-fade-quick animated-fade-start transition-delay-medium"
              >
                Nifty League is leading competitive gaming in the metaverse - moving away from play-to-earn into a new
                era of play-and-earn by offering a fun and engaging gaming ecosystem. The Niftyverse is centered around
                nostalgia where builders, players, and owners spend time connecting, gaming, and earning in Web3. Learn
                more{' '}
                <Link href="/docs/overview/intro" passHref>
                  <a target="_blank" rel="noreferrer">
                    here
                  </a>
                </Link>
                .
              </MDBAccordionItem>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <MDBAccordionItem
                collapseId="faq-collapse2"
                headerTitle="What is NFTL and how do I earn it by playing Nifty League
                  games?"
                className="animated-fade-quick animated-fade-start transition-delay-medium"
              >
                NFTL is our platform-wide governance token, which is currently available to trade and stake on
                SushiSwap.
                <br />
                <br />
                Players earn NFTL by landing hits and winning matches in our game Nifty Smashers. The more you play and
                improve your skills the better your chances of earning NFTL tokens through gameplay! NFTL can be used to
                purchase in-game items and bonuses, trade with other players, or &apos;cash out&apos; of the ecosystem
                for other cryptocurrencies.
                <br />
                <br />
                In the future, NFTL will serve to give users voting rights on upcoming games and tournaments, and for
                platform-wide expenses. For now, this only includes naming characters, but will soon be expanded to be
                used for purchasing additional in-game items and collectibles.
                <br />
                <br />
                Learn more{' '}
                <Link href="/docs/overview/nftl/overview" passHref>
                  <a target="_blank" rel="noreferrer">
                    here
                  </a>
                </Link>
                .
              </MDBAccordionItem>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <MDBAccordionItem
                collapseId="faq-collapse3"
                headerTitle="What is Nifty Smashers?"
                className="animated-fade-quick animated-fade-start transition-delay-medium"
              >
                Nifty Smashers is the first title offered by Nifty League based off of the popular game Super Smash
                Bros.
                <br />
                <br />
                Battle it out amongst the community and get in as many bat bonks on your friends as you can! Nifty
                Smashers takes inspiration from the classic Super Smash Bros game where the objective is to knock your
                opponents off the map to score points.
              </MDBAccordionItem>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <MDBAccordionItem
                collapseId="faq-collapse4"
                headerTitle="Does it cost money to play your games?"
                className="animated-fade-quick animated-fade-start transition-delay-medium"
              >
                At the moment you will either need to own or rent a DEGEN to play any games on our platform. A
                free-2-play version will be coming soon enabling players around the world to hop in our game servers and
                earn a small amount of NFTL for playing.
              </MDBAccordionItem>
            </AnimatedWrapper>
          </MDBAccordion>
          <div className="d-flex justify-content-center my-3 my-md-4">
            <AnimatedWrapper>
              <Link href="/docs/faq/general">
                <a target="_blank" rel="noreferrer">
                  <button className="btn theme-btn-primary theme-learn-btn animated-fade-slow animated-fade-start transition-delay-medium">
                    More FAQ
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
                  layout="responsive"
                  objectFit="cover"
                  src="/img/footer-img.png"
                  width={1440}
                  priority
                />
              ) : (
                <Image
                  alt="DGEN Network background mobile"
                  className="pixelated"
                  height={500}
                  layout="responsive"
                  objectFit="cover"
                  src="/img/footer-img1.png"
                  width={375}
                  priority
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

export default Learn;
