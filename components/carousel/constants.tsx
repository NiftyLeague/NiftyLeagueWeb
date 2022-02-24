import Image from 'next/image';

export const SponsorImageURLs = [
  '/img/spons2.png',
  '/img/spons3.png',
  '/img/spons4.png',
  '/img/spons5.png',
  '/img/spons6.png',
];

export const DegenData = [
  {
    name: 'Grape',
    createdDate: '9/24/2021 1:35 PM',
    source: '/img/degens/grape.png',
  },
  {
    name: 'Pirate Morty',
    createdDate: '9/30/2021 3:49 PM',
    source: '/img/degens/piratemorty.png',
  },
  {
    name: 'Bruno Mars',
    createdDate: '9/24/2021 2:54 PM',
    source: '/img/degens/brunomars.png',
  },
  {
    name: 'Degen 3234',
    createdDate: '9/30/2021 12:26 AM',
    source: '/img/degens/3234.png',
  },
  {
    name: 'Degen 212',
    createdDate: '9/24/2021 2:13 PM',
    source: '/img/degens/212.png',
  },
  {
    name: 'Degen 50',
    createdDate: '9/24/2021 1:20 PM',
    source: '/img/degens/50.png',
  },
  {
    name: 'Nifty Sonic',
    createdDate: '9/24/2021 2:18 PM',
    source: '/img/degens/niftysonic.png',
  },
  {
    name: 'Beard Kong',
    createdDate: '9/24/2021 1:45 PM',
    source: '/img/degens/beardkong.png',
  },
  {
    name: 'Shih Tzu Doge',
    createdDate: '9/24/2021 2:07 PM',
    source: '/img/degens/shihtzudoge.png',
  },
  {
    name: 'Degen 18',
    createdDate: '9/24/2021 1:04 PM',
    source: '/img/degens/18.png',
  },
  {
    name: 'Monopoly Frog',
    createdDate: '9/24/2021 2:53 PM',
    source: '/img/degens/monopolyfrog.png',
  },
  {
    name: 'Snowball II',
    createdDate: '9/24/2021 2:26 PM',
    source: '/img/degens/snowballii.png',
  },
  {
    name: 'This One is for the Whales',
    createdDate: '9/30/2021 3:49 PM',
    source: '/img/degens/thisoneisforthewhales.png',
  },
  {
    name: 'Degen 9888',
    createdDate: '9/30/2021 3:51 PM',
    source: '/img/degens/9888.png',
  },
  {
    name: 'wagmi',
    createdDate: '9/24/2021 1:35 PM',
    source: '/img/degens/wagmi.png',
  },
  {
    name: '201',
    createdDate: '9/24/2021 2:11 PM',
    source: '/img/degens/201.png',
  },
  {
    name: 'Degen 128',
    createdDate: '9/24/2021 1:42 PM',
    source: '/img/degens/128.png',
  },
];

export const TeamData = [
  {
    name: 'Nifty Andy',
    title: 'Co-Founder, CEO',
    source: '/img/degens/NiftyAndy.png',
    children: (
      <>
        <label className="uppercase mt-5 pt-3">formerly</label>
        <div className="my-2">
          <Image
            alt="Activision logo"
            height={60}
            layout="responsive"
            src="/img/degens/about/activision.svg"
            width={252}
          />
        </div>
        <label className="uppercase">3 years</label>
      </>
    ),
  },
  {
    name: 'Snarfy',
    title: 'Co-Founder, CTO',
    source: '/img/degens/Snarfy.png',
    children: (
      <>
        <label className="uppercase mt-5 pt-3">formerly</label>
        <div className="my-2">
          <Image alt="Activision logo" height={60} layout="responsive" src="/img/about/activision.svg" width={252} />
        </div>
        <label className="uppercase">8 years</label>
      </>
    ),
  },
  {
    name: 'Nifty Spike',
    title: 'Co-Founder, Creative Director',
    source: '/img/degens/NiftySpike.png',
    children: (
      <>
        <label className="uppercase mt-5 pt-3">Former clients</label>
        <div className="my-2">
          <Image alt="Nickelodeon logo" height={37} layout="responsive" src="/img/about/nickelodeon.svg" width={252} />
        </div>
        <Image alt="Disney logo" height={132} layout="responsive" src="/img/about/disney.svg" width={252} />
      </>
    ),
  },
  {
    name: 'Nifty Morgan',
    title: 'VP of Ops',
    source: '/img/degens/NiftyMorgan.png',
  },
  {
    name: 'Koa',
    title: 'DAO Director',
    source: '/img/degens/koa.png',
  },
  {
    name: 'Bolo Dave',
    title: 'Program & Community Manager',
    source: '/img/degens/bolo.png',
  },
  {
    name: 'Zoiby',
    title: 'Senior Software Developer',
    source: '/img/degens/zoiby.png',
  },
  {
    name: 'Nifty Michael',
    title: 'Web3 Developer',
    source: '/img/degens/NiftyMichael.png',
  },
  {
    name: 'Jeppe',
    title: 'Marketing Manager',
    source: '/img/degens/jeppe.png',
  },
];
