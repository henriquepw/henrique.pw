import React, { useMemo } from 'react';

import { useRouter } from 'next/router';

import { useTheme } from '@/hooks/useTheme';

import { SECTIONS } from '@/utils/sections';

import { Container, ExtraConfigs, Navigator, NavigateButton } from './styles';

const Menu: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();

  const currentLocale = useMemo(
    () => router.locale.toLowerCase().split('-')[0],
    [router.locale],
  );

  function changeLocaleToEn(): void {
    router.push('', '', { locale: 'en' });
  }

  function changeLocaleToPt(): void {
    router.push('', '', { locale: 'pt' });
  }

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
          <li key={section.id}>
            <a href="/">{section.name}</a>
          </li>
        ))}
      </Navigator>
    </Container>
  );
};

export default Menu;
