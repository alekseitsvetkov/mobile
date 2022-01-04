import { StyleSheet } from 'react-native';

import { colors, radius, tInput, tSmall } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

import { tButton, tSmallSemibold } from './../../../constants/globalStyle';

export const s = StyleSheet.create({
  btnLogin: {
    marginVertical: normalize(10),
    width: '100%',
    height: normalize(45),
    borderRadius: radius.base,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLoginText: {
    ...tButton,
    color: colors.white,
    fontWeight: '500',
  },
  textInputWrapper: {
    position: 'relative',
    width: '100%',
    height: normalize(45),
    backgroundColor: colors.lightGray,
    marginVertical: normalize(10),
    color: colors.baseGray,
    borderRadius: radius.base,
  },
  input: {
    width: '100%',
    height: '100%',
    paddingHorizontal: normalize(15),
    ...tInput,
  },
  forgotPassword: {
    width: '100%',
    marginVertical: normalize(20),
    alignItems: 'flex-end',
    ...tSmall,
  },
  forgotPasswordText: {
    ...tSmall,
  },
  registerWrapper: {
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: colors.lineGray,
    borderTopWidth: 1,
    marginTop: 'auto',
  },
  registerWrapperText: {
    textAlign: 'center',
    ...tSmallSemibold,
  },
  registerWrapperTextBold: {
    ...tSmall,
  },
  errorLogin: {
    color: 'red',
    marginVertical: normalize(10),
    width: '100%',
    alignItems: 'center',
  },
});
