import React from 'react';
import GameItem from '../GameItem/GameItem';
import { Container } from './Games.style';

export default () => (
	<Container>
		<GameItem
			img={require('../../assets/factorio.jpg')}
			name='Factorio'
			description='Factorio é um jogo sobre a construção e criação de fábricas automatizadas para produzir itens de crescente complexidade, dentro de um mundo 2D infinito.'
		/>
		<GameItem
			right
			img={require('../../assets/witcher.jpg')}
			name='The Witcher 3: Wild Hunt'
			description='Enquanto a guerra assola todos os Reinos do Norte, você enfrenta o maior conflito de sua vida: ir em busca da criança da profecia, uma arma senciente capaz de alterar o mundo.'
		/>
		<GameItem
			img={require('../../assets/the-talos-principle.jpg')}
			name='The Talos Principle'
			description='The Talos Principle é um jogo filosófico de enigma em primeira pessoa. Resolva uma série de enigmas cada vez mais complexos tecidos em uma parábola metafísica sobre a inteligência e sentido em um mundo inevitavelmente condenado.'
		/>
	</Container>
);
