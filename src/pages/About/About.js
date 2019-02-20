import React from 'react';
import { Section, Divider } from './About.style';
import { Background } from 'styles/grid.js';

import Icon from 'components/Icon/Icon';

export default () => (
    <Section>
        <Background />
        <h1>
            Henrique <span>Miranda</span>
        </h1>
        <h2>
            Telematics student, Full Stack Developer <span>&</span> Designer
        </h2>
        <Divider />
        
        {/*
        <p>
            Texto Texto Texto Texto Texto TextoTexto Texto Texto Texto Texto
            TextoTexto Texto Texto Texto Texto TextoTexto Texto Texto Texto
            Texto Texto Texto Texto Texto Texto Texto TextoTexto Texto Texto
            Texto Texto TextoTexto Texto Texto Texto Texto TextoTexto Texto
            Texto Texto Texto Texto Texto Texto Texto Texto Texto TextoTexto
            Texto Texto Texto Texto TextoTexto Texto Texto Texto Texto
            TextoTexto Texto Texto Texto Texto Texto
        </p>
        */}
        
        <ul>
            <li>
                <a
                    href='https://twitter.com/h3nry_ns'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon name='Twitter' />
                </a>
            </li>
            <li>
                <a
                    href='https://github.com/henry-ns'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon name='Github' />
                </a>
            </li>
            <li>
                <a
                    href='https://www.linkedin.com/in/henry-ns/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon name='Linkedin' />
                </a>
            </li>
            <li>
                <a
                    href='https://instagram.com/h3nry.ns'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon name='Instagram' />
                </a>
            </li>
            <li final={true} >
                <a
                    href='mailto:enrque.ns@gmail.com'
                >
                    <Icon name='Email'/>
                </a>
            </li>
        </ul>
    </Section>
);
