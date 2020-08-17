import React, { useEffect } from 'react';

import { useSections } from '~/hooks/sections';

interface ScrollProps {
  refs: React.RefObject<HTMLElement>[];
}

const Scroll: React.FC<ScrollProps> = ({ refs }) => {
  const { selected, setSelectedByName, pageHeight } = useSections();

  /**
   * Use an intersection observer for the controller the animations of the sections
   */
  useEffect(() => {
    function navCheck(entries: IntersectionObserverEntry[]): void {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedByName(entry.target.id);
        }
      });
    }

    const observer = new IntersectionObserver(navCheck, {
      rootMargin: `${-(pageHeight * 0.65 - 1)}px 0px ${-(
        pageHeight * 0.35
      )}px 0px`,
    });

    /**
     * Only observer if all references are valid
     */
    const isAnyRefNull = refs.find((ref) => !ref.current) === null;

    if (!isAnyRefNull) {
      refs.forEach((ref) => observer.observe(ref.current as HTMLElement));
    }

    return () => observer.disconnect();
  }, [pageHeight, refs, selected, setSelectedByName]);

  return null;
};

export default Scroll;
