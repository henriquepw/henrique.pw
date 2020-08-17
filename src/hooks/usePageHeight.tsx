import React, {
  createContext,
  useState,
  useContext,
  useLayoutEffect,
} from 'react';

const PageHeightContext = createContext<number>(0);

const PageHeightProvider: React.FC = ({ children }) => {
  const [pageHeight, setPageHeight] = useState(0);

  useLayoutEffect(() => {
    setPageHeight(window.innerHeight);

    function setCurrentHeight(): void {
      setPageHeight(window.innerHeight);
    }

    window.addEventListener('resize', setCurrentHeight);

    return () => {
      window.removeEventListener('resize', setCurrentHeight);
    };
  }, [setPageHeight]);

  return (
    <PageHeightContext.Provider value={pageHeight}>
      {children}
    </PageHeightContext.Provider>
  );
};

function usePageHeight(): number {
  const context = useContext(PageHeightContext);

  return context;
}

export { PageHeightProvider, usePageHeight };
