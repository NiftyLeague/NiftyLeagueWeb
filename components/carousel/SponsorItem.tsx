import Image from 'next/image';

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
    <div className="slide">
      <div className="slide-content">
        <div className="spons-single">
          <Image alt="sponsor image" src={source} layout="responsive" width={width} height={height} />
        </div>
      </div>
    </div>
  </a>
);

export default SponsorCarouselItem;
