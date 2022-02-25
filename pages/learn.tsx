import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import LearnCards from '../components/LearnCards';

const Learn: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');
  return (
    <Layout classes={{ root: 'learn-pg' }}>
      <Head>
        <title>Nifty League | Learn</title>
        <meta name="description" content="Learn how to join and play games at Nifty League" />
      </Head>

      <div className="container pt-5 pt-md-5 d-flex learn-intro align-items-center">
        <LearnCards />
        <span className="earth-grad">
          <Image
            src="/img/community/earth-grad.svg"
            alt="Purple eclipse"
            layout="responsive"
            width={704}
            height={704}
          />
        </span>
      </div>

      <div className="container pb-3 pb-sm-5">
        <div className="text-center">
          <h2 className="my-3">Frequently Asked Questions</h2>
        </div>
        <MDBAccordion flush className="faq-accordion">
          <MDBAccordionItem collapseId="faq-collapse1" headerTitle="What is Nifty League?">
            Nifty League is leading competitive gaming in the metaverse - moving away from play-to-earn into a new era
            of play-and-earn by offering a fun and engaging gaming ecosystem. The Niftyverse is centered around
            nostalgia where builders, players, and owners spend time connecting, gaming, and earning in Web3. Learn more{' '}
            <a target="_blank" rel="noreferrer" href="https://docs.niftyleague.com/overview/intro">
              here
            </a>
            .
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId="faq-collapse2"
            headerTitle="What is NFTL and how do I earn it by playing Nifty League
                  games?"
          >
            NFTL is our platform-wide governance token, which is currently available to trade and stake on SushiSwap.
            <br />
            <br />
            Players earn NFTL by landing hits and winning matches in our game Nifty Smashers. The more you play and
            improve your skills the better your chances of earning NFTL tokens through gameplay! NFTL can be used to
            purchase in-game items and bonuses, trade with other players, or &apos;cash out&apos; of the ecosystem for
            other cryptocurrencies.
            <br />
            <br />
            In the future, NFTL will serve to give users voting rights on upcoming games and tournaments, and for
            platform-wide expenses. For now, this only includes naming characters, but will soon be expanded to be used
            for purchasing additional in-game items and collectibles.
            <br />
            <br />
            NFTL Learn more{' '}
            <a target="_blank" rel="noreferrer" href="https://docs.niftyleague.com/overview/nftl/overview">
              here
            </a>
            .
          </MDBAccordionItem>
          <MDBAccordionItem collapseId="faq-collapse3" headerTitle="What is Nifty Smashers?">
            Nifty Smashers is the first title offered by Nifty League based off of the popular game Super Smash Bros.
            <br />
            <br />
            Battle it out amongst the community and get in as many bat bonks on your friends as you can! Nifty Smashers
            takes inspiration from the classic Super Smash Bros game where the objective is to knock your opponents off
            the map to score points.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId="faq-collapse4" headerTitle="Does it cost money to play your games?">
            At the moment you will either need to own or rent a DEGEN to play any games on our platform. A free-2-play
            version will be coming soon enabling players around the world to hop in our game servers and earn a small
            amount of NFTL for playing.
          </MDBAccordionItem>
        </MDBAccordion>
      </div>

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
              height={541}
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
          <p className="my-3 text-m-center">Meet our community and stay up to date with our roadmap or team updates</p>
          <a href="https://discord.gg/niftyleague" target="_blank" rel="noreferrer">
            <button className="btn theme-btn-aqua w-auto bg-black my-3 discord-btn">
              <span className="me-2">join our Discord server</span>

              <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27.4116 1.98947C25.4047 1.06863 23.2526 0.390197 21.0025 0.00162999C20.9615 -0.00586923 20.9206 0.0128717 20.8995 0.0503545C20.6227 0.54262 20.3161 1.18482 20.1015 1.68959C17.6813 1.32727 15.2736 1.32727 12.9031 1.68959C12.6883 1.1736 12.3706 0.54262 12.0926 0.0503545C12.0715 0.0141223 12.0306 -0.00461862 11.9896 0.00162999C9.74069 0.388955 7.58863 1.06739 5.58051 1.98947C5.56313 1.99696 5.54823 2.00947 5.53834 2.0257C1.45632 8.12415 0.338082 14.0727 0.886651 19.9475C0.889133 19.9762 0.905267 20.0037 0.927607 20.0212C3.62081 21.999 6.22963 23.1998 8.79001 23.9956C8.83099 24.0081 8.8744 23.9931 8.90048 23.9594C9.50614 23.1323 10.046 22.2602 10.5089 21.3431C10.5363 21.2894 10.5102 21.2257 10.4543 21.2044C9.59798 20.8796 8.78256 20.4835 7.99818 20.0337C7.93614 19.9975 7.93117 19.9087 7.98825 19.8663C8.15331 19.7426 8.31842 19.6139 8.47603 19.4839C8.50454 19.4602 8.54428 19.4552 8.57781 19.4702C13.7308 21.8229 19.3096 21.8229 24.4019 19.4702C24.4354 19.454 24.4751 19.459 24.5049 19.4827C24.6625 19.6126 24.8276 19.7426 24.9939 19.8663C25.051 19.9087 25.0473 19.9975 24.9852 20.0337C24.2008 20.4922 23.3854 20.8796 22.5278 21.2032C22.472 21.2244 22.4472 21.2894 22.4745 21.3431C22.9473 22.2589 23.4872 23.131 24.0817 23.9582C24.1065 23.9931 24.1512 24.0081 24.1922 23.9956C26.7649 23.1998 29.3738 21.999 32.067 20.0212C32.0905 20.0037 32.1054 19.9775 32.1079 19.9488C32.7645 13.1568 31.0083 7.25706 27.4525 2.02694C27.4438 2.00947 27.429 1.99696 27.4116 1.98947ZM11.2785 16.3704C9.72704 16.3704 8.44871 14.946 8.44871 13.1968C8.44871 11.4476 9.70225 10.0233 11.2785 10.0233C12.867 10.0233 14.133 11.4601 14.1082 13.1968C14.1082 14.946 12.8546 16.3704 11.2785 16.3704ZM21.741 16.3704C20.1896 16.3704 18.9113 14.946 18.9113 13.1968C18.9113 11.4476 20.1647 10.0233 21.741 10.0233C23.3296 10.0233 24.5955 11.4601 24.5707 13.1968C24.5707 14.946 23.3296 16.3704 21.741 16.3704Z"
                  fill="white"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Learn;
