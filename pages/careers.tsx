import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import JobCard from '../components/careers/JobCard';
import Layout from '../components/layout';
import { JOBS } from '../data/constants';

const Careers: NextPage = () => {
  return (
    <Layout classes={{ root: 'com-pg' }}>
      <Head>
        <title>Work With Us | Nifty League</title>
        <meta name="description" content="Join us and bring competitive gaming to Web3." />
      </Head>

      <div className="position-relative pt-md-5 mt-md-5 career-intro">
        <div className="container pt-5 mt-sm-5 px-0 px-sm-5" style={{ maxWidth: '90%' }}>
          <div className="row m-0 position-relative com-intro-content">
            <div className="col-md-6 px-0 com-intro-text">
              <h4 className="mt-5">Nifty League</h4>
              <h1>Career</h1>
              <p className="my-3">Join us and bring competitive gaming to Web3</p>
            </div>
            <div className="col-sm-8 col-md-6 col-xl-4 position-relative text-center com-banner">
              <Image
                src="/img/careers/careers_v02_1x.png"
                alt="careers"
                layout='fill'
                objectFit='contain'
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container com-content" style={{ maxWidth: '100%' }}>
        <div className="row m-0 p-0 position-relative text-center coversation-container">
          <div className="">
            <h2 className="">Join US</h2>
            <p className="text-m-center m-auto" style={{ maxWidth: 600 }}>
              Nifty League is leading competitive gaming in the metaverse - moving away from play-to-earn into a new era of play-and-earn by offering a fun and engaging gaming ecosystem
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '100%', minHeight: 900 }}>
        {
          JOBS.map(details =>
            <JobCard key={details.id} details={details} />
          )
        }
      </div>
    </Layout>
  );
};

export default Careers;
