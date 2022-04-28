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
        <div className="container pt-5 mt-sm-5 px-0 px-sm-5 mw-9-10">
          <div className="row m-0 position-relative com-intro-content">
            <h2 className="mt-5">Work with</h2>
            <h1>Nifty League</h1>
          </div>
          <div className='position-relative my-5 max-w-900 mx-auto'>
            <Image
              src="/img/careers/careers_v02_4x.png"
              alt="careers"
              width="100%"
              height="50%"
              layout="responsive"
              objectFit="contain"
            />
          </div>


        </div>
      </div>

      <div className="container mw-100 mb-5">
        <div className="row m-0 p-0 position-relative text-center coversation-container">
          <div className="">
            <h2 className="">Join Us</h2>
            <p className="text-m-center m-auto max-w-900">
              Nifty League is leading competitive gaming in the metaverse - moving away from play-to-earn into a new era of play-and-earn by offering a fun and engaging gaming ecosystem. We are backed by top VCs including RSE Ventures, Lerer Hippeau, Spartan Group, and Gary Vaynerchuk, and are looking to bulk out our engineering team with world-class Unity game developers. As a startup, we are lean, have low egos, work hard and love what we do. You will have a large amount of ownership and work directly with the co-founders and community. If this sounds exciting to you, keep reading!
            </p>
          </div>
        </div>
      </div>

      <div className="container mw-100 mt-5">
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
