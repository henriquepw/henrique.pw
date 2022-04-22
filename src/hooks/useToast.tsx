import { createContext, useContext, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import { AnimationControls, useAnimation } from 'framer-motion';

import { TOAST_MESSAGES } from '@/utils/location';

interface ToastData {
  message: string;
  animationControls: AnimationControls;
  displayToast(selector: (messages: ToastMessages) => string): void;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastContext = createContext({} as ToastData);

type ToastMessages = typeof TOAST_MESSAGES.pt;

type Selector = (messages: ToastMessages) => string;

function ToastProvider({ children }: ToastProviderProps) {
  const router = useRouter();

  const [selector, setSelector] = useState<Selector>(() => () => '');

  const animationControls = useAnimation();

  const currentToastMessage = useMemo(() => {
    const currentLocate = (router.locale || '')
      .toLowerCase()
      .split('-')[0]
      .toLowerCase();

    return TOAST_MESSAGES[currentLocate] || TOAST_MESSAGES.en;
  }, [router.locale]);

  const message = selector(currentToastMessage);

  function displayToast(extractor: Selector) {
    setSelector(() => extractor);
    animationControls.start('show');
  }

  return (
    <ToastContext.Provider value={{ message, animationControls, displayToast }}>
      {children}
    </ToastContext.Provider>
  );
}

function useToast(): ToastData {
  const context = useContext(ToastContext);
  return context;
}

export { ToastProvider, useToast };
