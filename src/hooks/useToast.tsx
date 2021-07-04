import React, { createContext, useContext, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import { AnimationControls, useAnimation } from 'framer-motion';

import { TOAST_MESSAGE } from '@/utils/location';

interface ToastData {
  message: string;
  animationControls: AnimationControls;
  displayToast(selector: (messages: toastMessages) => string): void;
}

const ToastContext = createContext({} as ToastData);

type toastMessages = typeof TOAST_MESSAGE.pt;

type Selector = (messages: toastMessages) => string;

const ToastProvider: React.FC = ({ children }) => {
  const router = useRouter();

  const [selector, setSelector] = useState<Selector>(() => () => '');

  const animationControls = useAnimation();

  const currentToastMessage = useMemo(() => {
    const currentLocate = router.locale
      .toLowerCase()
      .split('-')[0]
      .toLowerCase();

    return TOAST_MESSAGE[currentLocate];
  }, [router.locale]);

  const message = selector(currentToastMessage);

  function displayToast(extractor: Selector): void {
    setSelector(() => extractor);
    animationControls.start('show');
  }

  return (
    <ToastContext.Provider value={{ message, animationControls, displayToast }}>
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastData {
  const context = useContext(ToastContext);
  return context;
}

export { ToastProvider, useToast };
