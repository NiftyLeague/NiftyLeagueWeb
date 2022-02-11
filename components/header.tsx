import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

function Notification() {
  return (
    <div className="row d-flex align-items-center m-0 p-0 position-relative notification-frame text-center">
      <p className="font-14 mb-0">
        🚀{' '}
        <a className="color-blue" href="https://app.niftyleague.com/games/">
          {' '}
          The Desktop App{' '}
        </a>
        <label className="color-light-grey">
          is now live for Windows users!{' '}
        </label>{' '}
        <label className="color-silver">
          (MacOS is right around the corner - stay tuned)
        </label>
      </p>
    </div>
  );
}

function Navbar() {
  const { pathname } = useRouter();
  return (
    <nav className="row m-0 p-0 position-relative navbar navbar-expand-lg m-0 desktop">
      <div className="container-fluid" style={{ borderStyle: 'none' }}>
        <div
          className="navbar-nav collapse navbar-collapse px-4 mt-4"
          id="navbarSupportedContent"
        >
          <Link href="/">
            <a className="navbar-brand mt-5 mt-lg-0">
              <Image
                src="/img/logo.svg"
                height={48}
                width={48}
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
          </Link>
          <ul className="navbar-nav m-auto">
            <li
              className={cn('nav-item', {
                ['active']: pathname.includes('roadmap'),
              })}
            >
              <Link href="/roadmap">
                <a className="nav-link mx-4">Roadmap</a>
              </Link>
            </li>
            <li
              className={cn('nav-item', {
                ['active']: pathname.includes('about'),
              })}
            >
              <Link href="/about">
                <a className="nav-link mx-4">About</a>
              </Link>
            </li>
            <li
              className={cn('nav-item', {
                ['active']: pathname.includes('community'),
              })}
            >
              <Link href="/community">
                <a className="nav-link mx-4">Community</a>
              </Link>
            </li>
            <li
              className={cn('nav-item', {
                ['active']: pathname.includes('learn'),
              })}
            >
              <Link href="/learn">
                <a className="nav-link mx-4">Learn</a>
              </Link>
            </li>
            <li
              className={cn('nav-item', {
                ['active']:
                  pathname.includes('blog') || pathname.includes('posts'),
              })}
            >
              <Link href="/blog">
                <a className="nav-link mx-4">Blog</a>
              </Link>
            </li>
            <li
              className={cn('nav-item', {
                ['active']: pathname.includes('merch'),
              })}
            >
              <Link href="/shop">
                <a className="nav-link mx-4">Merch</a>
              </Link>
            </li>
          </ul>
          <Link href="/app">
            <a>
              <button className="btn theme-btn-white my-3 mr-auto">
                Launch App
              </button>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function MobileNav() {
  return (
    <div className="mobile-nav align-items-center d-flex">
      <input type="checkbox" id="toggle" style={{ display: 'none' }} />
      <label className="toggle-btn toggle-btn__cross font-18" htmlFor="toggle">
        <svg
          className="mx-2"
          width="22"
          height="10"
          viewBox="0 0 22 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.5" width="22" height="2" rx="1" fill="white" />
          <rect y="7.5" width="22" height="2" rx="1" fill="white" />
        </svg>
        MENU
      </label>

      <button
        className="btn theme-btn-white my-3 ms-auto"
        style={{ marginRight: 10, width: 127, height: 32, fontSize: 11 }}
      >
        Launch&nbsp;App
      </button>

      <nav>
        <img
          className="position-absolute eclipse-location"
          src="/img/eclipses-header.svg"
        />
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/roadmap">
              <a>Roadmap</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/community">
              <a>Community</a>
            </Link>
          </li>
          <li>
            <Link href="/learn">
              <a>Learn</a>
            </Link>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <Link href="/merch">
              <a>Merch</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default function Header() {
  return (
    <header className="header">
      <img
        className="position-absolute eclipse-location"
        src="/img/eclipses-header.svg"
        alt="Eclipse background"
        width={668}
        height={666}
      />
      <Notification />
      <Navbar />
      <MobileNav />
    </header>
  );
}
