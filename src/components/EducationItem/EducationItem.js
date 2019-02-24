import React from 'react';
import {
    Box,
    Card,
    Div,
    Timeline,
    HalfMoon,
    Circle
} from './EducationItem.style';

export default ({ title, data, course, init }) => (
    <Box init={init}>
        <h3>{data}</h3>
        <Card>
            <h1>{course}</h1>
            <h2>{title}</h2>
        </Card>
        <Div>
            <HalfMoon init={init} />
            <Timeline init={init} />
            <Circle init={init} />
            <Timeline init={init} />
            <HalfMoon init={init} end />
        </Div>
    </Box>
);
