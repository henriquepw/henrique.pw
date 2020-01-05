import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

const SectionsContext = createContext();
const sections = ['Home', 'Education', /* 'Projects', */ 'About'];

export function SectionsProvider({ children }) {
  const [selected, setSelectedByName] = useState('Home');

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
