import React, {FC} from 'react';

import {View} from 'react-native';

import {Calendar, Location, Verify} from 'iconsax-react-native';
import i18n from 'i18n-js';
import dayjs from 'dayjs';

import {Text, useTheme} from '_app/design-system';
import {APP_COLORS} from '_app/constants';

import {s} from './styles';

import {Avatar} from '../Avatar';

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
require('dayjs/locale/es');
require('dayjs/locale/ru');

interface IUser {
    name: string;
    avatar: string;
    createdAt: string;
}

interface IProps {
    user: IUser;
}

export const UserInfo: FC<IProps> = ({user}) => {
    const {colors} = useTheme();

    const {name, avatar, username, location, verified, createdAt} = user;

    const currentLocale = i18n.currentLocale().split('-')[0];

    return (
        <View style={s.container}>
            <View style={s.row}>
                <Text style={s.name}>{name}</Text>
                {!!verified && <Verify size={16} variant="Bold" color={APP_COLORS.BLUE} />}
            </View>
            {!!username && (
                <View style={s.row}>
                    <Text style={{color: colors.placeholder}}>@{username}</Text>
                </View>
            )}
            {!!location && (
                <View style={s.row}>
                    <Location size={14} variant="Linear" color={colors.placeholder} style={s.icon} />
                    <Text style={{color: colors.placeholder}}>{location}</Text>
                </View>
            )}
            <View style={s.row}>
                <Calendar size={14} variant="Linear" color={colors.placeholder} style={s.icon} />
                <Text style={{color: colors.placeholder}}>
                    {i18n.t('date_of_registration')}: {dayjs(createdAt).locale(currentLocale).format('LL')}
                </Text>
            </View>
        </View>
    );
};
