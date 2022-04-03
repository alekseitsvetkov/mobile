import {Dimensions, StatusBar, StyleSheet} from 'react-native';

import {SCREEN_WIDTH} from '_app/utils';

const itemBaseWidth = Dimensions.get('window').width / 2 - 30;

export const s = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        borderRadius: 12,
    },
    itemImage: {
        borderRadius: 12,
    },
    itemSizeFull: {
        backgroundColor: '#EEEEEE',
        width: SCREEN_WIDTH - 40,
        height: 270 - 20,
    },
    itemFull: {
        width: SCREEN_WIDTH - 40,
    },
    itemSizeWide: {
        height: 150,
        width: 240,
    },
    itemWide: {
        width: 240,
    },
    itemSizeBase: {
        height: itemBaseWidth - 10,
        width: itemBaseWidth,
    },
    itemBase: {
        width: itemBaseWidth,
        height: itemBaseWidth - 10,
    },
    itemSizeSmall: {
        height: 125,
        width: 125,
    },
    itemSmall: {
        width: 125,
    },
    focalPoint: {
        ...StyleSheet.absoluteFillObject,
        width: 20,
        height: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
    },
    title: {
        paddingTop: 4 + 6,
        paddingBottom: 18 + 6,
        fontSize: 18,
    },
    dot: {
        margin: 2,
        fontSize: 10,
        color: 'rgba(255,255,255,.6)',
    },
    dotActive: {
        margin: 2,
        fontSize: 10,
        color: 'rgba(255,255,255,.9)',
    },
    wrapDot: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    flag: {
        top: 10,
        right: 10,
        position: 'absolute',
        backgroundColor: '#ffffff',
        height: 30,
        width: 30,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        textAlign: 'center',
    },
    flagText: {
        fontSize: 16,
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 12,
        alignItems: 'flex-start',
    },
    ratingNumber: {
        marginHorizontal: 2,
    },
    ratingCount: {
        color: '#595959',
    },
    itemTitle: {
        marginTop: 10,
    },
    itemDesc: {
        marginTop: 2,
        // TODO: color from constants
        color: 'rgba(0,0,0,.5)',
    },
});
