import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  optionList: {
    backgroundColor: '#eee',
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  optionItem: {
    backgroundColor: '#eee',
    justifyContent: 'space-between',
  },
  optionItemWrap: {
    marginLeft: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  optionItemBorder: {
    borderColor: 'black',
    borderBottomWidth: 1,
  },
});
