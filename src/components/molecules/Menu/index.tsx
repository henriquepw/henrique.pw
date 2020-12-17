import React, { useEffect, useMemo, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTheme } from '@/hooks/useTheme';

import { SECTIONS } from '@/utils/sections';

import {
  Container,
  ExtraConfigs,
  Navigator,
  NavigateButton,
  NavigateItem,
} from './styles';

const Menu: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();

  const [currentSection, setCurrentSection] = useState(SECTIONS[0].slug);

  const currentLocale = useMemo(
    () => router.locale.toLowerCase().split('-')[0],
    [router.locale],
  );

  function changeLocaleToEn(): void {
    router.push(router.pathname, undefined, { locale: 'en' });
  }

  function changeLocaleToPt(): void {
    router.push(router.pathname, undefined, { locale: 'pt' });
  }

  useEffect(() => {
    setCurrentSection(router.pathname);
  }, [router.pathname]);

  return (
    <Container>
      <ExtraConfigs>
        <NavigateButton onClick={theme.nextTheme}>
          <span>theme</span>
        </NavigateButton>

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
        {SECTIONS.map((section) => (
          <NavigateItem
            key={section.id}
            isSelected={section.slug === currentSection}
          >
            <Link href={section.slug}>
              <a>{section.name}</a>
            </Link>
          </NavigateItem>
        ))}
      </Navigator>
    </Container>
  );
};

export default Menu;
