import styled from 'styled-components';
import Img from 'gatsby-image';

export const Container = styled(Img)`
  width: 148px;
  height: 148px;
  transition: 0.5s;

  user-select: none;
  border-radius: 50%;
  border: 10px solid 'rgba(255, 255, 255, 0.2)';
  background-clip: padding-box;
`;
