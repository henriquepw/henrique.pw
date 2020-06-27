import React, { useContext, useEffect } from 'react';

import SectionsContext from '~/context/SectionsContext';

interface Props {
  refs: React.RefObject<HTMLElement>[];
}

const Scroll: React.FC<Props> = ({ refs }) => {
  const { selected, setSelectedByName, pageHeight } = useContext(
    SectionsContext,
  );

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

    const isExist = refs.reduce((prev, ref) => prev && !!ref.current, true);

    if (isExist) {
      refs.forEach((ref) => ref.current && observer.observe(ref.current));
    }

    return () => observer.disconnect();
  }, [pageHeight, refs, selected, setSelectedByName]);

  return <span style={{ position: 'fixed', zIndex: -999 }} />;
};

export default Scroll;
