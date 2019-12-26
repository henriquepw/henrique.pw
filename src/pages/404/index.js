import React, { useEffect, useState } from 'react';

import { Container, Button } from './styles';

function NotFound() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function setCurrentHeight() {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', setCurrentHeight);

    return () => {
      window.removeEventListener('resize', setCurrentHeight);
    };
  }, [height]);

  return (
    <Container title="Not found" height={height}>
      <h3>Oops!!</h3>
      <main>
        <h1>
          40<span>4</span>
        </h1>
        <h2>Página não encontrada</h2>
      </main>
      <Button to="/">Go back Home</Button>
    </Container>
  );
}

export default NotFound;
