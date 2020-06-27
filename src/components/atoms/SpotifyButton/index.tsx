import React, { useEffect, useRef } from 'react';

interface Props {
  onClick: () => void;
  selected: boolean;
  item: {
    [key: string]: string;
  };
}

const SpotifyButton: React.FC<Props> = ({ item, selected, onClick }) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current && selected) {
      ref.current.focus();
    }
  }, [selected]);

  return (
    <button type="button" onClick={onClick} ref={ref}>
      {`${item.name} - ${item.artists}`}
    </button>
  );
};

export default SpotifyButton;
