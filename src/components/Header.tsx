import { LegacyRef, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ExternalIcon from '@/components/ExternalIcon';

function Navbar() {
  const { pathname } = useRouter();

  return (
    <nav id="nav" className="row min-vw-100 p-0 navbar zindex-fixed position-absolute navbar-expand-md m-0 desktop">
      <div className="container-fluid z-100" style={{ borderStyle: 'none' }}>
        <div
          className="navbar-nav collapse navbar-collapse px-4 my-3 justify-content-between"
          id="navbarSupportedContent"
        >
          <Link href="/" legacyBehavior>
            <a className="navbar-brand">
              <Image
                src="/img/logo/white.png"
                height={50}
                width={52}
                alt="Nifty League Logo"
                loading="lazy"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </a>
          </Link>
          <div className="d-flex align-items-center">
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
                    Products
                  </a>
                  <ul className="dropdown-menu py-2" aria-labelledby="navbarOverviewDropdown">
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('games'),
                      })}
                    >
                      <Link href="/games" legacyBehavior>
                        <a className="dropdown-item">Games</a>
                      </Link>
                    </li>
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('degens'),
                      })}
                    >
                      <Link href="/degens" legacyBehavior>
                        <a className="dropdown-item">DEGENs</a>
                      </Link>
                    </li>
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('niftyverse'),
                      })}
                    >
                      <Link href="/niftyverse" legacyBehavior>
                        <a className="dropdown-item">NiftyVerse</a>
                      </Link>
                    </li>
                    {/* <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('compete-and-earn'),
                      })}
                    >
                      <Link href="/compete-and-earn" legacyBehavior>
                        <a className="dropdown-item">Compete & Earn</a>
                      </Link>
                    </li> */}
                  </ul>
                </li>
                <li
                  className={cn('nav-item', {
                    ['active']: pathname.includes('roadmap'),
                  })}
                >
                  <Link href="/roadmap" legacyBehavior>
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
                    About
                  </a>
                  <ul className="dropdown-menu py-2" aria-labelledby="navbarLearnDropdown">
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('overview'),
                      })}
                    >
                      <Link href="/overview" legacyBehavior>
                        <a className="dropdown-item">Overview / FAQ</a>
                      </Link>
                    </li>
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('team'),
                      })}
                    >
                      <Link href="/team" legacyBehavior>
                        <a className="dropdown-item">Team</a>
                      </Link>
                    </li>
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('community'),
                      })}
                    >
                      <Link href="/community" legacyBehavior>
                        <a className="dropdown-item">Community</a>
                      </Link>
                    </li>
                    <li
                      className={cn('nav-item', {
                        ['active']: pathname.includes('lore'),
                      })}
                    >
                      <Link href="/lore" legacyBehavior>
                        <a className="dropdown-item">Nifty Lore</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://niftyleague.medium.com/"
                        className="dropdown-item"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Blog <ExternalIcon />
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link href="/docs" legacyBehavior>
                        <a className="dropdown-item">
                          Docs <ExternalIcon />
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://maddies.co/official/nifty-league/"
                        className="dropdown-item"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Merch <ExternalIcon />
                      </a>
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
      href: '/games',
      name: 'Games',
    },
    {
      href: '/degens',
      name: 'DEGENs',
    },
    {
      href: '/niftyverse',
      name: 'NiftyVerse',
    },
    {
      href: '/roadmap',
      name: 'Roadmap',
    },
    {
      href: '/overview',
      name: 'Overview / FAQ',
    },
    {
      href: '/lore',
      name: 'Nifty Lore',
    },
    {
      href: '/team',
      name: 'Team',
    },
    {
      href: '/community',
      name: 'Community',
    },
    {
      href: '/docs',
      name: 'Docs',
    },
    {
      href: 'https://maddies.co/official/nifty-league/',
      name: 'Merch',
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
    <div id="nav" className="py-2 mobile-nav align-items-center d-flex position-absolute">
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
              <li key={item.href} onClick={handleUncheck} className="mb-3">
                <Link href={item.href} legacyBehavior>
                  <a>{item.name}</a>
                </Link>
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
  }, [desktop]);

  return <header className="header fixed-top-header">{desktop ? <Navbar /> : <MobileNav />}</header>;
}
