import React from 'react';
import Header from '../../components/Header/Header';
import Next from '../../components/Next/Next';
import Project from '../../components/Project/Project';

import { Section, Center } from '../../styles/grid';
import { Grid } from './Projects.style';

export default () => (
	<Section>
		<Header title='Projects' dividerMedia='hidden' center />
		<Center>
			<Grid>
				<Project
					title='Celebino'
					description='Monitoramento da água proveniente de ar-condicionados utilizando arduíno.'
					img='../../assets/background.png'
				/>
				<Project
					title='Celebino'
					description='Monitoramento da água proveniente de ar-condicionados utilizando arduíno.'
					img='../../assets/background.png'
				/>
				<Project
					title='Celebino'
					description='Monitoramento da água proveniente de ar-condicionados utilizando arduíno.'
					img='../../assets/background.png'
				/>
				<Project
					title='Celebino'
					description='Monitoramento da água proveniente de ar-condicionados utilizando arduíno.'
					img='../../assets/background.png'
				/>
				<Project
					title='Celebino'
					description='Monitoramento da água proveniente de ar-condicionados utilizando arduíno.'
					img='../../assets/background.png'
				/>
				<Project
					title='Celebino'
					description='Monitoramento da água proveniente de ar-condicionados utilizando arduíno.'
					img='../../assets/background.png'
				/>
			</Grid>
		</Center>
		<Next to='/about' />
	</Section>
);
