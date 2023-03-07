import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/legacy/image';
import Layout from '@components/layout';
import Carousel from '@components/carousel';
import { renderDegen } from '@components/carousel/DegenCardItem';
import SocialCards from '@components/SocialCards';
import { CommunityDegenData } from '@data/constants';

const Community: NextPage = () => {
  return (
    <Layout classes={{ root: 'com-pg' }}>
      <Head>
        <title>Meet Our Degen Community | Nifty League</title>
        <meta name="description" content="Community comes first at Nifty League" />
      </Head>

      <div className="position-relative min-vh-100 pt-md-5 mt-md-5 com-intro">
        <div className="container pt-5 mt-sm-5 px-0 px-sm-5" style={{ maxWidth: '90%' }}>
          <div className="row m-0 position-relative com-intro-content">
            <div className="col-md-6 px-0 com-intro-text">
              <h4 className="mt-5">Nifty League</h4>
              <h1>Community</h1>
              <p className="my-3">Meet our global community of gamers</p>
            </div>
            <div className="col-sm-8 col-md-6 col-xl-4 position-relative text-center com-banner">
              <Image
                src="/img/community/moon.png"
                alt="Satoshi moon"
                width={445}
                height={437}
                layout="responsive"
                priority
              />
              <div className="moon-grad">
                <Image src="/img/community/moon-grad.svg" alt="gradient background" width={685} height={685} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 h-auto position-absolute bottom-0 earth-com">
          <Image
            src="/img/community/community-bg-1.png"
            layout="responsive"
            width={1684}
            height={525}
            alt="Earth"
            priority
          />
        </div>
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

      <div className="container com-content" style={{ maxWidth: '100%' }}>
        <div className="row m-0 p-0 position-relative text-center coversation-container">
          <div className="">
            <h2 className="">Join the conversation</h2>
            <p className="text-m-center">
              Nifty League&apos;s community is unlike any other. Get your questions answers and connect with fellow
              DEGENs!
            </p>
          </div>
        </div>
      </div>
      <div className="com-grad-1">
        <Image src="/img/community/com-grad-1.svg" width={856} height={674} layout="responsive" alt="yellow gradient" />
      </div>
      <SocialCards />

      <div className="container" style={{ maxWidth: '100%' }}>
        <div className="row m-0 p-0 position-relative nifty-league-browse py-sm-5" style={{ minHeight: 900 }}>
          <div className="row m-0 p-0 position-relative py-5" style={{ marginBottom: 550 }}>
            <section
              style={{
                alignItems: 'center',
                maxWidth: '100%',
                textAlign: 'center',
              }}
            >
              <Carousel mobileItems={2}>{CommunityDegenData.map(renderDegen)}</Carousel>
            </section>
          </div>
          <div className="com-scroller-dark-background" />
          <div className="degen-scroller-content text-center d-flex flex-column align-items-center position-absolute">
            <div className="nifty-character nifty-ape">
              <Image
                className="pixelated"
                src="/img/community/character.png"
                width={856}
                height={842}
                layout="responsive"
                alt="ape degen header"
                priority
              />
            </div>
            <h1 className="nifty-character-title">
              Get Involved with
              <br />
              the Community
            </h1>
            <p className="my-sm-4 my-2 text-center">
              Grab your Nifty League DEGEN and join us in the Lair in Discord! We&apos;re ready to meet you.
            </p>
            <a href="https://discord.gg/niftyleague" target="_blank" rel="noreferrer">
              <button className="btn theme-btn-aqua w-auto mt-3 mt-sm-0">
                <span className="me-2">Join our server</span>
                <svg width="30" height="22" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M27.4116 1.98947C25.4047 1.06863 23.2526 0.390197 21.0025 0.00162999C20.9615 -0.00586923 20.9206 0.0128717 20.8995 0.0593545C20.6227 0.54262 20.3161 1.18482 20.1015 1.68959C17.6813 1.32727 15.2736 1.32727 12.9031 1.68959C12.6883 1.1736 12.3706 0.54262 12.0926 0.0593545C12.0715 0.0141223 12.0306 -0.00461862 11.9896 0.00162999C9.74069 0.388955 7.58863 1.06739 5.58051 1.98947C5.56313 1.99696 5.54823 2.00947 5.53834 2.0257C1.45632 8.12415 0.338082 14.0727 0.886651 19.9475C0.889133 19.9762 0.905267 20.0037 0.927607 20.0212C3.62081 21.999 6.22963 23.1998 8.79001 23.9956C8.83099 24.0081 8.8744 23.9931 8.90048 23.9594C9.59614 23.1323 10.046 22.2602 10.5989 21.3431C10.5363 21.2894 10.5102 21.2257 10.4543 21.2044C9.59798 20.8796 8.78256 20.4835 7.99818 20.0337C7.93614 19.9975 7.93117 19.9087 7.98825 19.8663C8.15331 19.7426 8.31842 19.6139 8.47603 19.4839C8.59454 19.4602 8.54428 19.4552 8.57781 19.4702C13.7308 21.8229 19.3096 21.8229 24.4019 19.4702C24.4354 19.454 24.4751 19.459 24.5949 19.4827C24.6625 19.6126 24.8276 19.7426 24.9939 19.8663C25.051 19.9087 25.0473 19.9975 24.9852 20.0337C24.2008 20.4922 23.3854 20.8796 22.5278 21.2032C22.472 21.2244 22.4472 21.2894 22.4745 21.3431C22.9473 22.2589 23.4872 23.131 24.0817 23.9582C24.1065 23.9931 24.1512 24.0081 24.1922 23.9956C26.7649 23.1998 29.3738 21.999 32.067 20.0212C32.0905 20.0037 32.1054 19.9775 32.1079 19.9488C32.7645 13.1568 31.0083 7.25706 27.4525 2.02694C27.4438 2.00947 27.429 1.99696 27.4116 1.98947ZM11.2785 16.3704C9.72704 16.3704 8.44871 14.946 8.44871 13.1968C8.44871 11.4476 9.70225 10.0233 11.2785 10.0233C12.867 10.0233 14.133 11.4601 14.1082 13.1968C14.1082 14.946 12.8546 16.3704 11.2785 16.3704ZM21.741 16.3704C20.1896 16.3704 18.9113 14.946 18.9113 13.1968C18.9113 11.4476 20.1647 10.0233 21.741 10.0233C23.3296 10.0233 24.5955 11.4601 24.5707 13.1968C24.5707 14.946 23.3296 16.3704 21.741 16.3704Z"
                    fill="white"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="container my-5">
        <div className="community-footer d-flex align-items-center text-center flex-column p-5">
          <img className="mb-5" src="img/logo/purple.png" />
          <h3>Download Brand Assets</h3>
          <p className="font-16 mt-1">
            Commonly used where the Nifty League Branding needs to be displayed
          </p>
          <button className="btn theme-btn-aqua w-auto mt-2">
            download brand assets
          </button>
        </div>
      </div> */}
    </Layout>
  );
};

export default Community;
