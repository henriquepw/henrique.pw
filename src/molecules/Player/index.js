/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { FiPlay, FiPause, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import playlist from '~/assets/playlist.json';

import { Container, Music } from './styles';

function Player() {
  const [play, setPlay] = useState(false);
  const [currentMusic, setCurrentMusic] = useState(0);
  const music = useRef({ current: null });

  useEffect(() => {
    console.log(music);
    if (music.current && music.current.volume) {
      music.current.volume = 0.5;
    }
  }, []);

  function togglePlay(value = !play) {
    setPlay(value);

    if (value) music.current.play();
    else music.current.pause();
  }

  function handlePlaying(index) {
    if (index !== currentMusic) {
      music.current.src = playlist[index].preview_url;

      setCurrentMusic(index);
      togglePlay(true);
    } else {
      togglePlay();
    }
  }

  function handleNext() {
    const next = currentMusic + 1;
    handlePlaying(next >= playlist.length ? 0 : next);
  }

  function handlePrevious() {
    const previous = currentMusic - 1;
    handlePlaying(previous < 0 ? playlist.length - 1 : previous);
  }

  return (
    <Container>
      <div>
        <header>
          <FiChevronLeft size={32} onClick={handlePrevious} />
          {play ? (
            <FiPause size={40} onClick={() => togglePlay()} />
          ) : (
            <FiPlay size={40} onClick={() => togglePlay()} />
          )}
          <FiChevronRight size={32} onClick={handleNext} />
        </header>

        <ol>
          {playlist.map((item, index) => (
            <Music key={item.preview_url} selected={index === currentMusic}>
              <button type="button" onClick={() => handlePlaying(index)}>
                {item.name} - {item.artists}
              </button>
              <a
                href={item.external_urls}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSpotify size={25} />
              </a>
            </Music>
          ))}
        </ol>
      </div>

      <a
        href={playlist[currentMusic].external_urls}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={playlist[currentMusic].album_url}
          alt={playlist[currentMusic].artists}
        />
      </a>
      <audio ref={music} />
    </Container>
  );
}

export default Player;
