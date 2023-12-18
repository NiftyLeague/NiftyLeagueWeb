import AnimatedWrapper from '@/components/AnimatedWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { LEARN_CARDS } from './constants';
import ExternalIcon from '@/components/ExternalIcon';

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
    <div className="learn-content-wrapper col-12 col-md-6 py-2 px-2">
      <div className="learn-content position-relative d-flex align-items-center">
        <div className="position-absolute w-100 h-100">
          <AnimatedWrapper>
            <div className="animated-fade-quick animated-fade-start transition-delay-small">
              <Image
                alt={`${title} card background`}
                priority
                src={image}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </AnimatedWrapper>
        </div>

        <div className="text-center position-relative w-100 d-flex flex-column align-items-center p-3 p-md-4 p-lg-5">
          <div className="mb-md-3">
            <AnimatedWrapper>
              <h5 className="text-m-center uppercase animated-header-text animated-header-text-start transition-delay-small">
                {title}
              </h5>
            </AnimatedWrapper>
          </div>
          <div className="mb-md-3">
            <AnimatedWrapper>
              <p className="text-center animated-header-text animated-header-text-start transition-delay-medium">
                {subtitle}
              </p>
            </AnimatedWrapper>
          </div>
          <AnimatedWrapper>
            {external ? (
              <a target="_blank" rel="noreferrer" href={link}>
                <button className="btn theme-btn-primary theme-learn-btn mt-md-2 animated-fade-slow animated-fade-start transition-delay-large">
                  {btnText}
                  <ExternalIcon />
                </button>
              </a>
            ) : (
              <Link href={link} passHref legacyBehavior>
                <a target="_blank" rel="noreferrer">
                  <button className="btn theme-btn-primary theme-learn-btn mt-md-2 animated-fade-slow animated-fade-start transition-delay-large">
                    {btnText}
                    <ExternalIcon />
                  </button>
                </a>
              </Link>
            )}
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

const LearnCards = () => {
  return (
    <div className="row pt-3 pt-lg-5 mt-lg-3">
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
