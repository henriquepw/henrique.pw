import React from 'react';
import Header from '../../components/Header/Header';
import Next from '../../components/Next/Next';

import { Section } from '../../styles/grid';

export default () => (
    <Section>
        <Header title='Experience' />
        <Next to='/projects'/>
    </Section>
);
