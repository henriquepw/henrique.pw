import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

const SectionsContext = createContext();
const sections = ['home', 'education', /* 'projects', */ 'about'];

export function SectionsProvider({ children }) {
  const [selected, setSelectedByName] = useState('home');

  return (
    <SectionsContext.Provider
      value={{
        sections,
        selected,
        setSelectedByName,
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
