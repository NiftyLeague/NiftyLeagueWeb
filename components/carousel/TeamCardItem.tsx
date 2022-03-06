import Image from 'next/image';

interface TeamCardProps {
  name: string;
  source: string;
  title: string;
  children?: {
    mobile?: JSX.Element;
    desktop?: JSX.Element;
  };
}

export const renderTeamCardItem = (item: TeamCardProps) => (
  <TeamCardItem key={item.name} name={item.name} title={item.title} source={item.source}>
    {item?.children}
  </TeamCardItem>
);

const TeamCardItem = ({ name, source, title, children }: TeamCardProps): JSX.Element => (
  <div className="slide">
    <div className="slide-content">
      <div className="nifty-teams d-flex flex-column p-2" style={{ margin: 'auto' }}>
        <div className="w-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
          <Image src={source} layout="responsive" width="258" height="278" alt="Team Degen image" />
        </div>
        <h3 className="mt-5">{name}</h3>
        <label className="font-20">{title}</label>
        <>{children?.mobile}</>
      </div>
    </div>
  </div>
);

export default TeamCardItem;
