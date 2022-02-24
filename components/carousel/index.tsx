import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const NiftyCarousel = (
  {
    children,
    isMobileViewOnly = false,
    maxItems = 4,
    minItems = 1,
  } : { 
    children: React.ReactNode; 
    isMobileViewOnly?: boolean;
    maxItems?: number;
    minItems?: number;
  }
): JSX.Element => (
  <>
    <Carousel
      swipeable={isMobileViewOnly}
      draggable={isMobileViewOnly}
      showDots={isMobileViewOnly}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: maxItems
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: minItems
        }
      }}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={isMobileViewOnly ? 4000 : 2000}
      keyBoardControl={true}
      transitionDuration={590}
      partialVisbile={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={isMobileViewOnly ? ["desktop", "tablet"] :  ["desktop", "tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {children}
    </Carousel>
  </>
);

export default NiftyCarousel;
