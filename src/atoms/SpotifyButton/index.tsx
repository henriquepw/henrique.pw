import React, { useEffect, useRef, FC } from 'react';

interface Props {
  onClick: () => void;
  selected: boolean;
  item: {
    [key: string]: string;
  };
}

const SpotifyButton: FC<Props> = ({ item, selected, onClick }) => {
  const buttonRef = useRef<HTMLElement>();

  useEffect(() => {
    if (buttonRef.current && selected) {
      buttonRef.current.focus();
    }
  }, [selected]);

  return (
    <button type="button" onClick={onClick} ref={buttonRef}>
      {item.name} - {item.artists}
    </button>
  );
};

export default SpotifyButton;
