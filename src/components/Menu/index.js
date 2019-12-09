import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';

import { Container, MenuItem, ProfileImg } from './styles';

const pages = ['Home', 'Education', 'Projects', 'About'];

export default function Header() {
  const [selected, setSelected] = useState('home');
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const page = window.location.href.split('#')[1];

    if (page) setSelected(`${page[0].toUpperCase()}${page.slice(1)}`);
  }, []);

  function handlerSelected(name) {
    setSelected(name);
    setPressed(!pressed);
  }

  return (
    <Container pressed={pressed}>
      <FiMenu size={40} onClick={() => setPressed(!pressed)} />
      <ProfileImg />

      <ul>
        {pages.map(name => (
          <MenuItem
            key={name}
            selected={selected === name}
            onClick={() => handlerSelected(name)}
          >
            <a href={`#${name.toLowerCase()}`}>{name}</a>
          </MenuItem>
        ))}
      </ul>
    </Container>
  );
}
