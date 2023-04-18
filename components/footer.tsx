import Image from 'next/image';
import Link from 'next/link';
import AnimatedWrapper from './AnimatedWrapper';
import { SOCIAL_LINKS } from '@data/constants';
import ExternalIcon from '@components/externalIcon';

export default function Footer({ classes }: { classes?: { footer?: string } }) {
  return (
    <footer className={`${classes?.footer || ''}`}>
      <AnimatedWrapper>
        <div className="footer-container mx-auto animated-fade animated-fade-start transition-delay-small">
          <div className="d-flex m-0 py-md-5 pt-0 position-relative justify-content-between">
            <div className="px-0 pt-md-0 pt-4">
              <div className="d-flex flex-column m-0 p-0 position-relative">
                <Link href="/" legacyBehavior>
                  <a>Home</a>
                </Link>
                <Link href="/roadmap" legacyBehavior>
                  <a className="mt-2">Roadmap</a>
                </Link>
                <Link href="/overview" legacyBehavior>
                  <a className="mt-2">Overview / FAQ</a>
                </Link>
                <Link href="/community" legacyBehavior>
                  <a className="mt-2">Community</a>
                </Link>
              </div>
            </div>
            <div className="px-0 pt-md-0 pt-4">
              <div className="d-flex flex-column m-0 p-0 position-relative">
                <Link href="/games" legacyBehavior>
                  <a>Games</a>
                </Link>
                <Link href="/degens" legacyBehavior>
                  <a className="mt-2">Degens</a>
                </Link>
                <Link href="/niftyverse" legacyBehavior>
                  <a className="mt-2">NiftyVerse</a>
                </Link>
                <Link href="/compete-and-earn" legacyBehavior>
                  <a className="mt-2">Compete & Earn</a>
                </Link>
              </div>
            </div>
            <div className="px-0 pt-md-0 pt-4">
              <div className="d-flex flex-column m-0 p-0 position-relative">
                <Link href="/team" legacyBehavior>
                  <a>Team</a>
                </Link>
                <Link href="/careers" legacyBehavior>
                  <a className="mt-2">Careers</a>
                </Link>
                <a className="mt-2" href="https://niftyleague.medium.com/" target="_blank" rel="noreferrer">
                  Blog <ExternalIcon />
                </a>
                {/* <Link href="/shop" legacyBehavior>
                  <a className="mt-2">
                    Merch <ExternalIcon />
                  </a>
                </Link> */}
                <Link href="/docs" legacyBehavior>
                  <a className="mt-2">
                    Docs <ExternalIcon />
                  </a>
                </Link>
              </div>
            </div>
            <div className="px-0 pt-md-0 pt-4">
              <div className="d-flex flex-column m-0 p-0 position-relative">
                <Link href="/terms-of-service" legacyBehavior>
                  <a className="mt-2">Terms of Service</a>
                </Link>
                <Link href="/disclaimer" legacyBehavior>
                  <a className="mt-2">Disclaimer</a>
                </Link>
                <Link href="/privacy-policy" legacyBehavior>
                  <a className="mt-2">Privacy Policy</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center ps-0 mt-4">
            <div className="d-flex flex-wrap align-items-center justify-content-center social-icons">
              {SOCIAL_LINKS.map(social => (
                <a className="px-2 px-md-3 py-2" href={social.link} target="_blank" rel="noreferrer" key={social.name}>
                  <Image src={social.image} width={20} height={20} alt={social.description} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </AnimatedWrapper>
    </footer>
  );
}
