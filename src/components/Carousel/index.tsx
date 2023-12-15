import Image from 'next/image';
import { memo } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const NiftyCarousel = ({
  children,
  isMobileViewOnly = false,
  mobileItems = 1,
  tabletItems = 3,
  desktopItems = 4,
  superLargeDesktopItems = 5,
  hideGradient = false,
}: {
  children: React.ReactNode;
  isMobileViewOnly?: boolean;
  mobileItems?: number;
  tabletItems?: number;
  desktopItems?: number;
  superLargeDesktopItems?: number;
  hideGradient?: boolean;
}): JSX.Element => (
  <>
    {!hideGradient && (
      <span className="dark-gradient-shade">
        <Image
          src="/img/dark-gradient-shade.svg"
          alt="Dark gradient shade"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </span>
    )}
    <Carousel
      arrows={isMobileViewOnly}
      swipeable={isMobileViewOnly}
      draggable={isMobileViewOnly}
      showDots={isMobileViewOnly}
      responsive={{
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1500 },
          items: superLargeDesktopItems,
        },
        desktop: {
          breakpoint: { max: 1500, min: 1024 },
          items: desktopItems,
        },
        tablet: {
          breakpoint: { max: 1024, min: 615 },
          items: tabletItems,
        },
        mobile: {
          breakpoint: { max: 615, min: 0 },
          items: mobileItems,
        },
      }}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={isMobileViewOnly ? 4000 : 2000}
      keyBoardControl={true}
      transitionDuration={590}
      containerClass="carousel-container"
      removeArrowOnDeviceType={isMobileViewOnly ? ['desktop', 'tablet'] : ['desktop', 'tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-20-px"
    >
      {children}
    </Carousel>
  </>
);

export default memo(NiftyCarousel);
