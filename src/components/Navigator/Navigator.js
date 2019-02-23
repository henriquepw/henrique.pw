import React, { Component } from 'react';

import { Container, Img, Menu, MenuItem } from './Navigator.style';
import photo from '../../assets/photo.png';

class Navigator extends Component {
    render() {
        return (
            <Container>
                <Img src={photo} alt='Eu :)' />

                <Menu>
                    <MenuItem to='/'>Home</MenuItem>
                    <MenuItem to='/education'>Education</MenuItem>
                    <MenuItem to='/experience'>Experience</MenuItem>
                    <MenuItem to='/projects'>Projects</MenuItem>
                    <MenuItem to='/about'>About me</MenuItem>
                </Menu>
            </Container>
        );
    }
}

export default Navigator;
