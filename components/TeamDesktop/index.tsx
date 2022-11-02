import { memo } from 'react';
import Image from 'next/legacy/image';

import { TEAM_MEMBERS, TEAM_OFFICERS } from '@data/constants';

const TeamDesktop = () => {
  return (
    <>
      <div className="row m-0 p-0 position-relative text-center my-3 desktop">
        {TEAM_OFFICERS.map((officer, index) => (
          <div key={`officer-${index}`} className="col-sm-4">
            <div className="nifty-teams d-flex flex-column p-5">
              <Image
                alt={`${officer.name} DEGEN`}
                className="pixelated"
                height={293}
                layout="responsive"
                src={officer.source}
                width={268}
              />
              <h3 className="mt-5">{officer.name}</h3>
              <label className="font-20">{officer.title}</label>
              {officer.children?.desktop}
            </div>
          </div>
        ))}
      </div>
      <div className="row m-0 p-0 position-relative text-center align-items-center my-3 desktop">
        {TEAM_MEMBERS.map((member, index) => (
          <div key={`member-${index}`} className="col-sm-3">
            <div className="nifty-teams d-flex flex-column p-3">
              <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  alt={`${member.name} DEGEN`}
                  className="pixelated"
                  height={293}
                  layout="responsive"
                  src={member.source}
                  width={268}
                />
              </div>
              <h5 className="mt-4">{member.name}</h5>
              <label className="font-15">{member.title}</label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(TeamDesktop);
