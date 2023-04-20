import Image from 'next/legacy/image';
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
          is now live for Windows users!
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
    title: 'Play-&-Earn (DEPRECATED)',
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
    title: 'DEGEN Rentals (DEPRECATED)',
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
          in the NiftyVerse. Some early honorary DEGENS:
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
    completed: true,
    completionDate: 'Jun 15th, 2022',
    image: {
      height: 1080,
      src: '/img/roadmap/wen.gif',
      style: { top: '-130px' },
      width: 1440,
    },
    title: 'WEN Game',
    body: (
      <>
        <p>
          <strong>
            <a href="https://app.niftyleague.com/games/wen-game" target="_blank" rel="noreferrer">
              WEN
            </a>
          </strong>{' '}
          is a game of timing and reflex. The purpose of the game is to try and hit as many baseballs (launched from a
          baseball machine) as possible in a row to get a high score. Arcade Tokens are used to play WEN Game. Players
          earn Arcade Tokens every day they complete a Nifty Smashers match! This game marks our first Arcade Game
          launched and can be played without owning or renting a DEGEN.
        </p>
      </>
    ),
  },
  {
    completed: true,
    completionDate: 'Aug 4th, 2022',
    image: {
      height: 1080,
      src: '/img/roadmap/mt-gawx.gif',
      style: { top: '-135px' },
      width: 1440,
    },
    title: 'Mt. Gawx',
    body: (
      <>
        <p>
          Hearing the DEGENs&apos; desperate pleas to spend their hard-earned NFTL and with bigger sinks still under his
          development, Satoshi suggests the DEGENs climb to the top of the{' '}
          <strong>
            <a href="https://app.niftyleague.com/games/mt-gawx" target="_blank" rel="noreferrer">
              Mt. Gawx
            </a>
          </strong>{' '}
          volcano to offer their NFTL sacrifices to the fiery depths to see who might burn the most, and to discover
          whether the rumors of Rugman offering interesting rewards to burners are true.
        </p>
      </>
    ),
  },
  {
    completed: true,
    completionDate: 'Sept 20th, 2022',
    image: {
      height: 1080,
      src: '/img/roadmap/crypto-winter.png',
      style: { top: '-140px' },
      width: 1440,
    },
    title: 'Crypto Winter',
    body: (
      <>
        <p>
          <strong>
            <a href="https://app.niftyleague.com/games/crypto-winter" target="_blank" rel="noreferrer">
              Crypto Winter
            </a>
          </strong>{' '}
          is a our second arcade style game which also depends on skillful timing and reflex. Play this single-player
          dodgeball-inspired arcade game and rank as high as you can!
        </p>
      </>
    ),
  },
  {
    completed: true,
    completionDate: 'Nov 11th, 2022',
    image: {
      height: 250,
      src: '/img/roadmap/imx.png',
      style: { top: '-180px' },
      width: 250,
    },
    title: 'L2 Migration',
    body: (
      <>
        <p>
          Selecting a suitable Layer 2 partner is crucial to scaling our ecosystem at Nifty League, and we couldn&apos;t
          be more excited to start rolling out products on{' '}
          <strong>
            <a href="https://www.immutable.com/" target="_blank" rel="noreferrer">
              Immutable X (IMX)
            </a>
          </strong>{' '}
          . IMX is solely focused on powering the next generation of Web3 games which positions Nifty League to
          capitalize on the upcoming wave of mainstream adoption.
        </p>
      </>
    ),
  },
  {
    completed: true,
    completionDate: 'Nov 16th, 2022',
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
          be able to burn each page for special in-game items or an exclusive key to the Citadel... but the fun
          doesn&apos;t stop there!
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
    completed: true,
    completionDate: 'Feb 13th, 2023',
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
    completed: true,
    completionDate: 'Feb 17th, 2023',
    image: {
      height: 384,
      src: '/img/roadmap/hydra.png',
      style: { top: '-180px' },
      width: 384,
    },
    title: 'The Hatching',
    body: (
      <>
        <p>
          The ultimate sacrifice was made on this day to bring the ancient Hydras back from extinction. Community
          members lined up to send 8 DEGENs through a portal forever burning their existence from the blockchain. In
          return? A claim at one of 98 rare Hydra eggs.
        </p>
        <p className="mb-0">
          Hydras are amphibious water dragons that roam freely underwater or on land. Their cuteness belies their wise
          and fighting prowess. They pack a punch with their tridents, spears, and ranged attacks and bring a wealth of
          lore knowledge to Nifty League, being the oldest tribe.
        </p>
      </>
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
          Scaling our platform is a high priority. Part of this process is onboarding new users who may not be able to
          afford to own or rent a DEGEN.
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
      height: 1070,
      src: '/img/roadmap/release-candidate.png',
      style: { top: '-120px' },
      width: 1618,
    },
    title: 'Smashers Progression',
    body: (
      <p className="mb-0">
        We are implementing several fundamental tools for our games including progression and marketplace systems. These
        systems incentivize players to stick around by rewarding them for milestones that drive engagement and
        retention. Nifty Smashers will be the first game we integrate with live ops tooling as part of its mobile
        launch. In addition, we are training Smashers AI to keep lobbies full and accomodate multiple skill levels.
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
    title: 'Nifty Smashers Mobile',
    body: (
      <p className="mb-0">
        Bringing Smashers to Mobile (Android first). Going forward all of our games will be mobile compatible. With a
        high concentration of gamers using mobile platforms, we envision this release will be pivotal to the project.
      </p>
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
          additions, many will include <strong>NFTL</strong> multipliers for play-&-earn.
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
      src: '/img/roadmap/niftyverse_v02.png',
      style: { top: '-160px' },
      width: 757,
      height: 675,
    },
    title: 'NiftyVerse',
    body: (
      <>
        <p>
          Welcome to the NiftyVerse; a world filled with DEGENS and NFT communities alike with a shared vision to have
          fun and build a thriving gaming ecosystem. What makes the Niftyverse stand apart from other metaverses is our
          games being the centerpiece. Walk into our arcade room filled with fun mini-games or venture to destinations
          on the map to jump into our classic titles like Nifty Smashers and Nifty Kart.
        </p>
        <p>
          While Nifty League focuses on building a decentralized game platform with titles such as Nifty Smashers and
          other Nintendo-inspired games, NiftyVerse stands at the heart of our ecosystem tying everything together.
          It&apos;s not only the central lobby system or launch point for many of these games, but the main hub for all
          social interactions (and quite frankly our biggest game in and of itself).
        </p>
        <p>
          If you&apos;re a creative type, don&apos;t miss this opportunity - we will have an asset store for you to
          design assets such as buildings or trees and list them for sale based on your defined limits and pricing. Do
          you want a cool DEGEN theme park or Cyber Kongz meetup? Build out the NiftyVerse to whatever your heart
          desires!
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
        We will gradually transfer ownership of Nifty League to our DAO in order to decentralize the platform and
        encourage others to build with us! Our vision is to power rapid growth and development through community
        contributions enabling us to build a gaming platform like no other. Simply put, DAOs are the future. We see only
        one route to becoming the world&apos;s leading gaming platform and that&apos;s by building together. 💜
      </p>
    ),
  },
  {
    divider: true,
    image: {
      src: '/img/roadmap/NiftyMansion.png',
      style: { top: '-100px' },
      width: 1920,
      height: 1080,
    },
    title: 'Land',
    body: (
      <>
        <p>
          Land parcels give you ownership in the NiftyVerse. Each DEGEN NFT will recieve 1 free plot of land if and when
          the mint goes live. As a land holder you can build freely on your parcels as long as they meet platform
          guidelines. For larger developments that span across a region we will introduce an HOA model for build
          proposals.
        </p>
        <p className="mb-0">
          Oh... and it&apos;s probably worth noting the land and assets will be sold with <strong>NFTL</strong> (a
          portion of which will be burned).
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
          Following our NiftyVerse launch we will introduce cool pets for your DEGENS! A lot of community members have
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
        Early development of Nifty Tennis already started in 2022. We plan to accommodate all playstyles whether playing
        competitively or just for fun.
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
        we&apos;d like to introduce is a fun battle royale based in the NiftyVerse.
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
        As our platform grows and demand increases for DEGENs - we may consider introducing new tribes. Do note that the
        final decision to go this route will rest with the DAO.
      </p>
    ),
  },
];
