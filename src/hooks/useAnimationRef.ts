import { useEffect, useRef, RefObject } from 'react';

import { useAnimation, AnimationControls } from 'framer-motion';

function useAnimationRef<RefType extends HTMLElement = HTMLElement>(
  observerOptions?: IntersectionObserverInit,
): [AnimationControls, RefObject<HTMLElement>] {
  const animationControls = useAnimation();
  const ref = useRef<RefType>(null);

  /**
   * Use an intersection observer for know when the ref is visible
   */
  useEffect(() => {
    function handleIntercession([entry]: IntersectionObserverEntry[]): void {
      animationControls.start(entry.isIntersecting ? 'show' : 'hide');
    }

    const options = observerOptions || {
      rootMargin: `-65% 0px -34% 0px`,
    };

    const observer = new IntersectionObserver(handleIntercession, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return observer.disconnect;
  }, [animationControls, observerOptions, ref]);

  return [animationControls, ref];
}

export default useAnimationRef;
