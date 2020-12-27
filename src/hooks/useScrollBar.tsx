import React, { createContext, useContext, useState } from 'react';

import { MotionValue, useMotionValue } from 'framer-motion';

interface ScrollbarData {
  showScrollbar: boolean;
  scrollYProgress: MotionValue<number>;
  setScrollbarVisibility(visibility: boolean): void;
}

const ScrollbarContext = createContext({} as ScrollbarData);

const ScrollbarProvider: React.FC = ({ children }) => {
  const [showScrollbar, setShowScrollbar] = useState(true);

  const scrollYProgress = useMotionValue(0);

  function setScrollbarVisibility(visibility: boolean): void {
    setShowScrollbar(visibility);
  }

  return (
    <ScrollbarContext.Provider
      value={{
        showScrollbar,
        scrollYProgress,
        setScrollbarVisibility,
      }}
    >
      {children}
    </ScrollbarContext.Provider>
  );
};

function useScrollbar(): ScrollbarData {
  const context = useContext(ScrollbarContext);
  return context;
}

export { ScrollbarProvider, useScrollbar };
