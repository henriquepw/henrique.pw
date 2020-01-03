import React, { useContext, useEffect, /* useRef, */ useState } from 'react';

import PropTypes from 'prop-types';

import SectionsContext from '~/context/sectionsContext';

function Scroll({ refs }) {
  const { setSelectedByIndex } = useContext(SectionsContext);

  const [nextSection, setNextSection] = useState(1);
  const [position, setPosition] = useState(document.documentElement.scrollTop);

  // const renders = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const screenPosition = window.innerHeight * 0.4; // 40% of the height window
      const { scrollTop } = document.documentElement;

      if (scrollTop > position) {
        // scroll down
        if (refs[nextSection] && refs[nextSection].current) {
          const sectionPosition = refs[
            nextSection
          ].current.getBoundingClientRect().top;

          if (nextSection < refs.length && sectionPosition < screenPosition) {
            setNextSection(nextSection + 1);
            setSelectedByIndex(nextSection);
          }
        }
      } else {
        // scroll up
        const currentSection = nextSection - 1;
        const sectionPosition = refs[
          currentSection
        ].current.getBoundingClientRect().top;

        if (refs[currentSection - 1] && refs[currentSection - 1].current) {
          if (currentSection > 0 && screenPosition < sectionPosition) {
            setNextSection(nextSection - 1);
            setSelectedByIndex(currentSection - 1);
          }
        }
      }

      setPosition(scrollTop);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nextSection, position, refs, setSelectedByIndex]);

  return (
    <span style={{ position: 'absolute' }}>
      {/* `${selected} ${renders.current++}` */}
    </span>
  );
}

Scroll.propTypes = {
  refs: PropTypes.arrayOf(
    PropTypes.shape({
      current: PropTypes.object,
    })
  ).isRequired,
};

export default Scroll;
