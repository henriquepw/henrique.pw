import React from 'react';

import { Divider } from 'styles/Divider';
import { Container } from './styles';

interface HeaderProps {
    title: string;
    margin?: string;
    center?: boolean;
}

export default ({ title, margin, center }: HeaderProps) => (
    <Container center={center}>
        <h1>{title}</h1>
        <Divider
            radiusRight
            margin={margin || '0'}
            size='500px'
            dividerMedia='hidden'
        />
    </Container>
);
