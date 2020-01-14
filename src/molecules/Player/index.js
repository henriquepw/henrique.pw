import React, { useState, useEffect, useMemo } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { FiPlay, FiPause, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import PlayerButton from '~/atoms/PlayerButton';
import SpotifyButton from '~/atoms/SpotifyButton';

import playlist from '~/assets/data/playlist.json';

import { Container, Music } from './styles';

function Player() {
  const [music] = useState(new Audio(playlist[0].preview_url));
  const [play, setPlay] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(-1); // -1 = none selected
  const currentMusic = useMemo(() => (currentIndex === -1 ? 0 : currentIndex), [
    currentIndex,
  ]);

  useEffect(() => {
    if (music && music.volume) {
      music.volume = 0.35;
    }
  }, [music]);

  function togglePlay(value = !play) {
    if (currentIndex === -1) setCurrentIndex(0);
    setPlay(value);

    if (value) music.play();
    else music.pause();
  }

  function handlePlaying(index) {
    if (index !== currentIndex) {
      music.src = playlist[index].preview_url;

      setCurrentIndex(index);
      togglePlay(true);
    } else {
      togglePlay();
    }
  }

  function handleNext() {
    const next = currentIndex + 1;
    handlePlaying(next >= playlist.length ? 0 : next);
  }

  function handlePrevious() {
    const previous = currentIndex - 1;
    handlePlaying(previous < 0 ? playlist.length - 1 : previous);
  }

  return (
    <Container>
      <div>
        <header>
          <PlayerButton>
            <FiChevronLeft size={32} onClick={handlePrevious} />
          </PlayerButton>
          <PlayerButton>
            {play ? (
              <FiPause size={40} onClick={() => togglePlay()} />
            ) : (
              <FiPlay size={40} onClick={() => togglePlay()} />
            )}
          </PlayerButton>
          <PlayerButton>
            <FiChevronRight size={32} onClick={handleNext} />
          </PlayerButton>
        </header>

        <ol>
          {playlist.map((item, index) => (
            <Music key={item.preview_url} selected={index === currentIndex}>
              <SpotifyButton
                item={item}
                selected={index === currentIndex}
                onClick={() => handlePlaying(index)}
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.external_urls}
                aria-label={`go to ${item.name} music on Spotify`}
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
        aria-label="External link to the music on Spotify"
      >
        <img
          src={playlist[currentMusic].album_url}
          alt={playlist[currentMusic].artists}
        />
      </a>
    </Container>
  );
}

export default Player;
