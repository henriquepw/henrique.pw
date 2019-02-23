import React from 'react';
import { Divider } from '../../styles/shapes';
import { Container } from './Header.style';

export default ({ title }) => (
    <Container>
        <h1>{title}</h1>
        <Divider margin='0px' size='500px' />
    </Container>
);
