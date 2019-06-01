import React, { useState, useEffect } from 'react';

import musics from 'assets/musics/playlist.json';

import {
	Container,
	Box,
	Playlist,
	Controllers,
	Preview,
	Title
} from './styles';

import { PlayCircle } from 'styled-icons/feather/PlayCircle';
import { PauseCircle } from 'styled-icons/feather/PauseCircle';
import { Spotify } from 'styled-icons/fa-brands/Spotify';

const Player: React.FC = () => {
	const [play, setPlay] = useState(false);
	const [playing, setPlaying] = useState(0);
	const [music] = useState(new Audio(musics[0].preview_url));

	useEffect(() => {
		music.volume = 0.4;
	}, []);

	const handlePlaying = (value: number) => {
		if (value !== playing) {
			music.src = musics[value].preview_url;
			music.play();

			setPlaying(value);
			setPlay(true);
		} else {
			handlePlay();
		}
	};

	const handlePlay = () => {
		setPlay(!play);

		if (!play) music.play();
		else music.pause();
	};

	const next = () => {
		if (playing === musics.length - 1) handlePlaying(0);
		else handlePlaying(playing + 1);
	};

	const back = () => {
		if (playing === 0) handlePlaying(musics.length - 1);
		else handlePlaying(playing - 1);
	};

	return (
		<Container>
			<Box>
				<Controllers>
					<span onClick={back}>
						<svg className='fas fa-chevron-left' />
					</span>
					<span onClick={handlePlay}>
						{!play ? <PlayCircle /> : <PauseCircle />}
					</span>
					<span onClick={next}>
						<svg className='fas fa-chevron-right' />
					</span>
				</Controllers>
				<Playlist>
					{musics.map((item, index) => (
						<Preview key={item.name}>
							<Title
								onClick={() => handlePlaying(index)}
								set={index === playing}
							>
								{item.name} - {item.artists}
							</Title>
							<a
								href={item.external_urls}
								target='_blank'
								rel='noopener noreferrer'
							>
								<Spotify />
							</a>
						</Preview>
					))}
				</Playlist>
			</Box>
			<a
				href={musics[playing].external_urls}
				target='_blank'
				rel='noopener noreferrer'
			>
				<img
					src={musics[playing].album_url}
					alt={musics[playing].name}
				/>
			</a>
		</Container>
	);
};

export default Player;
