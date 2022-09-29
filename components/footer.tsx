import { SOCIAL_LINKS } from '@data/constants';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedWrapper from './AnimatedWrapper';

export default function Footer({ classes }: { classes?: { footer?: string } }) {
  return (
    <footer className={`${classes?.footer || ''}`}>
      <AnimatedWrapper>
        <div className="footer-container mx-auto animated-fade animated-fade-start transition-delay-small">
          <div className="row m-0 p-md-5 pt-0 position-relative">
            <div className="col-6 col-sm-4 col-md-2 px-md-5  px-0 pt-md-0 pt-4">
              <div className="row m-0 p-0 position-relative">
                <Link href="/">
                  <a>Home</a>
                </Link>
                <Link href="/about">
                  <a className="mt-2">About</a>
                </Link>
                <Link href="/roadmap">
                  <a className="mt-2">Roadmap</a>
                </Link>
                <Link href="/careers">
                  <a className="mt-2">Careers</a>
                </Link>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-2 px-md-5 px-0 pt-md-0 pt-4">
              <div className="row m-0 p-0 position-relative">
                <Link href="/learn">
                  <a>Learn</a>
                </Link>
                <a className="mt-2" href="https://niftyleague.medium.com/">
                  Blog
                </a>
                <Link href="/docs">
                  <a className="mt-2">Docs</a>
                </Link>
                <Link href="/shop">
                  <a className="mt-2">Merch</a>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-5 px-md-5 px-0 pt-md-0 pt-4">
              <div className="row m-0 p-0 position-relative">
                <Link href="/feedback">
                  <a>Feedback</a>
                </Link>
                <Link href="/terms-of-service">
                  <a className="mt-2">Terms of Service</a>
                </Link>
                <Link href="/disclaimer">
                  <a className="mt-2">Disclaimer</a>
                </Link>
                <Link href="/privacy-policy">
                  <a className="mt-2">Privacy Policy</a>
                </Link>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center ps-0 mt-4">
              <div className="d-flex align-items-center social-icons">
                {SOCIAL_LINKS.map(social => (
                  <a
                    className="px-3 social-icon-link"
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    key={social.name}
                  >
                    <Image src={social.image} width={24} height={24} alt={social.description} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedWrapper>
    </footer>
  );
}
