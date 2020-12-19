import React from 'react';

import Link from 'next/link';

import { Container } from './styles';

interface MenuItemProps {
  slug: string;
  children: string;
  isSelected: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ slug, children, isSelected }) => {
  return (
    <Container isSelected={isSelected}>
      <Link href={slug}>
        <a>
          <div>
            <span>{children}</span>
          </div>
          <div>
            <span>{children}</span>
          </div>
        </a>
      </Link>
    </Container>
  );
};

export default MenuItem;
