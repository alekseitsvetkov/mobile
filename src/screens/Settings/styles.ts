import { StyleSheet } from 'react-native';

import { avatarSize, colors, radius, tBase, tSmallRegular, tTitle } from '_app/constants';
import { normalize, SCREEN_WIDTH } from '_app/utils/dimensions';

export const itemWidth = SCREEN_WIDTH / 2 - 20;

export const s = StyleSheet.create({
  headerArea: {
    height: normalize(50),
  },
  profilePanel: {
    width: '100%',
    alignItems: 'flex-end',
    paddingBottom: normalize(10),
    marginBottom: normalize(10),
    paddingHorizontal: normalize(20),
  },
  profileHeader: {
    paddingBottom: normalize(20),
    marginBottom: normalize(20),
    borderBottomColor: colors.mainGray,
    borderBottomWidth: 1,
    paddingHorizontal: normalize(10),
  },
  profileHeaderWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  name: {
    ...tBase,
    fontWeight: '600',
    color: colors.black,
    marginBottom: normalize(2),
    maxWidth: SCREEN_WIDTH - (avatarSize + normalize(30)),
  },
  username: {
    ...tBase,
    marginBottom: normalize(2),
    maxWidth: SCREEN_WIDTH - (avatarSize + normalize(30)),
  },
  bio: {
    ...tBase,
    // 30 = 20 side paddings + avatar padding
    maxWidth: SCREEN_WIDTH - (avatarSize + normalize(30)),
  },
  profileStats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: normalize(20),
    marginBottom: normalize(20),
    borderBottomColor: colors.mainGray,
    borderBottomWidth: 1,
    paddingHorizontal: normalize(20),
  },
  card: {
    minWidth: itemWidth,
    maxWidth: itemWidth,
    marginVertical: normalize(6),
    marginHorizontal: normalize(6),
    position: 'relative',
  },
  cardImage: {
    width: itemWidth,
    height: normalize(150),
    borderRadius: radius.base,
  },
  containerWrap: {
    width: '100%',
    alignItems: 'center',
    marginTop: normalize(30),
  },
  listWrapper: {
    justifyContent: 'space-between',
    marginHorizontal: normalize(20),
    marginBottom: normalize(60),
  },
});
