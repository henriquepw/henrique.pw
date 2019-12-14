import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiMenu } from 'react-icons/fi';

import { Container, MenuItem, ProfileImg } from './styles';

const pages = ['Home', 'Education', 'Projects', 'About'];

function Menu({ setTitle }) {
  const [selected, setSelected] = useState('Home');
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const page = window.location.href.split('#')[1];

    if (page) setSelected(`${page[0].toUpperCase()}${page.slice(1)}`);
  }, []);

  useEffect(() => {
    setTitle(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

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

Menu.propTypes = {
  setTitle: PropTypes.func.isRequired,
};

export default Menu;
