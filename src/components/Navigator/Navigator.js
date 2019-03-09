import React, { Component } from 'react';

import { Container, Img, Menu, MenuItem, MenuButton } from './Navigator.style';
import photo from '../../assets/photo.png';

class Navigator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			press: false,
			active: `/${window.location.href.split('/')[4]}`
		};
	}

	render() {
		const press = !this.state.press;

		const setPress = active => {
			const state = { press };
			if (active) state.active = active;
			this.setState(state);
		};

		const { active } = this.state;
		const values = [
			['/', 'Home'],
			['/education', 'Education'],
			// ['/experience', 'Experience'],
			['/projects', 'Projects'],
			['/about', 'About me']
		];

		return (
			<Container press={!press}>
				<MenuButton press size='2.2em' onClick={setPress} />
				<Img src={photo} title='Eu :)' />

				<Menu press={!press}>
					{values.map(item => (
						<MenuItem
							key={item[1]}
							to={item[0]}
							onClick={() => setPress(item[0])}
							active={active}
						>
							{item[1]}
						</MenuItem>
					))}
				</Menu>
			</Container>
		);
	}
}

export default Navigator;
