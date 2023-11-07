import { memo } from 'react';
import Image from 'next/image';
import { CORE_TEAM, DEGEN_DELEGATES } from '@/constants/team';

const TeamDesktop = () => {
  return (
    <div className="row m-0 p-0 position-relative text-center align-items-center my-3 desktop">
      {[...CORE_TEAM, ...DEGEN_DELEGATES].map((member, index) => (
        <div key={`member-${index}`} className="col-sm-3">
          <div className="nifty-teams d-flex flex-column p-3">
            <a href={member.link} target="_blank" rel="noreferrer">
              <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  alt={`${member.name} DEGEN`}
                  className="pixelated"
                  height={293}
                  src={member.source}
                  width={268}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </a>
            <h6 className="mt-4 about-team-name">{member.name}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(TeamDesktop);
