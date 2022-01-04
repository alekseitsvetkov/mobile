import { Dimensions, StyleSheet } from 'react-native';

import { colors, radius } from '_app/constants';
import { SCREEN_WIDTH } from '_app/utils/dimensions';

const { width } = Dimensions.get('window');

export const s = StyleSheet.create({
  container: {
    position: 'relative',
  },
  cardImage: {
    width: SCREEN_WIDTH,
    height: 470,
  },
  itemImage: {
    width: SCREEN_WIDTH,
    height: 300,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    overflow: 'hidden',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailText: {
    fontSize: 14,
    color: 'grey',
    marginLeft: 4,
    marginRight: 16,
  },
  smallDivider: {
    height: 1,
    backgroundColor: colors.mainGray,
    marginVertical: 16,
    width: width * 0.25,
  },
  divider: {
    height: 1,
    backgroundColor: colors.mainGray,
    marginVertical: 16,
  },
  host: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 76 / 2,
  },
  mediumText: {
    fontSize: 16,
    lineHeight: 18,
  },
  content: {
    padding: 16,
  },
  section: {
    paddingBottom: 20,
    borderColor: colors.mainGray,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  minimap: {
    width: '100%',
    height: 200,
    borderRadius: radius.s,
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 6,
  },
  sectionMainText: {
    fontWeight: '500',
  },
  cardButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.mainGray,
    paddingHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonFull: {
    width: '100%',
    paddingRight: 20,
  },
  buttonWithIcon: {
    flexDirection: 'row',
  },
  buttonWithIconText: {
    paddingRight: 20,
    flex: 1,
  },
  buttonIcon: {},
  buttonText: {
    fontWeight: '600',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'flex-start',
  },
  ratingNumber: {
    marginHorizontal: 2,
  },
  ratingCount: {
    color: colors.mediumGray,
  },
});
