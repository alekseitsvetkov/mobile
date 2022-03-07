import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 40,
        marginHorizontal: 16,
        marginTop: -20,
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOpacity: 0.15,
        shadowRadius: 30,
        shadowOffset: {width: 0, height: 4},
        elevation: 6,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: '#6B7280',
        marginLeft: 16,
    },
});
