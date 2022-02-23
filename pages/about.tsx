import useMediaQuery from '@mui/material/useMediaQuery';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import Carousel from '../components/carousel';
import DegenCardItem from '../components/carousel/DegenCardItem';
import TeamCardItem from '../components/carousel/TeamCardItem';

import { DegenData, TeamData } from '../components/carousel/constants';

const About: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');
  return (
    <Layout classes={{ root: 'about-pg' }}>
      <Head>
        <title>Nifty League | About</title>
        <meta name="description" content="About Nifty League and our team" />
      </Head>

      <div className="container about-intro min-vh-100 mt-5 py-5">
        <div className="row m-0 p-0 pt-5 position-relative d-flex flex-column">
          <div className="about-intro-content">
            <h4 className="mt-5 text-m-center">Welcome to</h4>
            <h1 className="text-m-center">Nifty League</h1>
            <p className="mt-sm-2 mt-5 text-m-center p1">
              Our mission is to create a leading NFT gaming platform through
              <br /> community governance and development. Nifty League prides
              itself
              <br /> on being one of the first GameFi platforms offering
              interactive
              <br />
              play-and-earn games with customizable characters.
            </p>
            <p className="text-m-center">
              Advance your gaming skills and join our community to earn daily
              NFTL rewards!
            </p>

            <div className="display-buttons my-3 d-flex desktop">
              <a
                href="https://docs.niftyleague.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn theme-btn-aqua mx-sm-2">
                  Check our docs
                </button>
              </a>
              <a href="/whitepaper.pdf" target="_blank" rel="noreferrer">
                <button className="btn theme-btn-white mx-sm-2 mx-0 my-sm-0 my-2 ">
                  Download the whitepaper
                </button>
              </a>
            </div>
            <div className="display-buttons my-3 d-flex mobile">
              <a
                href="https://opensea.io/collection/niftydegen"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn theme-btn-aqua mx-sm-2">
                  Browse Collection
                </button>
              </a>
            </div>
          </div>

          <div className="icons-placement">
            <div className="icon1 desktop pixelated">
              <Image
                src="/img/about/header/icon1.png"
                layout="fixed"
                height="300"
                width="300"
                alt="degen image"
              />
            </div>
            <div className="icon2 desktop pixelated">
              <Image
                src="/img/about/header/icon2.png"
                layout="fixed"
                height="300"
                width="300"
                alt="degen image"
              />
            </div>
            <div className="icon3 desktop pixelated">
              <Image
                src="/img/about/header/icon3.png"
                layout="fixed"
                height="300"
                width="300"
                alt="degen image"
              />
            </div>
            <div className="icon4 desktop pixelated">
              <Image
                src="/img/about/header/icon4.png"
                layout="fixed"
                height="300"
                width="300"
                alt="degen image"
              />
            </div>
            <div className="icon5 desktop pixelated">
              <Image
                src="/img/about/header/icon5.png"
                layout="fixed"
                height="300"
                width="300"
                alt="degen image"
              />
            </div>
            <div className="icon6 desktop pixelated">
              <Image
                src="/img/about/header/icon6.png"
                layout="fixed"
                height="300"
                width="300"
                alt="degen image"
              />
            </div>
            <div className="icon7 desktop pixelated">
              <Image
                src="/img/about/header/icon7.png"
                layout="fixed"
                height="300"
                width="300"
                alt="degen image"
              />
            </div>
            <div className="icon8 desktop pixelated">
              <Image
                src="/img/about/header/icon8.png"
                layout="fixed"
                height="320"
                width="300"
                alt="degen image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="video-details row mt-5 p-0 position-relative text-center">
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <h2 className="mt-sm-5">Nifty Smashers</h2>
          <h4 className="my-sm-2 my-4">The First NFT Brawler on Ethereum</h4>
        </div>

        <div className="container video-detail-container section-margin">
          <iframe
            height="501px"
            width="668px"
            src="https://www.youtube.com/embed/WWLqE1tnf6U"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Nifty Smashers Video Clip"
            className="pixelated"
            style={{
              borderRadius: '25px',
            }}
          />
        </div>
        <div className="p-0 mt-4 video-bg pixelated">
          <Image
            src="/img/about/youtube-bg.png"
            layout="fill"
            objectFit="cover"
            alt="Ape level background"
          />
        </div>
      </div>

      <div
        className="container p-0 desktop-block mb-3"
        style={{ maxWidth: '100%', background: '#191B1F', marginTop: -300 }}
      >
        <div className="row m-0 p-0 position-relative nifty-league-browse">
          <div className="row m-0 p-0 position-relative py-5 py-sm-0">
            <span className="dark-gradient-shade">
              <Image
                src="/img/dark-gradient-shade.svg"
                alt="Dark gradient shade"
                layout="fill"
                objectFit="cover"
              />
            </span>
            <section
              style={{
                alignItems: 'center',
                maxWidth: '99%',
                margin: 'auto',
                textAlign: 'center',
              }}
            >
              <Carousel>
                {DegenData.map(degen => (
                  <DegenCardItem
                    key={degen.name}
                    name={degen.name}
                    createdDate={degen.createdDate}
                    source={degen.source}
                  />
                ))}
              </Carousel>
            </section>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row m-0 position-relative nifty-degen">
          <div className="col-sm-6 position-relative">
            <div className="pixelated">
              <Image
                src="/img/about/nifty-degans.svg"
                layout="fixed"
                width="500px"
                height="500px"
                alt="Andy and Spike"
              />
            </div>
          </div>
          <div className="col-sm-6 mt-5 mt-sm-0">
            <h2 className="text-m-left">Nifty</h2>
            <h4 className="font-32 color-purple">DEGENs</h4>
            <p className="mt-2" />
            <p>
              The max supply of genesis DEGENs is 10k, of which, 9.9k were
              minted on Mainnet in Fall 2021. All of the DEGENs were
              hand-created by members of our community who minted, based on
              available traits and accessories. The final 100 DEGENs will be
              given to elite players in the Nifty League community.
            </p>
            <a
              href="https://docs.niftyleague.com/overview/degens/about"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn theme-btn-aqua w-auto my-5">
                learn more about DEGEN NFTs
              </button>
            </a>
          </div>
        </div>

        <div className="row m-0 position-relative section-margin nifty-rental">
          <div className="col-sm-6 nr-content mt-5 mt-sm-0">
            <h2 className="text-m-left">DEGEN</h2>
            <h4 className="font-32 color-purple">Rentals</h4>
            <p className="mt-2">
              Players interested in DEGENs will be able to rent an NFT by paying
              a low weekly fee to the owner. Active renters will be able to play
              Nifty Smashers and earn NFTL, and explore the Niftyverse. As a
              renter, you keep 70% of the in-game earnings, while 30% is
              distributed to the owner via a smart contract.
            </p>
            <a
              href="https://docs.niftyleague.com/guides/rentals/rental-overview"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn theme-btn-aqua w-auto my-5">
                learn more about rentals
              </button>
            </a>
          </div>
          <div className="col-sm-6 position-relative nr-banner">
            <div className="nifty-rental-banner pixelated">
              <Image
                src="/img/about/niftyRentals.png"
                layout="fixed"
                width="450px"
                height="450px"
                alt="Alien degen image"
              />
            </div>
            <Image
              className="rental-grad"
              src="/img/about/niftyRentals-gradient.svg"
              layout="fill"
              alt="Purple gradient"
            />
          </div>
          <span className="position-absolute eclipse-location w-100">
            <Image
              src="/img/eclipses-header.svg"
              alt="Eclipse background"
              layout="responsive"
              width={668}
              height={666}
            />
          </span>
        </div>
      </div>
      <div className="container my-sm-5 py-sm-5">
        <div className="row m-0 p-0 position-relative token-play p-sm-5 p-3">
          <div className="col-sm-6">
            <h3>✨ NFTL Token</h3>
            <p className="font-16 mt-5">
              The sale of our characters kicked off the initial distribution of
              our ecosystem&apos;s native utility and governance token, NFTL. In
              the future, NFTL will serve to give users voting rights on
              upcoming games and tournaments, and for platform-wide expenses.
              For now, this only includes naming characters, but will soon be
              expanded to be used for purchasing additional in-game items and
              collectibles. NFTL is currently available to trade and stake on
              SushiSwap.
            </p>
            <a
              href="https://docs.niftyleague.com/overview/nftl/overview"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn theme-btn-aqua w-auto mt-5">
                learn more
              </button>
            </a>
          </div>
          <div className="col-sm-6">
            <h3 className="mt-5 mt-sm-0">🥊 Play-and-earn</h3>
            <p className="font-16 mt-5">
              Players earn NFTL by winning matches or tournaments in our games
              such as Nifty Smashers. The more you play and improve your skills
              the better your chances of earning NFTL tokens through gameplay!
              NFTL can be used to purchase in-game items and bonuses, trade with
              other players, or &apos;cash out&apos; of the ecosystem for other
              cryptocurrencies.
            </p>
            <a href="">
              <button className="btn theme-btn-aqua w-auto mt-5">
                learn more
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="row m-0 p-0 position-relative text-center DAO-section">
        <div className="p-0 w-100">
          {desktop ? (
            <Image
              alt="Mars level background desktop"
              className="pixelated"
              height={1003}
              layout="responsive"
              objectFit="cover"
              src="/img/about/bg-DAO.png"
              width={1440}
            />
          ) : (
            <Image
              alt="Mars level background mobile"
              className="pixelated"
              height={749}
              layout="responsive"
              objectFit="cover"
              src="/img/about/bg-DAO-mb.png"
              width={375}
            />
          )}
        </div>
        <div className="position-absolute my-sm-5">
          <h1 className="font-64 my-5">Nifty DAO</h1>
          <p>
            We will gradually be transferring ownership of the Nifty League to
            our DAO in order to decentralize the
            <br /> platform and encourage devs to help us build! Our vision is
            to power rapid growth and development through
            <br /> community contributions enabling us to build a gaming
            platform like no other. Simply put, DAOs are the future.
            <br /> We see only one route to becoming the world&apos;s leading
            GameFi platform and that&apos;s by building together. 💜
          </p>
        </div>
      </div>
      <div className="position-relative pb-5">
        <div className="about-team-grad">
          {desktop ? (
            <Image
              alt="Team purple gradient desktop"
              layout="fill"
              objectFit="cover"
              src="/img/about/about-grad-2.svg"
            />
          ) : (
            <Image
              alt="Team purple gradient mobile"
              layout="fill"
              objectFit="cover"
              src="/img/about/about-grad-2-mobile.svg"
            />
          )}
        </div>
        <div className="container py-5">
          <div className="row m-0 p-0 position-relative text-center py-5 team-section">
            <h1 className="font-64 pt-5">Meet the Nifty Team</h1>
          </div>
        </div>
        <section
          className="teams-slider slider px-0 mobile-block "
          style={{
            alignItems: 'center',
            maxWidth: '100%',
            textAlign: 'center',
          }}
        >
          <Carousel isMobileViewOnly>
            {TeamData.map(team => (
              <TeamCardItem
                key={team.name}
                name={team.name}
                title={team.title}
                source={team.source}
              >
                {team.children ?? null}
              </TeamCardItem>
            ))}
          </Carousel>
        </section>
      </div>
    </Layout>
  );
};

export default About;
