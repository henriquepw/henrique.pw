import React, {
  FC,
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';

import { useViewportScroll, MotionValue } from 'framer-motion';

export interface SectionProps {
  scrollY?: MotionValue<number>;
  selected: string;
  pageHeight: number;
  setSelectedByName: Dispatch<SetStateAction<string>>;
  setPageHeight: Dispatch<SetStateAction<number>>;
}

export const sections = ['home', 'education', 'skills', 'projects', 'about'];

const SectionsContext = createContext<SectionProps>({
  pageHeight: 0,
  selected: 'home',
  setSelectedByName: () => {},
  setPageHeight: () => {},
});

const SectionsProvider: FC = ({ children }) => {
  const [selected, setSelectedByName] = useState('home');
  const [pageHeight, setPageHeight] = useState(0);
  const { scrollY } = useViewportScroll();

  return (
    <SectionsContext.Provider
      value={{
        scrollY,
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

export { SectionsProvider };
export default SectionsContext;
