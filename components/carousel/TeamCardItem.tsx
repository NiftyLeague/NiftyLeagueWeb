import Image from 'next/image';

const TeamCardItem = (
  { name, source, title, children } : { name: string; source: string; title: string, children?: React.ReactNode; }
): JSX.Element => (
    <div className="slide">
        <div className="slide-content">
            <div className="nifty-teams d-flex flex-column p-2" style={{ margin: "auto" }}>
                <div className="w-100" style={{ borderRadius: "10px" }}>
                 <Image src={source} layout="fixed" width="258" height="278" />
                </div>
                <h3 className="mt-5">{name}</h3>
                <label className="font-20">{title}</label>
                <>
                 {children}
                </>
            </div>
        </div>
    </div>
);

export default TeamCardItem;
