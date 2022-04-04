import React, { useState, useImperativeHandle, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from 'react-icons/fi';

import PlayButton from '@/components/atoms/PlayButton';

import { Container } from './styles';

interface TrackControlProps {
  onPlay(): void;
  onPause(): void;
  onPrevious(): void;
  onNext(): void;
  initialTrack: string;
}

export interface TrackControlRef {
  togglePlay(value?: boolean): void;
  changeTrack(newTrack: string): void;
}

const TrackControl: React.ForwardRefRenderFunction<
  TrackControlRef,
  TrackControlProps
> = ({ onPrevious, onNext, onPlay, onPause, initialTrack }, ref) => {
  const [isPlaying, setPlaying] = useState(false);

  const player = useRef<HTMLAudioElement>(null);

  function togglePlay(value?: boolean): void {
    const newState = value ?? !isPlaying;

    setPlaying(newState);

    if (newState) {
      onPlay();
      player.current?.play();
      return;
    }

    onPause();
    player.current?.pause();
  }

  function handleTogglePlay(): void {
    togglePlay();
  }

  function changeTrack(newTrack: string): void {
    player.current.src = newTrack;
    togglePlay(true);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      player.current = new Audio(initialTrack);
      player.current.volume = 0.3;
    }
  }, [initialTrack]);

  useEffect(() => {
    const { current } = player;
    current?.addEventListener('ended', onNext);

    return () => {
      current?.removeEventListener('ended', onNext);
    };
  }, [onNext]);

  useImperativeHandle(ref, () => ({
    togglePlay,
    changeTrack,
  }));

  return (
    <Container>
      <PlayButton>
        <FiChevronLeft size={48} onClick={onPrevious} />
      </PlayButton>

      <PlayButton>
        {isPlaying ? (
          <FiPause size={56} onClick={handleTogglePlay} />
        ) : (
          <FiPlay size={56} onClick={handleTogglePlay} />
        )}
      </PlayButton>

      <PlayButton>
        <FiChevronRight size={48} onClick={onNext} />
      </PlayButton>
    </Container>
  );
};

export default React.forwardRef(TrackControl);
