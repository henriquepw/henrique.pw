import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { Container } from './styles';

interface ProfileProps {
  className?: string;
}

const profileImageQuery = graphql`
  query {
    image: file(relativePath: { eq: "profile.jpg" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 140, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Profile: React.FC<ProfileProps> = ({ className }) => {
  const { image } = useStaticQuery(profileImageQuery);

  return <Container className={className} fluid={image.sharp.fluid} />;
};

export default Profile;
