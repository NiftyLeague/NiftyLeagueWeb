import Image from 'next/image';
import styles from './index.module.scss';

export const ROADMAP_CARDS = [
  {
    completed: true,
    completionDate: 'Sept 24th - 30th, 2021',
    image: {
      height: 350,
      src: '/img/roadmap/creation.png',
      style: { top: '-90px' },
      width: 661,
    },
    title: 'DEGEN Minting',
    body: (
      <p className="mb-0">
        Nifty League DEGEN NFTs were brought to life by our community at the end of Sept 2021. The minting process was a
        one-of-a-kind spectacle that allowed minters the ability to design their own DEGEN using Satoshi&apos;s{' '}
        <strong>
          <a href="https://app.niftyleague.com/mint-o-matic" target="_blank" rel="noreferrer">
            Mint-O-Matic
          </a>
        </strong>
        !
      </p>
    ),
  },
  {
    completed: true,
    completionDate: 'Sept 24th, 2021 - Present',
    image: {
      height: 272,
      src: '/img/roadmap/smash_200.png',
      style: { top: '-80px' },
      width: 518,
    },
    title: 'Nifty Smashers Alpha',
    body: (
      <p>
        Our NFT launch coincided with the immediate availability of our first of many games,{' '}
        <strong>
          <a href="https://app.niftyleague.com/games" target="_blank" rel="noreferrer">
            Nifty Smashers
          </a>
        </strong>
        .
      </p>
    ),
  },
  {
    completed: true,
    completionDate: 'Dec 2nd, 2021',
    image: {
      height: 350,
      src: '/img/roadmap/desktop-app_v02.png',
      style: { top: '-115px' },
      width: 514,
    },
    title: 'Desktop App',
    body: (
      <>
        <p>
          The{' '}
          <strong>
            <a href="https://app.niftyleague.com/games" target="_blank" rel="noreferrer">
              Desktop App
            </a>
          </strong>{' '}
          is now live for Windows users! <em>(MacOS is right around the corner)</em>
        </p>
        <p className="mb-0">
          Considering browser limitations with our previous WebGL build, we made a point to focus our immediate efforts
          on creating a launcher to house all of our games and include Discord integrations. Now that memory limits are
          not a concern we are free to introduce additional animations, movesets, and other NFT projects - all while
          significantly improving ping for our users.
        </p>
      </>
    ),
  },
  {
    completed: true,
    completionDate: 'Jan 22nd, 2022',
    image: {
      height: 364,
      src: '/img/roadmap/p2e_v02.png',
      style: { top: '-100px' },
      width: 586,
    },
    title: 'Play-2-Earn',
    body: (
      <>
        <p>
          How cool is it to earn money while playing games you actually enjoy? With the rollout of our P2E system
          you&apos;ll be able to start accumulating <strong>NFTL</strong> through casual matches in Nifty Smashers .
        </p>
        <p className="mb-0">
          While the largest winnings go to whoever secures 1st place in a match, you&apos;ll also earn{' '}
          <strong>NFTL</strong> through points scored as well as winning rounds. Be careful not to fall off the map
          because there will be penalties deducted from your potential earnings!
        </p>
      </>
    ),
  },
  {
    completed: true,
    completionDate: 'Feb 16th, 2022',
    image: {
      height: 412,
      src: '/img/roadmap/merch_02.png',
      style: { top: '-100px' },
      width: 634,
    },
    title: 'Merch',
    body: (
      <p className="mb-0">
        We know our community can&apos;t wait to showcase their cool DEGENS on the streets! We are excited to unveil our
        merchandise marketplace including two clothing lines. The first having a strong gaming slant similar to Pokémon,
        while the other will be focused on a rad streetwear aesthetic.
      </p>
    ),
  },
  {
    completed: true,
    completionDate: 'May 3rd, 2022',
    image: {
      height: 375,
      src: '/img/roadmap/rentals_v02.png',
      style: { top: '-100px' },
      width: 609,
    },
    title: 'DEGEN Rentals',
    body: (
      <>
        <p>
          Our player-base is currently limited to the number of unique <strong>DEGEN NFT</strong> holders. We want to
          scale our platform as much as possible without devaluing our genesis DEGEN tribes who stand at the heart of
          our ecosystem.
        </p>
        <p className="mb-0">
          Rather than inflating the character supply as some projects may do, we are introducing a bespoke rental system
          allowing DEGEN holders to earn <strong>NFTL</strong> daily through fees. Each DEGEN can be rented indefinitely
          but the cost for doing so will increase exponentially with each additional rental. This allows the market to
          decide the price for each DEGEN individually while spreading out the rentals across the board as some equipped
          with precious items, wearables, or backgrounds will have a higher earn rate through NFTL multipliers.
        </p>
      </>
    ),
  },
  {
    completed: true,
    completionDate: 'Jun 8th, 2022',
    image: {
      height: 450,
      src: '/img/roadmap/leaderboards_v02.png',
      style: { top: '-120px' },
      width: 649,
    },
    title: 'Leaderboards',
    body: (
      <>
        <p>
          Our games are meant to be competitive; what better way to showcase this than a leaderboard with star players
          like FVSVY at the top? 😏
        </p>
        <p>
          We&apos;ll include game stats for daily, weekly, monthly, and of course all-time leaders for all of our games
          in the Niftyverse. Some early honorary DEGENS:
        </p>
        <ul className={styles.content_skills}>
          <li>fvsvy 🌊</li>
          <li>SEIYA</li>
          <li>sacx</li>
          <li>RealDealMcKeel</li>
          <li>YoungParabolic</li>
          <li>I_M_I</li>
          <li>koa.eth</li>
        </ul>
      </>
    ),
  },
  {
    image: {
      height: 325,
      src: '/img/roadmap/comics_v01.png',
      style: { top: '-170px', right: '-80px' },
      width: 323,
    },
    title: 'Comics',
    body: (
      <>
        <p>
          Our team has been slowly hinting at the upcoming utilities for comics - as you may already be aware you will
          be able to burn each page for special in-game items that increase your DEGEN&apos;S multiplier... but the fun
          doesn&apos;t stop there!
        </p>
        <p>
          We previously airdropped our initial 4 comic pages to minters and still have 2 pages remaining for DEGEN
          holders in early 2022. Word from Satoshi - securing a full collection or 2 is <em>highly</em> recommended.
        </p>
        <div className="row">
          <div className="col-6 p-2">
            <Image alt="comic 1" height={500} layout="responsive" src="/img/roadmap/page1.png" width={500} />
          </div>
          <div className="col-6 p-2">
            <Image alt="comic 2" height={500} layout="responsive" src="/img/roadmap/page2.png" width={500} />
          </div>
          <div className="col-6 p-2">
            <Image alt="comic 3" height={500} layout="responsive" src="/img/roadmap/page3.png" width={500} />
          </div>
          <div className="col-6 p-2">
            <Image alt="comic 4" height={500} layout="responsive" src="/img/roadmap/page4.png" width={500} />
          </div>
        </div>
      </>
    ),
  },
  {
    image: {
      height: 400,
      src: '/img/roadmap/beta_v02.png',
      style: { top: '-130px' },
      width: 544,
    },
    title: 'Nifty Smashers Beta',
    body: (
      <p className="mb-0">
        We are implementing a new netcode solution which looks very promising even from an early development stage. Not
        only will this improve lag considerably, but you can expect some cool features such as broadcasting live games
        and having replays readily available through our archive.
      </p>
    ),
  },
  {
    image: {
      height: 400,
      src: '/img/roadmap/free2play_v02.png',
      style: { top: '-140px' },
      width: 507,
    },
    title: 'Free-2-Play',
    body: (
      <>
        <p>
          If you read the last point you&apos;ll know that scaling our platform is a high priority. Part of this process
          is onboarding new users who may not be able to afford to own or rent a DEGEN.
        </p>
        <p className="mb-0">
          Our free-2-play option will allow new users to hop in matches using a generic character which allows them to
          test out each tribe&apos;s special move, but more importantly - grind it out until they have enough{' '}
          <strong>NFTL</strong> to pay for a rental.
        </p>
      </>
    ),
  },
  {
    image: {
      height: 375,
      src: '/img/roadmap/marketplace_v02.png',
      style: { top: '-90px' },
      width: 609,
    },
    title: 'Items Marketplace',
    body: (
      <>
        <p>
          We are working with the Immutable X team to launch our items marketplace. Offerings will include cool skins,
          weapons, consumable items, and more to enhance your DEGENS in-game. While some items may be cool cosmetic
          additions, many will include <strong>NFTL</strong> multipliers for play-2-earn.
        </p>
        <p className="mb-0">
          Items will be sold via <strong>NFTL</strong> in limited quantities. 70% of all proceeds will be burned while
          the remainder will be sent to the DAO for its initial revenue stream.
        </p>
      </>
    ),
  },
  {
    image: {
      src: '/img/roadmap/dao_v02.png',
      style: { top: '-80px' },
      width: 532,
      height: 302,
    },
    title: 'DAO',
    body: (
      <p className="mb-0">
        We will gradually be transferring ownership of the Nifty League to our DAO in order to decentralize the platform
        and encourage devs to help us build! Our vision is to power rapid growth and development through community
        contributions, enabling us to build a gaming platform like no other. Simply put, DAOs are the future. We see
        only one route to becoming the world&apos;s leading GameFi platform and that&apos;s by building together. 💜
      </p>
    ),
  },
  {
    image: {
      src: '/img/roadmap/mobile_v02.png',
      style: { top: '-140px' },
      width: 387,
      height: 300,
    },
    title: 'Nifty League Mobile',
    body: (
      <p className="mb-0">
        Going forward all of our games will be mobile compatible. With a high concentration of gamers using mobile
        platforms, we envision this release will be pivotal to the project.
      </p>
    ),
  },
  {
    image: {
      src: '/img/roadmap/chat_v02.png',
      style: { top: '-100px' },
      width: 416,
      height: 250,
    },
    title: 'In-Game Chat',
    body: (
      <p className="mb-0">
        In preparation for the Niftyverse we will start by releasing an in-game chat for you to talk or text with DEGEN
        frens. Being a popular request - there is a chance this may even be introduced earlier in our timeline, so stay
        tuned!
      </p>
    ),
  },
  {
    image: {
      src: '/img/roadmap/niftyverse_v02.png',
      style: { top: '-160px' },
      width: 757,
      height: 675,
    },
    title: 'Niftyverse',
    body: (
      <>
        <p>
          Welcome to the Niftyverse; a world filled with DEGENS and NFT communities alike with a shared vision to have
          fun and build a thriving gaming community. What makes the Niftyverse stand apart from other metaverses is our
          p2e games being the centerpiece. Walk into our arcade room filled with fun mini-games or venture to
          destinations on the map to jump into our classic titles like Nifty Smashers and Nifty Kart.
        </p>
        <p>
          The world is centered around a city reminiscent of our popular Sushiswap level in Nifty Smashers. To kick
          things off we will hold a land sale with premium options in the city as well as cheaper undeveloped land
          outside the city limits. Acquiring premium land in the city where all the action is comes with the additional
          benefit of having buildings already in place that you can design however you see fit.
        </p>
        <p>
          If you&apos;re a creative type, don&apos;t miss this opportunity - we will have an asset store for you to
          design assets such as buildings or trees and list them for sale based on your defined limits and pricing. Do
          you want a cool DEGEN theme park or Cyber Kongz meetup? Build out the Niftyverse to whatever your heart
          desires!
        </p>
        <p className="mb-0">
          Oh... and it&apos;s probably worth noting the land and assets will be sold with <strong>NFTL</strong> (a
          portion of which will be burned) so it might be worth hodling your p2e earnings.
        </p>
      </>
    ),
  },
  {
    image: {
      src: '/img/roadmap/pets_v02.png',
      style: { top: '-150px' },
      width: 379,
      height: 325,
    },
    title: 'DEGEN Pets',
    body: (
      <>
        <p>
          Following our Niftyverse launch we will introduce cool pets for your DEGENS! A lot of community members have
          asked us to dust off and bring back Satoshi&apos;s{' '}
          <strong>
            <a href="https://app.niftyleague.com/mint-o-matic" target="_blank" rel="noreferrer">
              Mint-O-Matic
            </a>
          </strong>
          , and we couldn&apos;t agree more!
        </p>
        <p className="mb-0">
          DEGEN NFT holders will receive whitelist spots so our community can create pets at their leisure. A public
          offering will follow for any remaining pets. If you missed the first minting experience be sure to keep this
          one on your calendar!
        </p>
      </>
    ),
  },
  {
    image: {
      src: '/img/roadmap/NiftyTennis.png',
      style: { top: '-100px' },
      width: 500,
      height: 281,
    },
    title: 'Nifty Tennis',
    body: (
      <p className="mb-0">
        Early development of Nifty Tennis has already started for 2022! We plan to accommodate all playstyles whether
        playing competitively or just for fun.
      </p>
    ),
  },
  {
    image: {
      src: '/img/roadmap/niftyroyale_v01.png',
      style: { top: '-120px' },
      width: 541,
      height: 381,
    },
    title: 'Nifty Royale',
    body: (
      <p className="mb-0">
        It&apos;s important to note that any subsequent games will be voted upon by the DAO. One of the first games
        we&apos;d like to introduce is a fun battle royale based in the Niftyverse.
      </p>
    ),
  },
  {
    image: {
      src: '/img/roadmap/niftykart_v01.png',
      style: { top: '-165px' },
      width: 494,
      height: 462,
    },
    title: 'Nifty Kart',
    body: (
      <p className="mb-0">
        Old school classics are core to our game offerings as we recognize the power of reliving childhood favorites
        with a Web3 twist. Own your characters &amp; karts and get ready to race for <strong>NFTL</strong>!
      </p>
    ),
  },
  {
    image: {
      src: '/img/roadmap/gen2_v01.png',
      style: { top: '-125px' },
      width: 550,
      height: 451,
    },
    title: 'Gen2 DEGENs',
    body: (
      <p className="mb-0">
        As our platform grows and demand increases DEGEN rental costs - we may consider a future NFT sale introducing
        new tribes. Do note that the final decision to go this route will rest with the DAO.
      </p>
    ),
  },
];
