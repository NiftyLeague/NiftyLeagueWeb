import { MutableRefObject, useState, useEffect } from 'react';

export function useOnScreen<T extends Element>(ref: MutableRefObject<T>, rootMargin: string = '0px'): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const wrapperRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );
    if (wrapperRef) {
      observer.observe(wrapperRef);
    }
    return () => {
      if (wrapperRef) {
        observer.unobserve(wrapperRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}
