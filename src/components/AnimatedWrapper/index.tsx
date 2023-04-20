import { useEffect, useRef } from 'react';
import { useOnScreen } from '@/hooks/useOnScreen';

const animatedClassNames = [
  '.animated-header-text-start',
  '.animated-fade-start',
  '.quick-pop-anim-start',
  '.animated-vertical-fade-start',
  '.satoshi-quick-pop-anim-start',
];

const AnimatedWrapper = ({
  children,
  immediate = false,
  parallax = false,
  parallaxDirection = 'left',
  transitionAmount = 'medium',
}: {
  children: React.ReactNode;
  immediate?: boolean;
  parallax?: boolean;
  parallaxDirection?: string;
  transitionAmount?: string;
}) => {
  const ref: any = useRef<HTMLDivElement>();
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, immediate ? '0px' : '-100px');

  useEffect(() => {
    if (onScreen) {
      const sectionElement: HTMLDivElement = ref.current;
      if (sectionElement) {
        const animatedTextElements = sectionElement.querySelectorAll(animatedClassNames.join(','));
        Array.from(animatedTextElements).forEach(element => {
          element.classList.remove(...animatedClassNames.map(name => name.replace('.', '')));
        });
      }
    }

    const animated3D = () => {
      const sectionElement: HTMLDivElement = ref.current;
      if (sectionElement) {
        if (parallax) {
          const rect = sectionElement.getBoundingClientRect();
          if (parallaxDirection === 'verticalScale') {
            const scale = window.scrollY / (2 * window.innerHeight);
            const parallaxChild = sectionElement.getElementsByClassName('parallax-child')[0] as HTMLDivElement;
            if (parallaxChild) {
              parallaxChild.style.transform = `scale(${1 + scale})`;
            }
          } else if (parallaxDirection === 'top' || parallaxDirection === 'bottom') {
            let direction = 1;
            if (transitionAmount === 'extreme') {
              direction = 3;
            } else if (transitionAmount === 'large') {
              direction = 2;
            } else if (transitionAmount === 'medium') {
              direction = 1;
            } else if (transitionAmount === 'small') {
              direction = 0.3;
            }
            if (parallaxDirection === 'top') {
              direction = -1 * direction;
            }
            const parallaxHeroChild = sectionElement.getElementsByClassName('parallax-hero-child')[0] as HTMLDivElement;
            if (parallaxHeroChild) {
              const translationY = window.scrollY / 3;
              parallaxHeroChild.style.transform = `translateY(${translationY * direction}px)`;
            } else {
              const translationY = (rect.top * 100) / window.innerHeight;
              const parallaxChild = sectionElement.getElementsByClassName('parallax-child')[0] as HTMLDivElement;
              if (parallaxChild) {
                parallaxChild.style.transform = `translateY(${translationY * direction}px)`;
              } else {
                sectionElement.style.transform = `translateY(${translationY * direction}px)`;
              }
            }
          } else {
            const translationX = (rect.top * 100) / window.innerHeight;
            const direction = parallaxDirection === 'left' ? -1 : 1;
            const parallaxChild = sectionElement.getElementsByClassName('parallax-child')[0] as HTMLDivElement;
            if (parallaxChild) {
              parallaxChild.style.transform = `translateX(${translationX * direction}px)`;
            } else {
              sectionElement.style.transform = `translateX(${translationX * direction}px)`;
            }
          }
        }
      }
    };
    animated3D();
    window.addEventListener('scroll', animated3D);
    return () => {
      window.removeEventListener('scroll', animated3D);
    };
  }, [onScreen, parallax, parallaxDirection, transitionAmount]);
  return <div ref={ref}>{children}</div>;
};

export default AnimatedWrapper;
