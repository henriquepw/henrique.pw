import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Container, Profile } from './styles';

export default function Header() {
  const pages = ['Home', 'Education', 'Projects', 'About'];

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Profile fluid={image.childImageSharp.fluid} />

      <ul>
        {pages.map(name => (
          <li key={name}>
            <a href={`#${name.toLowerCase()}`}>{name}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
