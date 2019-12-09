import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { Container } from './styles';

function Profile({ className }) {
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
    <Container className={className} fluid={image.childImageSharp.fluid} />
  );
}

Profile.propTypes = {
  className: PropTypes.string,
};

Profile.defaultProps = {
  className: '',
};

export default Profile;
