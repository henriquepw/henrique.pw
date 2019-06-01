import React from 'react';

import Games from 'components/games';
import Header from 'components/header';
import Player from 'components/player';

import { Section, Center } from 'styles/grid';
import { P, Strike } from './styles';

const AboutMe: React.FC = () => (
	<Section>
		<Header title='About me :)' />
		<Center direction='column'>
			<P>
				<u>Fala meu bom!</u>
			</P>
			<P>
				Eu me chamo Henrique,{' '}
				<Strike>
					você deve ter visto o meu nome na tela principal
				</Strike>
				, eu sou de uma cidadezinha que ninguém conhece chamado
				Montadas, do interior da Paraíba no Brasil e desde pequeno que
				eu gosto de tecnologia, comecei a programar quando entrei no
				ensino médio, com meu 14 anos sem saber onde estava se metendo,
				mas acabei gostando e aqui estou{' '}
				<Strike>escrevendo essa portifolio</Strike>.
			</P>
			<P>
				Bem, vou falar de algumas coisa que eu gosto para você me
				conhecerem melhor
			</P>

			<h1>Jogos \o/</h1>
			<Games />

			<P />

			<h1>Musicas \o/</h1>
			<Player />

			<P />
		</Center>
	</Section>
);

export default AboutMe;
