import React, { createContext, useState } from 'react';

import { useViewportScroll } from 'framer-motion';
import PropTypes from 'prop-types';

const SectionsContext = createContext();
const sections = ['home', 'education', 'skills', 'projects', 'about'];

export function SectionsProvider({ children }) {
  const [selected, setSelectedByName] = useState('home');
  const [pageHeight, setPageHeight] = useState(0);
  const { scrollY } = useViewportScroll();

  return (
    <SectionsContext.Provider
      value={{
        scrollY,
        sections,
        selected,
        setSelectedByName,
        setPageHeight,
        pageHeight,
      }}
    >
      {children}
    </SectionsContext.Provider>
  );
}

SectionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionsContext;
