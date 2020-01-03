import React, { useState, useContext } from 'react';
import { FiMenu } from 'react-icons/fi';

import SectionsContext from '~/context/sectionsContext';

import { Container, MenuItem, ProfileImg } from './styles';

function Menu() {
  const [pressed, setPressed] = useState(false);
  const { sections, selected, setSelectedByName } = useContext(SectionsContext);

  function handlerSelected(name) {
    setSelectedByName(name);
    setPressed(!pressed);
  }

  return (
    <Container pressed={pressed}>
      <FiMenu size={40} onClick={() => setPressed(!pressed)} />
      <ProfileImg />

      <ul>
        {sections.map(name => (
          <MenuItem
            key={name}
            selected={selected === name}
            onClick={() => handlerSelected(name)}
          >
            <a
              href={`#${name.toLowerCase()}`}
              alt={`Go to the ${name.toLowerCase()} section`}
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
