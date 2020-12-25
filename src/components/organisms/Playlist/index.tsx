import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi';

import Image from 'next/image';

import SectionTitle from '@/components/atoms/SectionTitle';

import { Track } from '@/interfaces/track';

import { Container, TrackList, TrackControls } from './styles';

interface PlaylistProps {
  tracks: Track[];
}

const Playlist: React.FC<PlaylistProps> = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);

  const play = useRef(false);
  const player = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    player.current = new Audio(tracks[0]?.previewUrl);
    player.current.volume = 0.35;
  }, [tracks]);

  function togglePlay(
    _: React.MouseEvent,
    value = !play.current,
    index = trackIndex,
  ): void {
    if (index === -1) setTrackIndex(0);
    play.current = value;

    if (value) player.current.play();
    else player.current.pause();
  }

  return (
    <Container>
      <SectionTitle>Musics</SectionTitle>

      <div>
        <div>
          <TrackList>
            {tracks.map((track) => (
              <div key={track.id}>
                <dt>{track.name}</dt>
                <dd>{track.artists.map((artist) => artist.name).join(', ')}</dd>
              </div>
            ))}
          </TrackList>
        </div>

        <aside>
          {tracks[trackIndex] && (
            <Image
              src={tracks[trackIndex].album.image.url}
              height={tracks[trackIndex].album.image.height}
              width={tracks[trackIndex].album.image.width}
            />
          )}

          <TrackControls>
            <FiChevronLeft size={48} />
            <FiPlay size={56} onClick={togglePlay} />
            <FiChevronRight size={48} />
          </TrackControls>
        </aside>
      </div>
    </Container>
  );
};

export default Playlist;
