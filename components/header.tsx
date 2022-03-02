import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import useMediaQuery from '@mui/material/useMediaQuery';

function Notification() {
  const desktop = useMediaQuery('(min-width:768px)');
  return (
    <div className="row d-flex align-items-center m-0 p-0 position-relative notification-frame text-center">
      {desktop && (
        <p className="font-14 mb-0">
          🚀{'  '}
          <Link href="/blog/nifty-league-raises-5-million-seed-investment-round-to-expand-its-nft-gaming-metaverse">
            <a className="color-blue"> Our funding round </a>
          </Link>
          <label className="color-light-grey">is now closed! </label>{' '}
          <label className="color-silver">(We appreciate our DEGENs for the patience - wagmi)</label>
        </p>
      )}
      <div className="d-flex position-absolute socials">
        <a className="pe-3" href="https://opensea.io/collection/niftydegen" target="_blank" rel="noreferrer">
          <svg width="20" height="16" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.00985 13.7044L2.10316 13.5577L7.72983 4.75549C7.81207 4.62663 8.00539 4.63995 8.0676 4.77993C9.00761 6.8866 9.81872 9.59661 9.43873 11.1377C9.27651 11.8088 8.83207 12.7177 8.33204 13.5577C8.26763 13.68 8.19651 13.8 8.12094 13.9155C8.08538 13.9688 8.02538 13.9999 7.96092 13.9999H2.17428C2.01872 13.9999 1.92761 13.8311 2.00985 13.7044Z"
              fill="white"
            />
            <path
              d="M27.0898 15.34V16.7333C27.0898 16.8133 27.041 16.8844 26.9698 16.9155C26.5343 17.1022 25.0432 17.7866 24.4232 18.6489C22.841 20.8511 21.6321 24 18.9298 24H7.6565C3.66098 24 0.423187 20.7511 0.423187 16.7422V16.6133C0.423187 16.5967 0.599834 16.42 0.616511 16.42H6.90098C7.02539 16.42 7.1165 16.5356 7.10542 16.6578C7.06095 17.0666 7.13653 17.4844 7.32985 17.8644C7.70317 18.6222 8.47651 19.0956 9.31206 19.0956H12.4232V16.6667H9.34761C9.18985 16.6667 9.09654 16.4844 9.18764 16.3556C9.22095 16.3044 9.25876 16.2511 9.29873 16.1911C9.58986 15.7778 10.0054 15.1356 10.4187 14.4045C10.701 13.9111 10.9743 13.3845 11.1943 12.8556C11.2388 12.76 11.2743 12.6622 11.3098 12.5666C11.3698 12.3978 11.4321 12.24 11.4765 12.0822C11.521 11.9489 11.5565 11.8089 11.5921 11.6778C11.6965 11.2289 11.741 10.7533 11.741 10.26C11.741 10.0667 11.7321 9.86444 11.7143 9.67112C11.7054 9.46001 11.6787 9.24887 11.6521 9.03776C11.6343 8.8511 11.601 8.66665 11.5654 8.47332C11.521 8.1911 11.4587 7.91113 11.3876 7.62887L11.3632 7.52223C11.3098 7.32887 11.2654 7.14445 11.2032 6.95113C11.0276 6.34443 10.8254 5.75334 10.6121 5.20001C10.5343 4.98 10.4454 4.7689 10.3565 4.55779C10.2254 4.24001 10.0921 3.95113 9.96985 3.67778C9.90764 3.55332 9.8543 3.43999 9.80097 3.32444C9.74097 3.19332 9.67876 3.06221 9.61651 2.93779C9.57208 2.84224 9.52095 2.75334 9.48539 2.66444L9.10541 1.96222C9.05207 1.86666 9.14097 1.75332 9.24539 1.78222L11.6232 2.42665H11.6299C11.6343 2.42665 11.6365 2.4289 11.6387 2.4289L11.9521 2.51554L12.2965 2.61335L12.4232 2.64887V1.23556C12.4232 0.553323 12.9698 0 13.6454 0C13.9832 0 14.2899 0.137779 14.5999 0.362206C14.7298 0.586676 14.8676 0.893338 14.8676 1.23556V3.33335L15.121 3.40443C15.141 3.41113 15.161 3.42 15.1787 3.43332C15.241 3.48 15.3298 3.54887 15.4432 3.63335C15.5321 3.70443 15.6276 3.79112 15.7432 3.88001C15.9721 4.06443 16.2454 4.30222 16.5454 4.57557C16.6254 4.64444 16.7032 4.71556 16.7743 4.78668C17.161 5.14668 17.5943 5.56888 18.0076 6.03556C18.1232 6.16668 18.2365 6.3 18.3521 6.43999C18.4676 6.58222 18.5899 6.72221 18.6965 6.86224C18.8365 7.0489 18.9876 7.24222 19.1187 7.44445C19.181 7.54001 19.2521 7.63778 19.3121 7.73334C19.481 7.98887 19.6299 8.25335 19.7721 8.51779C19.8321 8.64 19.8943 8.77332 19.9476 8.90444C20.1054 9.25778 20.2298 9.61778 20.3098 9.97778C20.3343 10.0556 20.3521 10.14 20.361 10.2156V10.2334C20.3876 10.34 20.3965 10.4533 20.4054 10.5689C20.441 10.9378 20.4232 11.3066 20.3432 11.6778C20.3098 11.8356 20.2654 11.9844 20.2121 12.1422C20.1587 12.2933 20.1054 12.4511 20.0365 12.6C19.9032 12.9089 19.7454 13.2178 19.5587 13.5967C19.4987 13.6133 19.4276 13.7267 19.3565 13.8334C19.2787 13.9466 19.1987 14.0533 19.1276 14.1578C19.0299 14.2911 18.9254 14.4311 18.8187 14.5556C18.7232 14.6867 18.6254 14.8178 18.5187 14.9333C18.3698 15.1089 18.2276 15.2756 18.0787 15.4356C17.9899 15.54 17.8943 15.6467 17.7965 15.7422C17.701 15.8489 17.6032 15.9444 17.5143 16.0333C17.3654 16.1822 17.241 16.2978 17.1365 16.3933L16.8921 16.6178C16.8565 16.6489 16.8099 16.6667 16.761 16.6667H14.8676V19.0956H17.2498C17.7832 19.0956 18.2899 18.9067 18.6987 18.56C18.8387 18.4378 19.4499 17.9089 20.1721 17.1111C20.1965 17.0844 20.2276 17.0644 20.2632 17.0556L26.8432 15.1534C26.9654 15.1178 27.0898 15.2111 27.0898 15.34Z"
              fill="white"
            />
          </svg>
        </a>
        <a className="pe-3" href="https://twitter.com/NiftyLeague" target="_blank" rel="noreferrer">
          <svg width="17" height="16" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_604_62)">
              <path
                d="M7.63736 21.7597C16.694 21.7597 21.6476 14.2473 21.6476 7.74044C21.6476 7.52732 21.6476 7.31517 21.6332 7.10396C22.5969 6.40692 23.4287 5.54385 24.0898 4.55516C23.1912 4.95357 22.2379 5.21472 21.2617 5.32988C22.2896 4.71457 23.059 3.74667 23.4265 2.60636C22.4599 3.17997 21.4025 3.58419 20.2998 3.80156C19.5573 3.01214 18.5755 2.48941 17.596 2.31425C16.4366 2.13909 15.3393 2.32128 14.3838 2.83262C13.4284 3.34396 12.6681 4.15594 12.2206 5.14291C11.7731 6.12989 11.6634 7.23683 11.9084 8.29244C9.95973 8.19424 8.03559 7.68548 6.28729 6.79917C4.53899 5.91286 2.9966 4.66882 1.76024 3.1478C1.13056 4.2318 0.937708 5.51533 1.22094 6.73623C1.59416 7.95742 2.24218 9.02476 3.28472 9.72092C2.59107 9.69796 1.73448 9.48656 1.04984 9.1046V9.167C1.05915 10.3039 1.44369 11.4056 2.16371 12.2854C2.88373 13.1651 3.8859 13.7688 5.00024 13.9939C4.27532 14.1916 3.51471 14.2205 2.77688 14.0784C3.09165 15.0567 3.70426 15.9122 4.52908 16.5253C5.35389 17.1384 6.34966 17.4784 7.3772 17.4979C6.35627 18.3004 5.18715 18.8937 3.93671 19.2439C2.68627 19.5941 1.37905 19.6943 0.0898361 19.5388C2.34167 20.9839 4.96176 21.7594 7.63736 21.7468"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_604_62">
                <rect width="24" height="24" fill="white" transform="translate(0.0898361)" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a className="pe-3" href="https://discord.gg/niftyleague" target="_blank" rel="noreferrer">
          <svg width="24" height="16" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26.7449 1.98947C24.738 1.06863 22.5859 0.390197 20.3358 0.00162999C20.2948 -0.00586923 20.2539 0.0128717 20.2328 0.0593545C19.956 0.54262 19.6495 1.18482 19.4348 1.68959C17.0146 1.32727 14.6069 1.32727 12.2364 1.68959C12.0216 1.1736 11.7039 0.54262 11.4259 0.0593545C11.4048 0.0141223 11.3639 -0.00461862 11.3229 0.00162999C9.074 0.388955 6.92193 1.06739 4.91382 1.98947C4.89643 1.99696 4.88153 2.00947 4.87164 2.0257C0.789623 8.12415 -0.328613 14.0727 0.219956 19.9475C0.222438 19.9762 0.238573 20.0037 0.260913 20.0212C2.95411 21.999 5.56294 23.1998 8.12332 23.9956C8.16429 24.0081 8.20771 23.9931 8.23379 23.9594C8.83944 23.1323 9.37934 22.2602 9.84224 21.3431C9.86956 21.2894 9.84348 21.2257 9.78765 21.2044C8.93129 20.8796 8.11587 20.4835 7.33148 20.0337C7.26944 19.9975 7.26448 19.9087 7.32155 19.8663C7.48661 19.7426 7.65172 19.6139 7.80933 19.4839C7.83785 19.4602 7.87758 19.4552 7.91111 19.4702C13.0642 21.8229 18.6429 21.8229 23.7352 19.4702C23.7687 19.454 23.8084 19.459 23.8382 19.4827C23.9959 19.6126 24.1609 19.7426 24.3272 19.8663C24.3843 19.9087 24.3806 19.9975 24.3185 20.0337C23.5341 20.4922 22.7187 20.8796 21.8611 21.2032C21.8053 21.2244 21.7805 21.2894 21.8078 21.3431C22.2806 22.2589 22.8205 23.131 23.415 23.9582C23.4398 23.9931 23.4845 24.0081 23.5255 23.9956C26.0983 23.1998 28.7071 21.999 31.4003 20.0212C31.4239 20.0037 31.4388 19.9775 31.4412 19.9488C32.0978 13.1568 30.3416 7.25706 26.7858 2.02694C26.7771 2.00947 26.7623 1.99696 26.7449 1.98947ZM10.6118 16.3704C9.06034 16.3704 7.78201 14.946 7.78201 13.1968C7.78201 11.4476 9.03555 10.0233 10.6118 10.0233C12.2003 10.0233 13.4663 11.4601 13.4415 13.1968C13.4415 14.946 12.1879 16.3704 10.6118 16.3704ZM21.0743 16.3704C19.5229 16.3704 18.2446 14.946 18.2446 13.1968C18.2446 11.4476 19.498 10.0233 21.0743 10.0233C22.6629 10.0233 23.9288 11.4601 23.904 13.1968C23.904 14.946 22.6629 16.3704 21.0743 16.3704Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

function Navbar() {
  const { pathname } = useRouter();

  return (
    <nav id="nav" className="row min-vw-100 m-0 p-0 navbar zindex-fixed position-absolute navbar-expand-lg m-0 desktop">
      <div className="container-fluid" style={{ borderStyle: 'none' }}>
        <div className="navbar-nav collapse navbar-collapse px-4 mt-4" id="navbarSupportedContent">
          <Link href="/">
            <a className="navbar-brand mt-5 mt-lg-0">
              <Image src="/img/logo.svg" height={48} width={48} alt="MDB Logo" loading="lazy" />
            </a>
          </Link>
          <ul className="navbar-nav m-auto">
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
                ['active']: pathname.includes('roadmap'),
              })}
            >
              <Link href="/roadmap">
                <a className="nav-link mx-4">Roadmap</a>
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
            <li className="nav-item">
              <Link href="/shop">
                <a className="nav-link mx-4">Merch</a>
              </Link>
            </li>
            <li
              className={cn('nav-item dropdown', {
                ['active']: pathname.includes('learn') || pathname.includes('blog'),
              })}
            >
              <Link href="/learn">
                <a
                  className="nav-link dropdown-toggle true mx-4"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Learn
                </a>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className={cn('nav-item', { ['inactive']: !pathname.includes('learn') })}>
                  <Link href="/learn">
                    <a className="dropdown-item">Overview / FAQ</a>
                  </Link>
                </li>
                <li
                  className={cn('nav-item', {
                    ['inactive']: !pathname.includes('blog'),
                  })}
                >
                  <Link href="/blog">
                    <a className="dropdown-item">Blog</a>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="nav-item inactive">
                  <Link href="/docs">
                    <a className="dropdown-item">Docs</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <a href="https://app.niftyleague.com/" target="_blank" rel="noreferrer">
            <button className="btn theme-btn-white my-3 mr-auto">Launch App</button>
          </a>
        </div>
      </div>
    </nav>
  );
}

function MobileNav() {
  return (
    <div id="nav" className="mobile-nav align-items-center d-flex">
      <input type="checkbox" id="toggle" style={{ display: 'none' }} />
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
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/roadmap">
              <a>Roadmap</a>
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
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/docs">
              <a>Docs</a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a>Merch</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default function Header() {
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
    <header className="header">
      <span className="position-absolute eclipse-location">
        <Image src="/img/eclipses-header.svg" alt="Eclipse background" layout="responsive" width={668} height={666} />
      </span>
      <Notification />
      {expanded ? <Navbar /> : <MobileNav />}
    </header>
  );
}
