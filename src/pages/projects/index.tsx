import React from 'react';

import Header from 'components/header';
import Project from '../../components/project';

import { Section, Center } from 'styles/grid';
import { Grid } from './styles';

const Projects: React.FC = () => (
	<Section height='100vh'>
		<Header title='Projects' center />
		<Center>
			<Grid>
				<Project
					title='Celebino'
					description='Monitoramento da água proveniente de ar-condicionados utilizando arduíno'
				/>
				<Project
					title='MD5 hash generator'
					description='Gerador de hash MD5 feito em SystemVerilog'
				/>
				<Project
					title='Canary'
					description='Monitoramento da qualidade do ar usando tecnologia da IoT'
				/>
				<Project
					title='Wildcard Mask Calculator'
					description='Calculadora de mascara curinga para ACLs'
				/>
				<Project
					title='Uber-in-cg'
					description='Análise estática do Uber em Campina Grande-PB'
				/>
				<Project
					title='Meu portfolio'
					description='Esse site que você está :)'
				/>
			</Grid>
		</Center>
	</Section>
);

export default Projects;
