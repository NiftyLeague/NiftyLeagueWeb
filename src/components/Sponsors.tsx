import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { CSSProperties } from 'react';

type Sponsor = {
  image: string;
  url: string;
  width: number;
  height: number;
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    flexWrap: 'wrap',
    maxWidth: 1600,
  },
  item: {
    mobile: {
      margin: 24,
      width: 80,
    },
    desktop: {
      margin: 32,
      width: 160,
    },
  },
};

const renderSponsor = ({ image, url, width, height }: Sponsor) => (
  <SponsorItem key={image} image={image} url={url} width={width} height={height} />
);

const SponsorItem = ({ image, url, width, height }: Sponsor): JSX.Element => {
  const desktop = useMediaQuery('(min-width:768px)');
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div style={desktop ? styles.item.desktop : styles.item.mobile}>
        <Image
          alt="sponsor image"
          src={image}
          width={width}
          height={height}
          priority
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </a>
  );
};

const Sponsors = ({ sponsors }: { sponsors: Sponsor[] }) => (
  <div className="container p-0">
    <div className="row m-0 p-0 position relative py-sm-5 d-flex align-items-center justify-content-center text-center">
      <section style={styles.container as CSSProperties}>{sponsors.map(renderSponsor)}</section>
    </div>
  </div>
);

export default React.memo(Sponsors);
