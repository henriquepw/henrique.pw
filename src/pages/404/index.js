import React from 'react';
import { Container, Button } from './styles';

export default function NotFound() {
  return (
    <Container>
      <h3>Oops!!</h3>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Button>Voltar para Home</Button>
    </Container>
  );
}
