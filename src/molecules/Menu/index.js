import React, { useState, useContext } from 'react';
import { FiMenu } from 'react-icons/fi';

import SectionsContext from '~/context/sectionsContext';

import { Container, MenuItem, ProfileImg } from './styles';

function Menu() {
  const [pressed, setPressed] = useState(false);
  const { sections, selected, setSelectedByName } = useContext(SectionsContext);

  function handlerSelected(event, name) {
    event.preventDefault();

    setSelectedByName(name);
    setPressed(!pressed);

    document.getElementById(name).scrollIntoView();
  }

  return (
    <Container pressed={pressed}>
      <FiMenu size={40} onClick={() => setPressed(!pressed)} />
      <ProfileImg />

      <ul>
        {sections.map(name => (
          <MenuItem key={name} selected={selected === name}>
            <a
              href={`#${name}`}
              alt={`Go to the ${name} section`}
              onClick={e => handlerSelected(e, name)}
            >
              {name}
            </a>
          </MenuItem>
        ))}
      </ul>
    </Container>
  );
}

export default React.memo(Menu);
