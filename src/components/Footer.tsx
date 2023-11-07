import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ExternalIcon from '@/components/ExternalIcon';
import { SOCIAL_LINKS } from '@/constants/socials';

export default function Footer({ classes }: { classes?: { footer?: string } }) {
  const mobile = useMediaQuery('(max-width:768px)');
  return (
    <footer className={`${classes?.footer || ''}`}>
      <AnimatedWrapper>
        <div className="footer-container mx-auto animated-fade animated-fade-start transition-delay-small">
          <div className="d-flex m-0 py-md-5 pt-0 position-relative justify-content-between">
            <div className="px-0 pt-md-0 pt-4">
              <div className="d-flex flex-column m-0 p-0 position-relative">
                <Link href="/">Home</Link>
                <Link href="/roadmap" className="mt-2">
                  Roadmap
                </Link>
                <Link href="/overview" className="mt-2">
                  Overview
                </Link>
                <Link href="/community" className="mt-2">
                  Community
                </Link>
              </div>
            </div>
            <div className="px-0 pt-md-0 pt-4">
              <div className="d-flex flex-column m-0 p-0 position-relative">
                <Link href="/games">Games</Link>
                <Link href="/degens" className="mt-2">
                  DEGENs
                </Link>
                <Link href="/niftyverse" className="mt-2">
                  NiftyVerse
                </Link>
                <Link href="/lore" className="mt-2">
                  Lore
                </Link>
              </div>
            </div>
            <div className="px-0 pt-md-0 pt-4">
              <div className="d-flex flex-column m-0 p-0 position-relative">
                <Link href="/team">Team</Link>
                <Link href="/careers" className="mt-2">
                  Careers
                </Link>
                {/* <Link href="/shop" className="mt-2">
                  Merch {!mobile ? <ExternalIcon /> : null}
                </Link> */}
                <a href="https://maddies.co/official/nifty-league/" className="mt-2" target="_blank" rel="noreferrer">
                  Merch {!mobile ? <ExternalIcon /> : null}
                </a>
                <Link href="/docs" className="mt-2">
                  Docs {!mobile ? <ExternalIcon /> : null}
                </Link>
              </div>
            </div>
            <div className="px-0 pt-md-0 pt-4">
              <div className="d-flex flex-column m-0 p-0 position-relative">
                <Link href="/terms-of-service" className="mt-3">
                  Terms
                </Link>
                <Link href="/disclaimer" className="mt-2">
                  Disclaimer
                </Link>
                <Link href="/privacy-policy" className="mt-2">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center ps-0 mt-4">
            <div className="d-flex flex-wrap align-items-center justify-content-center social-icons">
              {SOCIAL_LINKS.map(social => (
                <a className="px-2 px-md-3 py-2" href={social.link} target="_blank" rel="noreferrer" key={social.name}>
                  <Image
                    src={social.image}
                    width={20}
                    height={20}
                    alt={social.description}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </AnimatedWrapper>
    </footer>
  );
}
