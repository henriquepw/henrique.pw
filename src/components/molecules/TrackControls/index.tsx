import React, {
  useState,
  useImperativeHandle,
  useCallback,
  useEffect,
} from 'react';
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from 'react-icons/fi';

import PlayButton from '@/components/atoms/PlayButton';

import { Container } from './styles';

interface TrackControlProps {
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
> = ({ onPrevious, onNext, initialTrack }, ref) => {
  const [isPlaying, setPlaying] = useState(false);

  const [player] = useState(() => {
    if (typeof window === 'undefined') return undefined;
    return new Audio(initialTrack);
  });

  const togglePlay = useCallback(
    (value?: boolean) => {
      const newState = value ?? !isPlaying;

      setPlaying(newState);

      if (newState) player.play();
      else player.pause();
    },
    [isPlaying, player],
  );

  function handleTogglePlay(): void {
    togglePlay();
  }

  function changeTrack(newTrack: string): void {
    player.src = newTrack;
    togglePlay(true);
  }

  useEffect(() => {
    player.volume = 0.3;
    player.addEventListener('ended', onNext);

    return () => player.removeEventListener('ended', onNext);
  }, [onNext, player]);

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
