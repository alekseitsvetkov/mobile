import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    contentContainer: {
        flexWrap: 'wrap',
        maxWidth: 800,
        paddingHorizontal: 12,
    },
    title: {
        color: '#595959',
        fontSize: 18,
        fontWeight: '500',
    },
    tag: {
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 100,
        margin: 6,
    },
    textInputWrapper: {
        position: 'relative',
        width: '100%',
        height: 45,
        backgroundColor: '#F7F7F7',
        color: '#C6C6C6',
        borderRadius: 12,
    },
    centerContainer: {
        alignItems: 'center',
        padding: 20,
    },
    cardContainer: {
        marginRight: 20,
    },
    searchbarContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
});
