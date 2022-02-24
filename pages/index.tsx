import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import useMediaQuery from '@mui/material/useMediaQuery';

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import Carousel from '../components/carousel';
import SponsorCarouselItem from '../components/carousel/SponsorItem';
import DegenCardItem from '../components/carousel/DegenCardItem';

import { SponsorImageURLs, HomeDegenData } from '../components/carousel/constants';

const Home: NextPage = () => {
  const desktop = useMediaQuery('(min-width:769px)');

  return (
    <Layout classes={{ root: 'home-pg' }}>
      <Head>
        <title>Nifty League | NFT Gaming</title>
        <meta name="description" content="NFT gaming universe brought to you by the Nifty League" />
      </Head>

      <div className="row m-0 p-0 position-relative pt-5 home-intro">
        <div className="overlay-dark min-vh-100" />
        <div className="overlay-gradient-top" />
        <div className="overlay-gradient-bottom" />
        <div className="d-flex flex-column align-items-center text-center my-auto py-3 pt-md-5 home-content">
          <h1 className="mt-0 mt-sm-4 mt-md-5">Nifty League</h1>
          <h4 className="mt-2">By Gamers. For Gamers.</h4>
          <p className="my-4 text-center">
            Nifty League is bringing competitive gaming to Web3
            <br /> while offering fun and engaging games for all play styles.
          </p>
          <a href="https://opensea.io/collection/niftydegen" target="_blank" rel="noreferrer">
            <button className="btn theme-btn-aqua my-3">Browse collection</button>
          </a>
          <div className="d-flex align-items-center mt-4 mb-5">
            <a className="pe-3" href="#">
              <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.00985 13.7044L2.10316 13.5577L7.72983 4.75549C7.81207 4.62663 8.00539 4.63995 8.0676 4.77993C9.00761 6.8866 9.81872 9.59661 9.43873 11.1377C9.27651 11.8088 8.83207 12.7177 8.33204 13.5577C8.26763 13.68 8.19651 13.8 8.12094 13.9155C8.08538 13.9688 8.02538 13.9999 7.96092 13.9999H2.17428C2.01872 13.9999 1.92761 13.8311 2.00985 13.7044Z"
                  fill="white"
                />
                <path
                  d="M27.0898 15.34V16.7333C27.0898 16.8133 27.041 16.8844 26.9698 16.9155C26.5343 17.1022 25.0432 17.7866 24.4232 18.6489C22.841 20.8511 21.6321 24 18.9298 24H7.6565C3.66098 24 0.423187 20.7511 0.423187 16.7422V16.6133C0.423187 16.5967 0.599834 16.42 0.616511 16.42H6.90098C7.02539 16.42 7.1165 16.5356 7.10542 16.6578C7.06095 17.0666 7.13653 17.4844 7.32985 17.8644C7.70317 18.6222 8.47651 19.0956 9.31206 19.0956H12.4232V16.6667H9.34761C9.18985 16.6667 9.09654 16.4844 9.18764 16.3556C9.22095 16.3044 9.25876 16.2511 9.29873 16.1911C9.58986 15.7778 10.0054 15.1356 10.4187 14.4045C10.701 13.9111 10.9743 13.3845 11.1943 12.8556C11.2388 12.76 11.2743 12.6622 11.3098 12.5666C11.3698 12.3978 11.4321 12.24 11.4765 12.0822C11.521 11.9489 11.5565 11.8089 11.5921 11.6778C11.6965 11.2289 11.741 10.7533 11.741 10.26C11.741 10.0667 11.7321 9.86444 11.7143 9.67112C11.7054 9.46001 11.6787 9.24887 11.6521 9.03776C11.6343 8.8511 11.601 8.66665 11.5654 8.47332C11.521 8.1911 11.4587 7.91113 11.3876 7.62887L11.3632 7.52223C11.3098 7.32887 11.2654 7.14445 11.2032 6.95113C11.0276 6.34443 10.8254 5.75334 10.6121 5.20001C10.5343 4.98 10.4454 4.7689 10.3565 4.55779C10.2254 4.24001 10.0921 3.95113 9.96985 3.67778C9.90764 3.55332 9.8543 3.43999 9.80097 3.32444C9.74097 3.19332 9.67876 3.06221 9.61651 2.93779C9.57208 2.84224 9.52095 2.75334 9.48539 2.66444L9.10541 1.96222C9.05207 1.86666 9.14097 1.75332 9.24539 1.78222L11.6232 2.42665H11.6299C11.6343 2.42665 11.6365 2.4289 11.6387 2.4289L11.9521 2.51554L12.2965 2.61335L12.4232 2.64887V1.23556C12.4232 0.553323 12.9698 0 13.6454 0C13.9832 0 14.2899 0.137779 14.5999 0.362206C14.7298 0.586676 14.8676 0.893338 14.8676 1.23556V3.33335L15.121 3.40443C15.141 3.41113 15.161 3.42 15.1787 3.43332C15.241 3.48 15.3298 3.54887 15.4432 3.63335C15.5321 3.70443 15.6276 3.79112 15.7432 3.88001C15.9721 4.06443 16.2454 4.30222 16.5454 4.57557C16.6254 4.64444 16.7032 4.71556 16.7743 4.78668C17.161 5.14668 17.5943 5.56888 18.0076 6.03556C18.1232 6.16668 18.2365 6.3 18.3521 6.43999C18.4676 6.58222 18.5899 6.72221 18.6965 6.86224C18.8365 7.0489 18.9876 7.24222 19.1187 7.44445C19.181 7.54001 19.2521 7.63778 19.3121 7.73334C19.481 7.98887 19.6299 8.25335 19.7721 8.51779C19.8321 8.64 19.8943 8.77332 19.9476 8.90444C20.1054 9.25778 20.2298 9.61778 20.3098 9.97778C20.3343 10.0556 20.3521 10.14 20.361 10.2156V10.2334C20.3876 10.34 20.3965 10.4533 20.4054 10.5689C20.441 10.9378 20.4232 11.3066 20.3432 11.6778C20.3098 11.8356 20.2654 11.9844 20.2121 12.1422C20.1587 12.2933 20.1054 12.4511 20.0365 12.6C19.9032 12.9089 19.7454 13.2178 19.5587 13.5967C19.4987 13.6133 19.4276 13.7267 19.3565 13.8334C19.2787 13.9466 19.1987 14.0533 19.1276 14.1578C19.0299 14.2911 18.9254 14.4311 18.8187 14.5556C18.7232 14.6867 18.6254 14.8178 18.5187 14.9333C18.3698 15.1089 18.2276 15.2756 18.0787 15.4356C17.9899 15.54 17.8943 15.6467 17.7965 15.7422C17.701 15.8489 17.6032 15.9444 17.5143 16.0333C17.3654 16.1822 17.241 16.2978 17.1365 16.3933L16.8921 16.6178C16.8565 16.6489 16.8099 16.6667 16.761 16.6667H14.8676V19.0956H17.2498C17.7832 19.0956 18.2899 18.9067 18.6987 18.56C18.8387 18.4378 19.4499 17.9089 20.1721 17.1111C20.1965 17.0844 20.2276 17.0644 20.2632 17.0556L26.8432 15.1534C26.9654 15.1178 27.0898 15.2111 27.0898 15.34Z"
                  fill="white"
                />
              </svg>
            </a>
            <a className="pe-3" href="#">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_604_62)">
                  <path
                    d="M7.63736 21.7597C16.694 21.7597 21.6476 14.2473 21.6476 7.74044C21.6476 7.52732 21.6476 7.31517 21.6332 7.10396C22.5969 6.40692 23.4287 5.54385 24.0898 4.55516C23.1912 4.95357 22.2379 5.21472 21.2617 5.32988C22.2896 4.71457 23.059 3.74667 23.4265 2.60636C22.4599 3.17997 21.4025 3.58419 20.2998 3.80156C19.5573 3.01214 18.5755 2.48941 17.596 2.31425C16.4366 2.13909 15.3393 2.32128 14.3838 2.83262C13.4284 3.34396 12.6681 4.15594 12.2206 5.14291C11.7731 6.12989 11.6634 7.23683 11.9084 8.29244C9.95973 8.19424 8.03559 7.68548 6.28729 6.79917C4.53899 5.91286 2.9966 4.66882 1.76024 3.1478C1.13056 4.2318 0.937708 5.51533 1.22094 6.73623C1.59416 7.95742 2.24218 9.02476 3.28472 9.72092C2.59107 9.69796 1.73448 9.48656 1.04984 9.1046V9.167C1.05915 10.3039 1.44369 11.4056 2.16371 12.2854C2.88373 13.1651 3.8859 13.7688 5.00024 13.9939C4.27532 14.1916 3.51471 14.2205 2.77688 14.0784C3.09165 15.0567 3.70426 15.9122 4.52908 16.5253C5.35389 17.1384 6.34966 17.4784 7.3772 17.4979C6.35627 18.3004 5.18715 18.8937 3.93671 19.2439C2.68627 19.5941 1.37905 19.6943 0.0898361 19.5388C2.34167 20.9839 4.96176 21.7594 7.63736 21.7468"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_604_62">
                    <rect width="24" height="24" fill="white" transform="translate(0.0898361)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a className="pe-3" href="#">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26.7449 1.98947C24.738 1.06863 22.5859 0.390197 20.3358 0.00162999C20.2948 -0.00586923 20.2539 0.0128717 20.2328 0.0593545C19.956 0.54262 19.6495 1.18482 19.4348 1.68959C17.0146 1.32727 14.6069 1.32727 12.2364 1.68959C12.0216 1.1736 11.7039 0.54262 11.4259 0.0593545C11.4048 0.0141223 11.3639 -0.00461862 11.3229 0.00162999C9.074 0.388955 6.92193 1.06739 4.91382 1.98947C4.89643 1.99696 4.88153 2.00947 4.87164 2.0257C0.789623 8.12415 -0.328613 14.0727 0.219956 19.9475C0.222438 19.9762 0.238573 20.0037 0.260913 20.0212C2.95411 21.999 5.56294 23.1998 8.12332 23.9956C8.16429 24.0081 8.20771 23.9931 8.23379 23.9594C8.83944 23.1323 9.37934 22.2602 9.84224 21.3431C9.86956 21.2894 9.84348 21.2257 9.78765 21.2044C8.93129 20.8796 8.11587 20.4835 7.33148 20.0337C7.26944 19.9975 7.26448 19.9087 7.32155 19.8663C7.48661 19.7426 7.65172 19.6139 7.80933 19.4839C7.83785 19.4602 7.87758 19.4552 7.91111 19.4702C13.0642 21.8229 18.6429 21.8229 23.7352 19.4702C23.7687 19.454 23.8084 19.459 23.8382 19.4827C23.9959 19.6126 24.1609 19.7426 24.3272 19.8663C24.3843 19.9087 24.3806 19.9975 24.3185 20.0337C23.5341 20.4922 22.7187 20.8796 21.8611 21.2032C21.8053 21.2244 21.7805 21.2894 21.8078 21.3431C22.2806 22.2589 22.8205 23.131 23.415 23.9582C23.4398 23.9931 23.4845 24.0081 23.5255 23.9956C26.0983 23.1998 28.7071 21.999 31.4003 20.0212C31.4239 20.0037 31.4388 19.9775 31.4412 19.9488C32.0978 13.1568 30.3416 7.25706 26.7858 2.02694C26.7771 2.00947 26.7623 1.99696 26.7449 1.98947ZM10.6118 16.3704C9.06034 16.3704 7.78201 14.946 7.78201 13.1968C7.78201 11.4476 9.03555 10.0233 10.6118 10.0233C12.2003 10.0233 13.4663 11.4601 13.4415 13.1968C13.4415 14.946 12.1879 16.3704 10.6118 16.3704ZM21.0743 16.3704C19.5229 16.3704 18.2446 14.946 18.2446 13.1968C18.2446 11.4476 19.498 10.0233 21.0743 10.0233C22.6629 10.0233 23.9288 11.4601 23.904 13.1968C23.904 14.946 22.6629 16.3704 21.0743 16.3704Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="row m-0 p-0 position-relative sliding-nfts">
        <div className={`sliding-background-wrapper-${desktop ? 'desktop' : 'mobile'}`}>
          <div className="sliding-background" />
        </div>
      </div>

      <div className="row m-0 p-0 position-relative sushi-gif-section min-vh-100">
        <div className="sushi-dark-shade-wrapper">
          <Image src="/img/sushi-dark-shade-top.svg" alt="Sushi level shade" layout="fill" objectFit="cover" />
        </div>
        <Image
          className="sushi-gif"
          src="/gifs/sushi-level.gif"
          layout="fill"
          objectFit="cover"
          alt="Sushi level background"
        />
        <div className="container d-flex flex-column text-center position-relative my-5" style={{ zIndex: 2 }}>
          <h2 className="font-48 my-5">
            Our 9.9k DEGEN NFTs act as players in our games such as Nifty Smashers. Our ecosystem is centered around
            nostalgia - where builders, players, and owners spend time connecting, gaming, and earning in Web3.
          </h2>
          <div className="position-relative flex-grow-1">
            <div className="browse-single browse-andy desktop">
              <Image
                alt="Andy DEGEN"
                className="pixelated"
                layout="fill"
                objectFit="cover"
                src="/img/browse-single-1-mob.svg"
              />
            </div>

            <div className="browse-single browse-spike desktop">
              <Image
                alt="Spike DEGEN"
                className="pixelated"
                layout="fill"
                objectFit="cover"
                src="/img/browse-single-3-mob.svg"
              />
            </div>
            <div className="browse-single browse-snarfy desktop">
              <Image
                alt="Snarfy DEGEN"
                className="pixelated"
                layout="fill"
                objectFit="cover"
                src="/img/browse-single-2-mob.svg"
              />
            </div>
          </div>

          <div className="position-relative flex-grow-1 league-floating-nfts mobile">
            <Image
              alt="Mobile group floating degens"
              layout="fill"
              objectFit="cover"
              src="/img/browse-single-mob.svg"
            />
          </div>
        </div>
      </div>

      <div className="row m-0 position-relative league-special-row">
        <div className="container league-special-container my-5 section-margin">
          <span className="position-absolute eclipse-location w-75">
            <Image
              src="/img/eclipses-header.svg"
              alt="Eclipse background"
              layout="responsive"
              width={668}
              height={666}
            />
          </span>
          <div className="row m-0 p-0 position-relative">
            {desktop && (
              <div className="col-sm-6 position-relative">
                <Image
                  src="/img/nifty-special-2.png"
                  alt="Ecosystem Degen Image"
                  layout="responsive"
                  width={474}
                  height={467}
                />
              </div>
            )}
            <div className="col-sm-6">
              <h2 className="my-3 text-m-left">Nifty League Ecosystem</h2>
              <MDBAccordion flush className="league-special-accordion" initialActive="flush-collapse1">
                <MDBAccordionItem collapseId="flush-collapse1" headerTitle="DEGEN Rentals">
                  {!desktop && (
                    <Image
                      className="py-2"
                      src="/img/nifty-special-2.png"
                      alt="Ecosystem Degen Image"
                      layout="responsive"
                      width={474}
                      height={467}
                    />
                  )}
                  Players can rent a DEGEN from owners directly via smart contract technology, opening up game play at
                  an attractive rate for players globally.{' '}
                  <Link href="/about" passHref>
                    <button className="btn theme-btn-white">Learn More</button>
                  </Link>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId="flush-collapse2" headerTitle="Play-and-earn">
                  Players earn NFTL by landing hits and winning matches in our game Nifty Smashers. Join in on weekly
                  community tournaments sponsored by some amazing rewards!{' '}
                  <Link href="/about" passHref>
                    <button className="btn theme-btn-white">Learn More</button>
                  </Link>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId="flush-collapse3" headerTitle="Games">
                  Check our roadmap for some more exciting games coming in 2022! Get playing immediately with our first
                  title, Nifty Smashers, based off of the popular game Super Smash Bros.
                  <Link href="/about" passHref>
                    <button className="btn theme-btn-white">Learn More</button>
                  </Link>
                </MDBAccordionItem>
              </MDBAccordion>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-0" style={{ maxWidth: '100%' }}>
        <div
          className="row m-0 p-0 position relative py-sm-5 d-flex align-items-center justify-content-center text-center"
          style={{ background: '#191B1F' }}
        >
          <span className="baker-shade">
            <Image src="/img/bakers-arr-left-shade.svg" alt="Sponsers shade left" width={230} height={390} />
            <Image src="/img/bakers-arr-right-shade.svg" alt="Sponsers shade right" width={230} height={390} />
          </span>
          <h3 className="my-sm-5 mb-5">We are proudly backed by</h3>
          <section
            style={{
              alignItems: 'center',
              margin: '0 auto',
            }}
          >
            <Carousel maxItems={5}>
              {SponsorImageURLs.map(url => (
                <SponsorCarouselItem key={url} source={url} />
              ))}
            </Carousel>
          </section>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '100%', background: '#191B1F' }}>
        <div className="row m-0 p-0 position-relative nifty-league-browse py-sm-5" style={{ minHeight: 900 }}>
          <div className="row m-0 p-0 position-relative py-5" style={{ marginBottom: 559 }}>
            <span className="dark-gradient-shade">
              <Image src="/img/dark-gradient-shade.svg" alt="Dark gradient shade" layout="fill" objectFit="cover" />
            </span>
            <section
              style={{
                alignItems: 'center',
                maxWidth: '99%',
                margin: '0 auto',
                paddingBottom: '150px',
                textAlign: 'center',
              }}
            >
              <Carousel minItems={2}>
                {HomeDegenData.map(degen => (
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
          <div
            className="mobile-view text-center d-flex flex-column align-items-center position-absolute"
            style={{ marginTop: -100, zIndex: 3, padding: 0 }}
          >
            <img
              className="nifty-character pixelated"
              src="/img/1004.png"
              alt="Mario Degen"
              style={{ marginBottom: -230 }}
            />

            <h1>Join Nifty League</h1>
            <p className="my-sm-5 my-2 text-m-center">
              The minting process for Nifty League allowed minters the ability to design their own DEGEN using our
              Mint-O-Matic, which our community absolutely loved! You can purchase a DEGEN NFT on OpenSea.
            </p>
            <a href="https://opensea.io/collection/niftydegen" target="_blank" rel="noreferrer">
              <button className="btn theme-btn-aqua w-auto mt-3 mt-sm-0">
                <span className="me-2">Browse OpenSea collection</span>
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.58666 13.7045L1.67997 13.5578L7.30665 4.7556C7.38888 4.62673 7.5822 4.64006 7.64441 4.78004C8.58442 6.8867 9.39553 9.59672 9.01554 11.1378C8.85332 11.809 8.40888 12.7178 7.90885 13.5578C7.84444 13.6801 7.77332 13.8001 7.69775 13.9156C7.66219 13.969 7.60219 14.0001 7.53774 14.0001H1.75109C1.59553 14.0001 1.59443 13.8312 1.58666 13.7045Z"
                    fill="white"
                  />
                  <path
                    d="M26.6666 15.34V16.7333C26.6666 16.8133 26.6178 16.8844 26.5466 16.9155C26.1111 17.1022 24.62 17.7866 24 18.6489C22.4178 20.8511 21.2089 24 18.5966 24H7.23331C3.23779 24 0 20.7511 0 16.7422V16.6133C0 16.5967 0.0866472 16.42 0.193323 16.42H6.47779C6.60221 16.42 6.69331 16.5356 6.68224 16.6578C6.63777 17.0666 6.71334 17.4844 6.90666 17.8644C7.27999 18.6222 8.05332 19.0956 8.88887 19.0956H12V16.6667H8.92443C8.76666 16.6667 8.67335 16.4844 8.76446 16.3556C8.79777 16.3044 8.83557 16.2511 8.87554 16.1911C9.16668 15.7778 9.58222 15.1356 9.99556 14.4045C10.2778 13.9111 10.5511 13.3845 10.7711 12.8556C10.8156 12.76 10.8511 12.6622 10.8866 12.5666C10.9466 12.3978 11.0089 12.24 11.0533 12.0822C11.0978 11.9489 11.1333 11.8089 11.1689 11.6778C11.2733 11.2289 11.3178 10.7533 11.3178 10.26C11.3178 10.0667 11.3089 9.86444 11.2911 9.67112C11.2822 9.46001 11.2556 9.24887 11.2289 9.03776C11.2111 8.8511 11.1778 8.66665 11.1422 8.47332C11.0978 8.1911 11.0355 7.91113 10.9644 7.62887L10.94 7.52223C10.8866 7.32887 10.8422 7.14445 10.78 6.95113C10.6044 6.34443 10.4022 5.75334 10.1889 5.20001C10.1111 4.98 10.0222 4.7689 9.93331 4.55779C9.80224 4.24001 9.66887 3.95113 9.54666 3.67778C9.48446 3.55332 9.43112 3.43999 9.37778 3.32444C9.31778 3.19332 9.25557 3.06221 9.19332 2.93779C9.1489 2.84224 9.09776 2.75334 9.06221 2.66444L8.68222 1.96222C8.62888 1.86666 8.71778 1.75332 8.82221 1.78222L11.2 2.42665H11.2067C11.2111 2.42665 11.2133 2.4289 11.2155 2.4289L11.5289 2.51554L11.8733 2.61335L12 2.64887V1.23556C12 0.553323 12.5467 0 13.2222 0C13.56 0 13.8667 0.137779 14.0867 0.362206C14.3066 0.586676 14.4444 0.893338 14.4444 1.23556V3.33335L14.6978 3.40443C14.7178 3.41113 14.7378 3.42 14.7555 3.43332C14.8178 3.48 14.9066 3.54887 15.02 3.63335C15.1089 3.70443 15.2044 3.79112 15.32 3.88001C15.5489 4.06443 15.8222 4.30222 16.1222 4.57557C16.2022 4.64444 16.28 4.71556 16.3511 4.78668C16.7378 5.14668 17.1711 5.56888 17.5845 6.03556C17.7 6.16668 17.8133 6.3 17.9289 6.43999C18.0444 6.58222 18.1667 6.72221 18.2733 6.86224C18.4133 7.0489 18.5644 7.24222 18.6956 7.44445C18.7578 7.54001 18.8289 7.63778 18.8889 7.73334C19.0578 7.98887 19.2067 8.25335 19.3489 8.51779C19.4089 8.64 19.4711 8.77332 19.5244 8.90444C19.6822 9.25778 19.8067 9.61778 19.8866 9.97778C19.9111 10.0556 19.9289 10.14 19.9378 10.2156V10.2334C19.9644 10.34 19.9733 10.4533 19.9822 10.5689C20.0178 10.9378 20 11.3066 19.92 11.6778C19.8866 11.8356 19.8422 11.9844 19.7889 12.1422C19.7355 12.2933 19.6822 12.4511 19.6133 12.6C19.48 12.9089 19.3222 13.2178 19.1355 13.5967C19.0755 13.6133 19.0044 13.7267 18.9333 13.8334C18.8555 13.9466 18.7755 14.0533 18.7044 14.1578C18.6067 14.2911 18.5922 14.4311 18.3956 14.5556C18.3 14.6867 18.2022 14.8178 18.0956 14.9333C17.9467 15.1089 17.8044 15.2756 17.6555 15.4356C17.5667 15.54 17.4711 15.6467 17.3733 15.7422C17.2778 15.8489 17.18 15.9444 17.0911 16.0333C16.9422 16.1822 16.8178 16.2978 16.7133 16.3933L16.4689 16.6178C16.4333 16.6489 16.3867 16.6667 16.3378 16.6667H14.4444V19.0956H16.8266C17.36 19.0956 17.8667 18.9067 18.2756 18.56C18.4155 18.4378 19.0267 17.9089 19.7489 17.1111C19.7733 17.0844 19.8045 17.0644 19.84 17.0556L26.42 15.1534C26.5422 15.1178 26.6666 15.2111 26.6666 15.34Z"
                    fill="white"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
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
            />
          )}
        </div>

        <div className="position-absolute text-center  d-flex align-items-center flex-column mt-5 pt-sm-5">
          <h2 className="mt-4">Our Community</h2>
          <p className="my-3 text-m-center">Meet our community and stay up-to-date with our roadmap.</p>
          <button className="btn theme-btn-aqua w-auto bg-black my-3 discord-btn">
            <span className="me-2">Join Our Discord Server</span>

            <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M27.4116 1.98947C25.4047 1.06863 23.2526 0.390197 21.0025 0.00162999C20.9615 -0.00586923 20.9206 0.0128717 20.8995 0.0593545C20.6227 0.54262 20.3161 1.18482 20.1015 1.68959C17.6813 1.32727 15.2736 1.32727 12.9031 1.68959C12.6883 1.1736 12.3706 0.54262 12.0926 0.0593545C12.0715 0.0141223 12.0306 -0.00461862 11.9896 0.00162999C9.74069 0.388955 7.58863 1.06739 5.58051 1.98947C5.56313 1.99696 5.54823 2.00947 5.53834 2.0257C1.45632 8.12415 0.338082 14.0727 0.886651 19.9475C0.889133 19.9762 0.905267 20.0037 0.927607 20.0212C3.62081 21.999 6.22963 23.1998 8.79001 23.9956C8.83099 24.0081 8.8744 23.9931 8.90048 23.9594C9.59614 23.1323 10.046 22.2602 10.5989 21.3431C10.5363 21.2894 10.5102 21.2257 10.4543 21.2044C9.59798 20.8796 8.78256 20.4835 7.99818 20.0337C7.93614 19.9975 7.93117 19.9087 7.98825 19.8663C8.15331 19.7426 8.31842 19.6139 8.47603 19.4839C8.59454 19.4602 8.54428 19.4552 8.57781 19.4702C13.7308 21.8229 19.3096 21.8229 24.4019 19.4702C24.4354 19.454 24.4751 19.459 24.5949 19.4827C24.6625 19.6126 24.8276 19.7426 24.9939 19.8663C25.051 19.9087 25.0473 19.9975 24.9852 20.0337C24.2008 20.4922 23.3854 20.8796 22.5278 21.2032C22.472 21.2244 22.4472 21.2894 22.4745 21.3431C22.9473 22.2589 23.4872 23.131 24.0817 23.9582C24.1065 23.9931 24.1512 24.0081 24.1922 23.9956C26.7649 23.1998 29.3738 21.999 32.067 20.0212C32.0905 20.0037 32.1054 19.9775 32.1079 19.9488C32.7645 13.1568 31.0083 7.25706 27.4525 2.02694C27.4438 2.00947 27.429 1.99696 27.4116 1.98947ZM11.2785 16.3704C9.72704 16.3704 8.44871 14.946 8.44871 13.1968C8.44871 11.4476 9.70225 10.0233 11.2785 10.0233C12.867 10.0233 14.133 11.4601 14.1082 13.1968C14.1082 14.946 12.8546 16.3704 11.2785 16.3704ZM21.741 16.3704C20.1896 16.3704 18.9113 14.946 18.9113 13.1968C18.9113 11.4476 20.1647 10.0233 21.741 10.0233C23.3296 10.0233 24.5955 11.4601 24.5707 13.1968C24.5707 14.946 23.3296 16.3704 21.741 16.3704Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
