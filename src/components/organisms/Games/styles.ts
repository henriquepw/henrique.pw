import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;

  h2 {
    margin-left: auto;
  }

  ul {
    li + li {
      margin-top: 72px;
    }

    li:nth-of-type(odd) {
      padding-right: 224px;
    }

    li:nth-of-type(even) {
      flex-direction: row-reverse;
      text-align: right;
      padding-left: 224px;

      > div:first-of-type {
        padding-right: 32px;
        padding-left: 112px;

        p {
          margin-right: 0;
          margin-left: 40px;
        }
      }

      > div:last-of-type {
        margin-left: 0;
        margin-right: -112px;
      }
    }
  }
`;
