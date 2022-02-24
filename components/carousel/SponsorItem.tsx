import Image from 'next/image';

const SponsorCarouselItem = ({ source }: { source: string }): JSX.Element => (
  <div className="slide">
    <div className="slide-content">
      <div className="spons-single">
        <Image src={source} layout="fixed" width="153" height="59" />
      </div>
    </div>
  </div>
);

export default SponsorCarouselItem;
