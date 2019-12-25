import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

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

Profile.defaultProps = {
  className: '',
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
