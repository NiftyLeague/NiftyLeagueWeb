import { useEffect, useState } from 'react';
import type { Abi, GetBlockNumberErrorType } from 'viem';
import { formatEther } from 'viem';
import CONTRACTS from '@/constants/contracts';
import { publicClient } from '@/lib/viemClient';

const NFTL_CONTRACT = CONTRACTS.NFTLToken;

interface NFTLClaimableState {
  totalAccrued: number;
  loading: boolean;
}

export default function useClaimableNFTL(tokenId: number | string): NFTLClaimableState {
  const [totalAccrued, setTotalAccrued] = useState(0);

  useEffect(() => {
    const readContract = async () => {
      try {
        const data = await publicClient.readContract({
          address: NFTL_CONTRACT.address,
          abi: NFTL_CONTRACT.abi as Abi,
          functionName: 'accumulated',
          args: [tokenId],
        });
        setTotalAccrued(data ? parseFloat(formatEther(data as bigint)) : 0);
      } catch (e) {
        const error = e as GetBlockNumberErrorType;
        console.error(error);
      }
    };
    if (tokenId) readContract();
  }, [tokenId]);

  return { totalAccrued, loading: false };
}
