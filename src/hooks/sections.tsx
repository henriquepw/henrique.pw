/**
 * This hook provide:
 *  - The sections list
 *  - The selected section
 *  - The page height
 *  - The scroll Y value for animations
 */
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from 'react';

export interface SectionProps {
  selected: string;
  pageHeight: number;
  setSelectedByName: Dispatch<SetStateAction<string>>;
  setPageHeight: Dispatch<SetStateAction<number>>;
}

export const sections = ['home', 'education', 'skills', 'projects', 'about'];

const SectionsContext = createContext<SectionProps>({} as SectionProps);

const SectionsProvider: React.FC = ({ children }) => {
  const [selected, setSelectedByName] = useState('home');
  const [pageHeight, setPageHeight] = useState(0);

  return (
    <SectionsContext.Provider
      value={{
        selected,
        setSelectedByName,
        setPageHeight,
        pageHeight,
      }}
    >
      {children}
    </SectionsContext.Provider>
  );
};

function useSections(): SectionProps {
  const context = useContext(SectionsContext);

  return context;
}

export { SectionsProvider, useSections };
