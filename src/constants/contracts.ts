import NFTL_TOKEN_ABI from './abis/NFTLToken.json';
import NIFTY_DEGEN_ABI from './abis/NiftyDegen.json';
import NIFTY_ITEM_L2 from './abis/NiftyItemL2.json';
import NIFTY_LAUNCH_COMICS_ABI from './abis/NiftyLaunchComics.json';

const CONTRACTS: {
  [contractName: string]: { address: `0x${string}`; abi: any[] };
} = {
  NFTLToken: {
    address: '0x3c8D2FCE49906e11e71cB16Fa0fFeB2B16C29638',
    abi: NFTL_TOKEN_ABI,
  },
  NiftyDegen: {
    address: '0x986aea67C7d6A15036e18678065eb663Fc5BE883',
    abi: NIFTY_DEGEN_ABI,
  },
  NiftyItemL2: {
    address: '0xc21909b7E596000C01318668293A7DFB4B37A578',
    abi: NIFTY_ITEM_L2,
  },
  NiftyLaunchComics: {
    address: '0xBc8542e65ab801f7c9e3edd23238d37a2e3972d6',
    abi: NIFTY_LAUNCH_COMICS_ABI,
  },
};

export default CONTRACTS;
