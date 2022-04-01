import React, {useState} from 'react';

import {Alert, Button, FlatList, Image as RNImage, TouchableOpacity, View} from 'react-native';

import i18n from 'i18n-js';

import {navigation} from '_app/services/navigations';
import {Surface, Text} from '_app/design-system';

import {s} from './styles';

export const Gallery = ({images}: GalleryProps) => {
    const [currentPage, setCurrentPage] = useState(1);

    const Image = ({item}) => {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() =>
                    navigation.push('Gallery', {
                        images,
                        page: currentPage,
                    })
                }>
                <RNImage style={s.image} source={{uri: item.url}} />
            </TouchableOpacity>
        );
    };

    const onScrollEnd = (e) => {
        const contentOffset = e.nativeEvent.contentOffset;
        const viewSize = e.nativeEvent.layoutMeasurement;

        // Divide the horizontal offset by the width of the view to see which page is visible
        const pageNum = Math.floor(contentOffset.x / viewSize.width);
        setCurrentPage(pageNum + 1);
    };

    return (
        <View style={s.container}>
            <FlatList
                data={[...images, {id: 'plusImage', plusImage: true}]}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    if (item.plusImage) {
                        return (
                            <Surface style={s.plusImage}>
                                <Text style={s.title}>
                                    {images.length === 0 ? i18n.t('no_images') : i18n.t('contribute')}
                                </Text>
                                {images.length === 0 && <Text style={s.desc}>{i18n.t('contribute')}</Text>}
                                <Text style={s.secondDesc}>{i18n.t('add_your_photo')}</Text>
                                <Button
                                    // label={i18n.t('card:submit_photo')}
                                    title={i18n.t('submit_photo')}
                                    onPress={() => Alert.alert(i18n.t('wip'))}
                                    //loading={false}
                                    //containerStyle={s.button}
                                />
                            </Surface>
                        );
                    }
                    return <Image item={item} />;
                }}
                keyExtractor={(item) => item.id}
                decelerationRate="fast"
                pagingEnabled={true}
                onMomentumScrollEnd={onScrollEnd}
            />

            <View style={s.pager}>
                <Text style={s.text}>
                    {currentPage}/{images.length + 1}
                </Text>
            </View>
        </View>
    );
};
