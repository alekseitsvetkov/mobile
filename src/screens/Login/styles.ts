import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    formTitle: {
        marginBottom: 30,
    },
    testText: {
        padding: 20,
    },
    btnLogin: {
        marginVertical: 10,
        width: '100%',
        height: 45,
        borderRadius: 12,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnLoginText: {
        color: '#ffffff',
        fontWeight: '500',
    },
    textInputWrapper: {
        position: 'relative',
        width: '100%',
        height: 45,
        backgroundColor: '#F7F7F7',
        marginVertical: 10,
        color: '#C6C6C6',
        borderRadius: 12,
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
    },
    forgotPassword: {
        width: '100%',
        marginVertical: 20,
        alignItems: 'flex-end',
    },
    forgotPasswordText: {},
    registerWrapper: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: '#F2F2F2',
        borderTopWidth: 1,
        marginTop: 'auto',
    },
    registerWrapperText: {
        textAlign: 'center',
    },
    registerWrapperTextBold: {},
    errorLogin: {
        color: 'red',
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
});
