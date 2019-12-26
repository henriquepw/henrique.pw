import styled from 'styled-components';

import { secundaryColor } from '~/styles/colors';

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 100%;
  height: 100%;

  padding-left: 20px;
  padding-right: 20px;

  &:nth-child(even) {
    background-color: ${secundaryColor.bg};
  }
`;
