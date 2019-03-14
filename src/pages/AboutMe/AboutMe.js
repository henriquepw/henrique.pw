import React from 'react';
import Header from '../../components/Header/Header';
import Next from '../../components/Next/Next';
import GameItem from '../../components/GameItem/GameItem';

import { Section, Center } from '../../styles/grid';

export default () => (
	<Section>
		<Header title='About me :)' margin='0 0 70px 0' dividerMedia='hidden' />
		<Center direction='column'>
			<GameItem
				img={require('../../assets/factorio.jpg')}
				name='Factorio'
				description="Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world. Use your imagination to design your factory, combine simple elements into ingenious structures, and finally protect it from the creatures who don't really like you."
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
		</Center>
		<Next to='/' />
	</Section>
);
