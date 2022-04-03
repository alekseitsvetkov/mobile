import React from 'react';

import {Card, Paragraph, Surface, Title} from '_app/design-system';

import {s} from './styles';

export const Want = () => (
    <Surface style={s.container}>
        {new Array(30).fill(0).map((_, index) => (
            <Card key={index}>
                <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
            </Card>
        ))}
    </Surface>
);
