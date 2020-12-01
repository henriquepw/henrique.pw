import React, { useEffect, useRef } from 'react';

interface SpotifyButtonProps {
  onClick: () => void;
  selected: boolean;
  item: Record<string, string>;
}

// TODO: Rename this component for a better name
const SpotifyButton: React.FC<SpotifyButtonProps> = ({
  item,
  selected,
  onClick,
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selected) {
      ref.current?.focus();
    }
  }, [selected]);

  return (
    <button type="button" onClick={onClick} ref={ref}>
      {`${item.name} - ${item.artists}`}
    </button>
  );
};

export default SpotifyButton;
