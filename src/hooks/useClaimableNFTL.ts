import { useContractRead } from 'wagmi';
import { formatEther } from 'viem';
import CONTRACTS from '@/constants/contracts';

const NFTL_CONTRACT = CONTRACTS.NFTLToken;

interface NFTLClaimableState {
  totalAccrued: number;
  loading: boolean;
}

export default function useClaimableNFTL(tokenId: number | string): NFTLClaimableState {
  const { data, isLoading: loading } = useContractRead({
    address: NFTL_CONTRACT.address,
    abi: NFTL_CONTRACT.abi,
    functionName: 'accumulated',
    args: [tokenId],
    cacheTime: 300_000,
    enabled: !!tokenId,
    select: (data: unknown) => (data ? parseFloat(formatEther(data as bigint)) : 0),
  });

  return { totalAccrued: data || 0, loading };
}
