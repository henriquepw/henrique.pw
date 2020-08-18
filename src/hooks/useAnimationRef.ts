import { useEffect, useRef, RefObject } from 'react';

import { useAnimation, AnimationControls } from 'framer-motion';

import { usePageHeight } from './usePageHeight';

function useAnimationRef<RefType extends HTMLElement>(
  observerOptions?: IntersectionObserverInit,
): [AnimationControls, RefObject<HTMLElement>] {
  const ref = useRef<RefType>(null);

  const { pageHeight } = usePageHeight();
  const animationControls = useAnimation();

  /**
   * Use an intersection observer for know when the ref is visible
   */
  useEffect(() => {
    function handleIntercession([entry]: IntersectionObserverEntry[]): void {
      animationControls.start(entry.isIntersecting ? 'show' : 'hide');
    }

    const options = observerOptions || {
      rootMargin: `${-(pageHeight * 0.65 - 1)}px 0px ${-(
        pageHeight * 0.35
      )}px 0px`,
    };

    const observer = new IntersectionObserver(handleIntercession, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return observer.disconnect;
  }, [animationControls, observerOptions, pageHeight, ref]);

  return [animationControls, ref];
}

export default useAnimationRef;
