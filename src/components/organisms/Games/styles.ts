import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 100px;

  h2 {
    display: inline-block;
    width: 100%;
    max-width: 1176px;
    text-align: right;
  }

  ul {
    li + li {
      margin-top: 104px;
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

export const TextContainer = styled.div`
  width: 100%;
  max-width: 1176px;
  margin-bottom: 90px;

  p {
    width: 100%;
    max-width: 560px;

    font-size: 1.5rem;
    line-height: 1.5em;
    letter-spacing: 0.03em;

    text-align: right;
    margin-left: auto;
  }
`;
