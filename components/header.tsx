import { LegacyRef, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/legacy/image';
import cn from 'classnames';
import { Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { SOCIAL_LINKS } from '@data/constants';

function Navbar() {
  const { pathname } = useRouter();

  return (
    <nav id="nav" className="row min-vw-100 m-0 p-0 navbar zindex-fixed position-absolute navbar-expand-lg m-0 desktop">
      <div className="container-fluid z-100" style={{ borderStyle: 'none' }}>
        <div
          className="navbar-nav collapse navbar-collapse px-4 my-4 justify-content-between"
          id="navbarSupportedContent"
        >
          <Link href="/">
            <a className="navbar-brand">
              <Image src="/img/logo-blue.svg" height={64} width={64} alt="Nifty League Logo" loading="lazy" />
            </a>
          </Link>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center social-icons">
              {SOCIAL_LINKS.map(social => (
                <a
                  className="pe-4 social-icon-link"
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  key={social.name}
                >
                  <Image src={social.image} width={40} height={40} alt={social.description} />
                </a>
              ))}
            </div>
            <div className="d-flex align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle true mx-3"
                    id="navbarOverviewDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Overview
                  </a>
                  <ul className="dropdown-menu py-2" aria-labelledby="navbarOverviewDropdown">
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('land'),
                      })}
                    >
                      <Link href="/land">
                        <a className="dropdown-item">Land</a>
                      </Link>
                    </li>
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('rentals'),
                      })}
                    >
                      <Link href="/rentals">
                        <a className="dropdown-item">Rentals</a>
                      </Link>
                    </li>
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('games'),
                      })}
                    >
                      <Link href="/games">
                        <a className="dropdown-item">Games</a>
                      </Link>
                    </li>
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('degens'),
                      })}
                    >
                      <Link href="/degens">
                        <a className="dropdown-item">Degens</a>
                      </Link>
                    </li>
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('compete-and-earn'),
                      })}
                    >
                      <Link href="/compete-and-earn">
                        <a className="dropdown-item">Compete & Earn</a>
                      </Link>
                    </li>
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('lore'),
                      })}
                    >
                      <Link href="/lore">
                        <a className="dropdown-item">Lore</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={cn('nav-item', {
                    ['active']: pathname.includes('roadmap'),
                  })}
                >
                  <Link href="/roadmap">
                    <a className="nav-link mx-3">Roadmap</a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle true mx-3"
                    id="navbarLearnDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Learn
                  </a>
                  <ul className="dropdown-menu py-2" aria-labelledby="navbarLearnDropdown">
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('learn'),
                      })}
                    >
                      <Link href="/learn">
                        <a className="dropdown-item">Overview / FAQ</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="https://niftyleague.medium.com/">
                        <a className="dropdown-item">Blog</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/docs">
                        <a className="dropdown-item">Docs</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <a href="https://app.niftyleague.com/" target="_blank" rel="noreferrer" className="launch-app-link">
                <button className="btn theme-btn-primary launch-app-btn">Launch App</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MobileNav() {
  const [toggled, setToggled] = useState<boolean>(false);
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

  const handelChangeToggleStatus = () => {
    setToggled(!toggled);
  };

  return (
    <div id="nav" className="mobile-nav align-items-center d-flex position-absolute">
      <input
        type="checkbox"
        id="toggle"
        style={{ display: 'none' }}
        ref={checkboxRef as LegacyRef<HTMLInputElement> | undefined}
      />
      <label className="toggle-btn toggle-btn__cross" htmlFor="toggle" onClick={handelChangeToggleStatus}>
        {!toggled ? (
          <Stack direction="row" alignItems="center" gap={1}>
            <MenuIcon fontSize="small" />
            <p>MENU</p>
          </Stack>
        ) : (
          <CloseIcon sx={{ color: 'white' }} />
        )}
      </label>
      <a className="ms-auto launch-app-link" href="https://app.niftyleague.com/" target="_blank" rel="noreferrer">
        <button className="btn theme-btn-primary launch-app-btn my-2 ms-auto">Launch App</button>
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
    const sticky = nav?.clientTop || 0;
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

  return <header className="header fixed-top-header">{expanded ? <Navbar /> : <MobileNav />}</header>;
}
