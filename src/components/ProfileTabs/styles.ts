import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        paddingVertical: 16,
    },
    tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'none',
    },
    tabBarItemStyle: {
        padding: 0,
        width: 'auto',
        minHeight: 36,
    },
    tabBarStyle: {
        shadowColor: 'transparent',
        borderBottomWidth: 1,
        paddingHorizontal: 16,
    },
});
