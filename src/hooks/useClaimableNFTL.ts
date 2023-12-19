import { useEffect, useState } from 'react';
// import { useContractRead } from 'wagmi';
import { formatEther, createPublicClient, http, Abi } from 'viem';
import CONTRACTS from '@/constants/contracts';
import { mainnet } from 'viem/chains';

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

const NFTL_CONTRACT = CONTRACTS.NFTLToken;

interface NFTLClaimableState {
  totalAccrued: number;
  loading: boolean;
}

export default function useClaimableNFTL(tokenId: number | string): NFTLClaimableState {
  // const { data, isLoading: loading } = useContractRead({
  //   address: NFTL_CONTRACT.address,
  //   abi: NFTL_CONTRACT.abi,
  //   functionName: 'accumulated',
  //   args: [tokenId],
  //   cacheTime: 300_000,
  //   enabled: !!tokenId,
  //   select: (data: unknown) => (data ? parseFloat(formatEther(data as bigint)) : 0),
  // });

  // return { totalAccrued: data || 0, loading };

  const [totalAccrued, setTotalAccrued] = useState(0);

  useEffect(() => {
    const readContract = async () => {
      const data = await publicClient.readContract({
        address: NFTL_CONTRACT.address,
        abi: NFTL_CONTRACT.abi as Abi,
        functionName: 'accumulated',
        args: [tokenId],
      });
      setTotalAccrued(data ? parseFloat(formatEther(data as bigint)) : 0);
    };
    if (tokenId) readContract();
  }, [tokenId]);

  return { totalAccrued, loading: false };
}
