import {StyleSheet} from 'react-native';

import {SCREEN_WIDTH} from '_app/utils';

export const s = StyleSheet.create({
    text: {
        color: '#fff',
    },
    title: {
        marginBottom: 10,
    },
    desc: {
        marginBottom: 5,
    },
    secondDesc: {
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#ddd',
    },
    container: {
        position: 'relative',
    },
    image: {
        width: SCREEN_WIDTH,
        height: 380,
    },
    pager: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 4,
        paddingHorizontal: 12,
        padding: 6,
    },
    plusImage: {
        width: SCREEN_WIDTH,
        height: 380,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
