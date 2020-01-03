import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Profile({ className }) {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "profile.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Container className={className} fluid={image.sharp.fluid} />;
}

Profile.defaultProps = {
  className: '',
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Profile);
