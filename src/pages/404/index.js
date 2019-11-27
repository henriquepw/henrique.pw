import React from 'react';
import { Container, Button } from './styles';

export default function NotFound() {
  return (
    <Container>
      <h3>Oops!!</h3>
      <main>
        <h1>
          40<span>4</span>
        </h1>
        <h2>Página não encontrada</h2>
      </main>
      <Button>Voltar para Home</Button>
    </Container>
  );
}
