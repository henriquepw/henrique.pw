import React from 'react';
import Next from '../../components/Next/Next';
import Header from '../../components/Header/Header';
import TimelineItem from '../../components/TimelineItem/TimelineItem';

import { Section, Center } from '../../styles/grid';
import { Main } from './Education.style';

export default () => (
	<Section height='100%'>
		<Header title='Education' dividerMedia='hidden' />

		<Center padding='20px 0 0 0'>
			<Main>
				<div />
				<TimelineItem
					title='Technology in Telematics'
					subTitle='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
					date='2017 - 2020'
				/>

				<TimelineItem
					title='Computer Technician'
					subTitle='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
					date='2014 - 2017'
				/>

				<TimelineItem
					init
					title='high school'
					subTitle='Instituto Federal de Educação, Ciência e Tecnologia da Paraíba, IFPB-CG'
					date='2014 - 2017'
				/>
				<div />
			</Main>
		</Center>

		<Next to='/experience' />
	</Section>
);
