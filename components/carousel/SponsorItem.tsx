import Image from 'next/image';

export const renderSponsor = ({ image, url, width, height }: any) => (
  <SponsorCarouselItem key={image} source={image} url={url} width={width} height={height} />
);

const SponsorCarouselItem = ({
  source,
  url,
  width,
  height,
}: {
  source: string;
  url: string;
  width: number;
  height: number;
}): JSX.Element => (
  <a href={url} target="_blank" rel="noreferrer">
    <div className="slide-content">
      <div className="spons-single">
        <Image alt="sponsor image" src={source} layout="responsive" width={width} height={height} priority />
      </div>
    </div>
  </a>
);

export default SponsorCarouselItem;
