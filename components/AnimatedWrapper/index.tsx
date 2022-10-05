import { useEffect, useRef } from 'react';
import { useOnScreen } from 'hooks/useOnScreen';

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
}: {
  children: React.ReactNode;
  immediate?: boolean;
  parallax?: boolean;
  parallaxDirection?: string;
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
      if (onScreen) {
        const sectionElement: HTMLDivElement = ref.current;
        if (sectionElement) {
          if (parallax) {
            const rect = sectionElement.getBoundingClientRect();
            if (parallaxDirection === 'top' || parallaxDirection === 'bottom') {
              const translationY = (rect.top * 100) / window.innerHeight;
              const direction = parallaxDirection === 'top' ? -1 : 1;
              sectionElement.style.transform = `translateY(${translationY * direction}px)`;
            } else {
              const translationX = (rect.top * 100) / window.innerHeight;
              const direction = parallaxDirection === 'left' ? -1 : 1;
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
  }, [onScreen, parallax, parallaxDirection]);
  return <div ref={ref}>{children}</div>;
};

export default AnimatedWrapper;
