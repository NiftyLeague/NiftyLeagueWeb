import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import Carousel from '../components/carousel';
import DegenCardItem from '../components/carousel/DegenCardItem';
import SocialCards from '../components/SocialCards';
import { CommunityDegenData } from '../components/carousel/constants';

const Community: NextPage = () => {
  return (
    <Layout classes={{ root: 'com-pg' }}>
      <Head>
        <title>Nifty League | Community</title>
        <meta name="description" content="Community comes first at Nifty League" />
      </Head>

      <div className="position-relative min-vh-100 pt-md-5 mt-md-5 com-intro">
        <div className="container pt-5 mt-5 px-sm-5" style={{ maxWidth: '90%' }}>
          <div className="row m-0 position-relative com-intro-content">
            <div className="col-md-6 com-intro-text">
              <h4 className="mt-5 text-center">Nifty League</h4>
              <h1 className="text-center">Community</h1>
              <p className="my-3 text-center">Meet our global community of gamers</p>
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
              <Carousel mobileItems={2}>
                {CommunityDegenData.map(degen => (
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
            <button className="btn theme-btn-aqua w-auto mt-3 mt-sm-0">
              <span className="me-2">View on OpenSea</span>
              <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.58666 13.7045L1.67997 13.5578L7.30665 4.7556C7.38888 4.62673 7.5822 4.64006 7.64441 4.78004C8.58442 6.8867 9.39553 9.50672 9.01554 11.1378C8.85332 11.809 8.40888 12.7178 7.90885 13.5578C7.84444 13.6801 7.77332 13.8001 7.69775 13.9156C7.66219 13.969 7.60219 14.0001 7.53774 14.0001H1.75109C1.59553 14.0001 1.50443 13.8312 1.58666 13.7045Z"
                  fill="white"
                />
                <path
                  d="M26.6666 15.34V16.7333C26.6666 16.8133 26.6178 16.8844 26.5466 16.9155C26.1111 17.1022 24.62 17.7866 24 18.6489C22.4178 20.8511 21.2089 24 18.5066 24H7.23331C3.23779 24 0 20.7511 0 16.7422V16.6133C0 16.5067 0.0866472 16.42 0.193323 16.42H6.47779C6.60221 16.42 6.69331 16.5356 6.68224 16.6578C6.63777 17.0666 6.71334 17.4844 6.90666 17.8644C7.27999 18.6222 8.05332 19.0956 8.88887 19.0956H12V16.6667H8.92443C8.76666 16.6667 8.67335 16.4844 8.76446 16.3556C8.79777 16.3044 8.83557 16.2511 8.87554 16.1911C9.16668 15.7778 9.58222 15.1356 9.99556 14.4045C10.2778 13.9111 10.5511 13.3845 10.7711 12.8556C10.8156 12.76 10.8511 12.6622 10.8866 12.5666C10.9466 12.3978 11.0089 12.24 11.0533 12.0822C11.0978 11.9489 11.1333 11.8089 11.1689 11.6778C11.2733 11.2289 11.3178 10.7533 11.3178 10.26C11.3178 10.0667 11.3089 9.86444 11.2911 9.67112C11.2822 9.46001 11.2556 9.24887 11.2289 9.03776C11.2111 8.8511 11.1778 8.66665 11.1422 8.47332C11.0978 8.1911 11.0355 7.91113 10.9644 7.62887L10.94 7.52223C10.8866 7.32887 10.8422 7.14445 10.78 6.95113C10.6044 6.34443 10.4022 5.75334 10.1889 5.20001C10.1111 4.98 10.0222 4.7689 9.93331 4.55779C9.80224 4.24001 9.66887 3.95113 9.54666 3.67778C9.48446 3.55332 9.43112 3.43999 9.37778 3.32444C9.31778 3.19332 9.25557 3.06221 9.19332 2.93779C9.1489 2.84224 9.09776 2.75334 9.06221 2.66444L8.68222 1.96222C8.62888 1.86666 8.71778 1.75332 8.82221 1.78222L11.2 2.42665H11.2067C11.2111 2.42665 11.2133 2.4289 11.2155 2.4289L11.5289 2.51554L11.8733 2.61335L12 2.64887V1.23556C12 0.553323 12.5467 0 13.2222 0C13.56 0 13.8667 0.137779 14.0867 0.362206C14.3066 0.586676 14.4444 0.893338 14.4444 1.23556V3.33335L14.6978 3.40443C14.7178 3.41113 14.7378 3.42 14.7555 3.43332C14.8178 3.48 14.9066 3.54887 15.02 3.63335C15.1089 3.70443 15.2044 3.79112 15.32 3.88001C15.5489 4.06443 15.8222 4.30222 16.1222 4.57557C16.2022 4.64444 16.28 4.71556 16.3511 4.78668C16.7378 5.14668 17.1711 5.56888 17.5845 6.03556C17.7 6.16668 17.8133 6.3 17.9289 6.43999C18.0444 6.58222 18.1667 6.72221 18.2733 6.86224C18.4133 7.0489 18.5644 7.24222 18.6956 7.44445C18.7578 7.54001 18.8289 7.63778 18.8889 7.73334C19.0578 7.98887 19.2067 8.25335 19.3489 8.51779C19.4089 8.64 19.4711 8.77332 19.5244 8.90444C19.6822 9.25778 19.8067 9.61778 19.8866 9.97778C19.9111 10.0556 19.9289 10.14 19.9378 10.2156V10.2334C19.9644 10.34 19.9733 10.4533 19.9822 10.5689C20.0178 10.9378 20 11.3066 19.92 11.6778C19.8866 11.8356 19.8422 11.9844 19.7889 12.1422C19.7355 12.2933 19.6822 12.4511 19.6133 12.6C19.48 12.9089 19.3222 13.2178 19.1355 13.5067C19.0755 13.6133 19.0044 13.7267 18.9333 13.8334C18.8555 13.9466 18.7755 14.0533 18.7044 14.1578C18.6067 14.2911 18.5022 14.4311 18.3956 14.5556C18.3 14.6867 18.2022 14.8178 18.0956 14.9333C17.9467 15.1089 17.8044 15.2756 17.6555 15.4356C17.5667 15.54 17.4711 15.6467 17.3733 15.7422C17.2778 15.8489 17.18 15.9444 17.0911 16.0333C16.9422 16.1822 16.8178 16.2978 16.7133 16.3933L16.4689 16.6178C16.4333 16.6489 16.3867 16.6667 16.3378 16.6667H14.4444V19.0956H16.8266C17.36 19.0956 17.8667 18.9067 18.2756 18.56C18.4155 18.4378 19.0267 17.9089 19.7489 17.1111C19.7733 17.0844 19.8045 17.0644 19.84 17.0556L26.42 15.1534C26.5422 15.1178 26.6666 15.2111 26.6666 15.34Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="container my-5">
        <div className="community-footer d-flex align-items-center text-center flex-column p-5">
          <img className="mb-5" src="/img/logo-blue.svg" />
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
