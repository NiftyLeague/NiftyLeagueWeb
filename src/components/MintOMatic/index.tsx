import Image from 'next/image';
import AnimatedWrapper from '@/components/AnimatedWrapper';

export default function MintOMatic() {
  return (
    <>
      <AnimatedWrapper parallax parallaxDirection="top" transitionAmount="medium">
        <div className="position-relative">
          <Image
            src="/img/home/nftl-token-top.png"
            alt="NFTL Token Top"
            width={1470}
            height={1778}
            className="pixelated"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <div className="position-absolute home-nftl-token-image flex-grow-1">
          <Image
            src="/img/home/nftl-token-coin.png"
            alt="NFTL Token Coin"
            width={1470}
            height={1778}
            className="pixelated"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <div className="position-absolute animation-visible home-nftl-token-image flex-grow-1">
          <Image
            src="/img/home/nftl-token-tears.png"
            alt="NFTL Token Tears"
            width={1470}
            height={1778}
            className="pixelated"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper parallax parallaxDirection="right" transitionAmount="medium">
        <div className="parallax-child position-absolute home-nftl-token-image home-nftl-token-bottom-image flex-grow-1">
          <Image
            src="/img/home/nftl-token-bottom.png"
            alt="NFTL Token Bottom"
            width={1470}
            height={1778}
            className="pixelated"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </AnimatedWrapper>
    </>
  );
}
