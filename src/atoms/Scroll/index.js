import React, { useContext, useEffect } from 'react';

import PropTypes from 'prop-types';

import SectionsContext from '~/context/sectionsContext';

function Scroll({ refs }) {
  const { selected, setSelectedByName, pageHeight } = useContext(
    SectionsContext
  );

  useEffect(() => {
    function navCheck(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSelectedByName(entry.target.id);
        }
      });
    }

    const observer = new IntersectionObserver(navCheck, {
      rootMargin: `${-(pageHeight * 0.6 - 1)}px 0px ${-(
        pageHeight * 0.4
      )}px 0px`,
    });

    const isExist = refs.reduce((prev, ref) => prev && !!ref.current, true);

    if (isExist) {
      refs.forEach(ref => observer.observe(ref.current));
    }

    return () => observer.disconnect();
  }, [pageHeight, refs, selected, setSelectedByName]);

  return <span style={{ position: 'fixed', zIndex: -999 }} />;
}

Scroll.propTypes = {
  // pageHeight: PropTypes.number.isRequired,
  refs: PropTypes.arrayOf(
    PropTypes.shape({
      current: PropTypes.object,
    })
  ).isRequired,
};

export default Scroll;
