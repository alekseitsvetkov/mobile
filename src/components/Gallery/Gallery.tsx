import React, {useState} from 'react';

import {Alert, Button, FlatList, Image as RNImage, Text, TouchableOpacity, View} from 'react-native';

import {navigation} from '_app/services/navigations';

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
                            <View style={s.plusImage}>
                                <Text style={s.title}>
                                    {images.length === 0 ? t('card:no_images') : t('card:contribute')}
                                </Text>
                                {images.length === 0 && <Text style={s.desc}>{t('card:contribute')}</Text>}
                                <Text style={s.secondDesc}>{t('card:add_your_photo')}</Text>
                                <Button
                                    // label={t('card:submit_photo')}
                                    title={t('card:submit_photo')}
                                    onPress={() => Alert.alert(t('utils:wip'))}
                                    //loading={false}
                                    //containerStyle={s.button}
                                />
                            </View>
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
