import React from 'react';
import Header from '../../components/Header/Header';
import EducationItem from '../../components/EducationItem/EducationItem';

import { Section } from '../../styles/grid';
import { Main } from './Education.style';

export default () => (
    <Section height='100%'>
        <Header title='Education' />

        <Main>
            <div/>
            <EducationItem
                course='Technology in Telematics'
                title='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
                data='2017 - 2020'
            />

            <EducationItem
                init
                course='Computer Technician'
                title='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
                data='2014 - 2017'
            />
            <div/>
        </Main>
    </Section>
);
