import React from 'react';
import Next from '../../components/Next/Next';
import Header from '../../components/Header/Header';
import TimelineItem from '../../components/TimelineItem/TimelineItem';

import { Section, Center } from '../../styles/grid';
import { Container } from './Education.style';

export default () => (
	<Section>
		<Header title='Education' dividerMedia='hidden' />

		<Center padding='30px 0 0 0'>
			<Container>
				<div />
				<TimelineItem
					title='Technology in Telematics'
					subTitle='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
					init='2017'
					final='2020'
				/>

				<TimelineItem
					left
					title='Computer Technician'
					subTitle='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
					init='2014'
					final='2017'
				/>

				<TimelineItem
					title='High School'
					subTitle='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
					init='2014'
					final='2017'
				/>
				<div />
			</Container>
		</Center>

		<Next to='/projects' />
	</Section>
);
