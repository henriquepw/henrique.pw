import React from 'react';
import Header from '../../components/Header/Header';
import Next from '../../components/Next/Next';
import TimelineItem from '../../components/TimelineItem/TimelineItem';

import { Section } from '../../styles/grid';
import { Main } from './Experience.style';

export default () => (
	<Section height='100%'>
		<Header title='Experience' margin='0 0 70px 0' dividerMedia='hidden' />

		<Main>
			<div />
			<TimelineItem
				title='Computer Technician'
				subTitle='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
				date='2014 - 2017'
			/>
			<TimelineItem
				title='Computer Technician'
				subTitle='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
				date='2014 - 2017'
			/>
			<TimelineItem
				init
				title='Computer Technician'
				subTitle='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
				date='2014 - 2017'
			/>
			<div />
		</Main>
		<Next to='/projects' />
	</Section>
);
