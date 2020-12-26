import React, { useRef, useState } from 'react';

import Image from 'next/image';

import SectionTitle from '@/components/atoms/SectionTitle';
import TrackControls, {
  TrackControlRef,
} from '@/components/molecules/TrackControls';

import { mod } from '@/utils/math';

import { SectionData } from '@/interfaces/section';
import { Track } from '@/interfaces/track';

import { Container, TrackList, TrackItem } from './styles';

interface PlaylistProps {
  tracks: Track[];
  sectionData: SectionData;
}

const Playlist: React.FC<PlaylistProps> = ({ tracks, sectionData }) => {
  const [trackIndex, setTrackIndex] = useState(0);

  const trackControlsRef = useRef<TrackControlRef>(null);

  function handlePlay(index: number): void {
    if (index === trackIndex) {
      trackControlsRef.current.togglePlay();
      return;
    }

    setTrackIndex(index);
    trackControlsRef.current.changeTrack(tracks[index].previewUrl);
  }

  function handleNext(): void {
    handlePlay((trackIndex + 1) % tracks.length);
  }

  function handlePrevious(): void {
    handlePlay(mod(trackIndex - 1, tracks.length));
  }

  return (
    <Container>
      <SectionTitle>{sectionData.title}</SectionTitle>

      <div>
        <div>
          <p>{sectionData.description}</p>

          <TrackList>
            {tracks.map((track, index) => (
              <TrackItem
                key={track.id}
                isSelected={trackIndex === index}
                onClick={() => handlePlay(index)}
              >
                <dt>{track.name}</dt>
                <dd>{track.artists.map((artist) => artist.name).join(', ')}</dd>
              </TrackItem>
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

          <TrackControls
            ref={trackControlsRef}
            initialTrack={tracks[0]?.previewUrl}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </aside>
      </div>
    </Container>
  );
};

export default Playlist;
