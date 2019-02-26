import React, { Component } from 'react';

import { Container, Img, Menu, MenuItem, MenuButton } from './Navigator.style';
import photo from '../../assets/photo.png';

class Navigator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			press: false
		};
	}

	render() {
		const press = !this.state.press;
		const setPress = () => this.setState({ press });
		const values = [
			['/', 'Home'],
			['/education', 'Education'],
			['/experience', 'Experience'],
			['/projects', 'Projects'],
			['/about', 'About me']
		];

		return (
			<Container press={!press}>
				<MenuButton press={!press} size='2.2em' onClick={setPress} />
				<Img src={photo} title='Eu :)' />

				<Menu press={!press}>
					{values.map(item => (
						<MenuItem to={item[0]} onClick={setPress}>
							{item[1]}
						</MenuItem>
					))}
				</Menu>
			</Container>
		);
	}
}

export default Navigator;
