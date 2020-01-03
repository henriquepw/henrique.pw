import React, {
  createContext,
  useState,
  /* useEffect, */ useMemo,
} from 'react';

import PropTypes from 'prop-types';

const SectionsContext = createContext();

export function SectionsProvider({ children }) {
  const sections = useMemo(
    () => ['Home', 'Education', /* 'Projects', */ 'About'],
    []
  );

  const [selected, setSelectedByName] = useState('Home');

  /* useEffect(() => {
    if (selected) {
      window.location.href = `${
        window.location.origin
      }#${selected.toLowerCase()}`;
    } else {
      const { pathname } = window.location;

      if (pathname === '/') {
        const { hash } = window.location;

        if (hash) {
          const isSection = sections.filter(
            name => name.toLowerCase() === hash.slice(1)
          )[0];

          const newSelected = isSection
            ? `${hash[1].toUpperCase()}${hash.slice(2)}`
            : sections[0];

          setSelectedByName(newSelected);
        } else {
          setSelectedByName('Home');
        }
      }
    }
  }, [sections, selected]); */

  function setSelectedByIndex(index) {
    if (sections[index]) {
      setSelectedByName(sections[index]);
    }
  }

  return (
    <SectionsContext.Provider
      value={{ sections, selected, setSelectedByName, setSelectedByIndex }}
    >
      {children}
    </SectionsContext.Provider>
  );
}

SectionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionsContext;
