import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/legacy/image';

import Layout from '@/components/Layout';
import RoadmapTimeline, { styles as roadmapStyles } from '@/components/RoadmapTimeline';
import satoshiStyles from './satoshi-right.module.scss';

const Roadmap: NextPage = () => {
  return (
    <Layout classes={{ root: roadmapStyles.roadmap_pg }}>
      <Head>
        <title>Nifty League | Roadmap</title>
        <meta name="description" content="Nifty League roadmap... or moonmap?" />
      </Head>

      <div className={roadmapStyles.stars}>
        <div className={roadmapStyles.stars2}>
          <div className={satoshiStyles.satoshiMove}>
            <Image
              src="/img/roadmap/satoshi_move.gif"
              alt="satoshi moving"
              width={200}
              height={200}
              layout="responsive"
              priority
            />
          </div>
          <div className={satoshiStyles.satoshiStationary}>
            <Image
              src="/img/roadmap/satoshi_stationary.gif"
              alt="satoshi stationary"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={roadmapStyles.earth} />
          <h2 className={roadmapStyles.roadmap_title}>Nifty League Moonmap</h2>
          <div className={roadmapStyles.cat_planet} />
          <div className={roadmapStyles.animated_star} />
          <div className={roadmapStyles.animated_star2} />
          <div className={roadmapStyles.animated_star3} />
          <div className={roadmapStyles.animated_star4} />
          <div className={roadmapStyles.animated_star5} />
          <div className={roadmapStyles.animated_star6} />
          <RoadmapTimeline />
          <div className={roadmapStyles.mars} />
          <div className={roadmapStyles.animated_star7} />
          <div className={roadmapStyles.animated_star8} />
          <div className={roadmapStyles.animated_star9} />
          <div className="w-100 d-flex justify-content-center">
            <div className={roadmapStyles.moon}>
              <Image src="/img/roadmap/moon.png" alt="moon" width={800} height={800} layout="responsive" priority />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Roadmap;
