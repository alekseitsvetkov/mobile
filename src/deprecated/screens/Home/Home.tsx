import React, {useContext, useRef} from 'react';

import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {useScrollToTop} from '@react-navigation/native';

import {ThemeColors} from '_app/types/theme';
import {AppContext} from '_app/context';
import {tTitle} from '_app/constants';
import {Preview, SafeAreaWrapper} from '_app/components';

import {s} from './styles';

export const HomeScreen = () => {
    const ref = useRef<ScrollView>(null);
    const {theme} = useContext(AppContext);
    // const [nearby, setNearby] = useState();
    // const [popular, setPopular] = useState([]);

    useScrollToTop(ref);

    // const {
    //   data: dataNearby,
    //   loading: loadingNearby,
    //   error: errorNearby,
    //   fetchMore: fetchMoreNearby,
    // } = useNearbyQuery({
    //   variables: {
    //     first: 5,
    //     orderBy: {
    //       direction: OrderDirection.Asc,
    //     },
    //   },
    //   notifyOnNetworkStatusChange: true,
    // });

    // const {
    //   data: dataPopular,
    //   loading: loadingPopular,
    //   error: errorPopular,
    //   fetchMore: fetchMorePopular,
    // } = usePopularQuery({
    //   variables: {
    //     first: 5,
    //     orderBy: {
    //       direction: OrderDirection.Desc,
    //     },
    //   },
    //   notifyOnNetworkStatusChange: true,
    // });

    // useEffect(() => {
    //   if (dataNearby) {
    //     setNearby(dataNearby.nearby.edges);
    //   }
    // }, [dataNearby]);

    // useEffect(() => {
    //   if (dataPopular && popular.length === 0) {
    //     setPopular(dataPopular.popular.edges);
    //   }
    // }, [dataPopular]);

    // const nearbyEndReached = async () => {
    //   if (nearby) {
    //     const lastNearby = nearby[nearby.length - 1].node.id;
    //     const newData = await fetchMoreNearby({
    //       variables: {
    //         first: 5,
    //         after: lastNearby,
    //         orderBy: {
    //           direction: OrderDirection.Asc,
    //         },
    //       },
    //     });
    //     setNearby(prevState => [...prevState, ...newData.data.nearby.edges]);
    //   }
    // };

    // const popularEndReached = async () => {
    //   if (popular) {
    //     const lastPopular = popular[popular.length - 1].node.id;
    //     const newData = await fetchMorePopular({
    //       variables: {
    //         first: 5,
    //         after: lastPopular,
    //         orderBy: {
    //           direction: OrderDirection.Desc,
    //         },
    //       },
    //     });
    //     setPopular(prevState => [...prevState, ...newData.data.popular.edges]);
    //   }
    // };

    // const images = [
    //   {
    //     id: '0',
    //     uri: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    //   },
    //   {
    //     id: '1',
    //     uri: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    //   },
    //   {
    //     id: '2',
    //     uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kostroma._Fire_Tower_P7140241_2640.jpg/1024px-Kostroma._Fire_Tower_P7140241_2640.jpg',
    //   },
    //   {
    //     id: '3',
    //     uri: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    //   },
    //   {
    //     id: '4',
    //     uri: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    //   },
    // ];

    return (
        <SafeAreaWrapper>
            <View style={s.header}>
                <Text style={[tTitle, styles(theme).text]}>Skeetry</Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                ref={ref}
                scrollsToTop={true}
                contentContainerStyle={s.main}>
                <Preview />
                {/* <Stories /> */}
                {/* TODO: move categories to explore or search? */}
                {/* <MasonryList
          data={images}
          contentContainerStyle={{ marginHorizontal: normalize(4) }}
          keyExtractor={(item, index): string => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity activeOpacity={0.8} onPress={() => Alert.alert(t('utils:wip'))}>
                <FastImage
                  style={{
                    height: 200,
                    borderRadius: 20,
                    margin: normalize(4),
                  }}
                  source={{ uri: item.uri, priority: FastImage.priority.normal }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </TouchableOpacity>
            );
          }}
        /> */}

                {/* {!errorNearby && (
          <HorizontalCardList
            title={`${t('home:nearby')}`}
            data={nearby}
            size="wide"
            handleEndReached={nearbyEndReached}
            loading={loadingNearby}
          />
        )} */}

                {/* <HorizontalCardList
          title={`${t('home:popular')}`}
          data={popular}
          size="wide"
          handleEndReached={popularEndReached}
          loading={loadingPopular}
          type="popular"
        /> */}
            </ScrollView>
        </SafeAreaWrapper>
    );
};

const styles = (theme = {} as ThemeColors) =>
    StyleSheet.create({
        text: {
            color: theme.text01,
        },
    });
