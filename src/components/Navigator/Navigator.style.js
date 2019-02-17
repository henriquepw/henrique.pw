import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-color: #F2BE96;
    width: 350px;
    height: 100vh;
`;

export const Img = styled.img`
    display: block;
    margin: 115px auto 50px auto;
    text-align: center;

    width: 55%;

    border-radius: 50%;
    border: 10px solid rgba(255, 255, 255, 0.5);
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;

    margin: 0px;
    padding: 0px;

    font-size: 42px;
`;

export const MenuItem = styled(Link)`
    text-decoration: none;

    font-weight: bold;
    text-align: center;

    padding-bottom: 15px;

    color: #707070;

    &:hover {
        color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
        color: #fff;
    }

    &:link,
    &:active {
        color: #fff;
    }
`;
