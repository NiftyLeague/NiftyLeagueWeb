import Image from 'next/legacy/image';
import Link from 'next/link';
import ExternalIcon from '../externalIcon';
import { LEARN_CARDS } from './constants';

interface LearnCardProps {
  btnText: string;
  external?: boolean;
  image: string;
  link: string;
  subtitle: string;
  title: string;
}

const LearnCard = ({ btnText, external, image, link, subtitle, title }: LearnCardProps) => {
  return (
    <div className="learn-content-wrapper col-12 col-md-6 py-2">
      <div className="learn-content position-relative d-flex align-items-center">
        <div className="position-absolute w-100 h-100">
          <Image alt={`${title} card background`} layout="fill" objectFit="cover" priority src={image} />
        </div>
        <div className="text-center position-relative w-100 d-flex flex-column align-items-center p-4 p-lg-5">
          <h3 className="text-m-center">{title}</h3>
          <p className="px-4 font-16 text-center">{subtitle}</p>
          {external ? (
            <a target="_blank" rel="noreferrer" href={link}>
              <button className="btn theme-btn-primary mt-md-2">
                {btnText}
                <ExternalIcon />
              </button>
            </a>
          ) : (
            <Link href={link} passHref>
              <button className="btn theme-btn-primary mt-md-2">
                {btnText} <ExternalIcon />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const LearnCards = () => {
  return (
    <div className="row pt-5 pt-lg-5 mt-lg-3">
      {LEARN_CARDS.map(({ btnText, external, image, link, subtitle, title }) => (
        <LearnCard
          key={title}
          btnText={btnText}
          external={external}
          image={image}
          link={link}
          subtitle={subtitle}
          title={title}
        />
      ))}
    </div>
  );
};

export default LearnCards;
