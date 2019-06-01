import React, { useState, useEffect } from 'react';

import photo from 'assets/photo.png';
import Icon from '../Icon';

import { Container, Img, Menu, MenuItem, MenuButton, Next } from './styles';

const Navigator: React.FC = () => {
	const VALUES = [
		['/', 'Home'],
		['/education', 'Education'],
		// ['/experience', 'Experience'],
		['/projects', 'Projects'],
		['/about', 'About me']
	];

	const [press, setPress] = useState(true);
	const [next, setNext] = useState(1);
	const [active, setActive] = useState(
		`/${window.location.href.split('/')[4]}`
	);

	const handleNext = (index: number) => {
		if (index + 1 === VALUES.length) setNext(0);
		else setNext(index + 1);
	};

	const handlePress = (active?: string, index?: number) => {
		setPress(!press);

		if (active) setActive(active);
		if (index !== undefined) handleNext(index);
	};

	useEffect(() => {
		console.log('url mudou!!');
	}, [window.location.href]);

	return (
		<>
			<Container press={!press}>
				<MenuButton press size='2.2em' onClick={() => handlePress()} />
				<Img src={photo} title='Eu :)' />

				<Menu press={!press}>
					{VALUES.map((item, index) => (
						<MenuItem
							key={item[1]}
							to={item[0]}
							onClick={() => handlePress(item[0], index)}
							active={active}
						>
							{item[1]}
						</MenuItem>
					))}
				</Menu>
			</Container>
			<Next to={VALUES[next][0]} onClick={() => handleNext(next)}>
				<p>{VALUES[next][0].substr(1).toUpperCase()}</p>
				<Icon name='next' noHover />
			</Next>
		</>
	);
};

export default Navigator;
