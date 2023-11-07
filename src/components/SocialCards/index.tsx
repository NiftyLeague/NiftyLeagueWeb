import AnimatedWrapper from '@/components/AnimatedWrapper';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import { SOCIALS } from './constants';

interface SocialProps {
  link: string;
  title: string;
  subtitle: string;
  image: string;
}

const SocialCard = ({ link, title, subtitle, image }: SocialProps) => {
  const desktop = useMediaQuery('(min-width:769px)');
  return (
    <div className="col-12 col-lg-6">
      <a href={link} target="_blank" rel="noreferrer">
        <AnimatedWrapper>
          <div className="community-data p-3 p-sm-4 mb-2 animated-fade-start animated-fade transition-delay-medium">
            <div className="d-flex">
              <div className="me-auto community-data-text">
                <h4 className="color-purple">{title}</h4>
                <p className="color-white">{subtitle}</p>
              </div>
              <div className="ms-auto d-flex align-items-center">
                <Image
                  alt={`${title} icon`}
                  height={40}
                  src={image}
                  width={desktop ? 63 : 40}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </a>
    </div>
  );
};

const SocialCards = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center my-sm-0 mt-sm-5">
        {SOCIALS.map(({ link, title, subtitle, image }) => (
          <SocialCard key={title} link={link} title={title} subtitle={subtitle} image={image} />
        ))}
      </div>
    </div>
  );
};

export default SocialCards;
