import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi';

import Image from 'next/image';

import SectionTitle from '@/components/atoms/SectionTitle';

import { Track } from '@/interfaces/track';

import { Container, TrackList, TrackControls } from './styles';

interface PlaylistProps {
  items: Track[];
}

const Playlist: React.FC<PlaylistProps> = ({ items }) => {
  const [selectedTrack] = useState(items[0]);

  return (
    <Container>
      <SectionTitle>Musics</SectionTitle>

      <div>
        <div>
          <TrackList>
            {items.map((track) => (
              <div key={track.id}>
                <dt>{track.name}</dt>
                <dd>{track.artists.map((artist) => artist.name).join(', ')}</dd>
              </div>
            ))}
          </TrackList>
        </div>

        <aside>
          {selectedTrack && (
            <Image
              src={selectedTrack.album.image.url}
              height={selectedTrack.album.image.height}
              width={selectedTrack.album.image.width}
            />
          )}

          <TrackControls>
            <FiChevronLeft size={48} />
            <FiPlay size={56} />
            <FiChevronRight size={48} />
          </TrackControls>
        </aside>
      </div>
    </Container>
  );
};

export default Playlist;
