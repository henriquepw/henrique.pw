import React from 'react';

import Header from 'components/header';
import TimelineItem from 'components/timelineItem';

import { Section, Center } from '../../styles/grid';
import { Container } from './styles';

const Education: React.FC = () => (
	<Section>
		<Header title='Education' />

		<Center padding='30px 0 0 0'>
			<Container>
				<div />
				<TimelineItem
					title='Technology in Telematics'
					subTitle='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
					init={2017}
					final={2020}
				/>

				<TimelineItem
					left
					title='Computer Technician'
					subTitle='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
					init={2014}
					final={2017}
				/>

				<TimelineItem
					title='High School'
					subTitle='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
					init={2014}
					final={2017}
				/>
				<div />
			</Container>
		</Center>
	</Section>
);

export default Education;
