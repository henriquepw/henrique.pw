import React, { FC } from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { Container } from './styles';

interface Props {
  className?: string;
}

const Profile: FC<Props> = ({ className }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "profile.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 140, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return <Container className={className} fluid={image.sharp.fluid} />;
};

Profile.defaultProps = {
  className: '',
};

export default Profile;
