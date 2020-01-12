import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

function SpotifyButton({ item, selected, onClick }) {
  const buttonRef = useRef();

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
}

SpotifyButton.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SpotifyButton;
