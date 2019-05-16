/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import { PlayCircle } from 'styled-icons/feather/PlayCircle';
import { PauseCircle } from 'styled-icons/feather/PauseCircle';
import { SkipForward } from 'styled-icons/feather/SkipForward';
import { SkipBack } from 'styled-icons/feather/SkipBack';
import { Spotify } from 'styled-icons/fa-brands/Spotify';
import {
	Box,
	Container,
	Title,
	Preview,
	Playlist,
	Controllers
} from './Music.style';

import sounds from '../../assets/musics/playlist.json';

class Music extends Component {
	constructor(props) {
		super(props);
		this.state = {
			play: false,
			itens: sounds,
			albumImg: sounds[0].album_url,
			playing: 0
		};

		this.music = new Audio(sounds[0].preview_url);
		this.music.volume = 0.4;
		this.music.loop = true;
	}

	setPlaying = playing => {
		this.music.src = sounds[playing].preview_url;
		this.setState({ playing, play: true });
		this.music.play();
	};

	setPlay = () => {
		const { play } = this.state;
		this.setState({ play: !play });

		if (!play) this.music.play();
		else this.music.pause();
	};

	next = () => {
		const { playing, itens } = this.state;
		if (playing === itens.length - 1) this.setPlaying(0);
		else this.setPlaying(playing + 1);
	};

	back = () => {
		const { playing, itens } = this.state;
		if (playing === 0) this.setPlaying(itens.length - 1);
		else this.setPlaying(playing - 1);
	};

	render() {
		const { play, itens, playing } = this.state;
		return (
			<Container>
				<Box>
					<Controllers>
						<SkipBack onClick={this.back} size={30} />
						{!play ? (
							<PlayCircle onClick={this.setPlay} />
						) : (
							<PauseCircle onClick={this.setPlay} />
						)}
						<SkipForward onClick={this.next} size={30} />
					</Controllers>

					<Playlist>
						{itens.map((item, index) => (
							<Preview set={index === playing}>
								<Title
									onClick={() => this.setPlaying(index)}
									set={index === playing}
								>
									{item.name} - {item.artists}
								</Title>
								<a
									href={item.external_urls}
									target='_blank'
									rel='noopener noreferrer'
								>
									<Spotify size={20} />
								</a>
							</Preview>
						))}
					</Playlist>
				</Box>

				<a
					href={itens[playing].external_urls}
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={itens[playing].album_url}
						alt={itens[playing].name}
					/>
				</a>
			</Container>
		);
	}
}

export default Music;
