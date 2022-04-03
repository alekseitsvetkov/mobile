import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
    container: {},
    settings: {
        zIndex: 2,
        position: 'absolute',
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    refresh: {
        zIndex: 2,
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    nameContainer: {
        zIndex: 2,
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
        paddingBottom: 16,
        overflow: 'hidden',
    },
    banner: {
        position: 'absolute',
        left: 0,
        right: 0,
    },
    bannerOverlay: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 2,
    },
    scrollContainer: {
        zIndex: 30,
        marginBottom: 16,
        overflow: 'hidden',
    },
    userInfoContainer: {
        paddingHorizontal: 16,
    },
    avatarContainer: {
        width: 75,
        height: 75,
        borderRadius: 12,
        borderWidth: 4,
        marginTop: -30,
        marginLeft: -4,
    },
    tabsContainer: {
        // TODO: TEMPORARY SOLUTION
        height: 800,
    },
    avatar: {
        marginTop: -60,
        marginLeft: -4,
        paddingBottom: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 3,
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
    },
    icon: {
        marginRight: 2,
    },
});
