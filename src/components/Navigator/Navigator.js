import React, { Component } from 'react';

import { Container, Img, Menu, MenuItem } from './Navigator.style';

import photo from 'assets/photo.png';

class Navigator extends Component {
    render() {
        return (
            <Container>
                <Img src={photo} alt='Eu :)' />

                <Menu>
                    <MenuItem to='/'>Sobre</MenuItem>
                    <MenuItem to='/experiencia'>Experiência</MenuItem>
                    <MenuItem to='/Projetos'>Projetos</MenuItem>
                    <MenuItem to='/contato'>Contato</MenuItem>
                </Menu>
            </Container>
        );
    }
}

export default Navigator;
