import React from 'react';
import { Container } from './GameItem.style';

type GameProps = {
	img: string,
	name: string,
	description: string,
	right: boolean
};

export default ({ img, name, description, right }: GameProps) => (
	<Container right={right}>
		<img src={img} alt={name} title={name} />
		<section>
			<h1>{name}</h1>
			<p>{description}</p>
		</section>
	</Container>
);
