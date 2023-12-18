import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '@/components/Layout';
import RoadmapTimeline, { styles as roadmapStyles } from '@/components/RoadmapTimeline';
import satoshiStyles from './satoshi-right.module.scss';

const Roadmap: NextPage = () => {
  return (
    <Layout classes={{ root: roadmapStyles.roadmap_pg }}>
      <Head>
        <title>Nifty League | Roadmap</title>
        <meta property="og:title" content="Nifty League | Roadmap" />
        <meta name="description" content="Nifty League roadmap... or moonmap?" key="desc" />
        <meta property="og:description" content="Nifty League roadmap... or moonmap?" />
        <meta property="og:image" content="https://niftyleague.com/img/roadmap/roadmap.png" />
      </Head>

      <div className={roadmapStyles.stars}>
        <div className={roadmapStyles.stars2}>
          <div className={satoshiStyles.satoshiMove}>
            <Image
              src="/img/roadmap/satoshi_move.gif"
              alt="satoshi moving"
              width={200}
              height={200}
              priority
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
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
              <Image
                src="/img/roadmap/moon.png"
                alt="moon"
                width={800}
                height={800}
                priority
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Roadmap;
