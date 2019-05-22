import React from 'react';
import Header from '../../components/Header';
import Next from '../../components/Next';
import Games from '../../components/Games';
import Music from '../../components/Music';

import { Section, Center } from '../../styles/grid';
import { P } from './AboutMe.style';

export default () => (
	<Section>
		<Header title='About me :)' margin='0 0 70px 0' dividerMedia='hidden' />
		<Center direction='column'>
			<P>
				<u>Fala meu bom!</u>
			</P>
			<P>
				Eu me chamo Henrique,{' '}
				<strike>
					você deve ter visto o meu nome na tela principal
				</strike>
				, eu sou de uma cidadezinha que ninguém conhece chamado
				Montadas, do interior da Paraíba no Brasil e desde pequeno que
				eu gosto de tecnologia, comecei a programar quando entrei no
				ensino médio, com meu 14 anos sem saber onde estava se metendo,
				mas acabei gostando e aqui estou{' '}
				<strike>escrevendo essa portifolio</strike>.
			</P>
			<P>
				Bem, vou falar de algumas coisa que eu gosto para você me
				conhecerem melhor
			</P>
			<h1>Jogos \o/</h1>
			<Games />
			<P />
			<h1>Musicas \o/</h1>
			<Music />
			<P />
		</Center>
		<Next to='/' />
	</Section>
);
