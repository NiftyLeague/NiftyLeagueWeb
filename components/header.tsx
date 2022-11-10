import { LegacyRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/legacy/image';
import cn from 'classnames';
import useMediaQuery from '@mui/material/useMediaQuery';
import ExternalIcon from './externalIcon';

function Navbar() {
  const { pathname } = useRouter();

  return (
    <nav id="nav" className="row min-vw-100 m-0 p-0 navbar zindex-fixed position-absolute navbar-expand-lg m-0 desktop">
      <div className="container-fluid z-100" style={{ borderStyle: 'none' }}>
        <div className="navbar-nav collapse navbar-collapse px-4 mt-4" id="navbarSupportedContent">
          <Link href="/" passHref className="navbar-brand mt-5 mt-lg-0">
            <Image src="/img/logo.svg" height={48} width={48} alt="MDB Logo" loading="lazy" />
          </Link>
          <ul className="navbar-nav m-auto">
            <li
              className={cn('nav-item', {
                ['active']: pathname.includes('about'),
              })}
            >
              <Link href="/about" className="nav-link mx-4">
                About
              </Link>
            </li>
            <li
              className={cn('nav-item', {
                ['active']: pathname.includes('roadmap'),
              })}
            >
              <Link href="/roadmap" className="nav-link mx-4">
                Roadmap
              </Link>
            </li>
            <li
              className={cn('nav-item', {
                ['active']: pathname.includes('community'),
              })}
            >
              <Link href="/community" className="nav-link mx-4">
                Community
              </Link>
            </li>
            <li
              className={cn('nav-item', {
                ['active']: pathname.includes('careers'),
              })}
            >
              <Link href="/careers" className="nav-link mx-4">
                Careers
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="/shop" passHref className="nav-link mx-4">
                Merch
                <ExternalIcon />
              </Link>
            </li> */}
            <li
              className={cn('nav-item dropdown', {
                ['active']: pathname.includes('learn') || pathname.includes('blog'),
              })}
            >
              <Link
                href="/learn"
                className="nav-link dropdown-toggle true mx-4"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className={cn('nav-item', { ['inactive']: !pathname.includes('learn') })}>
                  <Link href="/learn" className="dropdown-item">
                    Overview / FAQ
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="nav-item inactive">
                  <Link href="/docs" passHref className="dropdown-item">
                    Docs
                    <ExternalIcon />
                  </Link>
                </li>
                <li className="nav-item inactive">
                  <Link href="https://niftyleague.medium.com/" className="dropdown-item">
                    Blog
                    <ExternalIcon />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <a href="https://app.niftyleague.com/" target="_blank" rel="noreferrer">
            <button className="btn theme-btn-white my-3 mr-auto">
              Launch App <ExternalIcon />
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

function MobileNav() {
  const checkboxRef = useRef({ checked: false });
  const linkList = [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: '/about',
      name: 'About',
    },
    {
      href: '/roadmap',
      name: 'Roadmap',
    },
    {
      href: '/community',
      name: 'Community',
    },
    {
      href: '/careers',
      name: 'Careers',
    },
    {
      href: '/learn',
      name: 'Learn',
    },
    {
      href: 'https://niftyleague.medium.com/',
      name: 'Blog',
    },
    {
      href: '/docs',
      name: 'Docs',
    },
    {
      href: '/shop',
      name: 'Shop',
    },
  ];
  const handleUncheck = () => {
    if (checkboxRef.current?.checked) {
      checkboxRef.current.checked = false;
    }
  };
  return (
    <div id="nav" className="mobile-nav align-items-center d-flex">
      <input
        type="checkbox"
        id="toggle"
        style={{ display: 'none' }}
        ref={checkboxRef as LegacyRef<HTMLInputElement> | undefined}
      />
      <label className="toggle-btn toggle-btn__cross font-18" htmlFor="toggle">
        <svg className="mx-2" width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="22" height="2" rx="1" fill="white" />
          <rect y="7.5" width="22" height="2" rx="1" fill="white" />
        </svg>
        MENU
      </label>
      <a className="ms-auto" href="https://app.niftyleague.com/" target="_blank" rel="noreferrer">
        <button
          className="btn theme-btn-white my-3 ms-auto"
          style={{ marginRight: 10, width: 127, height: 32, fontSize: 11 }}
        >
          Launch&nbsp;App
        </button>
      </a>

      <nav>
        <ul>
          {linkList.map(item => {
            return (
              <li key={item.href} onClick={handleUncheck}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default function Header() {
  const desktop = useMediaQuery('(min-width:768px)');
  const expanded = useMediaQuery('(min-width:992px)');

  useEffect(() => {
    const nav = document.getElementById('nav');
    const sticky = nav?.offsetTop || 0;
    const fixOnScroll = () => {
      if (window.pageYOffset > sticky) {
        nav?.classList.add('fixed-top', 'dark-nav');
        nav?.classList.remove('position-absolute');
      } else {
        nav?.classList.remove('fixed-top', 'dark-nav');
        nav?.classList.add('position-absolute');
      }
    };
    window.addEventListener('scroll', fixOnScroll, false);
    return () => {
      window.removeEventListener('scroll', fixOnScroll, false);
    };
  }, [expanded]);

  return (
    <header className="header fixed-top-header">
      <span className="position-absolute eclipse-location z-back">
        <Image src="/img/eclipses-header.svg" alt="Eclipse background" layout="responsive" width={668} height={666} />
      </span>
      {expanded ? <Navbar /> : <MobileNav />}
    </header>
  );
}
