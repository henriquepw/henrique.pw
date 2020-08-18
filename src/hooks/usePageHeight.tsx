import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

type PageHeightState = {
  pageHeight: number;
  setPageHeight: Dispatch<SetStateAction<number>>;
};

const PageHeightContext = createContext<PageHeightState>({} as PageHeightState);

const PageHeightProvider: React.FC = ({ children }) => {
  const [pageHeight, setPageHeight] = useState(0);

  return (
    <PageHeightContext.Provider value={{ pageHeight, setPageHeight }}>
      {children}
    </PageHeightContext.Provider>
  );
};

function usePageHeight(): PageHeightState {
  const context = useContext(PageHeightContext);

  return context;
}

export { PageHeightProvider, usePageHeight };
