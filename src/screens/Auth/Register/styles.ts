import { StyleSheet } from 'react-native';

import { radius, colors, tButton, tInput } from '_app/constants';
import { normalize, SCREEN_HEIGHT } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  root: { width: '100%' },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: {},
  cell: {
    width: 45,
    height: 45,
    lineHeight: 40,
    fontSize: 18,
    borderWidth: 2,
    borderColor: colors.gray300,
    borderRadius: radius.base,
    textAlign: 'center',
    margin: normalize(10),
  },
  focusCell: {
    borderColor: '#000',
  },
  container: {
    height: SCREEN_HEIGHT,
  },
  btnLogin: {
    marginTop: normalize(10),
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
  errorLogin: {
    color: 'red',
    marginVertical: normalize(10),
    width: '100%',
    alignItems: 'center',
  },
});
