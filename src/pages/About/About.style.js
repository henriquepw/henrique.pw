import styled from 'styled-components';

const Section = styled.section`
    background-color: #fff;
    width: 65em;
    height: 100vh;

    padding-left: 17em;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: #3d3d3d;

    span {
        color: #af4448;
    }

    h1 {
        font-size: 4em;
        margin: 0px;
        margin-top: 30px;
    }

    h2 {
        font-size: 1.8em;
        margin: 0px;
    }

    p {
        margin: 0px;
        padding: 0px;
    }

    h1, h2, p, ul {
        margin-left: 40px;
        margin-right: 40px;
    }

    ul {
        padding: 30px 0px;
        display: flex;
    }

    li {
        list-style-type: none;
        padding-right: 20px;
    }

    a img {
        transition: transform 0.3s;
        border-radius: 50%;
        width: 3.5em;
    }

    a:hover img {
        transform: scale(1.2);
    }
`;

const Divider = styled.div`
    background-color: #af4448;
    width: 58%;
    height: 5px;

    margin: 30px 0px 30px 0px;
`;

export { Section, Divider };
