import React, {FC} from 'react';

import {View} from 'react-native';

import {s} from './styles';

interface IProps {
    pagesCount: number;
    currentPage: number;
}

export const MainCarouselPagination: FC<IProps> = ({pagesCount, currentPage}) => {
    return (
        <View style={s.pagination}>
            {[...Array(pagesCount).keys()].map((index) => (
                <View key={index} style={[s.element, currentPage === index && s.elementActive]} />
            ))}
        </View>
    );
};
