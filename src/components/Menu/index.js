import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Container, Profile } from './styles';

export default function Header() {
  const pages = ['Home', 'Education', 'Projects', 'About'];

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
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
      <Profile fluid={data.placeholderImage.childImageSharp.fluid} />

      <ul>
        {pages.map(name => (
          <li>
            <a href={`#${name.toLowerCase()}`}>{name}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
