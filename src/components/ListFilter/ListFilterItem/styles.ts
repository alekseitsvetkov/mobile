import {colors} from "_app/constants";
import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
  filterItem: {
    backgroundColor: colors.mainGray,
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 6,
    height: 40,
  },
  filterItemTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
});
