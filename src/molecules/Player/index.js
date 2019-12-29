/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { FiPlay, FiPause, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import PropTypes from 'prop-types';

import playlist from '~/res/playlist.json';

import { Container, Music } from './styles';

function Player() {
  const [play, setPlay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1); // -1 = none selected

  const music = useRef({ current: null });

  const currentMusic = useMemo(() => (currentIndex === -1 ? 0 : currentIndex), [
    currentIndex,
  ]);

  useEffect(() => {
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
    if (index !== currentIndex) {
      music.current.src = playlist[index].preview_url;

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

  function Button({ item, index, selected }) {
    const buttonRef = useRef(null);

    useEffect(() => {
      if (buttonRef && buttonRef.current && selected) {
        buttonRef.current.focus();
      }
    }, [selected]);

    return (
      <button
        type="button"
        onClick={() => handlePlaying(index)}
        ref={buttonRef}
      >
        {item.name} - {item.artists}
      </button>
    );
  }

  Button.propTypes = {
    item: PropTypes.objectOf(PropTypes.string).isRequired,
    selected: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  };

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
            <Music key={item.preview_url} selected={index === currentIndex}>
              <Button
                item={item}
                index={index}
                selected={index === currentIndex}
              />
              <a
                href={item.external_urls}
                target="_blank"
                rel="noopener noreferrer"
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
      <audio ref={music} />
    </Container>
  );
}

export default Player;
