import React, { createContext, useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const SectionsContext = createContext();

function SectionsProvider({ children }) {
  const sections = ['Home', 'Education', 'Projects', 'About'];
  const [selected, setSelectedByName] = useState(null);

  useEffect(() => {
    if (selected) {
      window.location.href = `${
        window.location.origin
      }#${selected.toLowerCase()}`;
    } else {
      const page = window.location.href.split('#')[1];
      const newSelected = page
        ? `${page[0].toUpperCase()}${page.slice(1)}`
        : 'Home';

      setSelectedByName(newSelected);
    }
  }, [selected]);

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

export { SectionsProvider };
export default SectionsContext;
