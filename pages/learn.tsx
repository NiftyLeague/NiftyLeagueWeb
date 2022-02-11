import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';

function Header() {
  return (
    <div className="container my-5">
      <div className="row m-0 p-0 position-relative d-flex flex-column py-5">
        <h1 className="text-m-center">Learn</h1>
        <h4 className="text-m-center">How to join Nifty League</h4>
        <p className="my-3 text-m-center">
          The Nifty League community is an ecosystem of users/gamers,
          <br /> developers, designers, and educators.
        </p>
      </div>
    </div>
  );
}

const Learn: NextPage = () => {
  return (
    <Layout header={<Header />} classes={{ header: 'header-learn' }}>
      <Head>
        <title>Nifty League | Learn</title>
        <meta
          name="description"
          content="Learn how to join and play games at Nifty League"
        />
      </Head>

      <div
        className="container learn-section"
        style={{ marginTop: -150, maxWidth: '100%' }}
      >
        <div className="container py-5">
          <div className="row m-0 p-0 position-relative ">
            <div className="col-sm-6 p-sm-3 py-4 py-sm-0 mb-4">
              <div className="learn-content position-relative">
                <img
                  className="position-absolute desktop w-100 h-100"
                  src="/img/nifty-learn/getting-started.png"
                />
                <img
                  className="position-absolute mobile w-100 h-100"
                  src="/img/nifty-learn/getting-started.png"
                />
                <div className="text-center py-sm-5 p-4 px-sm-0 position-relative d-flex flex-column align-items-center">
                  <h3 className="mt-sm-4 mt-2 text-m-center">
                    Getting started
                  </h3>
                  <p className="font-16 text-m-center">
                    Here, you&apos;ll find curated how-to guides and
                    <br /> information to help get you started.
                  </p>
                  <button className="btn theme-btn-aqua my-sm-2 my-0">
                    Begin
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 p-sm-3 py-4 py-sm-0 mb-4">
              <div className="learn-content position-relative">
                <img
                  className="position-absolute desktop w-100 h-100"
                  src="/img/nifty-learn/gitbook.png"
                />
                <img
                  className="position-absolute mobile w-100 h-100"
                  src="/img/nifty-learn/gitbook.png"
                />
                <div className="text-center py-sm-5 p-4  px-sm-0 position-relative d-flex flex-column align-items-center ">
                  <h3 className="mt-sm-4 mt-2 text-m-center">GitBook</h3>
                  <p className="font-16 text-m-center">
                    Here, you&apos;ll find curated how-to guides and
                    <br /> information to help get you started.
                  </p>
                  <button className="btn theme-btn-aqua my-sm-2 my-0">
                    visit gitbook
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 p-sm-3 py-4 py-sm-0 mb-4">
              <div className="learn-content position-relative">
                <img
                  className="position-absolute desktop w-100 h-100"
                  src="/img/nifty-learn/tutorials.png"
                />
                <img
                  className="position-absolute mobile w-100 h-100"
                  src="/img/nifty-learn/tutorials.png"
                />
                <div className="text-center py-sm-5 p-4 px-sm-0 position-relative d-flex flex-column align-items-center justify-content-center">
                  <h3 className="mt-sm-4 mt-2 text-m-center">Tutorials</h3>
                  <p className="font-16 text-m-center">
                    Here, you&apos;ll find curated how-to guides and
                    <br /> information to help get you started.
                  </p>
                  <button className="btn theme-btn-aqua my-sm-2 my-0">
                    see tutorials
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 p-sm-3 py-4 py-sm-0 mb-4">
              <div className="learn-content position-relative">
                <img
                  className="position-absolute desktop w-100 h-100"
                  src="/img/nifty-learn/community.png"
                />
                <img
                  className="position-absolute mobile w-100 h-100"
                  src="/img/nifty-learn/community.png"
                />
                <div className="text-center py-sm-5 p-4 px-sm-0 position-relative d-flex flex-column align-items-center justify-content-center">
                  <h3 className="mt-sm-4 mt-2 text-m-center">Community</h3>
                  <p className="font-16 text-m-center">
                    Here, you&apos;ll find curated how-to guides and
                    <br /> information to help get you started.
                  </p>
                  <button className="btn theme-btn-aqua my-sm-2 my-0">
                    get involved
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container learn-section" style={{ maxWidth: '100%' }}>
        <div className="container py-sm-5 py-0">
          <div className="text-center">
            <h2 className="my-3 pt-5">Frequently Asked Questions</h2>
            <p className="text-m-center">
              The Nifty League&apos;s global and vibrant community drives the
              success
              <br /> of the system. Join the conversation on Discord and
              Twitter; and find
              <br /> the complete collection on OpenSea.
            </p>
          </div>
          <div className="faq-content d-flex align-items-center flex-column py-5">
            <div className="w-100 panel py-4 my-2">
              <button className="collapsible">
                <h4 className="letter-0 mb-0 my-3">
                  What&apos;s Nifty League degen
                  <br /> minting all about?
                </h4>
              </button>
              <div className="content ">
                <p className="color-white mt-4">
                  Nifty League DEGEN NFTs were brought to life by our community
                  at the end of Sept 2021. The minting process was a
                  one-of-a-kind spectacle that allowed minters the ability to
                  design their own DEGEN using Satoshi&apos;s Mint-O-Matic!{' '}
                </p>
              </div>
            </div>
            <div className="w-100 panel py-4 my-2">
              <button className="collapsible">
                <h4 className="letter-0 mb-0 my-4">Nifty Smashers Alpha</h4>
              </button>
              <div className="content ">
                <p className="color-white mt-4">
                  Rather than inflating the character supply as some projects
                  may do, we are introducing a bespoke rental system allowing
                  DEGEN holders to earn NFTL daily through fees.{' '}
                </p>
              </div>
            </div>
            <div className="w-100 panel py-4 my-2">
              <button className="collapsible">
                <h4 className="letter-0 mb-0 my-4">
                  What platforms do you support?
                </h4>
              </button>
              <div className="content ">
                <p className="color-white mt-4">
                  Rather than inflating the character supply as some projects
                  may do, we are introducing a bespoke rental system allowing
                  DEGEN holders to earn NFTL daily through fees.{' '}
                </p>
              </div>
            </div>
            <div className="w-100 panel py-4 my-2">
              <button className="collapsible">
                <h4 className="letter-0 mb-0 my-4">
                  Do you have a leaderboard?
                </h4>
              </button>
              <div className="content ">
                <p className="color-white mt-4">
                  Rather than inflating the character supply as some projects
                  may do, we are introducing a bespoke rental system allowing
                  DEGEN holders to earn NFTL daily through fees.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 p-0 position-relative stay-informed-section">
        <img src="/img/footer-img1.png" className="p-0 w-100 h-auto mobile" />
        <img
          src="/img/footer-img.png"
          className="p-0 w-100 h-auto desktop pixelated"
        />
        <div className="position-absolute text-center  d-flex align-items-center flex-column mt-5 pt-sm-5">
          <h2 className="mt-4">Stay informed</h2>
          <p className="my-3 text-m-center">
            Join the community and keep up-to-date <br /> with our development
            process.
          </p>
          <button className="btn theme-btn-aqua w-auto bg-black my-3 discord-btn">
            <span className="me-2">
              join the nifty league community on discord
            </span>

            <svg
              width="33"
              height="24"
              viewBox="0 0 33 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.4116 1.98947C25.4047 1.06863 23.2526 0.390197 21.0025 0.00162999C20.9615 -0.00586923 20.9206 0.0128717 20.8995 0.0503545C20.6227 0.54262 20.3161 1.18482 20.1015 1.68959C17.6813 1.32727 15.2736 1.32727 12.9031 1.68959C12.6883 1.1736 12.3706 0.54262 12.0926 0.0503545C12.0715 0.0141223 12.0306 -0.00461862 11.9896 0.00162999C9.74069 0.388955 7.58863 1.06739 5.58051 1.98947C5.56313 1.99696 5.54823 2.00947 5.53834 2.0257C1.45632 8.12415 0.338082 14.0727 0.886651 19.9475C0.889133 19.9762 0.905267 20.0037 0.927607 20.0212C3.62081 21.999 6.22963 23.1998 8.79001 23.9956C8.83099 24.0081 8.8744 23.9931 8.90048 23.9594C9.50614 23.1323 10.046 22.2602 10.5089 21.3431C10.5363 21.2894 10.5102 21.2257 10.4543 21.2044C9.59798 20.8796 8.78256 20.4835 7.99818 20.0337C7.93614 19.9975 7.93117 19.9087 7.98825 19.8663C8.15331 19.7426 8.31842 19.6139 8.47603 19.4839C8.50454 19.4602 8.54428 19.4552 8.57781 19.4702C13.7308 21.8229 19.3096 21.8229 24.4019 19.4702C24.4354 19.454 24.4751 19.459 24.5049 19.4827C24.6625 19.6126 24.8276 19.7426 24.9939 19.8663C25.051 19.9087 25.0473 19.9975 24.9852 20.0337C24.2008 20.4922 23.3854 20.8796 22.5278 21.2032C22.472 21.2244 22.4472 21.2894 22.4745 21.3431C22.9473 22.2589 23.4872 23.131 24.0817 23.9582C24.1065 23.9931 24.1512 24.0081 24.1922 23.9956C26.7649 23.1998 29.3738 21.999 32.067 20.0212C32.0905 20.0037 32.1054 19.9775 32.1079 19.9488C32.7645 13.1568 31.0083 7.25706 27.4525 2.02694C27.4438 2.00947 27.429 1.99696 27.4116 1.98947ZM11.2785 16.3704C9.72704 16.3704 8.44871 14.946 8.44871 13.1968C8.44871 11.4476 9.70225 10.0233 11.2785 10.0233C12.867 10.0233 14.133 11.4601 14.1082 13.1968C14.1082 14.946 12.8546 16.3704 11.2785 16.3704ZM21.741 16.3704C20.1896 16.3704 18.9113 14.946 18.9113 13.1968C18.9113 11.4476 20.1647 10.0233 21.741 10.0233C23.3296 10.0233 24.5955 11.4601 24.5707 13.1968C24.5707 14.946 23.3296 16.3704 21.741 16.3704Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Learn;
