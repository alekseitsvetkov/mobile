import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
    container: {
        marginTop: 16,
        marginBottom: 20,
    },
    title: {
        marginHorizontal: 16,
    },
    categoryWrapper: {
        marginTop: 10,
        paddingHorizontal: 8,
    },
    category: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 8,
        minWidth: 116,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#000000',
        opacity: 0.25,
    },
    absoluteFillObject: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    categoryName: {
        fontSize: 12,
        letterSpacing: 0.5,
        zIndex: 10,
    },
});
