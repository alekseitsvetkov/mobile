import React, {FC, useCallback, useState} from 'react';

import {FlatList, View} from 'react-native';

import {ISlide} from './types';
import {s} from './styles';
import {MainCarouselPagination} from './MainCarouselPagination';
import MainCarouselItem from './MainCarouselItem';

interface IProps {
    data: ISlide[];
}

export const MainCarousel: FC<IProps> = ({data}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const onScrollEnd = useCallback((e) => {
        const contentOffset = e.nativeEvent.contentOffset;
        const viewSize = e.nativeEvent.layoutMeasurement;

        const pageNum = Math.floor(contentOffset.x / viewSize.width);
        setCurrentPage(pageNum + 1);
    }, []);

    const renderItem = useCallback(({item}) => <MainCarouselItem item={item} />, []);

    const keyExtractor = useCallback((item) => item.id, []);

    return (
        <View style={s.container}>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                pagingEnabled={true}
                onMomentumScrollEnd={onScrollEnd}
            />
            <MainCarouselPagination pagesCount={data.length} currentPage={currentPage - 1} />
        </View>
    );
};
