import React, {FC} from 'react';

import {Image, Text, View} from 'react-native';

import {ISlide} from './types';
import {s} from './styles';

interface IProps {
    item: ISlide;
}

const MainCarouselItem: FC<IProps> = ({item}) => {
    const {image} = item;

    return (
        <View style={s.container}>
            <Image style={s.image} source={{uri: image}} resizeMode="cover" />
            <View style={s.overlay} />
            <View style={s.info}>
                <Text style={[s.infoText, s.infoTitle]}>{item.title}</Text>
                <Text style={[s.infoText, s.infoDescription]}>{item.description}</Text>
            </View>
        </View>
    );
};

export default MainCarouselItem;
