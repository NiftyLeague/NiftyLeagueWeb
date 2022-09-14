import { useEffect, useRef } from 'react';
import { useOnScreen } from 'hooks/useOnScreen';

const animatedClassNames = [
  '.animated-header-text-start',
  '.animated-fade-start',
  '.quick-pop-anim-start',
  '.animated-vertical-fade-start',
  '.satoshi-quick-pop-anim-start',
];

const AnimatedWrapper = ({ children, immediate = false }: { children: React.ReactNode; immediate?: boolean }) => {
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
  }, [onScreen]);
  return <div ref={ref}>{children}</div>;
};

export default AnimatedWrapper;
