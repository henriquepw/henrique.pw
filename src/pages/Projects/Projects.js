import React from 'react';
import Header from '../../components/Header/Header';
import Next from '../../components/Next/Next';

import { Section, Building } from '../../styles/grid';



export default () => (
    <Section>
        <Header title='Projects' />
        <Building>Building...</Building>
        <Next to='/about'/>
    </Section>
);
