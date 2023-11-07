import Image from 'next/image';
import { memo } from 'react';
import { useMediaQuery } from '@mui/material';

import styles from './index.module.scss';

export const renderDegen = (degen: any) => (
  <DegenCardItem key={degen.name} name={degen.name} createdDate={degen.createdDate} source={degen.source} />
);

const DegenCardItem = ({
  name,
  source,
  createdDate,
}: {
  name: string;
  source: string;
  createdDate: string;
}): JSX.Element => {
  const mobile = useMediaQuery('(max-width:615px)');
  const small = useMediaQuery('(max-width:768px)');
  return (
    <div className="slide">
      <div className={styles.slide_content}>
        <div className="browse-single">
          {!mobile ? (
            <div className="d-flex p-2 p-sm-3 p-md-4 pb-0 align-items-center">
              <h6 className="me-auto mb-0">{name}</h6>
              <div className="ms-auto">
                <Image
                  src="/icons/opensea.svg"
                  alt="OpenSea Logo"
                  width={20}
                  height={20}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          ) : null}
          {!small ? (
            <div className="d-flex px-2 px-sm-4 pb-3 align-items-center">
              <button className="me-1">Created</button>
              <label>{createdDate}</label>
            </div>
          ) : null}

          <div style={{ borderRadius: '20px' }}>
            <Image
              src={source}
              width="258"
              height="278"
              alt="degen image"
              priority
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DegenCardItem);
