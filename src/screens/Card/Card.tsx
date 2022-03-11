import React, {useContext, useEffect, useState} from 'react';

import {ActionSheetIOS, Pressable, TouchableHighlight, useColorScheme} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {ScrollView} from 'react-native-gesture-handler';
import i18n from 'i18n-js';
import {useActionSheet} from '@expo/react-native-action-sheet';

import {Surface, Text} from '_app/lib/skeetry-ui';
import {useAddCityMutation, useCityQuery, useMoveCityMutation, useRemoveCityMutation} from '_app/generated/graphql';
import {AppContext} from '_app/context';
import {
    PLATFORM,
    // mapGfxStyle
} from '_app/constants';
import {Gallery} from '_app/components';

import {s} from './styles';

// TODO: refactor mutations and conditions, split into different components and files
export const CardScreen = ({route, navigation}) => {
    const scheme = useColorScheme();
    const {me} = useContext(AppContext);

    const {item} = route.params;
    const {showActionSheetWithOptions} = useActionSheet();
    const [currentCity, setCurrentCity] = useState(item);

    // const ruName = item.alternateName
    //     ? item.alternateName.find((a) => {
    //           if (a.isoLang === 'ru' && a.isPreferredName === true) {
    //               return a;
    //           }

    //           if (a.isoLang === 'ru' && !a.isHistoric) {
    //               return a;
    //           }

    //           return null;
    //       })
    //     : null;

    // const title = languageTag === 'ru' && ruName && ruName.alternateName ? ruName.alternateName : currentCity.name;

    const title = currentCity.name;

    const {
        data: itemData,
        loading: itemLoading,
        error: itemError,
        refetch: itemRefetch,
    } = useCityQuery({
        variables: {
            id: currentCity.id,
        },
    });

    useEffect(() => {
        if (itemData) {
            setCurrentCity(itemData.city);
        }
    }, [itemData]);

    const [want, {loading: loadingWant}] = useAddCityMutation({
        variables: {
            input: {
                id: currentCity.id,
                type: 'WANT',
            },
        },
        update: (cache) => {
            cache.evict({});
        },
    });

    const [visited, {loading: loadingVisited}] = useAddCityMutation({
        variables: {
            input: {
                id: currentCity.id,
                type: 'VISITED',
            },
        },
        update: (cache) => {
            cache.evict({});
        },
    });

    const [removeWant, {loading: loadingRemoveWant}] = useRemoveCityMutation({
        variables: {
            input: {
                id: currentCity.id,
                type: 'WANT',
            },
        },
        update: (cache) => {
            cache.evict({});
        },
    });

    const [removeVisited, {loading: loadingRemoveVisited}] = useRemoveCityMutation({
        variables: {
            input: {
                id: currentCity.id,
                type: 'VISITED',
            },
        },
        update: (cache) => {
            cache.evict({});
        },
    });

    const [moveWant, {loading: loadingMoveWant}] = useMoveCityMutation({
        variables: {
            input: {
                id: currentCity.id,
                type: 'WANT',
            },
        },
        update: (cache) => {
            cache.evict({});
        },
    });

    const [moveVisited, {loading: loadingMoveVisited}] = useMoveCityMutation({
        variables: {
            input: {
                id: currentCity.id,
                type: 'VISITED',
            },
        },
        update: (cache) => {
            cache.evict({});
        },
    });

    const handlePress = (name: string) => {
        if (name === 'want') {
            want();
        }
        if (name === 'visited') {
            visited();
        }
    };

    const alreadyWanted = currentCity.userWanted && currentCity.userWanted.find((u) => u.id === me.id);
    const alreadyVisited = currentCity.userVisited && currentCity.userVisited.find((u) => u.id === me.id);

    const loading =
        loadingWant ||
        loadingVisited ||
        loadingRemoveWant ||
        loadingRemoveVisited ||
        loadingMoveWant ||
        loadingMoveVisited ||
        itemLoading;

    const onPressSheet = () => {
        PLATFORM.IS_IOS
            ? ActionSheetIOS.showActionSheetWithOptions(
                  {
                      options: [
                          `${i18n.t('cancel')}`,
                          `${alreadyWanted ? i18n.t('visited') : i18n.t('want')}`,
                          `${i18n.t('delete')}`,
                      ],
                      destructiveButtonIndex: 2,
                      cancelButtonIndex: 0,
                      userInterfaceStyle: scheme === 'dark' ? 'dark' : 'light',
                  },
                  (buttonIndex) => {
                      if (buttonIndex === 0) {
                          // cancel action
                      } else if (buttonIndex === 1) {
                          alreadyWanted ? moveWant() : moveVisited();
                      } else if (buttonIndex === 2) {
                          alreadyWanted ? removeWant() : removeVisited();
                      }
                  },
              )
            : showActionSheetWithOptions(
                  {
                      options: [
                          `${i18n.t('cancel')}`,
                          `${alreadyWanted ? i18n.t('visited') : i18n.t('want')}`,
                          `${i18n.t('delete')}`,
                      ],
                      cancelButtonIndex: 0,
                      destructiveButtonIndex: 2,
                      userInterfaceStyle: scheme === 'dark' ? 'dark' : 'light',
                  },
                  (i) => {
                      if (i === 0) {
                          // cancel action
                      } else if (i === 1) {
                          alreadyWanted ? moveWant() : moveVisited();
                      } else if (i === 2) {
                          alreadyWanted ? removeWant() : removeVisited();
                      }
                  },
              );
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[s.container]}>
            <Gallery images={currentCity.images} />
            <Surface style={s.content}>
                <Surface style={s.section}>
                    <Text style={[s.name, s.text]}>
                        {title}
                        {/* {currentCity.state
              ? currentCity.state.country.emoji + ' ' + currentCity.name
              : currentCity.country.emoji + ' ' + currentCity.name} */}
                    </Text>
                </Surface>
                <Surface style={[s.section, s.section]}>
                    <Surface style={s.cardButtons}>
                        {!alreadyWanted && !alreadyVisited && !loading ? (
                            <>
                                <TouchableHighlight
                                    //underlayColor={theme.gray01}
                                    style={s.button}
                                    onPress={() => handlePress('want')}>
                                    <Text style={[s.buttonText, s.text]}>{i18n.t('want')}</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    // underlayColor={theme.gray01}
                                    style={s.button}
                                    onPress={() => handlePress('visited')}>
                                    <Text style={[s.buttonText, s.text]}>{i18n.t('visited')}</Text>
                                </TouchableHighlight>
                            </>
                        ) : (
                            <TouchableHighlight
                                // underlayColor={theme.gray01}
                                style={[s.button, (alreadyWanted || alreadyVisited || loading) && s.buttonFull]}
                                onPress={() => !loading && onPressSheet()}>
                                <Surface style={[s.buttonWithIcon]}>
                                    <Text
                                        style={[
                                            s.buttonText,
                                            (alreadyWanted || alreadyVisited || loading) && s.buttonWithIconText,
                                            s.text,
                                        ]}>
                                        {loading
                                            ? i18n.t('loading')
                                            : alreadyWanted
                                            ? i18n.t('want')
                                            : i18n.t('visited')}
                                    </Text>
                                    <Icon name="more-horizontal" style={s.buttonIcon} size={18} color={'#ddd'} />
                                </Surface>
                            </TouchableHighlight>
                        )}
                    </Surface>
                </Surface>
                {item.overview && (
                    <Surface style={s.section}>
                        <Text style={[s.sectionTitle, s.text]}>{i18n.t('overview')}</Text>
                        <Text style={s.text}>{item.overview}</Text>
                    </Surface>
                )}
                <Surface style={s.section}>
                    <Text style={[s.sectionTitle, s.text]}>{i18n.t('location')}</Text>
                    <Pressable
                        onPress={() =>
                            navigation.navigate('Map', {
                                item: currentCity,
                            })
                        }>
                        <MapView
                            style={s.minimap}
                            pitchEnabled={false}
                            scrollEnabled={false}
                            zoomControlEnabled={false}
                            zoomEnabled={false}
                            rotateEnabled={false}
                            provider={PROVIDER_GOOGLE}
                            mapType="standard"
                            moveOnMarkerPress={false}
                            pointerEvents="none"
                            //customMapStyle={mapGfxStyle}
                            initialRegion={{
                                latitude: Number(currentCity.latitude),
                                longitude: Number(currentCity.longitude),
                                latitudeDelta: 0.09,
                                longitudeDelta: 0.04,
                            }}>
                            <Marker
                                key={currentCity.id}
                                coordinate={{
                                    latitude: Number(currentCity.latitude),
                                    longitude: Number(currentCity.longitude),
                                }}
                            />
                        </MapView>
                    </Pressable>
                </Surface>
            </Surface>
        </ScrollView>
    );
};
