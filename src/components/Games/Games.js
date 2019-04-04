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
			img={require('../../assets/hollow-knight.jpg')}
			name='Hollow Knight'
			description='Forje seu caminho em Hollow Knight! Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis. Explore cavernas serpenteantes, lute contra criaturas malignas e alie-se a insetos bizarros num estilo clássico 2D desenhado à mão.'
		/>
	</Container>
);
