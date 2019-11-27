import React from 'react';
import { Container, Button } from '~/styles/404';

export default function NotFound() {
  return (
    <Container title="Not found">
      <h3>Oops!!</h3>
      <main>
        <h1>
          40<span>4</span>
        </h1>
        <h2>Page not found</h2>
      </main>
      <Button to="/">Go back Home</Button>
    </Container>
  );
}
