import { Dimensions, StatusBar, StyleSheet } from 'react-native';

import { CARD_HEIGHT, CARD_SPACING, colors, radius, tBase, tSmallRegular } from '_app/constants';
import { normalize, SCREEN_WIDTH } from '_app/utils/dimensions';

const itemBaseWidth = Dimensions.get('window').width / 2 - 30;

export const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderRadius: radius.base,
  },
  itemImage: {
    borderRadius: radius.base,
  },
  itemSizeFull: {
    backgroundColor: colors.mainGray,
    width: SCREEN_WIDTH - 40,
    height: CARD_HEIGHT - 20,
  },
  itemFull: {
    width: SCREEN_WIDTH - 40,
  },
  itemSizeWide: {
    height: normalize(150),
    width: normalize(240),
  },
  itemWide: {
    width: normalize(240),
  },
  itemSizeBase: {
    height: itemBaseWidth - 10,
    width: itemBaseWidth,
  },
  itemBase: {
    width: itemBaseWidth,
    height: itemBaseWidth - 10,
  },
  itemSizeSmall: {
    height: normalize(125),
    width: normalize(125),
  },
  itemSmall: {
    width: normalize(125),
  },
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: normalize(20),
    height: normalize(20),
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  title: {
    paddingTop: 4 + CARD_SPACING,
    paddingBottom: 18 + CARD_SPACING,
    fontSize: 18,
  },
  dot: {
    margin: normalize(2),
    fontSize: 10,
    color: 'rgba(255,255,255,.6)',
  },
  dotActive: {
    margin: normalize(2),
    fontSize: 10,
    color: 'rgba(255,255,255,.9)',
  },
  wrapDot: {
    position: 'absolute',
    bottom: normalize(10),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  flag: {
    top: normalize(10),
    right: normalize(10),
    position: 'absolute',
    backgroundColor: colors.white,
    height: normalize(30),
    width: normalize(30),
    borderRadius: radius.full,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: normalize(0),
      height: normalize(4),
    },
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    textAlign: 'center',
  },
  flagText: {
    fontSize: 16,
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: normalize(12),
    alignItems: 'flex-start',
  },
  ratingNumber: {
    marginHorizontal: 2,
  },
  ratingCount: {
    color: colors.mediumGray,
  },
  itemTitle: {
    marginTop: normalize(10),
    ...tBase,
  },
  itemDesc: {
    marginTop: normalize(2),
    ...tSmallRegular,
    // TODO: color from constants
    color: 'rgba(0,0,0,.5)',
  },
});
