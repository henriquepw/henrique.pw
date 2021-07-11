import React, { useEffect, useMemo, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

import { useRouter } from 'next/router';

import { useAnimation, useViewportScroll, Variants } from 'framer-motion';

import MenuItem from '@/components/atoms/MenuItem';

import { useTheme } from '@/hooks/useTheme';

import { SECTIONS } from '@/utils/sections';

import {
  Container,
  ExtraConfigs,
  Navigator,
  NavigateButton,
  Frame,
  ScrollBar,
  UpButton,
} from './styles';

const ArrowUpVariants: Variants = {
  hidden: { opacity: 0, pointerEvents: 'none' },
  visible: { opacity: 1, pointerEvents: 'all' },
};

const Menu: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();

  const { scrollYProgress } = useViewportScroll();
  const arrowUpControl = useAnimation();

  const currentLocale = useMemo(
    () => router.locale.toLowerCase().split('-')[0],
    [router.locale],
  );

  const sections = SECTIONS[currentLocale] || SECTIONS.en;

  const [currentSection, setCurrentSection] = useState(sections[0].slug);

  function changeLocaleToEn(): void {
    if (router.locale === 'en') return;

    router.push(router.pathname, undefined, { locale: 'en' });
  }

  function changeLocaleToPt(): void {
    if (router.locale === 'pt') return;

    router.push(router.pathname, undefined, { locale: 'pt' });
  }

  function goToTop(): void {
    window?.scrollTo(0, 0);
  }

  useEffect(() => {
    const unsub = scrollYProgress.onChange((value) => {
      arrowUpControl.start(value > 0.4 ? 'visible' : 'hidden');
    });

    return unsub;
  }, [scrollYProgress, arrowUpControl]);

  useEffect(() => {
    setCurrentSection(router.pathname);
  }, [router.pathname]);

  return (
    <Container>
      <Frame />

      <UpButton
        onClick={goToTop}
        variants={ArrowUpVariants}
        animate={arrowUpControl}
        initial="hidden"
      >
        <FiArrowUp size={40} />
      </UpButton>

      <ExtraConfigs>
        <NavigateButton onClick={theme.nextTheme}>
          <span>theme</span>
        </NavigateButton>

        <ScrollBar
          style={{
            scaleY: scrollYProgress,
          }}
        />

        <ul>
          <li>
            <NavigateButton
              onClick={changeLocaleToEn}
              isSelected={currentLocale === 'en'}
            >
              <span>en</span>
            </NavigateButton>
          </li>
          <li>
            <NavigateButton
              onClick={changeLocaleToPt}
              isSelected={currentLocale === 'pt'}
            >
              <span>pt</span>
            </NavigateButton>
          </li>
        </ul>
      </ExtraConfigs>

      <Navigator>
        {sections?.map((section) => (
          <MenuItem
            key={section.id}
            slug={section.slug}
            isSelected={section.slug === currentSection}
          >
            {section.name}
          </MenuItem>
        ))}
      </Navigator>
    </Container>
  );
};

export default Menu;
